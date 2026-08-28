"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function ConcreteCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [thickness, setThickness] = useState("");
  const [volume, setVolume] = useState<number | null>(null);

  const calculateVolume = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const t = parseFloat(thickness) / 100; // Convert cm to meters

    if (!isNaN(l) && !isNaN(w) && !isNaN(t) && l > 0 && w > 0 && t > 0) {
      // Volumen = L * W * T
      // Añadimos 5% de desperdicio recomendado
      const vol = (l * w * t) * 1.05;
      setVolume(Number(vol.toFixed(2)));
    } else {
      setVolume(null);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-red-50 p-2 rounded-lg text-[#AD131B]">
          <Calculator size={24} />
        </div>
        <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight uppercase">Calculadora de Concreto</h3>
      </div>
      <p className="text-sm text-gray-500 mb-6 font-medium">
        Calcula los metros cúbicos (m³) aproximados que necesitas para tu losa o piso (incluye 5% de margen por desperdicio).
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Largo (Metros)</label>
          <input 
            type="number" 
            placeholder="Ej: 10" 
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-2 text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Ancho (Metros)</label>
          <input 
            type="number" 
            placeholder="Ej: 5" 
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-2 text-sm font-medium"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Grosor (Centímetros)</label>
          <input 
            type="number" 
            placeholder="Ej: 20" 
            value={thickness}
            onChange={(e) => setThickness(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 focus:border-[#AD131B] outline-none rounded-lg px-4 py-2 text-sm font-medium"
          />
        </div>
      </div>

      <button 
        onClick={calculateVolume}
        className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors"
      >
        Calcular Volumen
      </button>

      {volume !== null && (
        <div className="mt-6 bg-[#AD131B]/10 border border-[#AD131B]/20 p-4 rounded-lg text-center">
          <p className="text-sm text-[#1A1A1A] font-bold mb-1">Volumen Estimado:</p>
          <p className="text-3xl font-black text-[#AD131B]">{volume} m³</p>
          <p className="text-xs text-gray-500 mt-2">Nota: Este valor es referencial. Solicite una visita técnica para cubicaje exacto.</p>
        </div>
      )}
    </div>
  );
}
