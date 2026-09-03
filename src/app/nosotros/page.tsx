import Link from "next/link";
import Image from "next/image";
import { FaBullseye, FaEye, FaBuilding, FaFlask, FaWrench } from "react-icons/fa";
import type { Metadata } from "next";
import ScrollRevealObserver from "@/components/ui/ScrollRevealObserver";

export const metadata: Metadata = {
  title: "¿Quiénes Somos? | FAMAX CONCRETO PERÚ",
  description: "Empresa 100% peruana con 6 años de experiencia en producción y suministro de concreto premezclado en Lima Norte. Laboratorio propio y aditivo Quincha.",
  alternates: { canonical: "https://www.famaxconcreto.com.pe/nosotros" },
  openGraph: {
    title: "¿Quiénes Somos? | FAMAX CONCRETO PERÚ",
    description: "Somos una concretera 100% peruana con laboratorio propio, flota de mixers y 6 años atendiendo Lima Norte con puntualidad y calidad.",
    url: "https://www.famaxconcreto.com.pe/nosotros",
    images: [{ url: "https://www.famaxconcreto.com.pe/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function NosotrosPage() {
  return (
    <>
      <ScrollRevealObserver />
      {/* About Hero */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1B1C1C] mb-3">Sobre Nosotros</p>
              <h1 className="text-3xl md:text-4xl font-black text-[#AD131B] mb-4 uppercase leading-tight">
                ¿Quiénes Somos?
              </h1>
              <div className="w-20 h-[3px] bg-[#8B0000] mb-6"></div>
              <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                <p>
                  Somos una empresa 100% peruana con <strong className="text-[#1A1A1A]">6 años de experiencia</strong> en el sector de la construcción. En FAMAX CONCRETO PERÚ nos especializamos en la producción, suministro y logística integral de concreto premezclado y prefabricados.
                </p>
                <p>
                  Contamos con personal técnico altamente capacitado en planta, enfocado en garantizar entregas puntuales, cubicaje exacto y soluciones a la medida para todo tipo de proyectos de infraestructura y autoconstrucción.
                </p>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative min-h-[350px] lg:min-h-[450px] h-full w-full rounded-2xl overflow-hidden shadow-xl opacity-0 scroll-animate" data-animation="animate-slide-right delay-200">
              <Image
                src="/images/personaldefamax-optimized.webp"
                alt="Equipo de FAMAX CONCRETO PERÚ"
                fill
                className="object-cover object-center"
                quality={90}
              />
              {/* Toque oscuro sutil */}
              <div className="absolute inset-0 bg-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="py-16 bg-background-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Misión */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#AD131B] transition-colors duration-300">
                <FaBullseye className="text-[#AD131B] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h2 className="text-xl font-black mb-3 text-[#1A1A1A] uppercase tracking-tight">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                Ser una empresa referente en la provisión de concreto premezclado y materiales de construcción confiables, cumpliendo con los estándares de calidad requeridos, entregas puntuales y el cubicaje exacto para asegurar el avance sólido de cada obra.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group opacity-0 scroll-animate" data-animation="animate-slide-right delay-200">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-5 group-hover:bg-[#AD131B] transition-colors duration-300">
                <FaEye className="text-[#AD131B] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h2 className="text-xl font-black mb-3 text-[#1A1A1A] uppercase tracking-tight">Nuestra Visión</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                Posicionarnos como una de las principales opciones de suministro de concreto premezclado y prefabricados en Lima Norte, siendo reconocidos por la seriedad en los despachos, el control técnico de nuestras mezclas y la atención de calidad a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestructura y Logística */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
            <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 text-[#1A1A1A] tracking-tight">Infraestructura y Logística</h2>
            <div className="w-14 h-[3px] bg-[#AD131B] mx-auto mb-5" />
            <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
              Nuestras operaciones están respaldadas por oficinas administrativas completamente equipadas y un laboratorio de diseño de mezclas de concreto de última generación, formando la columna vertebral de nuestra eficiencia logística.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <FaBuilding size={26} />,
                title: "Oficinas y Gestión Logística",
                desc: "Oficinas administrativas equipadas para el seguimiento de despachos en tiempo real y atención personalizada para la programación de su vaciado.",
              },
              {
                icon: <FaFlask size={26} />,
                title: "Laboratorio y Control de Calidad",
                desc: "Laboratorio propio equipado para el diseño de mezclas, toma de probetas y certificación de resistencia estructural.",
              },
              {
                icon: <FaWrench size={26} />,
                title: "Rigor Técnico en Mezclas",
                desc: "Uso del aditivo especializado Quincha para alcanzar la máxima resistencia y control de trabajabilidad mediante el ensayo de slump (Cono de Abrams).",
              },
            ].map((item, i) => {
              const animationDelays = ["animate-slide-left", "animate-fade-up", "animate-slide-right"];
              return (
                <div key={i} className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group opacity-0 scroll-animate`} data-animation={`${animationDelays[i]} delay-${(i + 1) * 100}`}>
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#AD131B] transition-colors duration-300">
                    <div className="text-[#AD131B] group-hover:text-white transition-colors duration-300">{item.icon}</div>
                  </div>
                  <h3 className="font-bold uppercase text-xs md:text-sm tracking-wider text-[#1A1A1A] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm font-medium">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center opacity-0 scroll-animate" data-animation="animate-fade-up delay-100">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            ¿Listo para asegurar la calidad <br className="hidden md:block" />de tu obra?
          </h2>
          <Link
            href="/contacto"
            className="inline-block border-2 border-white text-primary bg-white hover:bg-transparent hover:text-white px-8 py-3 rounded-lg font-bold text-sm md:text-base transition-all"
          >
            Contactar a un Asesor
          </Link>
        </div>
      </section>
    </>
  );
}
