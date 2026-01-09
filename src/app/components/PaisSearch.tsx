"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Pais } from "../../data/paises";
import { getCountryFlagEmoji } from "../../lib/flags";
import { useDetectedCountry } from "../hooks/useDetectedCountry";

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

const POPULAR_COUNTRIES = [
  "Chile",
  "España",
  "México",
  "Estados Unidos",
  "Japón"
];

export default function PaisSearch({
  countries,
  title = "Buscar país",
  placeholder = "Busca un país o territorio...",
  initialLimit
}: PaisSearchProps) {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [expandedSources, setExpandedSources] = useState<
    Record<string, boolean>
  >({});
  const [visibleCount, setVisibleCount] = useState(
    initialLimit ?? countries.length
  );
  const detectedCountryCode = useDetectedCountry();
  const highlightedCountry = useMemo(() => {
    if (!detectedCountryCode) {
      return null;
    }

    const normalized = detectedCountryCode.toUpperCase();
    return (
      countries.find(
        (country) => country.iso2?.toUpperCase() === normalized
      ) ?? null
    );
  }, [countries, detectedCountryCode]);

  const displayCountries = useMemo(() => {
    if (!highlightedCountry) {
      return countries;
    }

    return countries.filter((country) => country.slug !== highlightedCountry.slug);
  }, [countries, highlightedCountry]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return displayCountries.filter((country) =>
      normalized ? country.name.toLowerCase().includes(normalized) : true
    );
  }, [displayCountries, query]);

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

  const handleQuickPick = (country: string) => {
    setQuery(country);
    searchInputRef.current?.focus();
  };

  const renderCountryCard = (country: Pais, className?: string) => {
    const flag = getCountryFlagEmoji({
      iso2: country.iso2,
      slug: country.slug,
      name: country.name
    });
    const title = flag ? `${flag} ${country.name}` : country.name;
    const hasSources = country.isVerified && country.sources?.length;
    const isExpanded = Boolean(expandedSources[country.slug]);
    const sourcesId = `sources-${country.slug}`;

    return (
      <article key={country.slug} className={`card ${className ?? ""}`.trim()}>
        <div
          className={`card__status card__status--${country.status}`}
          aria-hidden="true"
        />
        <h3>
          <Link href={`/pais/${country.slug}`}>{title}</Link>
        </h3>
        <p className="subtle">{country.shortAnswer}</p>
        <div className="badge-group">
          <span className={`badge badge--status badge--${country.status}`}>
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
                  <li key={source.url ?? source.label}>
                    {source.url ? (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        {source.label}
                      </a>
                    ) : (
                      <span>{source.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </article>
    );
  };

  return (
    <section>
      {highlightedCountry ? (
        <aside className="featured">
          <div className="featured__copy">
            <p className="featured__title">
              Detectamos tu ubicación aproximada:{" "}
              <strong>{highlightedCountry.name}</strong>
            </p>
            <p className="subtle">
              Detección aproximada por país. No guardamos tu IP.
            </p>
            <Link
              href={`/pais/${highlightedCountry.slug}`}
              className="featured__cta"
            >
              Ver recomendación
            </Link>
          </div>
          {renderCountryCard(highlightedCountry, "featured__card")}
        </aside>
      ) : null}
      <div className="search-card">
        <div className="search-card__header">
          <h2>{title}</h2>
          <span className="search-card__icon" aria-hidden="true">
            🔍
          </span>
        </div>
        <p className="subtle search-card__helper">
          Escribe un país o territorio (ej: &quot;Chile&quot;, &quot;Japón&quot;,
          &quot;Curazao&quot;).
        </p>
        <input
          ref={searchInputRef}
          className="search-input search-input--prominent"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="chip-group" role="list">
          {POPULAR_COUNTRIES.map((country) => (
            <button
              key={country}
              type="button"
              className="chip"
              onClick={() => handleQuickPick(country)}
              role="listitem"
            >
              {country}
            </button>
          ))}
        </div>
      </div>
      <p className="results">
        <span className="results__dot" aria-hidden="true" />
        <span className="subtle">Resultados: {filtered.length}</span>
      </p>
      <div className="grid">
        {visibleCountries.map((country) => renderCountryCard(country))}
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
