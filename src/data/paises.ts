export type EstadoAgua = "si" | "depende" | "no";

export type Pais = {
  name: string;
  slug: string;
  continentSlug: string;
  status: EstadoAgua;
  shortAnswer: string;
  updatedAt: string;
};

export const paises: Pais[] = [
  {
    name: "Chile",
    slug: "chile",
    continentSlug: "america",
    status: "si",
    shortAnswer: "En la mayoría de las ciudades el agua es potable y segura.",
    updatedAt: "2024-06-01"
  },
  {
    name: "México",
    slug: "mexico",
    continentSlug: "america",
    status: "no",
    shortAnswer: "No se recomienda beber agua del grifo de forma general.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Argentina",
    slug: "argentina",
    continentSlug: "america",
    status: "depende",
    shortAnswer: "Depende de la ciudad y el sistema local de tratamiento.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Perú",
    slug: "peru",
    continentSlug: "america",
    status: "no",
    shortAnswer: "No suele ser segura para viajeros en la mayoría de regiones.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Bolivia",
    slug: "bolivia",
    continentSlug: "america",
    status: "no",
    shortAnswer: "Se recomienda evitar el agua del grifo.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Colombia",
    slug: "colombia",
    continentSlug: "america",
    status: "depende",
    shortAnswer: "Ciudades principales suelen ser seguras, otras zonas no.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Ecuador",
    slug: "ecuador",
    continentSlug: "america",
    status: "no",
    shortAnswer: "No es recomendable beber agua del grifo.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Venezuela",
    slug: "venezuela",
    continentSlug: "america",
    status: "no",
    shortAnswer: "La calidad del agua es irregular y no se aconseja.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Uruguay",
    slug: "uruguay",
    continentSlug: "america",
    status: "si",
    shortAnswer: "El agua del grifo es potable en la mayoría de zonas urbanas.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Paraguay",
    slug: "paraguay",
    continentSlug: "america",
    status: "depende",
    shortAnswer: "La seguridad varía según la ciudad y la red de agua.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Estados Unidos",
    slug: "estados-unidos",
    continentSlug: "america",
    status: "si",
    shortAnswer: "Generalmente segura, con excepciones locales.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Canadá",
    slug: "canada",
    continentSlug: "america",
    status: "si",
    shortAnswer: "El agua del grifo suele ser segura y regulada.",
    updatedAt: "2024-06-01"
  },
  {
    name: "España",
    slug: "espana",
    continentSlug: "europa",
    status: "si",
    shortAnswer: "Agua potable en todo el país, con variaciones de sabor.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Francia",
    slug: "francia",
    continentSlug: "europa",
    status: "si",
    shortAnswer: "El agua del grifo es segura en todo el país.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Italia",
    slug: "italia",
    continentSlug: "europa",
    status: "si",
    shortAnswer: "El agua del grifo es segura en la mayoría de ciudades.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Portugal",
    slug: "portugal",
    continentSlug: "europa",
    status: "si",
    shortAnswer: "Agua del grifo generalmente segura para consumo.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Reino Unido",
    slug: "reino-unido",
    continentSlug: "europa",
    status: "si",
    shortAnswer: "Agua potable en todo el país con controles estrictos.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Alemania",
    slug: "alemania",
    continentSlug: "europa",
    status: "si",
    shortAnswer: "El agua del grifo es segura y de alta calidad.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Japón",
    slug: "japon",
    continentSlug: "asia",
    status: "si",
    shortAnswer: "El agua del grifo es potable en la mayoría de ciudades.",
    updatedAt: "2024-06-01"
  },
  {
    name: "China",
    slug: "china",
    continentSlug: "asia",
    status: "no",
    shortAnswer: "No se recomienda beber agua del grifo sin tratamiento.",
    updatedAt: "2024-06-01"
  },
  {
    name: "India",
    slug: "india",
    continentSlug: "asia",
    status: "no",
    shortAnswer: "No es segura para consumo directo.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Tailandia",
    slug: "tailandia",
    continentSlug: "asia",
    status: "no",
    shortAnswer: "Se recomienda evitar el agua del grifo.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Australia",
    slug: "australia",
    continentSlug: "oceania",
    status: "si",
    shortAnswer: "El agua del grifo es segura en la mayoría de regiones.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Nueva Zelanda",
    slug: "nueva-zelanda",
    continentSlug: "oceania",
    status: "si",
    shortAnswer: "Agua potable en general, con controles locales.",
    updatedAt: "2024-06-01"
  },
  {
    name: "Sudáfrica",
    slug: "sudafrica",
    continentSlug: "africa",
    status: "depende",
    shortAnswer: "Varía por ciudad; zonas rurales pueden no ser seguras.",
    updatedAt: "2024-06-01"
  }
];
