import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const BASE_URL = "https://famaxconcretoperu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FAMAX CONCRETO PERÚ | Concreto Premezclado de Alta Resistencia en Lima",
    template: "%s | FAMAX CONCRETO PERÚ",
  },
  icons: {
    icon: "/images/famax-icon.png",
  },
  description:
    "Empresa peruana especialista en concreto premezclado, adoquines, cachacos y baldosas en Lima Norte. 6 años de experiencia, laboratorio propio y entrega puntual. ¡Cotiza ahora!",
  keywords: [
    "concreto premezclado Lima",
    "concretera Lima Norte",
    "concreto fc 210 Lima",
    "adoquines de concreto Lima",
    "bombeo de concreto Puente Piedra",
    "concreto de alta resistencia Peru",
    "FAMAX CONCRETO",
  ],
  authors: [{ name: "FAMAX CONCRETO PERÚ" }],
  creator: "FAMAX CONCRETO PERÚ",
  publisher: "FAMAX CONCRETO PERÚ",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: "FAMAX CONCRETO PERÚ",
    title: "FAMAX CONCRETO PERÚ | Concreto Premezclado de Alta Resistencia en Lima",
    description:
      "Especialistas en concreto premezclado, adoquines y prefabricados en Lima Norte. Laboratorio propio, aditivo Quincha y entrega puntual. Cotiza ahora.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FAMAX CONCRETO PERÚ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAMAX CONCRETO PERÚ | Concreto de Alta Resistencia",
    description: "Concretera en Lima Norte. Concreto premezclado, adoquines, bombeo y más. ¡Cotiza ahora!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FAMAX CONCRETO PERÚ",
    description:
      "Empresa peruana especializada en producción, suministro y logística integral de concreto premezclado y prefabricados en Lima Norte.",
    url: BASE_URL,
    telephone: ["+51973350524", "+51933595630", "+51955416601"],
    email: "ventas@famaxconcreto.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5VFR+822",
      addressLocality: "Puente Piedra",
      addressRegion: "Lima",
      postalCode: "15122",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -11.8705,
      longitude: -77.0763,
    },
    openingHours: "Mo-Sa 07:00-18:00",
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/famaxconcreto",
      "https://www.instagram.com/famaxconcreto",
      "https://www.tiktok.com/@famaxconcreto",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Productos y Servicios FAMAX",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Concreto Premezclado f'c 210 kg/cm2" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Adoquines de Concreto" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bombeo de Concreto con Pluma" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alquiler de Camión Mixer" } },
      ],
    },
  };

  return (
    <html lang="es-PE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
