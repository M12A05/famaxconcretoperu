"use client";

import { useState } from "react";
import { CheckCircle2, Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import type { FormEvent } from "react";
import ScrollRevealObserver from "@/components/ui/ScrollRevealObserver";

const TIPOS_CONCRETO = [
  "f'c 140 kg/cm2", "f'c 175 kg/cm2", "f'c 210 kg/cm2",
  "f'c 245 kg/cm2", "f'c 280 kg/cm2", "f'c 315 kg/cm2",
  "HS 175", "HS 210", "HS 315",
];

const FORM_INITIAL = { nombre: "", ruc_dni: "", tipo_concreto: "", volumen: "", ubicacion: "", tipo_vaciado: "bomba", bot_field: "" };

export default function ContactoClient() {
  const [form, setForm] = useState(FORM_INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al enviar");
      setStatus("success");
      const msg = encodeURIComponent(
        `Hola FAMAX, quiero cotizar:\n• Nombre/Empresa: ${form.nombre}\n• RUC/DNI: ${form.ruc_dni}\n• Tipo de Concreto: ${form.tipo_concreto}\n• Volumen: ${form.volumen} m³\n• Ubicación: ${form.ubicacion}\n• Tipo de Vaciado: ${form.tipo_vaciado}`
      );
      window.open(`https://wa.me/51955416601?text=${msg}`, "_blank");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
    }
  };

  const inputClass = "w-full bg-transparent border-b-2 border-gray-200 focus:border-[#AD131B] outline-none py-3 text-[#1A1A1A] text-sm font-medium transition-colors placeholder:text-gray-400";

  return (
    <>
      <ScrollRevealObserver />
      {/* Form + Info */}
      <section className="pt-24 pb-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Información de Contacto (Izquierda) */}
            <div>
              <div className="mb-12 opacity-0 scroll-animate" data-animation="animate-slide-left delay-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[2px] bg-[#AD131B]" />
                  <h2 className="text-3xl lg:text-4xl font-black text-[#1A1A1A] tracking-tight">Cotiza tu Proyecto</h2>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed max-w-md">
                  Concreto premezclado de alta resistencia para Lima Norte. Completa el formulario y nos comunicamos de inmediato.
                </p>
              </div>
              
              <div className="space-y-10">
                {/* Teléfono */}
                <div className="flex items-start gap-6 opacity-0 scroll-animate" data-animation="animate-slide-left delay-200">
                  <div className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-sm shrink-0">
                    <Phone className="text-[#AD131B]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Teléfono</h3>
                    <p className="text-gray-600 font-medium">973 350 524</p>
                    <p className="text-gray-600 font-medium">933 595 630</p>
                  </div>
                </div>

                {/* Contacto Online */}
                <div className="flex items-start gap-6 opacity-0 scroll-animate" data-animation="animate-slide-left delay-300">
                  <div className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-sm shrink-0">
                    <MessageCircle className="text-[#AD131B]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Contacto Online</h3>
                    <p className="text-gray-600 font-medium">Ventas y Asesoría Técnica</p>
                    <a href="https://wa.me/51955416601" target="_blank" rel="noopener noreferrer" className="text-[#AD131B] font-bold hover:underline transition-colors mt-1 inline-block">
                      WhatsApp General
                    </a>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-6 opacity-0 scroll-animate" data-animation="animate-slide-left delay-400">
                  <div className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-sm shrink-0">
                    <MapPin className="text-[#AD131B]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Dirección</h3>
                    <p className="text-gray-600 font-medium">FAMAX CONCRETO PERÚ</p>
                    <p className="text-gray-600 font-medium">5VFR+822, Puente Piedra 15122, Lima</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 opacity-0 scroll-animate" data-animation="animate-slide-left delay-500">
                  <div className="w-14 h-14 border border-gray-200 flex items-center justify-center rounded-sm shrink-0">
                    <Mail className="text-[#AD131B]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Correo Electrónico</h3>
                    <p className="text-gray-600 font-medium">ventas@famaxconcreto.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario (Derecha) */}
            <div className="opacity-0 scroll-animate" data-animation="animate-slide-right delay-200">
              {status === "success" ? (
                <div className="text-center py-16 bg-gray-50 border border-gray-100 rounded-sm">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-green-500" size={36} />
                  </div>
                  <h3 className="text-xl font-black text-[#1A1A1A] mb-2 uppercase">¡Solicitud enviada!</h3>
                  <p className="text-gray-500 text-sm mb-8 px-4">Te hemos abierto WhatsApp para confirmar los detalles con nuestro equipo.</p>
                  <button
                    onClick={() => { setStatus("idle"); setForm(FORM_INITIAL); }}
                    className="bg-[#AD131B] hover:bg-[#8B0000] text-white px-8 py-3 rounded-sm font-bold uppercase text-sm transition-colors"
                  >
                    Nueva Solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot anti-spam */}
                  <input type="text" name="bot_field" value={form.bot_field} onChange={handleChange} style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Nombre completo o empresa *" className={inputClass} />
                    <input name="ruc_dni" value={form.ruc_dni} onChange={handleChange} required placeholder="RUC o DNI *" className={inputClass} />
                    
                    <select name="tipo_concreto" value={form.tipo_concreto} onChange={handleChange} required className={inputClass}>
                      <option value="">Tipo de Concreto *</option>
                      {TIPOS_CONCRETO.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    
                    <input name="volumen" type="number" min="0" step="0.5" value={form.volumen} onChange={handleChange} required placeholder="Volumen Estimado (m³) *" className={inputClass} />
                  </div>

                  <input name="ubicacion" value={form.ubicacion} onChange={handleChange} required placeholder="Dirección exacta de la obra *" className={inputClass} />

                  <div className="border border-gray-300 p-4 rounded-sm">
                    <p className="text-sm font-medium text-gray-500 mb-3">Tipo de Vaciado *</p>
                    <div className="flex gap-8">
                      {["bomba", "directo"].map((tipo) => (
                        <label key={tipo} className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="tipo_vaciado" value={tipo} checked={form.tipo_vaciado === tipo} onChange={handleChange} className="accent-[#AD131B] w-4 h-4" />
                          <span className="font-bold text-sm capitalize text-[#1A1A1A]">{tipo}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm font-medium bg-red-50 border border-red-200 px-4 py-3 rounded-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#AD131B] hover:bg-[#8B0000] disabled:opacity-60 text-white py-4 rounded-sm font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2"
                  >
                    {status === "loading" ? "Enviando..." : (
                      <>
                        <CheckCircle2 size={18} /> Enviar Solicitud
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-white pb-0">
        <div className="container-custom">
          <hr className="border-t border-gray-200 mb-10" />
        </div>
        <div className="container-custom pb-6 opacity-0 scroll-animate" data-animation="animate-fade-in delay-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-7 bg-[#AD131B] rounded-full" />
            <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight">Nuestra Planta de Trabajo</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6 flex items-center gap-2 pl-4">
            <MapPin size={13} className="text-[#AD131B]" /> FAMAX CONCRETO PERU, 5VFR+822, Puente Piedra 15122
          </p>
        </div>
        <div className="w-full h-[400px] opacity-0 scroll-animate" data-animation="animate-fade-up delay-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3823.5!2d-77.0763!3d-11.8705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFAMAX%20CONCRETO%20PERU%2C%20Puente%20Piedra!5e0!3m2!1ses!2spe!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación FAMAX CONCRETO PERU"
          />
        </div>
      </section>
    </>
  );
}
