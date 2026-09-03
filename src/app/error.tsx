"use client";

import Link from "next/link";
import { FaSyncAlt } from "react-icons/fa";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#AD131B] font-black text-7xl md:text-8xl tracking-tight mb-4">¡Ups!</p>
          <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tight mb-4">
            Algo salió mal
          </h1>
          <p className="text-gray-600 font-medium leading-relaxed mb-10">
            Ocurrió un error inesperado al cargar esta página. Intenta de nuevo o vuelve al inicio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-[#AD131B] hover:bg-[#8B0000] text-white px-8 py-4 rounded-sm font-bold uppercase text-sm transition-colors shadow-md hover:shadow-lg"
            >
              <FaSyncAlt size={16} /> Reintentar
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white px-8 py-4 rounded-sm font-bold uppercase text-sm transition-colors"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
