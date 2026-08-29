import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowRight, Factory, ShieldCheck, ArrowUpFromLine, LayoutGrid, Wrench, CheckCircle } from "lucide-react";
import HeroCarousel from "@/components/home/HeroCarousel";
import ScrollRevealObserver from "@/components/ui/ScrollRevealObserver";

export default function Home() {
  return (
    <>
      <ScrollRevealObserver />
      <HeroCarousel />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">

          {/* Título */}
          <div className="text-center mb-10 opacity-0 scroll-animate" data-animation="animate-slide-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
              <span className="text-[#1A1A1A]">¿Por qué elegir a </span>
              <span className="text-[#AD131B]">FAMAX</span><br />
              <span className="text-[#AD131B]">CONCRETO PERU?</span>
            </h2>
            <div className="w-14 h-[3px] bg-[#AD131B] mx-auto"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
              <div className="text-[#AD131B] mb-5">
                <Factory size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Resistencia Maxima</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Alcanzamos el mayor nivel estructural gracias al aditivo especializado Quincha, asegurando la solidez y durabilidad de su proyecto.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 opacity-0 scroll-animate" data-animation="animate-fade-up delay-200">
              <div className="text-[#AD131B] mb-5">
                <Truck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Puntualidad Exacta</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Flota moderna y logística optimizada para asegurar que su concreto llegue en el momento preciso.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 opacity-0 scroll-animate" data-animation="animate-slide-right delay-300">
              <div className="text-[#AD131B] mb-5">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Control de Trabajabilidad</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Aseguramos la fluidez y manejabilidad ideal de cada lote mediante rigurosas pruebas de Slump (Cono de Abrams) antes del vaciado.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-[#FBF9F8]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 relative pb-3 opacity-0 scroll-animate" data-animation="animate-fade-in">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] tracking-tight opacity-0 scroll-animate" data-animation="animate-slide-left">Nuestros Productos y Servicios</h2>
              <div className="absolute bottom-[-1px] left-0 w-48 md:w-56 h-[3px] bg-[#8B0000] opacity-0 scroll-animate" data-animation="animate-slide-left delay-100"></div>
            </div>
            <Link href="/productos-y-servicios" className="text-[#8B0000] hover:text-[#6B0000] font-bold inline-flex items-center gap-2 mt-6 md:mt-0 uppercase text-sm tracking-widest transition-colors opacity-0 scroll-animate" data-animation="animate-slide-right delay-200">
              VER CATÁLOGO COMPLETO <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {/* Tarjeta 1: Concreto Premezclado */}
            <div className="group relative w-full h-[280px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-md opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
              {/* Imagen de fondo */}
              <Image
                src="/images/concreto-premezclado.webp"
                alt="Concreto Premezclado FAMAX"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                quality={85}
              />

              {/* Overlay oscuro (siempre visible en mobile, hover en desktop) */}
              <div className="absolute inset-0 bg-[#1A1A1A]/75 sm:bg-[#1A1A1A]/0 sm:opacity-0 sm:group-hover:opacity-100 sm:bg-[#1A1A1A]/85 transition-opacity duration-300 z-10" />

              {/* Franja roja inferior (Estado Normal - solo desktop) */}
              <div className="absolute bottom-0 left-0 w-full bg-[#DA291C] py-3 md:py-4 z-20 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-full">
                <h3 className="text-white text-center font-bold text-lg md:text-xl tracking-wide">Concreto Premezclado</h3>
              </div>

              {/* Contenido siempre visible en mobile, hover en desktop */}
              <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 z-30 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 sm:translate-y-4 sm:group-hover:translate-y-0">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">Concreto Premezclado</h3>
                <p className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed mb-4 sm:mb-6">
                  Elaborado con cemento UNACEM y agregados seleccionados de Trapiche/Huaral para máxima resistencia estructural. Control de calidad certificado.
                </p>
                <div>
                  <Link href="/productos-y-servicios" className="inline-block bg-[#DA291C] hover:bg-[#B72015] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-xs uppercase rounded transition-colors shadow-lg">
                    VER PRODUCTO
                  </Link>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Adoquines de Concreto */}
            <div className="group relative w-full h-[280px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-md opacity-0 scroll-animate" data-animation="animate-fade-up delay-200">
              <Image src="/images/adoquines.webp" alt="Adoquines de Concreto FAMAX" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-110" quality={85} />
              <div className="absolute inset-0 bg-[#1A1A1A]/75 sm:bg-[#1A1A1A]/0 sm:opacity-0 sm:group-hover:opacity-100 sm:bg-[#1A1A1A]/85 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-0 left-0 w-full bg-[#DA291C] py-3 md:py-4 z-20 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-full">
                <h3 className="text-white text-center font-bold text-lg md:text-xl tracking-wide">Adoquines de Concreto</h3>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 z-30 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 sm:translate-y-4 sm:group-hover:translate-y-0">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">Adoquines de Concreto</h3>
                <p className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed mb-4 sm:mb-6">Soluciones de pavimentación de alta resistencia y durabilidad extrema. Acabado preciso para tránsito vehicular pesado y peatonal intenso.</p>
                <div><Link href="/productos-y-servicios" className="inline-block bg-[#DA291C] hover:bg-[#B72015] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-xs uppercase rounded transition-colors shadow-lg">VER PRODUCTO</Link></div>
              </div>
            </div>

            {/* Tarjeta 3: Baldosas Podotáctiles */}
            <div className="group relative w-full h-[280px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-md opacity-0 scroll-animate" data-animation="animate-slide-right delay-300">
              <Image src="/images/catalogo/baldosas-podotactiles.webp" alt="Baldosas Podotáctiles FAMAX" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-110" quality={85} />
              <div className="absolute inset-0 bg-[#1A1A1A]/75 sm:bg-[#1A1A1A]/0 sm:opacity-0 sm:group-hover:opacity-100 sm:bg-[#1A1A1A]/85 transition-opacity duration-300 z-10" />
              <div className="absolute bottom-0 left-0 w-full bg-[#DA291C] py-3 md:py-4 z-20 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-full">
                <h3 className="text-white text-center font-bold text-lg md:text-xl tracking-wide">Baldosas Podotáctiles</h3>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center p-5 sm:p-8 z-30 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 sm:translate-y-4 sm:group-hover:translate-y-0">
                <h3 className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-3">Baldosas Podotáctiles</h3>
                <p className="text-gray-200 text-xs sm:text-sm font-medium leading-relaxed mb-4 sm:mb-6">Diseñadas para señalización de accesibilidad en proyectos urbanos e industriales según normativa vigente.</p>
                <div><Link href="/productos-y-servicios" className="inline-block bg-[#DA291C] hover:bg-[#B72015] text-white px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-xs uppercase rounded transition-colors shadow-lg">VER PRODUCTO</Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Integrales (Cuadrícula sobre fondo oscuro) */}
      <section className="py-16 md:py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/catalogo/imagen-de-servicios.webp"
            alt="Servicios FAMAX"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-10"
            quality={80}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">Nuestro Soporte Operativo</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Servicios Integrales para Grandes Obras
            </h2>
            <div className="w-14 h-[3px] bg-[#AD131B] mx-auto" />
          </div>

          {/* Grid de tarjetas sólidas blancas estilo rectángulos anchos (Más pequeñas) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
            {[
              { name: "Alquiler de Camiones Mixer", icon: <Truck size={28} strokeWidth={1.5} /> },
              { name: "Bombeo de Concreto", icon: <ArrowUpFromLine size={28} strokeWidth={1.5} /> },
              { name: "Asesoría Técnica y Cubicaje", icon: <Wrench size={28} strokeWidth={1.5} /> },
              { name: "Control de Calidad y Ensayos", icon: <CheckCircle size={28} strokeWidth={1.5} /> },
              { name: "Instalación de Adoquines", icon: <LayoutGrid size={28} strokeWidth={1.5} /> },
              { name: "Instalación de Baldosas Podotáctiles", icon: <LayoutGrid size={28} strokeWidth={1.5} /> },
            ].map((s, i) => (
              <div key={i} className={`bg-white rounded-xl flex flex-col items-center justify-center p-4 sm:p-6 gap-3 hover:shadow-lg transition-all duration-300 opacity-0 scroll-animate hover:-translate-y-1`} data-animation={`animate-fade-up delay-${((i % 3) + 1) * 100}`}>
                <div className="text-[#AD131B]">
                  {s.icon}
                </div>
                <p className="text-[#1A1A1A] font-bold uppercase text-[10px] md:text-xs text-center tracking-widest leading-snug">{s.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center opacity-0 scroll-animate" data-animation="animate-fade-up delay-200">
            <Link
              href="/productos-y-servicios"
              className="inline-block bg-[#AD131B] hover:bg-[#8B0000] text-white px-10 py-4 rounded-xl font-black uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              VER SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos Ejecutados */}
      <section className="py-16 bg-[#FBF9F8]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase mb-4 tracking-tight">Proyectos Ejecutados</h2>
            <div className="w-16 h-[3px] bg-[#AD131B] mx-auto mb-5" />
            <p className="text-gray-600 font-medium">Experiencia comprobada abasteciendo a las principales obras de infraestructura y desarrollo urbano en Lima Norte.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Pavimentación Industrial", img: "/images/adoquines.webp" },
              { title: "Losa Deportiva Puente Piedra", img: "/images/concreto-premezclado.webp" },
              { title: "Cimentación Edificio Residencial", img: "/images/servicios-integrales.webp" }
            ].map((proj, i) => (
              <div key={i} className={`group relative h-64 rounded-xl overflow-hidden shadow-sm opacity-0 scroll-animate`} data-animation={`animate-fade-up delay-${(i + 1) * 100}`}>
                <Image src={proj.img} alt={proj.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-white font-bold text-lg">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes que confían en nosotros (Marquee) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase mb-4 tracking-tight">Clientes que confían en nosotros</h2>
            <div className="w-16 h-[3px] bg-[#AD131B] mx-auto mb-5" />
          </div>
        </div>

        {/* Contenedor del Carrusel Infinito */}
        <div className="relative w-full flex overflow-hidden">
          {/* Capas de gradiente para suavizar los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex w-max animate-marquee-scroll hover:[animation-play-state:paused]">
            {/* Duplicamos el array para lograr el scroll infinito sin cortes */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 md:gap-12 px-4 md:px-6 items-center">
                {[
                  { name: "Municipalidad de Magdalena del Mar", img: "/images/clientes/muni-magdalena.webp" },
                  { name: "Municipalidad de San Isidro", img: "/images/clientes/muni-san-isidro.webp" },
                  { name: "Municipalidad del Callao", img: "/images/clientes/muni-callao.webp" },
                  { name: "Municipalidad de Ventanilla", img: "/images/clientes/muni-ventanilla.webp" },
                  { name: "Municipalidad de Comas", img: "/images/clientes/muni-comas.webp" },
                  { name: "Municipalidad de San Martín de Porres", img: "/images/clientes/muni-smp.webp" },
                ].map((client, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center w-[200px] md:w-[240px] lg:w-[260px] shrink-0 gap-3 md:gap-4 cursor-pointer group">
                    <div className="relative w-full h-32 md:h-40 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={client.img}
                        alt={client.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 20vw"
                        className="object-contain drop-shadow-sm"
                      />
                    </div>
                    <span className="text-sm md:text-base font-bold text-gray-800 text-center w-full whitespace-normal leading-snug transition-colors duration-300 group-hover:text-[#AD131B]">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
