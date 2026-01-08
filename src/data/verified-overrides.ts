import type { EstadoAgua, Pais } from "./paises";

export type VerifiedOverride = {
  status: EstadoAgua;
  shortAnswer: string;
  updatedAt: string;
  sources: NonNullable<Pais["sources"]>;
};

const globalSources: NonNullable<Pais["sources"]> = [
  {
    label: "OMS - Guías para la calidad del agua potable",
    url: "https://www.who.int/publications/i/item/9789240045064"
  },
  {
    label: "CDC - Drinking Water (Travelers' Health)",
    url: "https://wwwnc.cdc.gov/travel/page/safe-water"
  }
];

export const VERIFIED_OVERRIDES: Record<string, VerifiedOverride> = {
  chile: {
    status: "si",
    shortAnswer: "En la mayoría de las ciudades el agua es potable y segura.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  mexico: {
    status: "no",
    shortAnswer: "No se recomienda beber agua del grifo de forma general.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  argentina: {
    status: "depende",
    shortAnswer: "Depende de la ciudad y el sistema local de tratamiento.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  peru: {
    status: "no",
    shortAnswer: "No suele ser segura para viajeros en la mayoría de regiones.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  bolivia: {
    status: "no",
    shortAnswer: "Se recomienda evitar el agua del grifo.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  colombia: {
    status: "depende",
    shortAnswer: "Ciudades principales suelen ser seguras, otras zonas no.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  ecuador: {
    status: "no",
    shortAnswer: "No es recomendable beber agua del grifo.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  venezuela: {
    status: "no",
    shortAnswer: "La calidad del agua es irregular y no se aconseja.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  uruguay: {
    status: "si",
    shortAnswer: "El agua del grifo es potable en la mayoría de zonas urbanas.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  paraguay: {
    status: "depende",
    shortAnswer: "La seguridad varía según la ciudad y la red de agua.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  "estados-unidos": {
    status: "si",
    shortAnswer: "Generalmente segura, con excepciones locales.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  canada: {
    status: "si",
    shortAnswer: "El agua del grifo suele ser segura y regulada.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  espana: {
    status: "si",
    shortAnswer: "Agua potable en todo el país, con variaciones de sabor.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  francia: {
    status: "si",
    shortAnswer: "El agua del grifo es segura en todo el país.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  italia: {
    status: "si",
    shortAnswer: "El agua del grifo es segura en la mayoría de ciudades.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  portugal: {
    status: "si",
    shortAnswer: "Agua del grifo generalmente segura para consumo.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  "reino-unido": {
    status: "si",
    shortAnswer: "Agua potable en todo el país con controles estrictos.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  alemania: {
    status: "si",
    shortAnswer: "El agua del grifo es segura y de alta calidad.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  japon: {
    status: "si",
    shortAnswer: "El agua del grifo es potable en la mayoría de ciudades.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  china: {
    status: "no",
    shortAnswer: "No se recomienda beber agua del grifo sin tratamiento.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  india: {
    status: "no",
    shortAnswer: "No es segura para consumo directo.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  tailandia: {
    status: "no",
    shortAnswer: "Se recomienda evitar el agua del grifo.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  australia: {
    status: "si",
    shortAnswer: "El agua del grifo es segura en la mayoría de regiones.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  "nueva-zelanda": {
    status: "si",
    shortAnswer: "Agua potable en general, con controles locales.",
    updatedAt: "2024-06-01",
    sources: globalSources
  },
  sudafrica: {
    status: "depende",
    shortAnswer: "Varía por ciudad; zonas rurales pueden no ser seguras.",
    updatedAt: "2024-06-01",
    sources: globalSources
  }
};
