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
  shortAnswer: string
): Metadata => ({
  title: `${name}: ${statusLabel} beber agua del grifo | ${BASE_TITLE}`,
  description: shortAnswer,
  openGraph: {
    title: `${name}: ${statusLabel} beber agua del grifo`,
    description: shortAnswer,
    type: "article"
  }
});

export const buildContinentMetadata = (continentName: string): Metadata => ({
  title: `${continentName} | ${BASE_TITLE}`,
  description: `Países y recomendaciones sobre agua del grifo en ${continentName}.`
});
