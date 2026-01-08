import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { buildBaseMetadata } from "../lib/seo";
import WaveDivider from "./components/WaveDivider";

export const metadata: Metadata = buildBaseMetadata();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <div className="header__content">
            <h1>Agua del Grifo</h1>
            <p className="subtle">
              Guía rápida sobre la seguridad del agua por país.
            </p>
            <nav>
              <Link href="/">Inicio</Link>
              <Link href="/que-es-agua-del-grifo">¿Qué es?</Link>
              <Link href="/fuentes">Fuentes</Link>
            </nav>
          </div>
          <WaveDivider />
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer__content">
            <p>Información orientativa para viajeros y residentes.</p>
            <nav>
              <Link href="/">Inicio</Link>
              <Link href="/que-es-agua-del-grifo">¿Qué es?</Link>
              <Link href="/fuentes">Fuentes</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
