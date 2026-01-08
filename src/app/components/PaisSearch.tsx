"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Pais } from "../../data/paises";

const statusLabels: Record<Pais["status"], string> = {
  si: "Sí",
  depende: "Depende",
  no: "No"
};

export default function PaisSearch({ countries }: { countries: Pais[] }) {
  const [query, setQuery] = useState("");
  const [showVerified, setShowVerified] = useState(true);
  const [showPending, setShowPending] = useState(true);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return countries.filter((country) => {
      const matchesQuery = normalized
        ? country.name.toLowerCase().includes(normalized)
        : true;
      const matchesVerification =
        (country.isVerified && showVerified) ||
        (!country.isVerified && showPending);
      return matchesQuery && matchesVerification;
    });
  }, [countries, query, showPending, showVerified]);

  const verifiedCount = useMemo(
    () => countries.filter((country) => country.isVerified).length,
    [countries]
  );
  const pendingCount = countries.length - verifiedCount;

  return (
    <section>
      <h2>Buscador de países</h2>
      <div className="filter-chips">
        <button
          type="button"
          className={`chip ${showVerified ? "chip--active" : ""}`}
          aria-pressed={showVerified}
          onClick={() => setShowVerified((value) => !value)}
        >
          Verificados ({verifiedCount})
        </button>
        <button
          type="button"
          className={`chip ${showPending ? "chip--active" : ""}`}
          aria-pressed={showPending}
          onClick={() => setShowPending((value) => !value)}
        >
          Pendientes ({pendingCount})
        </button>
      </div>
      <input
        className="search-input"
        placeholder="Busca un país..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p className="subtle">Resultados: {filtered.length}</p>
      <div className="grid">
        {filtered.map((country) => (
          <article key={country.slug} className="card">
            <h3>
              <Link href={`/pais/${country.slug}`}>{country.name}</Link>
            </h3>
            <p className="subtle">{country.shortAnswer}</p>
            <div className="badge-group">
              <span className={`badge badge--${country.status}`}>
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
            {country.isVerified && country.sources?.length ? (
              <div className="sources">
                <p className="sources__title">Fuentes</p>
                <ul>
                  {country.sources.map((source) => (
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
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
