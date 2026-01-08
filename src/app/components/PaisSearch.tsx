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
    if (!normalized) return countries;
    return countries.filter((country) =>
      country.name.toLowerCase().includes(normalized)
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
          <Link key={country.slug} href={`/pais/${country.slug}`} className="card">
            <h3>{country.name}</h3>
            <p className="subtle">{country.shortAnswer}</p>
            <span className={`badge badge--${country.status}`}>
              {statusLabels[country.status]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
