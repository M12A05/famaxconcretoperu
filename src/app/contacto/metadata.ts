import type { Metadata } from "next";
import ContactoPage from "./page";

export const metadata: Metadata = {
  title: "Cotizar Concreto Premezclado en Lima | FAMAX CONCRETO PERÚ",
  description:
    "Cotiza concreto premezclado en Lima Norte. Formulario rápido: tipo de concreto, volumen en m³, ubicación y tipo de vaciado. Respuesta inmediata por WhatsApp.",
  alternates: { canonical: "https://famaxconcreto.vercel.app/contacto" },
  openGraph: {
    title: "Cotizar Concreto Premezclado en Lima | FAMAX CONCRETO PERÚ",
    description:
      "Envía tu solicitud de cotización en segundos. Atendemos Ancón, Puente Piedra, Comas, Ventanilla, Carabayllo y Santa Rosa.",
    url: "https://famaxconcreto.vercel.app/contacto",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default ContactoPage;
