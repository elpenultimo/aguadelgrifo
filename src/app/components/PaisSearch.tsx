"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Pais } from "../../data/paises";
import { getCountryFlagEmoji } from "../../lib/flags";

type PaisSearchProps = {
  countries: Pais[];
  title?: string;
  placeholder?: string;
  initialLimit?: number;
};

const statusLabels: Record<Pais["status"], string> = {
  si: "Sí",
  depende: "Depende",
  no: "No"
};

export default function PaisSearch({
  countries,
  title = "Buscador de países",
  placeholder = "Busca un país...",
  initialLimit
}: PaisSearchProps) {
  const [query, setQuery] = useState("");
  const [expandedSources, setExpandedSources] = useState<
    Record<string, boolean>
  >({});
  const [visibleCount, setVisibleCount] = useState(
    initialLimit ?? countries.length
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return countries.filter((country) =>
      normalized ? country.name.toLowerCase().includes(normalized) : true
    );
  }, [countries, query]);

  const hasActiveQuery = query.trim().length > 0;
  const isLimited = typeof initialLimit === "number";
  const limitStep = initialLimit ?? filtered.length;
  const visibleCountries =
    hasActiveQuery || !isLimited
      ? filtered
      : filtered.slice(0, visibleCount);
  const remainingCount = Math.max(filtered.length - visibleCount, 0);

  const toggleSources = (slug: string) => {
    setExpandedSources((current) => ({
      ...current,
      [slug]: !current[slug]
    }));
  };

  return (
    <section>
      <h2>{title}</h2>
      <input
        className="search-input"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className="results">
        <span className="results__dot" aria-hidden="true" />
        <span className="subtle">Resultados: {filtered.length}</span>
      </p>
      <div className="grid">
        {visibleCountries.map((country) => {
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
              <div
                className={`card__status card__status--${country.status}`}
                aria-hidden="true"
              />
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
      {isLimited && !hasActiveQuery && visibleCount < filtered.length ? (
        <div>
          <button
            type="button"
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + limitStep, filtered.length)
              )
            }
          >
            Mostrar más países
          </button>
          {remainingCount > 0 ? (
            <span className="subtle"> (quedan {remainingCount} países)</span>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
