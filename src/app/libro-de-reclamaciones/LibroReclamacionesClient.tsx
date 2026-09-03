"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { FaUser, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaCheck, FaExclamationCircle } from "react-icons/fa";

export default function LibroReclamacionesClient() {
  const [formData, setFormData] = useState({
    nombre: "",
    dni_ruc: "",
    telefono: "",
    email: "",
    tipo: "Reclamo",
    bien_servicio: "",
    detalle: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [claimCode, setClaimCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validaciones
    if (!formData.nombre.trim() || !formData.dni_ruc.trim() || !formData.telefono.trim() || !formData.bien_servicio.trim() || !formData.detalle.trim()) {
      setErrorMsg("Por favor complete todos los campos obligatorios (*).");
      return;
    }

    setStatus("loading");

    // Generar código de reclamo correlativo
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `REC-${new Date().getFullYear()}-${randomNum}`;
    setClaimCode(code);

    // Formatear mensaje para respaldo
    const mailSubject = encodeURIComponent(`[${code}] Nuevo ${formData.tipo} - Libro de Reclamaciones FAMAX`);
    const mailBody = encodeURIComponent(
      `CÓDIGO DE RECLAMO: ${code}\n` +
      `Fecha: ${new Date().toLocaleString("es-PE")}\n\n` +
      `DATOS DEL CONSUMIDOR:\n` +
      `• Nombres/Razón Social: ${formData.nombre}\n` +
      `• DNI/RUC: ${formData.dni_ruc}\n` +
      `• Teléfono: ${formData.telefono}\n` +
      `• Correo: ${formData.email || "No especificado"}\n\n` +
      `DETALLE DE LA RECLAMACIÓN:\n` +
      `• Tipo: ${formData.tipo}\n` +
      `• Bien o Servicio: ${formData.bien_servicio}\n` +
      `• Detalle/Pedido:\n${formData.detalle}\n`
    );

    // Notificar por mailto y abrir en segundo plano o mostrar confirmación
    try {
      // Abre cliente de correo con los datos si está disponible
      const mailtoUrl = `mailto:famax@grupoconstructores.com?subject=${mailSubject}&body=${mailBody}`;
      const link = document.createElement("a");
      link.href = mailtoUrl;
      link.target = "_blank";
      link.click();
    } catch {
      // fallback silencioso
    }

    setStatus("success");
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      dni_ruc: "",
      telefono: "",
      email: "",
      tipo: "Reclamo",
      bien_servicio: "",
      detalle: "",
    });
    setStatus("idle");
    setClaimCode("");
  };

  return (
    <div className="bg-white">
      {/* Encabezado */}
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

      {/* Formulario */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="bg-[#FBF9F8] border border-gray-200 rounded-2xl p-6 md:p-10">
            {/* Datos de la empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <FaUser className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wide text-xs">Razón Social</p>
                  <p className="text-gray-600 font-medium">FAMAX CONCRETO PERÚ</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <h2 className="font-bold text-[#1A1A1A] text-base mb-1">TELÉFONO</h2>
                  <div className="flex flex-col">
                    <p className="text-gray-600 font-medium">+51 973 350 524</p>
                    <p className="text-gray-600 font-medium">+51 933 595 630</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wide text-xs">Domicilio</p>
                  <p className="text-gray-600 font-medium">5VFR+822, Puente Piedra, Lima 15122</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#AD131B] shrink-0" size={20} />
                <div>
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wide text-xs">Correo</p>
                  <p className="text-gray-600 font-medium">famax@grupoconstructores.com</p>
                </div>
              </div>
            </div>

            {status === "success" ? (
              /* Pantalla de Confirmación de Reclamo */
              <div className="bg-white border border-green-200 rounded-xl p-8 text-center max-w-2xl mx-auto my-6 shadow-sm animate-fade-in">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck size={30} />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A1A] uppercase mb-2">¡Reclamación Registrada!</h3>
                <p className="text-gray-600 text-sm md:text-base font-medium mb-4">
                  Su solicitud ha sido ingresada en nuestro Libro de Reclamaciones y se le ha asignado el siguiente código de seguimiento:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 inline-block">
                  <span className="text-xs uppercase text-gray-500 font-bold block mb-1">Código de Reclamo</span>
                  <span className="text-2xl font-black text-[#AD131B] tracking-wider">{claimCode}</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-6 leading-relaxed">
                  Nos comunicaremos con usted a través del número <strong>{formData.telefono}</strong> o correo <strong>{formData.email || "registrado"}</strong> dentro del plazo de ley.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleReset}
                    className="bg-[#1A1A1A] hover:bg-black text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Registrar otro reclamo
                  </button>
                </div>
              </div>
            ) : (
              /* Formulario Activo */
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 text-sm font-semibold">
                    <FaExclamationCircle size={18} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Datos del reclamante */}
                <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-6">Datos del consumidor</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nombres y Apellidos / Razón Social *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Escriba sus datos"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Documento de Identidad (DNI/RUC) *</label>
                    <input
                      type="text"
                      name="dni_ruc"
                      value={formData.dni_ruc}
                      onChange={handleChange}
                      placeholder="Número de documento"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Teléfono / Celular *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Número de contacto"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Tipo de reclamación */}
                <h2 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tight mb-6">Detalle del reclamo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tipo de Reclamación *</label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium"
                    >
                      <option value="Reclamo">Reclamo</option>
                      <option value="Queja">Queja</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Bien o Servicio *</label>
                    <input
                      type="text"
                      name="bien_servicio"
                      value={formData.bien_servicio}
                      onChange={handleChange}
                      placeholder="Indique el producto/servicio"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Pedido / Descripción del problema *</label>
                  <textarea
                    rows={5}
                    name="detalle"
                    value={formData.detalle}
                    onChange={handleChange}
                    placeholder="Describa detalladamente su pedido o el problema presentado"
                    required
                    className="w-full bg-white border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-3 text-sm font-medium resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-3 bg-[#AD131B] hover:bg-[#8B0000] text-white px-8 py-4 rounded-lg font-black uppercase text-sm tracking-wide transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <FaPaperPlane size={16} />
                    {status === "loading" ? "ENVIANDO..." : "ENVIAR RECLAMO"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
