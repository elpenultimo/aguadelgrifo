import type { MetadataRoute } from "next";
import { paises } from "../data/paises";
import { getSiteUrl } from "../lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/que-es-agua-del-grifo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${baseUrl}/fuentes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5
    }
  ];

  const countryPages: MetadataRoute.Sitemap = paises.map((pais) => ({
    url: `${baseUrl}/pais/${pais.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticPages, ...countryPages];
}
