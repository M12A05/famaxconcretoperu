import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const getSupabaseClient = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return null;
  }
  return createClient(url, key);
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, ruc_dni, tipo_concreto, volumen, ubicacion, tipo_vaciado } = body;

    if (!nombre || !ruc_dni || !tipo_concreto || !volumen || !ubicacion || !tipo_vaciado) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      console.warn("Supabase no configurado en este entorno. Saltando guardado de datos.");
      return NextResponse.json({ success: true, warning: "Database not configured" }, { status: 201 });
    }

    const { error } = await supabase.from("leads").insert([
      { nombre, ruc_dni, tipo_concreto, volumen: parseFloat(volumen), ubicacion, tipo_vaciado }
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error interno del servidor";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
