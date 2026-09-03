import Link from "next/link";
import { FaBook, FaBalanceScale } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark text-white pt-20 pb-10 mt-auto">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
        {/* Columna 1: Logo y tagline */}
        <div className="lg:col-span-4 space-y-6 pr-0 lg:pr-8">
          <Link href="/" className="inline-block">
            <span className="font-serif text-3xl font-bold tracking-tight">
              FAMAX <br />
              CONCRETO <br />
              PERU
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Solidez que construye grandes obras. Especialistas en concreto premezclado de alta resistencia, brindando seguridad y calidad en cada proyecto a nivel nacional.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="lg:col-span-2">
          <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6">Enlaces Rápidos</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">INICIO</Link></li>
            <li><Link href="/nosotros" className="text-gray-400 hover:text-white text-sm transition-colors">NOSOTROS</Link></li>
            <li><Link href="/productos-y-servicios" className="text-gray-400 hover:text-white text-sm transition-colors">PRODUCTOS Y SERVICIOS</Link></li>
            <li><Link href="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">CONTACTO</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="lg:col-span-3">
          <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6">Contacto</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="font-bold text-white">Planta:</span> 
              <span>5VFR+822, Puente Piedra 15122, Lima</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-white">Ventas:</span> 
              <div className="flex flex-col gap-1">
                <a href="https://wa.me/51973350524" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+51 973 350 524</a>
                <a href="https://wa.me/51933595630" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+51 933 595 630</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-bold text-white">Email:</span> 
              <a href="mailto:famax@grupoconstructores.com" className="hover:text-white transition-colors">famax@grupoconstructores.com</a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Legal & Redes Sociales */}
        <div className="lg:col-span-3">
          <h3 className="text-sm text-white font-bold uppercase tracking-wider mb-6">Legal & Redes</h3>
          <ul className="space-y-4 flex flex-col items-start mb-8">
            <li>
              <Link href="/politicas-de-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/linea-etica" className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1A1A1A] hover:bg-[#F0C800] px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wide transition-colors shadow-sm">
                <FaBalanceScale size={16} className="text-[#1A1A1A]" />
                Línea Ética
              </Link>
            </li>
            <li>
              <Link href="/libro-de-reclamaciones" className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] hover:bg-gray-100 px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-wide transition-colors shadow-sm">
                <FaBook size={16} className="text-[#1A1A1A]" />
                Libro Reclamaciones
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/famaxconcreto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-lg" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/famaxconcreto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-lg" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/famaxconcreto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-lg" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@famaxconcreto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-lg" aria-label="Tiktok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0012.67-1.7v-6.3a8.31 8.31 0 004.3 1.25V5.55a4.98 4.98 0 01-2.38-.86z"/></svg>
            </a>
            <a href="https://wa.me/51973350524" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-lg" aria-label="WhatsApp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.97 0C5.353 0 0 5.353 0 11.972c0 2.128.552 4.135 1.528 5.9L.1 24l6.326-1.428A11.93 11.93 0 0011.97 24c6.617 0 11.971-5.354 11.971-11.972C23.941 5.353 18.587 0 11.97 0zm6.545 17.202c-.279.79-1.353 1.503-2.148 1.62-.734.108-1.685.29-4.802-1.002-3.766-1.56-6.195-5.4-6.38-5.648-.184-.247-1.523-2.025-1.523-3.864 0-1.84 .957-2.748 1.298-3.117.34-.368.74-.46 1.018-.46.278 0 .556.002.802.012.259.012.607-.099.948.718.35.83 1.187 2.89 1.291 3.107.104.218.174.471.034.75-.138.278-.208.452-.416.697-.208.247-.435.534-.624.733-.207.218-.426.452-.182.871.242.418 1.077 1.78 2.316 2.883 1.6 1.426 2.916 1.87 3.35 2.088.435.218.687.185.946-.08.26-.264 1.114-1.298 1.41-1.742.296-.444.59-.368 1.042-.208.453.16 2.868 1.348 3.35 1.587.484.238.805.368.922.569.117.201.117 1.168-.162 1.958z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {currentYear} FAMAX CONCRETO PERU - TODOS LOS DERECHOS RESERVADOS
        </p>
        <p className="text-xs text-gray-600">
          HECHO POR <span className="font-bold text-gray-400">INNOVACION TECNOLOGICA</span>
        </p>
      </div>
    </footer>
  );
}
