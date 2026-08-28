"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Truck, ArrowRight, Factory, ShieldCheck, ArrowUpFromLine, LayoutGrid, Layers, HardHat, Calculator, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero.png",
    subtitle: "",
    title: "Concreto para pequeñas<br />y grandes obras",
    desc: "",
    align: "center",
    buttonText: "COTIZAR"
  },
  {
    image: "/images/servicios-integrales.png",
    subtitle: "",
    title: "Comprometidos con<br />nuestros clientes",
    desc: "Brindamos Certificado de Calidad<br />de nuestro concreto.",
    align: "left",
    buttonText: "Más información"
  },
  {
    image: "/images/concreto-premezclado.png",
    subtitle: "CALIDAD Y PUNTUALIDAD",
    title: "La base sólida para<br />el éxito de tu proyecto",
    desc: "Garantizamos despachos exactos y mezclas diseñadas a la medida.",
    align: "center",
    buttonText: "COTIZAR"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Intersection Observer para animaciones al hacer scroll (solo se dispara una vez)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animation = el.getAttribute("data-animation");
            if (animation) {
              el.classList.add(...animation.split(" "));
              el.classList.remove("opacity-0");
              observer.unobserve(el);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Carrusel Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 segundos es un poco más suave
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <>
      {/* Hero Section Carousel */}
      <section className="relative h-[90vh] sm:h-[85vh] min-h-[600px] flex items-center justify-start overflow-hidden group">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Famax Concreto Perú"
              fill
              className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                index === currentSlide ? "scale-100" : "scale-[1.15]"
              }`}
              priority={index === 0}
              quality={100}
            />
            {/* Overlay sutil para legibilidad, similar al del video */}
            <div className={`absolute inset-0 ${slide.align === 'left' ? 'bg-gradient-to-r from-black/50 via-black/20 to-transparent' : 'bg-black/20'} z-10`} />
            
            <div className="container-custom relative z-20 w-full h-full flex items-center">
              <div className={`w-full mt-8 sm:mt-0 transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${slide.align === 'center' ? 'text-center mx-auto' : 'text-left'}`}>
                
                {slide.subtitle && (
                  <h2 className={`text-xs sm:text-sm md:text-base font-bold mb-3 text-white tracking-[0.2em] drop-shadow-md ${slide.align === 'center' ? 'mx-auto' : ''}`}>
                    {slide.subtitle}
                  </h2>
                )}

                <h1 
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-[1.05] text-white drop-shadow-xl ${slide.align === 'center' ? 'mx-auto' : 'max-w-4xl'}`}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />

                {slide.desc && (
                  <p 
                    className={`text-base sm:text-lg md:text-xl text-white font-medium mb-8 leading-relaxed drop-shadow-md ${slide.align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}
                    dangerouslySetInnerHTML={{ __html: slide.desc }}
                  />
                )}

                <Link
                  href="/contacto"
                  className={`inline-flex items-center gap-3 bg-[#E50019] hover:bg-[#CC0016] text-white pl-6 md:pl-8 pr-2 py-2 rounded-full font-bold text-sm md:text-lg transition-all shadow-xl group ${slide.align === 'center' && !slide.desc ? 'mt-4' : ''}`}
                >
                  <span>{slide.buttonText}</span>
                  <div className="bg-white text-[#E50019] p-2 rounded-full group-hover:bg-gray-100 transition-colors">
                    <ChevronRight size={20} strokeWidth={3.5} className="ml-0.5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}



        {/* Indicadores (Puntos) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-[#AD131B] scale-125' : 'bg-white/50 hover:bg-white'}`}
              aria-label={`Ir a diapositiva ${idx + 1}`}
            />
          ))}
        </div>
      </section>

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
    </>
  );
}
