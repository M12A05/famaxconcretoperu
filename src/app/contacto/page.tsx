import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | FAMAX CONCRETO PERÚ",
  description: "Cotiza concreto premezclado para tu obra en Lima Norte. Atención rápida, laboratorio propio y entrega puntual. Contáctanos por WhatsApp o correo.",
  alternates: { canonical: "https://famaxconcretoperu.vercel.app/contacto" },
  openGraph: {
    title: "Contacto | FAMAX CONCRETO PERÚ",
    description: "Cotiza concreto premezclado para tu obra en Lima Norte. Atención rápida y entrega puntual.",
    url: "https://famaxconcretoperu.vercel.app/contacto",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
