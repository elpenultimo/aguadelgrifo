import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { paises } from "../../../data/paises";
import { continentes } from "../../../data/continentes";
import { buildCountryMetadata } from "../../../lib/seo";

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

export function generateStaticParams() {
  return paises.map((pais) => ({ slug: pais.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const pais = paises.find((item) => item.slug === params.slug);
  if (!pais) {
    return {
      title: "País no encontrado"
    };
  }
  const displayStatus = pais.isVerified ? pais.status : "depende";
  return buildCountryMetadata(
    pais.name,
    statusLabels[displayStatus],
    pais.shortAnswer
  );
}

export default function PaisPage({ params }: { params: { slug: string } }) {
  const pais = paises.find((item) => item.slug === params.slug);
  if (!pais) {
    notFound();
  }

  const continente = continentes.find(
    (item) => item.slug === pais.continentSlug
  );
  const displayStatus = pais.isVerified ? pais.status : "depende";

  return (
    <article>
      {!pais.isVerified && (
        <p className="notice">
          ⚠️ Esta ficha está pendiente de verificación. Usa esta guía como
          orientación general para viajeros.
        </p>
      )}
      <section>
        <p className={`badge badge--status badge--${displayStatus}`}>
          {statusLabels[displayStatus]}
        </p>
        <h2>¿Se puede beber agua del grifo en {pais.name}?</h2>
        <p>{pais.shortAnswer}</p>
        <p className="subtle">Actualizado: {pais.updatedAt}</p>
      </section>

      {pais.isVerified && pais.sources?.length ? (
        <section className="sources">
          <h3>Fuentes</h3>
          <ul>
            {pais.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="nofollow noopener">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <h3>Consejo viajero</h3>
        <p>{travelAdvice[displayStatus]}</p>
      </section>

      <section>
        <h3>Alternativas seguras</h3>
        <ul>
          <li>Agua embotellada sellada.</li>
          <li>Botellas reutilizables con filtro certificado.</li>
          <li>Hervir el agua al menos 3 minutos.</li>
        </ul>
      </section>

      {continente && (
        <section>
          <h3>Más países de {continente.name}</h3>
          <Link href={`/continente/${continente.slug}`}>
            Ver recomendaciones del continente
          </Link>
        </section>
      )}
    </article>
  );
}
