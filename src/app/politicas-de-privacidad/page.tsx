import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de Privacidad",
  description:
    "Conoce cómo FAMAX CONCRETO PERÚ protege y utiliza tus datos personales. Transparencia total en el tratamiento de la información de nuestros clientes en Lima.",
  alternates: { canonical: "https://www.famaxconcreto.com.pe/politicas-de-privacidad" },
  openGraph: {
    title: "Políticas de Privacidad | FAMAX CONCRETO PERÚ",
    description: "Políticas de privacidad y tratamiento de datos personales de FAMAX CONCRETO PERÚ.",
    url: "https://www.famaxconcreto.com.pe/politicas-de-privacidad",
    images: [{ url: "https://www.famaxconcreto.com.pe/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function PoliticasPage() {
  return (
    <div className="bg-white">
      <section className="py-16 bg-background">
        <div className="container-custom">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1B1C1C] mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-black text-[#AD131B] mb-4 uppercase leading-tight">
            Políticas de Privacidad
          </h1>
          <div className="w-20 h-[3px] bg-[#8B0000] mb-6" />
          <p className="text-sm text-gray-500">Última actualización: Agosto 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl space-y-10">
          <div>
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-3">1. Responsable del Tratamiento</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
              FAMAX CONCRETO PERÚ, con planta ubicada en Puente Piedra, Lima (5VFR+822, Puente Piedra 15122), es responsable del
              tratamiento de los datos personales que brinda al utilizar nuestro sitio web y servicios.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-3">2. Información que Recopilamos</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium mb-3">
              A través de nuestro formulario de cotización y contacto recopilamos la siguiente información:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base font-medium">
              <li>• Nombre o razón social de la empresa.</li>
              <li>• Número de RUC o DNI.</li>
              <li>• Tipo de concreto y volumen estimado en m³.</li>
              <li>• Ubicación y dirección de la obra.</li>
              <li>• Datos de contacto brindados voluntariamente (WhatsApp, correo electrónico).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-3">3. Finalidad del Tratamiento</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium mb-3">Sus datos serán utilizados para:</p>
            <ul className="space-y-2 text-gray-600 text-sm md:text-base font-medium">
              <li>• Elaborar y atender sus solicitudes de cotización.</li>
              <li>• Mantener comunicación comercial y de asesoría técnica.</li>
              <li>• Gestionar la prestación de nuestros productos y servicios.</li>
              <li>• Mejorar la experiencia en nuestro sitio web.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-3">4. Almacenamiento y Seguridad</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
              Sus datos se almacenan de forma segura en servicios de alojamiento con medidas de protección técnicas y
              organizativas. No compartimos su información personal con terceros, salvo cuando sea necesario para el
              cumplimiento de obligaciones legales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-3">5. Sus Derechos</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium mb-3">
              De acuerdo con la Ley N° 29733 (Ley de Protección de Datos Personales del Perú), usted puede ejercer sus
              derechos de información, acceso, actualización, rectificación, cancelación y oposición de sus datos.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
              Para ejercer sus derechos o realizar consultas, contáctenos por correo a{" "}
              <span className="text-[#AD131B] font-bold">famax@grupoconstructores.com</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-3">6. Cambios a esta Política</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
              Nos reservamos el derecho de modificar la presente política de privacidad. Cualquier cambio será publicado en
              esta misma página con su fecha de actualización.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
