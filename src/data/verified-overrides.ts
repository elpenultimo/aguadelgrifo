export type VerifiedOverride = {
  status: "si" | "depende" | "no";
  shortAnswer: string;
  sources: { label: string; url: string }[];
  updatedAt: string;
};

const updatedAt = "2025-01-10";
const updatedAtBatch2 = "2026-01-08";
const updatedAtBatch3 = "2026-01-08";
const updatedAtBatch4 = "2026-01-08";

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
  },
  luxemburgo: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch2,
    sources: fcdp("luxembourg")
  },
  monaco: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch2,
    sources: fcdp("monaco")
  },
  liechtenstein: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch2,
    sources: fcdp("liechtenstein")
  },
  malta: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch2,
    sources: fcdp("malta")
  },
  barein: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("bahrain")
  },
  andorra: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch2,
    sources: fcdp("andorra")
  },
  chipre: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("cyprus")
  },
  albania: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("albania")
  },
  georgia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("georgia")
  },
  armenia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("armenia")
  },
  azerbaiyan: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("azerbaijan")
  },
  belice: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("belize")
  },
  ecuador: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch2,
    sources: fcdp("ecuador")
  },
  bolivia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch2,
    sources: fcdp("bolivia")
  },
  "cabo-verde": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("cape-verde")
  },
  fiyi: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("fiji")
  },
  "antigua-y-barbuda": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("antigua-and-barbuda")
  },
  dominica: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("dominica")
  },
  granada: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("grenada")
  },
  aruba: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch2,
    sources: fcdp("aruba")
  },
  "bosnia-y-herzegovina": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("bosnia-and-herzegovina")
  },
  "macedonia-del-norte": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("north-macedonia")
  },
  moldavia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("moldova")
  },
  bielorrusia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("belarus")
  },
  montenegro: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("montenegro")
  },
  banglades: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("bangladesh")
  },
  pakistan: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("pakistan")
  },
  uzbekistan: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("uzbekistan")
  },
  kazajistan: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("kazakhstan")
  },
  kirguistan: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("kyrgyzstan")
  },
  tayikistan: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("tajikistan")
  },
  turkmenistan: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("turkmenistan")
  },
  mongolia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("mongolia")
  },
  laos: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("laos")
  },
  myanmar: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("myanmar")
  },
  macao: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("macao")
  },
  brunei: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("brunei")
  },
  "el-salvador": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("el-salvador")
  },
  honduras: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("honduras")
  },
  nicaragua: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("nicaragua")
  },
  haiti: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("haiti")
  },
  "trinidad-y-tobago": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("trinidad-and-tobago")
  },
  "puerto-rico": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: usStateDept("puerto-rico")
  },
  senegal: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("senegal")
  },
  ghana: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("ghana")
  },
  "costa-de-marfil": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("cote-d-ivoire")
  },
  uganda: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("uganda")
  },
  ruanda: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("rwanda")
  },
  esuatini: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("eswatini")
  },
  lesoto: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("lesotho")
  },
  malaui: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("malawi")
  },
  zambia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("zambia")
  },
  zimbabue: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("zimbabwe")
  },
  mozambique: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("mozambique")
  },
  namibia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("namibia")
  },
  botsuana: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("botswana")
  },
  camerun: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("cameroon")
  },
  etiopia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("ethiopia")
  },
  angola: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("angola")
  },
  nigeria: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("nigeria")
  },
  benin: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("benin")
  },
  togo: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("togo")
  },
  guinea: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("guinea")
  },
  "guinea-bisau": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("guinea-bissau")
  },
  gambia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("gambia")
  },
  mauritania: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("mauritania")
  },
  sudan: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("sudan")
  },
  argelia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("algeria")
  },
  madagascar: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("madagascar")
  },
  surinam: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("suriname")
  },
  libia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("libya")
  },
  mali: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("mali")
  },
  niger: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("niger")
  },
  "burkina-faso": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("burkina-faso")
  },
  "sierra-leona": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("sierra-leone")
  },
  liberia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("liberia")
  },
  "republica-centroafricana": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("central-african-republic")
  },
  chad: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("chad")
  },
  "sudan-del-sur": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("south-sudan")
  },
  eritrea: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("eritrea")
  },
  somalia: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("somalia")
  },
  yibuti: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("djibouti")
  },
  "republica-democratica-del-congo": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("democratic-republic-of-the-congo")
  },
  congo: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("congo")
  },
  guyana: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("guyana")
  },
  "santa-lucia": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("saint-lucia")
  },
  "san-vicente-y-las-granadinas": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("saint-vincent-and-the-grenadines")
  },
  "san-cristobal-y-nieves": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("saint-kitts-and-nevis")
  },
  bermudas: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("bermuda")
  },
  curazao: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("curacao")
  },
  "islas-caiman": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("cayman-islands")
  },
  kuwait: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("kuwait")
  },
  irak: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("iraq")
  },
  iran: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("iran")
  },
  afganistan: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("afghanistan")
  },
  butan: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("bhutan")
  },
  "timor-oriental": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("timor-leste")
  },
  yemen: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("yemen")
  },
  palestina: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("the-occupied-palestinian-territories")
  },
  "papua-nueva-guinea": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("papua-new-guinea")
  },
  samoa: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("samoa")
  },
  tonga: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("tonga")
  },
  vanuatu: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("vanuatu")
  },
  "islas-salomon": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("solomon-islands")
  },
  comoras: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("comoros")
  },
  "santo-tome-y-principe": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("sao-tome-and-principe")
  },
  "guinea-ecuatorial": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("equatorial-guinea")
  },
  gabon: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("gabon")
  },
  burundi: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("burundi")
  },
  "corea-del-norte": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch3,
    sources: fcdp("north-korea")
  },
  micronesia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("micronesia")
  },
  kiribati: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("kiribati")
  },
  tuvalu: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("tuvalu")
  },
  nauru: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("nauru")
  },
  "islas-marshall": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("marshall-islands")
  },
  "islas-malvinas": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("falkland-islands")
  },
  groenlandia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("greenland")
  },
  "islas-turcas-y-caicos": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("turks-and-caicos-islands")
  },
  "islas-virgenes-eeuu": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("virgin-islands-us")
  },
  palaos: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch3,
    sources: fcdp("palau")
  },
  anguila: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("anguilla")
  },
  antartida: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("antarctica")
  },
  bonaire: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("bonaire-st-eustatius-saba")
  },
  gibraltar: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("gibraltar")
  },
  guadalupe: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("guadeloupe")
  },
  guam: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("guam")
  },
  "guayana-francesa": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("french-guiana")
  },
  guernsey: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("guernsey")
  },
  "isla-bouvet": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("bouvet-island")
  },
  "isla-de-navidad": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("christmas-island")
  },
  "isla-norfolk": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("norfolk-island")
  },
  "isla-de-man": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("isle-of-man")
  },
  "isla-heard-y-mcdonald": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("heard-island-and-mcdonald-islands")
  },
  "islas-aland": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("aland-islands")
  },
  "islas-cocos": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("cocos-keeling-islands")
  },
  "islas-cook": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("cook-islands")
  },
  "islas-feroe": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("faroe-islands")
  },
  "islas-georgias-del-sur-y-sandwich-del-sur": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("south-georgia-and-the-south-sandwich-islands")
  },
  "islas-marianas-del-norte": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("northern-mariana-islands")
  },
  "islas-pitcairn": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("pitcairn-islands")
  },
  "islas-virgenes-britanicas": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("british-virgin-islands")
  },
  "islas-ultramarinas-menores-de-eeuu": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("united-states-minor-outlying-islands")
  },
  "islas-wallis-y-futuna": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("wallis-and-futuna")
  },
  jersey: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("jersey")
  },
  libano: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch4,
    sources: fcdp("lebanon")
  },
  martinica: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("martinique")
  },
  mayotte: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("mayotte")
  },
  montserrat: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("montserrat")
  },
  niue: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("niue")
  },
  "nueva-caledonia": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("new-caledonia")
  },
  paraguay: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch4,
    sources: fcdp("paraguay")
  },
  "polinesia-francesa": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("french-polynesia")
  },
  reunion: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("reunion")
  },
  "sahara-occidental": {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch4,
    sources: fcdp("western-sahara")
  },
  "samoa-americana": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("american-samoa")
  },
  "san-bartolome": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("saint-barthelemy")
  },
  "san-marino": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("san-marino")
  },
  "san-martin": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("saint-martin")
  },
  "san-pedro-y-miquelon": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("saint-pierre-and-miquelon")
  },
  "santa-elena": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("st-helena")
  },
  "sint-maarten": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("sint-maarten")
  },
  siria: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch4,
    sources: fcdp("syria")
  },
  "svalbard-y-jan-mayen": {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("svalbard-and-jan-mayen")
  },
  "territorio-britanico-del-oceano-indico": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("british-indian-ocean-territory")
  },
  "territorios-australes-franceses": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("french-southern-territories")
  },
  tokelau: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt: updatedAtBatch4,
    sources: fcdp("tokelau")
  },
  uruguay: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("uruguay")
  },
  vaticano: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt: updatedAtBatch4,
    sources: fcdp("holy-see")
  },
  venezuela: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt: updatedAtBatch4,
    sources: fcdp("venezuela")
  }
};

const existing = new Set(Object.keys(VERIFIED_OVERRIDES));
void existing;
