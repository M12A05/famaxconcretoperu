import Link from "next/link";
import Image from "next/image";
import { FaTruck, FaArrowRight, FaIndustry, FaShieldAlt, FaArrowUp, FaTh, FaWrench, FaCheckCircle, FaStar } from "react-icons/fa";
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
                <FaIndustry size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Resistencia Maxima</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Alcanzamos el mayor nivel estructural gracias al aditivo especializado Quincha, asegurando la solidez y durabilidad de su proyecto.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 opacity-0 scroll-animate" data-animation="animate-fade-up delay-200">
              <div className="text-[#AD131B] mb-5">
                <FaTruck size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Puntualidad Exacta</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Flota moderna y logística optimizada para asegurar que su concreto llegue en el momento preciso.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 opacity-0 scroll-animate" data-animation="animate-slide-right delay-300">
              <div className="text-[#AD131B] mb-5">
                <FaShieldAlt size={28} />
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
              VER CATÁLOGO COMPLETO <FaArrowRight size={16} />
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
              { name: "Alquiler de Camiones Mixer", icon: <FaTruck size={28} /> },
              { name: "Bombeo de Concreto", icon: <FaArrowUp size={28} /> },
              { name: "Asesoría Técnica y Cubicaje", icon: <FaWrench size={28} /> },
              { name: "Control de Calidad y Ensayos", icon: <FaCheckCircle size={28} /> },
              { name: "Instalación de Adoquines", icon: <FaTh size={28} /> },
              { name: "Instalación de Baldosas Podotáctiles", icon: <FaTh size={28} /> },
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
              { img: "/images/proyecto1.webp" },
              { img: "/images/proyecto2.webp" },
              { img: "/images/proyecto3.webp" }
            ].map((proj, i) => (
              <div key={i} className={`group relative h-80 rounded-xl overflow-hidden shadow-md opacity-0 scroll-animate`} data-animation={`animate-fade-up delay-${(i + 1) * 100}`}>
                <Image src={proj.img} alt={`Proyecto ejecutado ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="pt-10 pb-14 bg-[#FBF9F8] overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase mb-4 tracking-tight">Lo que dicen nuestros clientes</h2>
            <div className="w-16 h-[3px] bg-[#AD131B] mx-auto mb-5" />
            <p className="text-gray-600 font-medium">La confianza de quienes confían en Famax es nuestro mayor logro.</p>
          </div>
        </div>

        {/* Carrusel infinito de testimonios */}
        <div className="marquee-wrapper relative w-full flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FBF9F8] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FBF9F8] to-transparent z-10" />

          <div className="flex w-max animate-marquee-testimonios items-stretch">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-5 px-4 items-stretch">
                {[
                  {
                    name: "Carlos Quispe Mamani",
                    text: "El concreto llegó puntual y con el certificado de calidad en mano. Sin eso no hubiéramos podido continuar la obra al día siguiente."
                  },
                  {
                    name: "Rosa Huamán Flores",
                    text: "Llevamos tres obras con Famax y nunca hemos tenido un problema. El despacho siempre llega a la hora exacta."
                  },
                  {
                    name: "Jorge Salcedo Tello",
                    text: "Muy buena atención desde la cotización hasta el vaciado. Me explicaron todo el proceso sin complicaciones."
                  },
                  {
                    name: "Milagros Condori Apaza",
                    text: "Pedí concreto para mi losa en Comas y llegaron perfectamente. Recomiendo Famax a todos mis vecinos de la zona."
                  },
                  {
                    name: "Víctor Lazo Ríos",
                    text: "Trabajé con varias empresas concreteras antes, pero Famax es la única que cumple los tiempos sin excusas."
                  },
                  {
                    name: "Lucía Paredes Vásquez",
                    text: "El precio fue justo y la calidad superó lo que esperaba. Mi proyecto de autoconstrucción quedó sólido y seguro."
                  },
                  {
                    name: "Aldo Fernández Chávez",
                    text: "Famax nos ayudó a terminar el proyecto en tiempo récord. Coordinaron directamente con el maestro de obra sin ningún problema."
                  },
                  {
                    name: "Norma Ccallo Huanca",
                    text: "Excelente servicio. Nos orientaron sobre el tipo de mezcla correcto y eso hizo la diferencia en la resistencia de la cimentación."
                  },
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="w-[300px] md:w-[340px] shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4"
                  >
                    {/* Encabezado: Comillas decorativas y 5 estrellas doradas */}
                    <div className="flex items-center justify-between">
                      <span className="text-4xl leading-none text-[#AD131B] font-serif select-none">&ldquo;</span>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, s) => (
                          <FaStar key={s} size={15} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1 -mt-1">
                      {t.text}
                    </p>
                    <div className="pt-2 border-t border-gray-100">
                      <p className="font-bold text-[#1A1A1A] text-sm">{t.name}</p>
                    </div>
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
