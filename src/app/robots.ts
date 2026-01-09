import type { MetadataRoute } from "next";

const PRODUCTION_SITE_URL =
  process.env.NEXT_PUBLIC_PRODUCTION_URL ?? "https://aguadelgrifo.com";

const getBaseUrl = (): string => {
  const siteUrl = PRODUCTION_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw new Error("Missing site URL for robots.txt generation.");
  }

  return siteUrl.replace(/\/$/, "");
};

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
