import type { Pais } from "../data/paises";
import { paises } from "../data/paises";

export const getCountryBySlug = (slug: string): Pais | null =>
  paises.find((country) => country.slug === slug) ?? null;
