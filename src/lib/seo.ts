import type { Metadata } from "next";

const BASE_TITLE = "Agua del Grifo";
const BASE_DESCRIPTION =
  "Consulta si el agua del grifo es segura por país y continente.";

export const buildBaseMetadata = (): Metadata => ({
  title: BASE_TITLE,
  description: BASE_DESCRIPTION,
  metadataBase: new URL("https://aguadelgrifo.com"),
  openGraph: {
    title: BASE_TITLE,
    description: BASE_DESCRIPTION,
    type: "website"
  }
});

export const buildCountryMetadata = (
  name: string,
  statusLabel: string,
  slug: string
): Metadata => {
  const title = `¿Se puede beber agua del grifo en ${name}? | ${BASE_TITLE}`;
  const description = `${statusLabel}. Recomendaciones para viajeros sobre el agua del grifo en ${name}.`;
  const url = `/pais/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: "article"
    }
  };
};

export const buildContinentMetadata = (continentName: string): Metadata => {
  const title = `¿Es seguro beber agua del grifo en ${continentName}? | ${BASE_TITLE}`;
  const description = `Recomendaciones rápidas sobre si se puede beber agua del grifo en países y territorios de ${continentName}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article"
    }
  };
};
