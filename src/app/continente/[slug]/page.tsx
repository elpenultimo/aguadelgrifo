import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { continentes } from "../../../data/continentes";
import { paises } from "../../../data/paises";
import { buildContinentMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return continentes.map((continente) => ({ slug: continente.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const continente = continentes.find((item) => item.slug === params.slug);
  if (!continente) {
    return { title: "Continente no encontrado" };
  }
  return buildContinentMetadata(continente.name);
}

export default function ContinentePage({
  params
}: {
  params: { slug: string };
}) {
  const continente = continentes.find((item) => item.slug === params.slug);
  if (!continente) {
    notFound();
  }

  const countries = paises.filter(
    (pais) => pais.continentSlug === continente.slug
  );

  return (
    <article>
      <section>
        <h2>{continente.name}</h2>
        <p className="subtle">
          Selección de países y su recomendación general sobre el agua del grifo.
        </p>
      </section>

      <section className="grid">
        {countries.map((pais) => (
          <article key={pais.slug} className="card">
            <h3>
              <Link href={`/pais/${pais.slug}`}>{pais.name}</Link>
            </h3>
            <p className="subtle">{pais.shortAnswer}</p>
            <div className="badge-group">
              <span
                className={`badge ${
                  pais.isVerified ? "badge--verified" : "badge--pending"
                }`}
              >
                {pais.isVerified ? "Verificado" : "Pendiente"}
              </span>
            </div>
            {pais.isVerified && pais.sources?.length ? (
              <div className="sources">
                <p className="sources__title">Fuentes</p>
                <ul>
                  {pais.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </article>
  );
}
