import type { Metadata } from "next";
import { User, Phone, MapPin, Mail, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | FAMAX CONCRETO PERÚ",
  description:
    "Hoja de reclamaciones de FAMAX CONCRETO PERÚ, conforme a la Ley de Protección al Consumidor (INDECOPI, Perú). Presenta aquí tu reclamo o queja.",
  alternates: { canonical: "https://famaxconcretoperu.vercel.app/libro-de-reclamaciones" },
  openGraph: {
    title: "Libro de Reclamaciones | FAMAX CONCRETO PERÚ",
    description: "Presenta tu reclamo o queja ante FAMAX CONCRETO PERÚ conforme a la normativa peruana del consumidor.",
    url: "https://famaxconcretoperu.vercel.app/libro-de-reclamaciones",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function LibroReclamacionesPage() {
  return (
    <div className="bg-white">
      <section className="py-16 bg-background">
        <div className="container-custom">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1B1C1C] mb-3">Defensa del Consumidor</p>
          <h1 className="text-3xl md:text-4xl font-black text-[#AD131B] mb-4 uppercase leading-tight">Libro de Reclamaciones</h1>
          <div className="w-20 h-[3px] bg-[#8B0000] mb-6" />
          <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium max-w-3xl">
            En cumplimiento de la Ley N° 29571 (Código de Protección y Defensa del Consumidor) y el Decreto Supremo N°
            011-2011-PCM, ponemos a su disposición el siguiente formato para registrar reclamos y quejas. Serán atendidos
            dentro de los plazos establecidos por la normativa vigente.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-[#FBF9F8] border border-gray-200 rounded-2xl p-6 md:p-10">
            {/* Datos de la empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <User className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wide text-xs">Razón Social</p>
                  <p className="text-gray-600 font-medium">FAMAX CONCRETO PERÚ</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wide text-xs">Teléfono</p>
                  <p className="text-gray-600 font-medium">+51 973 350 524</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wide text-xs">Domicilio</p>
                  <p className="text-gray-600 font-medium">5VFR+822, Puente Piedra, Lima 15122</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wide text-xs">Correo</p>
                  <p className="text-gray-600 font-medium">ventas@famaxconcreto.com</p>
                </div>
              </div>
            </div>

            {/* Datos del reclamante */}
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-6">Datos del consumidor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nombres y Apellidos / Razón Social *</label>
                <input type="text" placeholder="Escriba sus datos" className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Documento de Identidad (DNI/RUC) *</label>
                <input type="text" placeholder="Número de documento" className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Teléfono / Celular *</label>
                <input type="text" placeholder="Número de contacto" className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Correo Electrónico</label>
                <input type="email" placeholder="correo@ejemplo.com" className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium" />
              </div>
            </div>

            {/* Tipo de reclamación */}
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-6">Detalle del reclamo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tipo de Reclamación *</label>
                <select className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium">
                  <option value="">Seleccione...</option>
                  <option>Reclamo</option>
                  <option>Queja</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Bien o Servicio *</label>
                <input type="text" placeholder="Indique el producto/servicio" className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Pedido / Descripción del problema *</label>
              <textarea rows={5} placeholder="Describa detalladamente su pedido o el problema presentado" className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium resize-none" />
            </div>

            <a
              href="https://wa.me/51955416601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#AD131B] hover:bg-[#8B0000] text-white px-8 py-4 rounded-lg font-black uppercase text-sm tracking-wide transition-colors shadow-md"
            >
              <FileText size={18} /> Enviar Reclamo por WhatsApp
            </a>
            <p className="text-xs text-gray-500 mt-4 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-green-500" />
              De conformidad con el artículo 152° del Código de Protección y Defensa del Consumidor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
