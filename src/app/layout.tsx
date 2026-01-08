import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { buildBaseMetadata } from "../lib/seo";

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
          <h1>Agua del Grifo</h1>
          <p className="subtle">Guía rápida sobre la seguridad del agua por país.</p>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/que-es-agua-del-grifo">¿Qué es?</Link>
            <Link href="/fuentes">Fuentes</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
