import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { continentes } from "../../../data/continentes";
import { getCountryBySlug } from "../../../lib/countries";
import { buildCountryMetadata } from "../../../lib/seo";
import { getCountryFlagEmoji } from "../../../lib/flags";
import { paises } from "../../../data/paises";

const statusLabels = {
  si: "Sí",
  depende: "Depende",
  no: "No"
} as const;

const travelAdvice = {
  si: "Aun así, revisa avisos locales y la infraestructura del barrio donde te alojas.",
  depende:
    "Consulta fuentes oficiales locales y pregunta en el alojamiento antes de consumir.",
  no: "Utiliza agua embotellada o tratada incluso para cepillarte los dientes."
} as const;

const quickTips = {
  si: [
    "En general es potable, pero revisa avisos locales recientes.",
    "Prefiere agua fría del grifo y deja correr unos segundos.",
    "Si tienes dudas, usa filtro portátil en excursiones."
  ],
  no: [
    "Evita agua del grifo; usa embotellada sellada.",
    "Cuidado con el hielo en bebidas y jugos.",
    "Para cepillarte los dientes, usa agua segura."
  ],
  depende: [
    "Varía por ciudad; en la capital suele ser mejor.",
    "Consulta en el alojamiento antes de consumir.",
    "Lleva botella con filtro para trayectos largos."
  ]
} as const;

export function generateStaticParams() {
  return paises.map((pais) => ({ slug: pais.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pais = getCountryBySlug(slug);
  if (!pais) {
    return {
      title: "País no encontrado"
    };
  }
  const displayStatus = pais.isVerified ? pais.status : "depende";
  return buildCountryMetadata(pais.name, statusLabels[displayStatus], pais.slug);
}

export default async function PaisPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pais = getCountryBySlug(slug);
  if (!pais) {
    notFound();
  }

  const continente = continentes.find(
    (item) => item.slug === pais.continentSlug
  );
  const displayStatus = pais.isVerified ? pais.status : "depende";
  const flag = getCountryFlagEmoji({ slug: pais.slug, name: pais.name });
  const title = flag ? `${flag} ${pais.name}` : pais.name;

  return (
    <article>
      <Link href="/" className="back-link">
        ← Volver
      </Link>
      {!pais.isVerified && (
        <p className="notice">
          ⚠️ Esta ficha está pendiente de verificación. Usa esta guía como
          orientación general para viajeros.
        </p>
      )}
      <section className="panel">
        <div className="detail-header">
          <h1 className="detail-title">{title}</h1>
        </div>
        <div className="detail-accent" aria-hidden="true" />
        <div className="badge-hero">
          <span className={`badge badge--status badge--${displayStatus} badge--hero`}>
            {statusLabels[displayStatus]}
          </span>
        </div>
        <p className="subtle">
          ¿Se puede beber agua del grifo en {pais.name}?
        </p>
        <p>{pais.shortAnswer}</p>
        <p className="subtle">Actualizado: {pais.updatedAt}</p>
      </section>

      <section className="panel">
        <h3>Consejos rápidos</h3>
        <ul>
          {quickTips[displayStatus].map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      {pais.sources?.length ? (
        <section className="sources panel">
          <h3>Fuentes</h3>
          <ul>
            {pais.sources.map((source) => (
              <li key={source.url ?? source.label}>
                {source.url ? (
                  <a href={source.url} target="_blank" rel="nofollow noopener">
                    {source.label}
                  </a>
                ) : (
                  <span>{source.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="panel">
        <h3>Consejo viajero</h3>
        <p>{travelAdvice[displayStatus]}</p>
      </section>

      <section className="panel">
        <h3>Alternativas seguras</h3>
        <ul>
          <li>Agua embotellada sellada.</li>
          <li>Botellas reutilizables con filtro certificado.</li>
          <li>Hervir el agua al menos 3 minutos.</li>
        </ul>
      </section>

      {continente && (
        <section className="panel">
          <h3>Más países de {continente.name}</h3>
          <Link href={`/continente/${continente.slug}`}>
            Ver países de {continente.name}
          </Link>
        </section>
      )}
    </article>
  );
}
