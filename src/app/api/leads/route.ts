import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const getSupabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
};

// Rate limit en memoria (10 solicitudes cada 15 min por IP)
const rateLimit = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Básico
    const ip = req.headers.get("x-forwarded-for") || "unknown_ip";
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    if (ip !== "unknown_ip") {
      const record = rateLimit.get(ip);
      if (record) {
        if (now - record.timestamp > windowMs) {
          rateLimit.set(ip, { count: 1, timestamp: now });
        } else {
          if (record.count >= 10) {
            return NextResponse.json({ error: "Demasiadas solicitudes. Intente más tarde." }, { status: 429 });
          }
          record.count++;
        }
      } else {
        rateLimit.set(ip, { count: 1, timestamp: now });
      }
    }

    const body = await req.json();
    const { nombre, ruc_dni, tipo_concreto, volumen, ubicacion, tipo_vaciado, bot_field } = body;

    // 2. Honeypot Check (Anti-spam)
    if (bot_field) {
      // Si un bot llenó el campo oculto, fingimos que todo salió bien
      return NextResponse.json({ success: true }, { status: 201 });
    }

    // 3. Validación de Campos (Tipo y Longitud)
    if (!nombre || typeof nombre !== 'string' || nombre.length > 100) {
      return NextResponse.json({ error: "Nombre inválido o demasiado largo." }, { status: 400 });
    }
    if (!ruc_dni || typeof ruc_dni !== 'string' || ruc_dni.length > 20) {
      return NextResponse.json({ error: "RUC/DNI inválido." }, { status: 400 });
    }
    if (!tipo_concreto || typeof tipo_concreto !== 'string' || tipo_concreto.length > 50) {
      return NextResponse.json({ error: "Tipo de concreto inválido." }, { status: 400 });
    }
    if (!ubicacion || typeof ubicacion !== 'string' || ubicacion.length > 200) {
      return NextResponse.json({ error: "Ubicación demasiado larga." }, { status: 400 });
    }
    const vol = parseFloat(volumen);
    if (isNaN(vol) || vol <= 0 || vol > 5000) {
      return NextResponse.json({ error: "Volumen inválido." }, { status: 400 });
    }

    // 4. Inserción en Base de Datos
    const supabase = getSupabaseClient();
    if (!supabase) {
      console.warn("Supabase no configurado en este entorno. Saltando guardado de datos.");
      return NextResponse.json({ success: true, warning: "Database not configured" }, { status: 201 });
    }

    const { error } = await supabase.from("leads").insert([
      { nombre, ruc_dni, tipo_concreto, volumen: vol, ubicacion, tipo_vaciado }
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error interno del servidor";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
