import type { Metadata } from "next";
import LibroReclamacionesClient from "./LibroReclamacionesClient";

const BASE_URL = "https://www.famaxconcreto.com.pe";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | FAMAX CONCRETO PERÚ",
  description:
    "Hoja de reclamaciones de FAMAX CONCRETO PERÚ, conforme a la Ley de Protección al Consumidor (INDECOPI, Perú). Presenta aquí tu reclamo o queja.",
  alternates: { canonical: `${BASE_URL}/libro-de-reclamaciones` },
  openGraph: {
    title: "Libro de Reclamaciones | FAMAX CONCRETO PERÚ",
    description: "Presenta tu reclamo o queja ante FAMAX CONCRETO PERÚ conforme a la normativa peruana del consumidor.",
    url: `${BASE_URL}/libro-de-reclamaciones`,
    images: [{ url: `${BASE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
};

export default function LibroReclamacionesPage() {
  return <LibroReclamacionesClient />;
}
