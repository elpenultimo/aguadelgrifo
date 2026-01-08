import { writeFileSync } from "fs";
import { join } from "path";
import { continentes } from "../src/data/continentes";
import { paises } from "../src/data/paises";

const baseUrl = process.env.SITE_URL ?? "https://aguadelgrifo.com";

const staticRoutes = ["/", "/que-es-agua-del-grifo", "/fuentes"];

const today = new Date().toISOString().split("T")[0];

const urls = [
  ...staticRoutes.map((path) => ({ path, lastmod: today })),
  ...continentes.map((continente) => ({
    path: `/continente/${continente.slug}`,
    lastmod: today
  })),
  ...paises.map((pais) => ({
    path: `/pais/${pais.slug}`,
    lastmod: pais.updatedAt
  }))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (entry) =>
      `  <url>\n    <loc>${baseUrl}${entry.path}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

const target = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(target, xml);

console.log(`Sitemap generado con ${urls.length} URLs.`);
