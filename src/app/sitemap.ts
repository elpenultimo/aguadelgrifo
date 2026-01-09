import type { MetadataRoute } from "next";
import { continentes } from "../data/continentes";
import { paises } from "../data/paises";

const getBaseUrl = (): string => {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  return siteUrl.replace(/\/$/, "");
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/que-es-agua-del-grifo`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/fuentes`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5
    }
  ];

  const continentPages: MetadataRoute.Sitemap = continentes.map((continente) => ({
    url: `${baseUrl}/continente/${continente.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  const countryPages: MetadataRoute.Sitemap = paises.map((pais) => ({
    url: `${baseUrl}/pais/${pais.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticPages, ...continentPages, ...countryPages];
}
