"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/images/fotoportada1-v2.webp",
    subtitle: "",
    title: "Concreto para pequeñas<br />y grandes obras",
    desc: "",
    align: "center",
    buttonText: "COTIZAR"
  },
  {
    image: "/images/fotoportada2.webp",
    subtitle: "",
    title: "Comprometidos con<br />nuestros clientes",
    desc: "Brindamos Certificado de Calidad<br />de nuestro concreto.",
    align: "left",
    buttonText: "Más información"
  },
  {
    image: "/images/fotoportada3.webp",
    subtitle: "CALIDAD Y PUNTUALIDAD",
    title: "La base sólida para<br />el éxito de tu proyecto",
    desc: "Garantizamos despachos exactos y mezclas diseñadas a la medida.",
    align: "center",
    buttonText: "COTIZAR"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const startTimer = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 7000); // 7 segundos para que coincida con la animación
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (timer) clearInterval(timer);
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section 
      className="relative h-[90vh] sm:h-[85vh] min-h-[520px] sm:min-h-[600px] flex items-center justify-start overflow-hidden group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
            className={`object-cover object-center transition-transform duration-[10000ms] ease-out ${
              index === currentSlide && isMounted ? "scale-100" : "scale-[1.15]"
            }`}
            priority={index === 0}
            quality={75}
          />
          {/* Overlay sutil para legibilidad, similar al del video */}
          {/* Overlay oscuro sutil uniforme en todas las slides */}
          <div className="absolute inset-0 bg-black/35 z-10" />
          {/* Gradiente lateral adicional para slides alineadas a la izquierda */}
          {slide.align === 'left' && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent z-10" />
          )}
          
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
                  <FaChevronRight size={20} className="ml-0.5" />
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
  );
}
