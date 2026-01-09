import Link from "next/link";
import { paises } from "../data/paises";
import { continentes } from "../data/continentes";
import { getGeoCountry } from "../lib/geo";
import { getCountryFlagEmoji } from "../lib/flags";
import FocusSearchLink from "./components/FocusSearchLink";
import PaisSearch from "./components/PaisSearch";

const INITIAL_COUNTRIES = 32;

export default async function HomePage() {
  const geo = await getGeoCountry();
  const matchedCountry = geo?.iso2
    ? paises.find(
        (country) => country.iso2?.toUpperCase() === geo.iso2.toUpperCase()
      )
    : null;
  const flag = matchedCountry
    ? getCountryFlagEmoji({
        iso2: matchedCountry.iso2,
        slug: matchedCountry.slug,
        name: matchedCountry.name
      })
    : null;

  return (
    <>
      <section className="hero">
        <div className="hero__panel">
          <h2>¿Es seguro beber agua del grifo?</h2>
          <span className="hero__accent" aria-hidden="true" />
          <p className="subtle">
            Consulta recomendaciones rápidas por país, con semáforo y consejos
            para viajeros.
          </p>
          <p className="subtle">
            {paises.length} países y territorios ya agregados en este listado.
          </p>
        </div>
      </section>

      {matchedCountry ? (
        <section aria-label="Ubicación detectada">
          <div className="card highlight-card">
            <div className="highlight-card__info">
              <p className="highlight-card__title">Tu ubicación</p>
              <p className="highlight-card__country">
                {flag ? `${flag} ` : ""}
                {matchedCountry.name}
              </p>
              <span className="subtle highlight-card__meta">
                Detección aproximada
              </span>
            </div>
            <div className="highlight-card__actions">
              <Link
                href={`/pais/${matchedCountry.slug}`}
                className="button button--primary"
              >
                Ver recomendación
              </Link>
              <FocusSearchLink
                targetId="pais-search-input"
                className="link-inline"
              >
                ¿No es tu país? Elige otro
              </FocusSearchLink>
            </div>
          </div>
        </section>
      ) : null}

      <PaisSearch countries={paises} initialLimit={INITIAL_COUNTRIES} />

      <section>
        <h2>Explora por continente</h2>
        <div className="grid">
          {continentes.map((continente) => (
            <Link
              key={continente.slug}
              href={`/continente/${continente.slug}`}
              className="card"
            >
              <h3>{continente.name}</h3>
              <p className="subtle">Ver países y recomendaciones.</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
