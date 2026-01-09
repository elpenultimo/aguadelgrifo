import type { MetadataRoute } from "next";
import { continentes } from "../data/continentes";
import { paises } from "../data/paises";

const PRODUCTION_SITE_URL =
  process.env.NEXT_PUBLIC_PRODUCTION_URL ?? "https://aguadelgrifo.com";

const getBaseUrl = (): string => {
  const siteUrl = PRODUCTION_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw new Error("Missing site URL for sitemap generation.");
  }

  return siteUrl.replace(/\/$/, "");
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0
    }
  ];

  const continentPages: MetadataRoute.Sitemap = continentes.map((continente) => ({
    url: `${baseUrl}/continente/${continente.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  const countryPages: MetadataRoute.Sitemap = paises.map((pais) => ({
    url: `${baseUrl}/pais/${pais.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticPages, ...continentPages, ...countryPages];
}
