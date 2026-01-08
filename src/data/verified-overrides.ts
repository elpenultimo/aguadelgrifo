export type VerifiedOverride = {
  status: "si" | "depende" | "no";
  shortAnswer: string;
  sources: { label: string; url: string }[];
  updatedAt: string;
};

const updatedAt = "2025-01-10";
const updatedAtBatch2 = "2026-01-08";
const updatedAtBatch3 = "2026-01-08";

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
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("netherlands")
  },
  belgica: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("belgium")
  },
  suiza: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("switzerland")
  },
  austria: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("austria")
  },
  irlanda: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("ireland")
  },
  islandia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("iceland")
  },
  noruega: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("norway")
  },
  suecia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("sweden")
  },
  dinamarca: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("denmark")
  },
  finlandia: {
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("finland")
  },
  polonia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("poland")
  },
  "republica-checa": {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("czech-republic")
  },
  hungria: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("hungary")
  },
  eslovaquia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("slovakia")
  },
  eslovenia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("slovenia")
  },
  croacia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("croatia")
  },
  grecia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("greece")
  },
  turquia: {
    status: "depende",
    shortAnswer: shortAnswers.depende,
    updatedAt,
    sources: fcdp("turkey")
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
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("morocco")
  },
  tunez: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("tunisia")
  },
  egipto: {
    status: "no",
    shortAnswer: shortAnswers.no,
    updatedAt,
    sources: fcdp("egypt")
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
    status: "si",
    shortAnswer: shortAnswers.si,
    updatedAt,
    sources: fcdp("united-arab-emirates")
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
  }
};

const existing = new Set(Object.keys(VERIFIED_OVERRIDES));
void existing;
