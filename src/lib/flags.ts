import { slugify } from "./slugify";

const isoOverrides: Record<string, string> = {
  "arabia-saudita": "SA",
  bonaire: "BQ",
  "costa-de-marfil": "CI",
  guernsey: "GG",
  "hong-kong": "HK",
  "isla-heard-y-mcdonald": "HM",
  "islas-georgias-del-sur-y-sandwich-del-sur": "GS",
  "islas-virgenes-eeuu": "VI",
  "islas-ultramarinas-menores-de-eeuu": "UM",
  "islas-wallis-y-futuna": "WF",
  macao: "MO",
  myanmar: "MM",
  palestina: "PS",
  "republica-checa": "CZ",
  "timor-oriental": "TL",
  vaticano: "VA"
};

const buildIsoBySlug = (): Record<string, string> => {
  if (typeof Intl.DisplayNames === "undefined") {
    return { ...isoOverrides };
  }

  const displayNames = new Intl.DisplayNames("es", { type: "region" });
  const isoBySlug: Record<string, string> = {};

  for (let first = 65; first <= 90; first += 1) {
    for (let second = 65; second <= 90; second += 1) {
      const code = String.fromCharCode(first, second);
      const name = displayNames.of(code);
      if (!name || name.toUpperCase() === code) {
        continue;
      }
      const slug = slugify(name);
      if (slug && !isoBySlug[slug]) {
        isoBySlug[slug] = code;
      }
    }
  }

  return { ...isoBySlug, ...isoOverrides };
};

const isoBySlug = buildIsoBySlug();

export const getIso2ForCountry = ({
  slug,
  name
}: {
  slug?: string;
  name?: string;
}): string | null => {
  const resolvedSlug = slug ?? (name ? slugify(name) : undefined);
  if (!resolvedSlug) {
    return null;
  }

  return isoBySlug[resolvedSlug] ?? null;
};

export const getFlagEmojiFromIso2 = (iso2: string): string | null => {
  const normalized = iso2.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) {
    return null;
  }

  const chars = Array.from(normalized, (char) =>
    String.fromCodePoint(127397 + char.charCodeAt(0))
  );
  return chars.join("");
};

export const getCountryFlagEmoji = ({
  iso2,
  slug,
  name
}: {
  iso2?: string;
  slug?: string;
  name?: string;
}): string | null => {
  if (iso2) {
    return getFlagEmojiFromIso2(iso2);
  }

  const resolvedSlug = slug ?? (name ? slugify(name) : undefined);
  if (!resolvedSlug) {
    return null;
  }

  const resolvedIso = isoBySlug[resolvedSlug];
  if (!resolvedIso) {
    return null;
  }

  return getFlagEmojiFromIso2(resolvedIso);
};
