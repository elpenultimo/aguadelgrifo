"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Pais } from "../../data/paises";
import { getCountryFlagEmoji } from "../../lib/flags";

const statusLabels: Record<Pais["status"], string> = {
  si: "Sí",
  depende: "Depende",
  no: "No"
};

export default function PaisSearch({ countries }: { countries: Pais[] }) {
  const [query, setQuery] = useState("");
  const [expandedSources, setExpandedSources] = useState<
    Record<string, boolean>
  >({});

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return countries.filter((country) =>
      normalized ? country.name.toLowerCase().includes(normalized) : true
    );
  }, [countries, query]);

  const toggleSources = (slug: string) => {
    setExpandedSources((current) => ({
      ...current,
      [slug]: !current[slug]
    }));
  };

  return (
    <section>
      <h2>Buscador de países</h2>
      <input
        className="search-input"
        placeholder="Busca un país..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className="subtle">Resultados: {filtered.length}</p>
      <div className="grid">
        {filtered.map((country) => {
          const flag = getCountryFlagEmoji({
            slug: country.slug,
            name: country.name
          });
          const title = flag ? `${flag} ${country.name}` : country.name;
          const hasSources = country.isVerified && country.sources?.length;
          const isExpanded = Boolean(expandedSources[country.slug]);
          const sourcesId = `sources-${country.slug}`;

          return (
            <article key={country.slug} className="card">
              <h3>
                <Link href={`/pais/${country.slug}`}>{title}</Link>
              </h3>
              <p className="subtle">{country.shortAnswer}</p>
              <div className="badge-group">
                <span
                  className={`badge badge--status badge--${country.status}`}
                >
                  {statusLabels[country.status]}
                </span>
                <span
                  className={`badge ${
                    country.isVerified ? "badge--verified" : "badge--pending"
                  }`}
                >
                  {country.isVerified ? "Verificado" : "Pendiente"}
                </span>
              </div>
              {hasSources ? (
                <div className="sources">
                  <button
                    type="button"
                    className="sources__toggle"
                    onClick={() => toggleSources(country.slug)}
                    aria-expanded={isExpanded}
                    aria-controls={sourcesId}
                  >
                    {isExpanded ? "Ocultar fuentes" : "Ver fuentes"}
                  </button>
                  {isExpanded ? (
                    <ul id={sourcesId}>
                      {country.sources?.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="nofollow noopener"
                          >
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
