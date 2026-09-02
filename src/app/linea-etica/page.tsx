import type { Metadata } from "next";
import { FaShieldAlt, FaComments, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Línea Ética | FAMAX CONCRETO PERÚ",
  description:
    "Canal confidencial de FAMAX CONCRETO PERÚ para reportar denuncias sobre conductas contrarias a nuestros principios éticos, normativa interna o legalidad.",
  alternates: { canonical: "https://www.famaxconcreto.com.pe/linea-etica" },
  openGraph: {
    title: "Línea Ética | FAMAX CONCRETO PERÚ",
    description: "Reporta de forma confidencial cualquier conducta contraria a la ética de FAMAX CONCRETO PERÚ.",
    url: "https://www.famaxconcreto.com.pe/linea-etica",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function LineaEticaPage() {
  return (
    <div className="bg-white">
      <section className="py-16 bg-background">
        <div className="container-custom">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1B1C1C] mb-3">Cumplimiento</p>
          <h1 className="text-3xl md:text-4xl font-black text-[#AD131B] mb-4 uppercase leading-tight">Línea Ética</h1>
          <div className="w-20 h-[3px] bg-[#8B0000] mb-6" />
          <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium max-w-3xl">
            FAMAX CONCRETO PERÚ promueve una cultura de integridad, transparencia y cumplimiento. A través de este canal
            confidencial, colaboradores, clientes y terceros pueden reportar de buena fe cualquier conducta que contravenga
            nuestros principios, la normativa interna o la legalidad vigente.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl space-y-8">
            <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
              <div className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-sm shrink-0">
                <FaShieldAlt className="text-[#AD131B]" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">¿Qué se puede reportar?</h2>
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                  Actos de corrupción o soborno, fraude, conflictos de interés, mal uso de recursos, discriminación, acoso,
                  incumplimiento de normas laborales o de seguridad, y cualquier otra conducta contraria a la ética.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
              <div className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-sm shrink-0">
                <FaComments className="text-[#AD131B]" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">Confidencialidad</h2>
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                  Las denuncias se tratan con estricta confidencialidad y sin represalias. Se protege la identidad del
                  denunciante siempre que la ley y el proceso lo permitan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 border-b border-gray-100 pb-8">
              <div className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-sm shrink-0">
                <FaEnvelope className="text-[#AD131B]" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">Puedes reportar por:</h2>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base font-medium">
                  <li>• Correo: <span className="text-[#AD131B] font-bold">famax@grupoconstructores.com</span></li>
                  <li>• WhatsApp confidencial: <span className="text-[#AD131B] font-bold">+51 973 350 524 / +51 933 595 630</span></li>
                  <li>• Correo general: <span className="text-[#AD131B] font-bold">famax@grupoconstructores.com</span></li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#FBF9F8] rounded-xl p-5 border border-gray-100">
                <FaMapMarkerAlt className="text-[#AD131B] shrink-0" size={20} />
                <p className="text-sm md:text-base font-medium text-[#1A1A1A]">Planta: 5VFR+822, Puente Piedra, Lima</p>
              </div>
              <div className="flex items-center gap-3 bg-[#FBF9F8] rounded-xl p-5 border border-gray-100">
                <FaClock className="text-[#AD131B] shrink-0" size={20} />
                <p className="text-sm md:text-base font-medium text-[#1A1A1A]">Lun – Sáb: 7:00 a 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
