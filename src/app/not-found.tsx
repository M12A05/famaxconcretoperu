import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#AD131B] font-black text-7xl md:text-8xl tracking-tight mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tight mb-4">
            Página no encontrada
          </h1>
          <p className="text-gray-600 font-medium leading-relaxed mb-10">
            La página que buscas no existe o fue movida. Revisa la URL o vuelve al inicio para
            conocer nuestros productos y servicios de concreto premezclado.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#AD131B] hover:bg-[#8B0000] text-white px-8 py-4 rounded-sm font-bold uppercase text-sm transition-colors shadow-md hover:shadow-lg"
          >
            <FaArrowLeft size={16} /> Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
