// Escuchas privadas: slots fijos del calendario y estado de reserva.
// El estado vive en una planilla de Google Sheets con un Apps Script (scripts/privadas-apps-script.gs).

export type SlotEstado = "libre" | "solicitada" | "espera_pago" | "reservada" | "cerrada";

export interface Slot {
  ref: string; // p. ej. PRIV-18DIC-1900, también es la referencia de pago
  inicio: string; // ISO con zona horaria de Chile (UTC-3 en verano)
  etiqueta: string; // texto para mostrar
}

export const PRECIO_PRIVADA = 78000;
export const DIAS_LIMITE = 8; // interno: sin reserva 8 días antes, la función se libera como pública

const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
const MESES_LARGO = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];
const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

function slot(y: number, m: number, d: number, hh: number, mm: number): Slot {
  const pad = (n: number) => String(n).padStart(2, "0");
  const inicio = `${y}-${pad(m)}-${pad(d)}T${pad(hh)}:${pad(mm)}:00-03:00`;
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return {
    ref: `PRIV-${d}${MESES[m - 1]}-${pad(hh)}${pad(mm)}`,
    inicio,
    etiqueta: `${DIAS[dow]} ${d} de ${MESES_LARGO[m - 1]} · ${pad(hh)}:${pad(mm)} hrs`,
  };
}

export const SLOTS: Slot[] = [
  slot(2026, 12, 6, 18, 0),
  slot(2026, 12, 6, 19, 30),
  slot(2026, 12, 18, 19, 0),
  slot(2026, 12, 18, 20, 30),
  slot(2027, 1, 8, 19, 0),
  slot(2027, 1, 8, 20, 30),
  slot(2027, 1, 10, 18, 0),
  slot(2027, 1, 10, 19, 30),
  slot(2027, 1, 20, 19, 0),
  slot(2027, 1, 20, 20, 30),
  slot(2027, 1, 29, 19, 0),
  slot(2027, 1, 29, 20, 30),
];

export function slotPorRef(ref: string): Slot | undefined {
  return SLOTS.find((s) => s.ref === ref);
}

export function scriptConfigurado(): boolean {
  return Boolean(process.env.PRIVADAS_SCRIPT_URL && process.env.PRIVADAS_TOKEN);
}

// Lee el estado desde el Apps Script. Sin configuración o si falla, todo figura libre
// (el script vuelve a validar al reservar).
async function leerEstados(): Promise<Record<string, string>> {
  const url = process.env.PRIVADAS_SCRIPT_URL;
  const token = process.env.PRIVADAS_TOKEN;
  if (!url || !token) return {};
  try {
    const res = await fetch(`${url}?token=${encodeURIComponent(token)}`, { next: { revalidate: 15 } });
    if (!res.ok) return {};
    const data = await res.json();
    const out: Record<string, string> = {};
    for (const [ref, v] of Object.entries<{ estado: string }>(data.slots ?? {})) out[ref] = v.estado;
    return out;
  } catch {
    return {};
  }
}

export interface SlotConEstado extends Slot {
  estado: SlotEstado;
}

export async function slotsConEstado(ahora = new Date()): Promise<SlotConEstado[]> {
  const estados = await leerEstados();
  return SLOTS.map((s) => {
    const crudo = estados[s.ref] ?? "libre";
    let estado: SlotEstado =
      crudo === "reservada" ? "reservada"
      : crudo === "espera_pago" ? "espera_pago"
      : crudo === "solicitada" || crudo === "otro_disco" ? "solicitada"
      : "libre";
    const limite = new Date(s.inicio).getTime() - DIAS_LIMITE * 24 * 3600 * 1000;
    if (estado === "libre" && ahora.getTime() > limite) estado = "cerrada";
    return { ...s, estado };
  });
}
