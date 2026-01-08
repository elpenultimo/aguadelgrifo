export type VerifiedOverride = {
  status: "si" | "depende" | "no";
  shortAnswer: string;
  sources: { label: string; url: string }[];
  updatedAt: string;
};

const updatedAt = "2025-01-10";

const shortAnswers = {
  si: "En general el agua del grifo es potable en zonas urbanas, con posibles excepciones locales.",
  depende:
    "La potabilidad varía por ciudad e infraestructura; confirma recomendaciones locales antes de consumir.",
  no: "En general no se recomienda beber agua del grifo; usa agua embotellada o tratada."
} as const;

const fcdp = (slug: string) => [
  {
    label: "UK FCDO Travel Advice",
    url: `https://www.gov.uk/foreign-travel-advice/${slug}`
  }
];

const usStateDept = (slug: string) => [
  {
    label: "US State Dept - Travel Advisory",
    url: `https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/${slug}-travel-advisory.html`
  }
];

export const TOP80_SLUGS = [
  "estados-unidos",
  "canada",
  "mexico",
  "brasil",
  "argentina",
  "chile",
  "peru",
  "colombia",
  "costa-rica",
  "panama",
  "republica-dominicana",
  "cuba",
  "jamaica",
  "bahamas",
  "barbados",
  "guatemala",
  "espana",
  "francia",
  "italia",
  "portugal",
  "reino-unido",
  "alemania",
  "paises-bajos",
  "belgica",
  "suiza",
  "austria",
  "irlanda",
  "islandia",
  "noruega",
  "suecia",
  "dinamarca",
  "finlandia",
  "polonia",
  "republica-checa",
  "hungria",
  "eslovaquia",
  "eslovenia",
  "croacia",
  "grecia",
  "turquia",
  "rusia",
  "ucrania",
  "bulgaria",
  "rumania",
  "serbia",
  "estonia",
  "letonia",
  "lituania",
  "marruecos",
  "tunez",
  "egipto",
  "sudafrica",
  "kenia",
  "tanzania",
  "seychelles",
  "mauricio",
  "china",
  "japon",
  "corea-del-sur",
  "india",
  "tailandia",
  "vietnam",
  "indonesia",
  "malasia",
  "singapur",
  "filipinas",
  "camboya",
  "sri-lanka",
  "nepal",
  "emiratos-arabes-unidos",
  "catar",
  "arabia-saudita",
  "israel",
  "jordania",
  "oman",
  "maldivas",
  "hong-kong",
  "taiwan",
  "australia",
  "nueva-zelanda"
];

export const VERIFIED_OVERRIDES: Record<string, VerifiedOverride> = {
  "estados-unidos": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("united-states")
  },
  canada: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("canada")
  },
  mexico: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("mexico")
  },
  brasil: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("brazil")
  },
  argentina: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("argentina")
  },
  chile: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("chile")
  },
  peru: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("peru")
  },
  colombia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("colombia")
  },
  "costa-rica": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("costa-rica")
  },
  panama: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("panama")
  },
  "republica-dominicana": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("dominican-republic")
  },
  cuba: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("cuba")
  },
  jamaica: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("jamaica")
  },
  bahamas: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("bahamas")
  },
  barbados: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("barbados")
  },
  guatemala: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("guatemala")
  },
  espana: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("spain")
  },
  francia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("france")
  },
  italia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("italy")
  },
  portugal: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("portugal")
  },
  "reino-unido": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: usStateDept("united-kingdom")
  },
  alemania: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("germany")
  },
  "paises-bajos": {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/netherlands"
      }
    ]
  },
  belgica: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/belgium"
      }
    ]
  },
  suiza: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/switzerland"
      }
    ]
  },
  austria: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/austria"
      }
    ]
  },
  irlanda: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("ireland")
  },
  islandia: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/iceland"
      }
    ]
  },
  noruega: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/norway"
      }
    ]
  },
  suecia: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/sweden"
      }
    ]
  },
  dinamarca: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/denmark"
      }
    ]
  },
  finlandia: {
    status: "si",
    shortAnswer:
      "En general el agua del grifo es potable en la mayoría de zonas urbanas; aun así, confirma avisos locales.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/finland"
      }
    ]
  },
  polonia: {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad o edificio; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/poland"
      }
    ]
  },
  "republica-checa": {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad o edificio; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/czech-republic"
      }
    ]
  },
  hungria: {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad o edificio; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/hungary"
      }
    ]
  },
  eslovaquia: {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad o edificio; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/slovakia"
      }
    ]
  },
  eslovenia: {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad o edificio; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/slovenia"
      }
    ]
  },
  croacia: {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad o edificio; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/croatia"
      }
    ]
  },
  grecia: {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad o isla; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/greece"
      }
    ]
  },
  turquia: {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por ciudad; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/turkey"
      }
    ]
  },
  rusia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("russia")
  },
  ucrania: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("ukraine")
  },
  bulgaria: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("bulgaria")
  },
  rumania: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("romania")
  },
  serbia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("serbia")
  },
  estonia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("estonia")
  },
  letonia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("latvia")
  },
  lituania: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("lithuania")
  },
  marruecos: {
    status: "no",
    shortAnswer:
      "No suele recomendarse beber agua del grifo; opta por agua embotellada o tratada.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/morocco"
      }
    ]
  },
  tunez: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("tunisia")
  },
  egipto: {
    status: "no",
    shortAnswer:
      "No suele recomendarse beber agua del grifo; opta por agua embotellada o tratada.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/egypt"
      }
    ]
  },
  sudafrica: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("south-africa")
  },
  kenia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("kenya")
  },
  tanzania: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("tanzania")
  },
  seychelles: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("seychelles")
  },
  mauricio: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("mauritius")
  },
  china: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("china")
  },
  japon: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("japan")
  },
  "corea-del-sur": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("south-korea")
  },
  india: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("india")
  },
  tailandia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("thailand")
  },
  vietnam: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("vietnam")
  },
  indonesia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("indonesia")
  },
  malasia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("malaysia")
  },
  singapur: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("singapore")
  },
  filipinas: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("philippines")
  },
  camboya: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("cambodia")
  },
  "sri-lanka": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("sri-lanka")
  },
  nepal: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("nepal")
  },
  "emiratos-arabes-unidos": {
    status: "depende",
    shortAnswer:
      "La potabilidad puede variar por edificio o zona; verifica recomendaciones locales antes de consumir.",
    updatedAt: "2026-01-07",
    sources: [
      {
        label: "FCDO",
        url: "https://www.gov.uk/foreign-travel-advice/united-arab-emirates"
      }
    ]
  },
  catar: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("qatar")
  },
  "arabia-saudita": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("saudi-arabia")
  },
  israel: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("israel")
  },
  jordania: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("jordan")
  },
  oman: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("oman")
  },
  maldivas: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("maldives")
  },
  "hong-kong": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("hong-kong")
  },
  taiwan: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("taiwan")
  },
  australia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("australia")
  },
  "nueva-zelanda": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("new-zealand")
  }
};
