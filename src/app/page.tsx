import Link from "next/link";
import { paises } from "../data/paises";
import { continentes } from "../data/continentes";
import PaisSearch from "./components/PaisSearch";

export default function HomePage() {
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
          <p className="subtle">Países: {paises.length}</p>
        </div>
      </section>

      <PaisSearch countries={paises} />

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
