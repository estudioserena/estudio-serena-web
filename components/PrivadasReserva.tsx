"use client";

import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";

type Estado = "libre" | "solicitada" | "espera_pago" | "reservada" | "cerrada";
interface SlotUI {
  ref: string;
  etiqueta: string;
  estado: Estado;
}
interface Confirmacion {
  ref: string;
  funcion: string;
  limite: string;
}

const PRECIO = 78000;
const clp = (n: number) => `$${n.toLocaleString("es-CL")}`;
const ETIQUETA_ESTADO: Record<Estado, string> = {
  libre: "Disponible",
  solicitada: "En revisión",
  espera_pago: "En espera de pago",
  reservada: "Reservada",
  cerrada: "Cerrada",
};

const campo =
  "w-full bg-abismo border border-crema/15 text-crema font-dm font-light text-[15px] px-4 py-3 focus:outline-none focus:border-senal";

export default function PrivadasReserva() {
  const [slots, setSlots] = useState<SlotUI[] | null>(null);
  const [cargaFallida, setCargaFallida] = useState(false);
  const [ref, setRef] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");
  const [ok, setOk] = useState<Confirmacion | null>(null);

  useEffect(() => {
    fetch("/api/privadas", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        setSlots(d.slots);
      })
      .catch(() => setCargaFallida(true));
  }, []);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setEnviando(true);
    const f = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/privadas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ref,
          nombre: f.get("nombre"),
          email: f.get("email"),
          telefono: f.get("telefono"),
          disco: f.get("disco"),
          notas: f.get("notas"),
          empresa: f.get("empresa"),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "No pudimos registrar la reserva.");
        if (res.status === 409) {
          setRef("");
          const r = await fetch("/api/privadas", { cache: "no-store" }).then((x) => x.json());
          setSlots(r.slots);
        }
        return;
      }
      setOk(data);
    } catch {
      setError("No pudimos registrar la reserva. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  const elegido = slots?.find((s) => s.ref === ref);

  return (
    <section id="privadas" className="w-full border-b border-crema/[0.06]">
      <div className="max-w-3xl mx-auto px-6 lg:px-16 py-20">
        <FadeUp>
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
            ESCUCHA PRIVADA
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-crema leading-tight text-center mb-6">
            Elige un disco, suma 6 personas
            <br />
            y agenda tu sesión.
          </h2>
          <p className="font-dm text-[15px] font-light text-crema/70 leading-relaxed max-w-xl mx-auto text-center mb-4">
            Sala completa para 6 personas, con el disco que tú elijas en Dolby Atmos 7.1.4.
          </p>
          <p className="font-mono text-[13px] tracking-[0.12em] text-senal text-center mb-12">
            {clp(PRECIO)} la sala completa
          </p>
        </FadeUp>

        {ok ? (
          <div className="bg-medianoche border-t-2 border-senal p-6 md:p-8">
            <h3 className="font-syne text-xl font-extrabold text-crema mb-3">Solicitud recibida</h3>
            <p className="font-dm font-light text-crema/80 mb-4">
              Reservamos el {ok.funcion} mientras verificamos que tu disco esté disponible en Dolby
              Atmos en Apple Music.
            </p>
            <p className="font-dm font-light text-crema/80 mb-4">
              Te escribimos por correo antes del {ok.limite}. Si el disco está disponible, ahí recibes
              los datos para transferir {clp(PRECIO)}.
            </p>
            <p className="font-dm font-light text-crema/60 text-sm">
              Todavía no se cobra nada. Referencia de tu solicitud: {ok.ref}
            </p>
          </div>
        ) : (
          <form onSubmit={enviar} className="space-y-8">
            <fieldset>
              <legend className="font-mono text-[12px] tracking-[0.14em] text-senal mb-4">
                1 · FECHA
              </legend>
              {cargaFallida && (
                <p className="font-dm text-crema/70">
                  No pudimos cargar las fechas. Recarga la página o escríbenos por WhatsApp.
                </p>
              )}
              {!slots && !cargaFallida && (
                <p className="font-dm text-crema/50">Cargando fechas…</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {slots?.map((s) => {
                  const libre = s.estado === "libre";
                  const activo = s.ref === ref;
                  return (
                    <button
                      key={s.ref}
                      type="button"
                      disabled={!libre}
                      onClick={() => setRef(s.ref)}
                      aria-pressed={activo}
                      className={`text-left px-4 py-3 border font-dm text-[14px] transition-colors ${
                        activo
                          ? "border-senal bg-profundo text-crema"
                          : libre
                            ? "border-crema/15 bg-medianoche text-crema hover:border-senal/60"
                            : "border-crema/[0.06] bg-medianoche/40 text-crema/35 cursor-not-allowed"
                      }`}
                    >
                      <span className="block capitalize">{s.etiqueta}</span>
                      <span className="block font-mono text-[11px] tracking-[0.1em] mt-1 text-senal/80">
                        {ETIQUETA_ESTADO[s.estado].toUpperCase()}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="font-dm font-light text-crema/50 text-[13px] mt-3">
                Una vez pagada, la fecha no se puede cambiar.
              </p>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-mono text-[12px] tracking-[0.14em] text-senal mb-4">
                2 · DISCO
              </legend>
              <input
                name="disco"
                required
                maxLength={160}
                placeholder="Artista y título del disco"
                className={campo}
              />
              <p className="font-dm font-light text-crema/50 text-[13px]">
                Debe estar disponible en Dolby Atmos en Apple Music. Lo verificamos antes de pedir el pago.
              </p>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-mono text-[12px] tracking-[0.14em] text-senal mb-4">
                3 · ORGANIZADOR
              </legend>
              <input name="nombre" required maxLength={120} placeholder="Nombre" className={campo} />
              <input name="email" type="email" required maxLength={160} placeholder="Correo" className={campo} />
              <input name="telefono" type="tel" required maxLength={30} placeholder="Teléfono" className={campo} />
              <textarea name="notas" maxLength={500} rows={3} placeholder="Algo que debamos saber (opcional)" className={campo} />
              <input name="empresa" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            </fieldset>

            {error && (
              <p role="alert" className="font-dm text-crema bg-profundo px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!ref || enviando}
              className="w-full font-syne text-sm font-bold tracking-wide bg-senal text-crema px-6 py-4 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {enviando
                ? "Registrando…"
                : elegido
                  ? `Solicitar ${elegido.etiqueta}`
                  : "Elige una fecha para reservar"}
            </button>
            <p className="font-dm font-light text-crema/50 text-[13px] text-center">
              No se cobra al enviar. Pagas solo cuando confirmemos el disco.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
