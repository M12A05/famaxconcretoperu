"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "INICIO", href: "/" },
  { name: "¿QUIÉNES SOMOS?", href: "/nosotros" },
  { name: "PRODUCTOS Y SERVICIOS", href: "/productos-y-servicios" },
  { name: "CONTACTO", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {pathname === "/" && (
        <div className="w-full bg-[#1A1A1A] text-gray-300 py-2.5 overflow-hidden hidden sm:flex">
          <div className="animate-marquee-topbar flex gap-12 sm:gap-32 px-6 sm:px-16">
            <span className="text-xs md:text-sm font-medium tracking-wide">Especialistas en producción, transporte, bombeo y control de calidad del concreto premezclado</span>
            <span className="text-xs md:text-sm font-medium tracking-wide">Especialistas en producción, transporte, bombeo y control de calidad del concreto premezclado</span>
            {/* Duplicados para que el scroll sea infinito y sin cortes */}
            <span className="text-xs md:text-sm font-medium tracking-wide">Especialistas en producción, transporte, bombeo y control de calidad del concreto premezclado</span>
            <span className="text-xs md:text-sm font-medium tracking-wide">Especialistas en producción, transporte, bombeo y control de calidad del concreto premezclado</span>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-50 w-full bg-background-white border-b border-border shadow-sm">
      <div className="container-custom mx-auto h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-2 shrink-0 -ml-2 lg:-ml-6">
            <Image
              src="/images/famax-icon.webp"
              alt="FAMAX CONCRETO PERÚ Logo"
              width={240}
              height={70}
              className="object-contain w-auto h-12 md:h-16"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-bold tracking-wide transition-colors hover:text-[#AD131B] ${
                  isActive ? "text-[#AD131B]" : "text-[#1A1A1A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex justify-end">
          <Link
            href="/contacto"
            className="bg-[#AD131B] hover:bg-[#8B0E15] text-white px-7 py-3.5 rounded-md font-bold text-sm transition-colors shadow-md tracking-wide"
          >
            COTIZAR AHORA
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden justify-end">
          <button
            className="p-2 text-[#1A1A1A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 md:top-24 left-0 w-full bg-background-white border-b border-border shadow-lg">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-4 border-b border-border/50 text-base font-bold tracking-wide ${isActive ? "text-primary" : "text-text"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="p-4 pt-6">
              <Link
                href="/contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-bold text-sm transition-colors shadow-md"
              >
                COTIZAR AHORA
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
