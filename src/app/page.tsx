import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowRight, Factory, ShieldCheck, ArrowUpFromLine, LayoutGrid, Layers, HardHat, Calculator, ChevronRight } from "lucide-react";
import HeroCarousel from "@/components/home/HeroCarousel";
import ScrollRevealObserver from "@/components/ui/ScrollRevealObserver";

export default function Home() {
  return (
    <>
      <ScrollRevealObserver />
      <HeroCarousel />

      {/* Why Choose Us */}
      <section className="py-16 bg-[#FBF9F8]">
        <div className="container-custom">

          {/* Título */}
          <div className="text-center mb-10 opacity-0 scroll-animate" data-animation="animate-slide-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              <span className="text-[#1A1A1A]">¿Por qué elegir a </span><span className="text-[#AD131B]">FAMAX</span><br />
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
      <section className="py-16 bg-[#F3F1F1]">
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
                src="/images/concreto-premezclado.png"
                alt="Concreto Premezclado FAMAX"
                fill
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
              <Image src="/images/adoquines.png" alt="Adoquines de Concreto FAMAX" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-110" quality={85} />
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
              <Image src="/images/catalogo/Baldosas Podotáctiles.png" alt="Baldosas Podotáctiles FAMAX" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-110" quality={85} />
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

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-[#FBF9F8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1 relative min-h-[350px] lg:min-h-[450px] h-full w-full rounded-2xl overflow-hidden shadow-xl opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
              <Image
                src="/images/servicios-integrales.png"
                alt="Planta de concreto y equipos de FAMAX CONCRETO PERÚ en Puente Piedra"
                fill
                className="object-cover object-center"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent"></div>
            </div>

            <div className="order-1 lg:order-2 opacity-0 scroll-animate" data-animation="animate-slide-right delay-200">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-[2px] bg-[#AD131B]" />
                  <span className="text-[#AD131B] font-bold uppercase tracking-widest text-[11px]">Nuestro Soporte Operativo</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-[#1A1A1A] mb-3 tracking-tight leading-tight">
                  SERVICIOS INTEGRALES
                </h2>
                <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                  Más allá de suministrar concreto, brindamos soporte operativo y control técnico integral para asegurar el éxito y la resistencia de su proyecto desde el inicio hasta el fin del vaciado.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { title: "Bombeo Estacionario y Telescópico", icon: <ArrowUpFromLine size={20} /> },
                  { title: "Alquiler de Camiones Mixers", icon: <Truck size={20} /> },
                  { title: "Instalación de Baldosas Podotáctiles", icon: <LayoutGrid size={20} /> },
                  { title: "Instalación de Adoquines", icon: <Layers size={20} /> },
                  { title: "Asesoría Técnica Especializada", icon: <HardHat size={20} /> },
                  { title: "Cubicaje Exacto en Obra", icon: <Calculator size={20} /> },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#AD131B]/40 transition-all group cursor-default">
                    <div className="text-[#AD131B] bg-red-50 p-2.5 rounded-lg group-hover:bg-[#AD131B] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <p className="text-sm md:text-sm font-bold text-[#1A1A1A] leading-tight pt-1.5 pr-2">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/contacto"
                className="inline-block w-full md:w-auto text-center bg-[#AD131B] hover:bg-[#8B0000] text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                SOLICITAR COTIZACIÓN DE SERVICIOS
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Proyectos Ejecutados */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase mb-4 tracking-tight">Proyectos Ejecutados</h2>
            <div className="w-16 h-[3px] bg-[#AD131B] mx-auto mb-5" />
            <p className="text-gray-600 font-medium">Experiencia comprobada abasteciendo a las principales obras de infraestructura y desarrollo urbano en Lima Norte.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Pavimentación Industrial", img: "/images/adoquines.png" },
              { title: "Losa Deportiva Puente Piedra", img: "/images/concreto-premezclado.png" },
              { title: "Cimentación Edificio Residencial", img: "/images/servicios-integrales.png" }
            ].map((proj, i) => (
              <div key={i} className={`group relative h-64 rounded-xl overflow-hidden shadow-sm opacity-0 scroll-animate`} data-animation={`animate-fade-up delay-${(i + 1) * 100}`}>
                <Image src={proj.img} alt={proj.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-white font-bold text-lg">{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-[#FBF9F8]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] uppercase mb-4 tracking-tight">Lo que dicen nuestros clientes</h2>
            <div className="w-16 h-[3px] bg-[#AD131B] mx-auto mb-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
              <p className="text-gray-600 font-medium italic mb-6">"Excelente servicio. Necesitaba 20 cubos para la cimentación de mi proyecto y llegaron exactos a la hora pactada. El certificado de calidad nos dio mucha tranquilidad."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-gray-500 font-bold">JC</div>
                <div>
                  <p className="font-bold text-[#1A1A1A]">Ing. Javier Cáceres</p>
                  <p className="text-xs text-gray-500 uppercase">Constructora JC</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 opacity-0 scroll-animate" data-animation="animate-slide-right delay-200">
              <p className="text-gray-600 font-medium italic mb-6">"Primera vez que construyo mi casa y el equipo de FAMAX me asesoró en todo. La bomba telescópica facilitó el vaciado del segundo piso enormemente."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-gray-500 font-bold">MR</div>
                <div>
                  <p className="font-bold text-[#1A1A1A]">María Rojas</p>
                  <p className="text-xs text-gray-500 uppercase">Propietaria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
