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

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return countries.filter((country) =>
      normalized ? country.name.toLowerCase().includes(normalized) : true
    );
  }, [countries, query]);

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
        {filtered.map((country) => (
          <article key={country.slug} className="card">
            <h3>
              <Link href={`/pais/${country.slug}`}>{country.name}</Link>
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
