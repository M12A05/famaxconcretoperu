import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaWrench, FaCubes, FaHardHat, FaTractor, FaTools, FaFileAlt, FaFlask } from "react-icons/fa";
import { FaRoadBarrier } from "react-icons/fa6";
import type { Metadata } from "next";
import ScrollRevealObserver from "@/components/ui/ScrollRevealObserver";

export const metadata: Metadata = {
  title: "Productos y Servicios | FAMAX CONCRETO PERÚ",
  description: "Catálogo completo de FAMAX: Concreto Premezclado f'c 210, Adoquines, Baldosas Podotáctiles, Bombeo y Alquiler de Mixers en Lima.",
  alternates: { canonical: "https://www.famaxconcreto.com.pe/productos-y-servicios" },
  openGraph: {
    title: "Productos y Servicios | FAMAX CONCRETO PERÚ",
    description: "Catálogo completo de FAMAX: Concreto Premezclado f'c 210, Adoquines, Baldosas Podotáctiles, Bombeo y Alquiler de Mixers.",
    url: "https://www.famaxconcreto.com.pe/productos-y-servicios",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const products = [
  {
    icon: <FaWrench size={24} />,
    name: "Concreto Premezclado",
    image: "/images/catalogo/concreto-premezclado.webp",
    desc: "Elaborado con cemento UNACEM, agregados premium y aditivo \"Quincha\" para máxima resistencia.",
    bullets: ["Dosificaciones: HS 175, HS 210, HS 315", "Dosificaciones: f'c 175, f'c 210"],
  },
  {
    icon: <FaCubes size={24} />,
    name: "Adoquines de Concreto",
    image: "/images/catalogo/adoquines-de-concreto.webp",
    desc: "Alta resistencia y larga durabilidad. Ideales para pisos, veredas y playas de estacionamiento de alto tránsito.",
    bullets: [],
  },
  {
    icon: <FaRoadBarrier size={24} />,
    name: "Cachacos de Concreto",
    image: "/images/catalogo/cachacos-de-concreto.webp",
    desc: "Medidas estándar enfocadas en la seguridad vial, delimitación de espacios y protección de perímetros.",
    bullets: [],
  },
  {
    icon: <FaHardHat size={24} />,
    name: "Baldosas Podotáctiles",
    image: "/images/catalogo/baldosas-podotactiles.webp",
    desc: "Diseñadas para señalización de accesibilidad en proyectos urbanos e industriales según normativa vigente.",
    bullets: [],
  },
  {
    icon: <FaTractor size={24} />,
    name: "Alquiler de Maquinaria Pesada",
    image: "/images/catalogo/alquiler-de-maquinaria-pesada.webp",
    desc: "Equipos operativos para movimiento de tierras, carga y apoyo logístico en obra, garantizando rendimiento continuo.",
    bullets: [],
  },
  {
    icon: <FaTools size={24} />,
    name: "Bombeo de Concreto con Pluma",
    image: "/images/catalogo/bombeo-de-concreto-con-pluma.webp",
    desc: "Vaciado en altura mediante camión con brazo articulado. Ideal para losas y techos de difícil acceso.",
    bullets: [],
  },
];

const services = [
  { 
    name: "Alquiler Camión Mezcladora (Mixer)", 
    icon: <FaTractor size={32} />,
    desc: "Flota moderna con capacidad óptima para el transporte continuo y seguro de concreto premezclado."
  },
  { 
    name: "Servicio de Bombeo de Concreto", 
    icon: <FaTools size={32} />,
    desc: "Equipos estacionarios y telescópicos para vaciados en altura o de difícil acceso con alta eficiencia."
  },
  { 
    name: "Asesoría Técnica y Cubicaje en Obra", 
    icon: <FaWrench size={32} />,
    desc: "Ingenieros especialistas evalúan su proyecto in-situ para optimizar los volúmenes y diseños de mezcla."
  },
  { 
    name: "Servicio de Control de Calidad", 
    icon: <FaCheckCircle size={32} />,
    desc: "Rigurosas pruebas en campo (Slump) para asegurar la trabajabilidad y fluidez del concreto antes del vaciado."
  },
  { 
    name: "Ensayos y Certificación de Resistencia", 
    icon: <FaFlask size={32} />,
    desc: "Rotura de probetas en laboratorio para garantizar que el nivel estructural cumple con las normativas."
  },
  { 
    name: "Instalación de Adoquines y Podotáctiles", 
    icon: <FaCubes size={32} />,
    desc: "Personal calificado para pavimentación exterior asegurando durabilidad, estética y accesibilidad."
  },
];

export default function ProductosServiciosPage() {
  const whatsappMsg = encodeURIComponent(
    "Hola, me gustaría solicitar una cotización. \nLes comparto los datos de mi proyecto:\n\n- Volumen estimado:    m³\n- Ubicación del proyecto: \n- Producto o servicio requerido: \n- Tipo de vaciado: \n\nQuedo atento a su cotización. ¡Muchas gracias! "
  );
  const whatsappUrl = `https://wa.me/51973350524?text=${whatsappMsg}`;

  return (
    <>
      <ScrollRevealObserver />
      {/* Hero */}
      <section
        className="relative h-[30vh] min-h-[300px] lg:min-h-[350px] flex items-center overflow-visible bg-white"
        style={{ clipPath: "ellipse(110% 100% at 50% 0%)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/catalogo/imagenportada-nueva.webp"
            alt="Catálogo de Productos y Servicios Famax"
            fill
            className="object-cover object-center"
            style={{ filter: "contrast(1.08) saturate(1.1) brightness(1.02)" }}
            priority
            quality={80}
          />
          {/* Gradiente: izquierda oscura hasta la mitad → derecha clara */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent lg:to-black/10 z-10" />
        </div>

        <div className="container-custom relative z-20 text-white w-full text-left">
          <div className="max-w-2xl mt-4 lg:mt-8 opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-tight tracking-tight drop-shadow-lg mb-3">
              Nuestro Catálogo de <br className="hidden md:block" />Productos y Servicios
            </h1>
            <p className="text-sm md:text-base text-gray-200 font-medium drop-shadow-md leading-relaxed max-w-xl">
              Catálogo especializado de productos de concreto y servicios operativos. Alta resistencia, diseño a medida y logística certificada para proyectos exigentes.
            </p>
          </div>
        </div>
      </section>

      {/* Productos Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black text-primary uppercase mb-4 tracking-tight">Productos y Equipos</h2>
            <p className="text-gray-600 text-sm md:text-base font-medium mb-6">
              Productos de concreto premezclado y prefabricados elaborados bajo estrictos estándares de calidad.
            </p>
            <div className="w-16 h-[3px] bg-[#AD131B] mx-auto mb-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {products.map((product, i) => (
              <div key={i} className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group opacity-0 scroll-animate`} data-animation={`animate-fade-up delay-${((i % 3) + 1) * 100}`}>

                {/* Imagen del Producto — más alta, con overlay hover */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    quality={92}
                  />
                  {/* Sin overlay de texto — la info ya está en la tarjeta */}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-[#AD131B] mb-3 group-hover:bg-[#AD131B] group-hover:text-white transition-colors duration-300">
                    <div className="scale-75">{product.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A] uppercase tracking-tight leading-tight">{product.name}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-4 flex-grow">{product.desc}</p>
                  {product.bullets.length > 0 && (
                    <ul className="text-[11px] md:text-xs text-gray-500 space-y-1 mb-4">
                      {product.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-1.5">
                          <span className="text-[#AD131B] mt-0.5">•</span> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Botón pegado al borde inferior */}
                <Link
                  href="/contacto"
                  className="block w-full text-center bg-[#8B0000] hover:bg-[#5E0000] text-white py-3.5 font-bold text-xs md:text-sm uppercase tracking-wide transition-colors"
                >
                  COTIZA TU PROYECTO
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/catalogo/imagen-de-servicios.webp"
            alt="Servicios FAMAX"
            fill
            className="object-cover object-center opacity-10"
            quality={80}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-3">Nuestros Servicios</p>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
              Nuestra Empresa Brinda los Siguientes Servicios
            </h2>
            <div className="w-14 h-[3px] bg-[#AD131B] mx-auto" />
          </div>

          {/* Grid de tarjetas sólidas blancas con descripción */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className={`bg-white rounded-xl flex flex-col items-center text-center p-8 gap-4 hover:shadow-xl transition-all hover:-translate-y-1 group opacity-0 scroll-animate`} data-animation={`animate-fade-up delay-${((i % 3) + 1) * 100}`}>
                <div className="text-[#AD131B] transform group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h3 className="text-[#1A1A1A] font-black uppercase text-sm md:text-base tracking-wide leading-snug group-hover:text-[#AD131B] transition-colors">{s.name}</h3>
                <div className="w-10 h-[2px] bg-gray-200" />
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center opacity-0 scroll-animate" data-animation="animate-fade-up delay-200">
            <Link
              href="/contacto"
              className="inline-block bg-[#AD131B] hover:bg-[#8B0000] text-white px-10 py-4 rounded-xl font-black uppercase text-sm tracking-wide transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              COTIZAR UN SERVICIO
            </Link>
          </div>
        </div>
      </section>



      {/* Documentación */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
              <h2 className="text-xl md:text-2xl font-black mb-3 text-[#1A1A1A] uppercase tracking-tight">Documentación y Certificados Técnicos</h2>
              <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                Garantizamos la calidad de cada metro cúbico. Accede a nuestra documentación técnica para respaldar tu obra.
              </p>
            </div>
            <div className="flex flex-col gap-4 opacity-0 scroll-animate" data-animation="animate-slide-right delay-200">
              <a
                href="https://drive.google.com/drive/folders/12VpAMbMSi7PseQDL6UlJVcs1WBNqHZwf?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#1A1A1A] hover:bg-black text-white py-4 px-8 rounded-xl font-bold uppercase text-xs md:text-sm transition-all shadow-md hover:shadow-lg"
              >
                <FaFileAlt size={18} /> Descargar Ficha Técnica de Concreto (DRIVE)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-16 bg-[#85000D] relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <div className="opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Cotiza al instante por WhatsApp
            </h2>
            <p className="text-gray-300 mb-8 text-sm md:text-base font-medium max-w-2xl mx-auto">
              Para una atención más rápida y precisa, ten a la mano la siguiente información:
            </p>
          </div>

          <div className="inline-block bg-[#AD131B] rounded-2xl p-6 md:p-8 mb-10 text-left max-w-sm w-full shadow-lg opacity-0 scroll-animate" data-animation="animate-fade-up delay-200">
            {[
              "Volumen estimado en m3",
              "Ubicación exacta del proyecto",
              "RUC o DNI para facturación",
              "Tipo de producto o servicio requerido",
              "Tipo de vaciado",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white mb-4 last:mb-0">
                <FaCheckCircle size={18} className="text-white shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="opacity-0 scroll-animate" data-animation="animate-fade-up delay-300">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#85000D] px-8 py-4 rounded-sm font-black text-sm md:text-base uppercase tracking-wider transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#25D366]">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.265-.464-2.409-1.484-.888-.795-1.484-1.77-1.663-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.202.049-.382-.029-.533-.075-.15-.673-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.426.248-.705.248-1.31.174-1.433-.074-.13-.272-.2-.572-.345z" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.846.5 3.584 1.39 5.093L2 22l4.985-1.325A9.957 9.957 0 0012 22z" />
              </svg>
              ENVIAR DATOS POR WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
