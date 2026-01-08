import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PaisSearch from "../../components/PaisSearch";
import { continentes } from "../../../data/continentes";
import { paises } from "../../../data/paises";
import { buildContinentMetadata } from "../../../lib/seo";

export function generateStaticParams() {
  return continentes.map((continente) => ({ slug: continente.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const continente = continentes.find((item) => item.slug === slug);
  if (!continente) {
    return { title: "Continente no encontrado" };
  }
  return buildContinentMetadata(continente.name);
}

export default async function ContinentePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const continente = continentes.find((item) => item.slug === slug);
  if (!continente) {
    notFound();
  }

  const countries = paises.filter(
    (pais) => pais.continentSlug === continente.slug
  );

  return (
    <article>
      <section className="panel">
        <Link href="/" className="subtle">
          ← Volver al buscador general
        </Link>
        <h1>Agua del grifo en {continente.name}</h1>
        <p className="subtle">
          Listado de países y territorios con recomendación general.
        </p>
      </section>

      <PaisSearch
        countries={countries}
        title={`Buscador en ${continente.name}`}
        placeholder={`Busca un país en ${continente.name}...`}
      />
    </article>
  );
}
