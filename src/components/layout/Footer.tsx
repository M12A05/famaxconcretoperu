import Link from "next/link";
import { Phone, BookOpen, Scale } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark text-white pt-16 pb-8 mt-auto">
      <div className="container-custom flex flex-col lg:flex-row gap-10 lg:gap-12 mb-12 justify-between">
        {/* Columna 1: Logo y tagline */}
        <div className="lg:w-1/4 xl:w-1/3 space-y-4 pr-0 lg:pr-8">
          <Link href="/" className="inline-block">
            <span className="font-serif text-2xl font-bold tracking-tight">
              FAMAX <br />
              CONCRETO <br />
              PERU
            </span>
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs mt-4">
            Solidez que construye grandes obras. Especialistas en concreto premezclado de alta resistencia.
          </p>
        </div>

        <div className="lg:w-3/4 xl:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-8">
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">INICIO</Link></li>
              <li><Link href="/nosotros" className="text-gray-300 hover:text-white text-sm transition-colors">NOSOTROS</Link></li>
              <li><Link href="/productos-y-servicios" className="text-gray-300 hover:text-white text-sm transition-colors">PRODUCTOS Y SERVICIOS</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-white text-sm transition-colors">CONTACTO</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Planta: Puente Piedra, Lima</li>
              <li>Ventas: +51 973 350 524</li>
              <li>Ventas: +51 933 595 630</li>
              <li>Email: ventas@famaxconcreto.com</li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6">Redes Sociales</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.facebook.com/famaxconcreto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/famaxconcreto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/famaxconcreto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@famaxconcreto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                  Tiktok
                </a>
              </li>
              <li>
                <a href="https://wa.me/51955416601" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                  <Phone size={16} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 5: Legal */}
          <div>
            <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4 flex flex-col items-start">
              <li>
                <Link href="/politicas-de-privacidad" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/linea-etica" className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] hover:bg-[#F0C800] px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wide transition-colors shadow-sm">
                  <Scale size={16} className="text-[#1A1A1A]" />
                  Línea Ética
                </Link>
              </li>
              <li>
                <Link href="/libro-de-reclamaciones" className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] hover:bg-gray-100 px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wide transition-colors shadow-sm">
                  <BookOpen size={16} className="text-[#1A1A1A]" />
                  Libro Reclamaciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-500">
          © {currentYear} FAMAX CONCRETO PERU - HECHO POR INNOVACION TECNOLOGICA
        </p>
      </div>
    </footer>
  );
}
