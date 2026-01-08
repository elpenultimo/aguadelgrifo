import { writeFileSync } from "fs";
import { join } from "path";
import { continentes } from "../src/data/continentes";
import { paises } from "../src/data/paises";

const baseUrl = process.env.SITE_URL ?? "https://aguadelgrifo.com";

const staticRoutes = ["/", "/que-es-agua-del-grifo", "/fuentes"];

const urls = [
  ...staticRoutes,
  ...continentes.map((continente) => `/continente/${continente.slug}`),
  ...paises.map((pais) => `/pais/${pais.slug}`)
];

const lastmod = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

const target = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(target, xml);

console.log(`Sitemap generado con ${urls.length} URLs.`);
