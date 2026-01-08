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
          <Link key={pais.slug} href={`/pais/${pais.slug}`} className="card">
            <h3>{pais.name}</h3>
            <p className="subtle">{pais.shortAnswer}</p>
          </Link>
        ))}
      </section>
    </article>
  );
}
