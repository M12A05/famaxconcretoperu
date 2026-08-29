"use client";

import { useState } from "react";
import { Calculator, X } from "lucide-react";

export default function FloatingBotCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [largo, setLargo] = useState("");
  const [ancho, setAncho] = useState("");
  const [espesor, setEspesor] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularVolumen = () => {
    const l = parseFloat(largo);
    const a = parseFloat(ancho);
    const e = parseFloat(espesor);
    
    if (!isNaN(l) && !isNaN(a) && !isNaN(e) && l > 0 && a > 0 && e > 0) {
      setResultado(Number((l * a * e).toFixed(2)));
    } else {
      setResultado(null);
    }
  };

  return (
    <div className="fixed bottom-28 right-6 z-50">
      {/* Botón Flotante (Cuando está cerrado) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-16 h-16 bg-[#AD131B] text-white rounded-full shadow-xl hover:bg-[#8B0000] hover:scale-110 transition-all duration-300 group"
          aria-label="Abrir Calculadora Rápida"
        >
          <span className="hidden sm:flex absolute right-full mr-4 w-max bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wide py-2.5 px-5 rounded-lg shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none items-center gap-2">
            Calcular Concreto
            <span className="absolute top-1/2 -translate-y-1/2 -right-2 border-[8px] border-transparent border-l-white"></span>
          </span>
          <Calculator size={28} />
        </button>
      )}

      {/* Ventana del Bot Calculadora */}
      {isOpen && (
        <div className="bg-white w-[min(320px,calc(100vw-1.5rem))] md:w-[360px] rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col animate-fade-in relative">
          
          {/* Header con botón de cierre */}
          <div className="relative text-center pt-6 pb-2 px-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar Calculadora"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold text-[#AD131B] leading-tight mb-2">
              Calculadora De M³ De Concreto
            </h3>
          </div>

          <div className="px-6 pb-6 overflow-y-auto max-h-[70vh]">
            <p className="text-gray-500 text-[13px] leading-relaxed mb-5">
              Utilice nuestra calculadora de concreto para determinar fácilmente la cantidad de concreto que necesita para su proyecto. Ideal para empresas concreteras y profesionales de la construcción.
            </p>

            <div className="space-y-4">
              {/* Longitud */}
              <div>
                <label className="block text-gray-600 text-sm mb-1.5">Longitud (m):</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={largo}
                  onChange={(e) => setLargo(e.target.value)}
                  className="w-full border border-[#AD131B] focus:ring-2 focus:ring-[#AD131B]/20 focus:border-[#AD131B] outline-none rounded-md px-3 py-2 text-gray-800 transition-all"
                />
              </div>
              
              {/* Ancho */}
              <div>
                <label className="block text-gray-600 text-sm mb-1.5">Ancho (m):</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={ancho}
                  onChange={(e) => setAncho(e.target.value)}
                  className="w-full border border-[#AD131B] focus:ring-2 focus:ring-[#AD131B]/20 focus:border-[#AD131B] outline-none rounded-md px-3 py-2 text-gray-800 transition-all"
                />
              </div>

              {/* Profundidad */}
              <div>
                <label className="block text-gray-600 text-sm mb-1.5">Profundidad (m):</label>
                <input
                  type="number"
                  min="0"
                  step="0.05"
                  value={espesor}
                  onChange={(e) => setEspesor(e.target.value)}
                  className="w-full border border-[#AD131B] focus:ring-2 focus:ring-[#AD131B]/20 focus:border-[#AD131B] outline-none rounded-md px-3 py-2 text-gray-800 transition-all"
                />
              </div>

              {/* Botón Calcular */}
              <button
                onClick={calcularVolumen}
                className="w-full bg-[#AD131B] hover:bg-[#8B0000] text-white font-bold py-3 rounded-md mt-2 transition-colors"
              >
                Calcular Volumen
              </button>

              {/* Resultado */}
              {resultado !== null && (
                <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-md text-center animate-fade-in">
                  <p className="text-gray-600 text-sm mb-1">Volumen Requerido:</p>
                  <p className="text-[#AD131B] text-3xl font-black">{resultado} <span className="text-lg">m³</span></p>
                </div>
              )}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
