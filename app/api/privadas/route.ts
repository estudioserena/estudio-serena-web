import { NextRequest, NextResponse } from "next/server";
import { PRECIO_PRIVADA, slotPorRef, slotsConEstado } from "@/lib/privadas";

export const dynamic = "force-dynamic";

export async function GET() {
  const slots = await slotsConEstado();
  return NextResponse.json({ slots, precio: PRECIO_PRIVADA });
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const corto = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Campo trampa: los bots lo completan, las personas no lo ven.
  if (corto(body.empresa, 50)) return NextResponse.json({ ok: true });

  const ref = corto(body.ref, 40);
  const nombre = corto(body.nombre, 120);
  const email = corto(body.email, 160);
  const telefono = corto(body.telefono, 30);
  const disco = corto(body.disco, 160);
  const notas = corto(body.notas, 500);

  if (!slotPorRef(ref)) return NextResponse.json({ error: "La fecha elegida no existe." }, { status: 400 });
  if (!nombre || !EMAIL.test(email) || telefono.length < 8 || !disco) {
    return NextResponse.json({ error: "Revisa los datos del formulario." }, { status: 400 });
  }

  const url = process.env.PRIVADAS_SCRIPT_URL;
  const token = process.env.PRIVADAS_TOKEN;
  if (!url || !token) {
    return NextResponse.json({ error: "La reserva en línea no está disponible por ahora." }, { status: 503 });
  }

  try {
    // El script valida la disponibilidad con un candado, guarda la fila y envía los correos.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ token, ref, nombre, email, telefono, disco, notas }),
      cache: "no-store",
    });
    const data = await res.json();
    if (!data.ok) {
      if (data.error === "no_disponible") {
        return NextResponse.json({ error: "Esta fecha ya no está disponible. Elige otra." }, { status: 409 });
      }
      throw new Error(String(data.error));
    }
    return NextResponse.json({ ok: true, ref: data.ref, funcion: data.funcion, limite: data.limite });
  } catch (err) {
    console.error("[privadas] error al registrar la solicitud:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "No pudimos registrar la solicitud. Intenta de nuevo." }, { status: 502 });
  }
}
