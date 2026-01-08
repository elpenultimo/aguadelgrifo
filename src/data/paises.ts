import countries from "./countries-es.json";
import { VERIFIED_OVERRIDES } from "./verified-overrides";

export type EstadoAgua = "si" | "depende" | "no";

export type Pais = {
  name: string;
  slug: string;
  continentSlug: string;
  status: EstadoAgua;
  shortAnswer: string;
  updatedAt: string;
  isVerified: boolean;
  sources?: { label: string; url: string }[];
};

const neutralShortAnswer =
  "La seguridad del agua del grifo varía por ciudad y zona. Para viajeros, suele ser más seguro usar agua embotellada o filtrada hasta verificar recomendaciones locales.";
const today = "2026-01-08";

const countrySeeds = countries as Array<
  Pick<Pais, "name" | "slug" | "continentSlug">
>;

const validSlugs = new Set(countrySeeds.map((country) => country.slug));
const invalidVerifiedOverrides = Object.keys(VERIFIED_OVERRIDES).filter(
  (slug) => !validSlugs.has(slug)
);

if (invalidVerifiedOverrides.length > 0) {
  console.warn(
    `[verified-overrides] Slugs no encontrados: ${invalidVerifiedOverrides.join(
      ", "
    )}`
  );
}

export const paises: Pais[] = countrySeeds.map((country) => {
  const override = VERIFIED_OVERRIDES[country.slug];
  if (override) {
    return {
      ...country,
      status: override.status,
      shortAnswer: override.shortAnswer,
      updatedAt: override.updatedAt,
      sources: override.sources,
      isVerified: true
    };
  }

  return {
    ...country,
    status: "depende",
    shortAnswer: neutralShortAnswer,
    updatedAt: today,
    isVerified: false
  };
});
