import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Dolby Atmos Music — Estudio Serena",
  description:
    "Upmix profesional 7.1.4 para Apple Music Spatial Audio, TIDAL y plataformas premium. Único estudio listado en el Dolby Atmos Music Directory en la Región de Coquimbo.",
};

const MESH = `
  linear-gradient(to top, rgba(7,9,15,0.9) 0%, rgba(7,9,15,0.4) 45%, rgba(7,9,15,0.55) 100%),
  radial-gradient(ellipse 80% 50% at 20% 60%, rgba(26,47,94,0.45) 0%, transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 20%, rgba(74,124,246,0.08) 0%, transparent 50%),
  rgba(7,9,15,0.62)
`;

const why = [
  {
    n: "01",
    title: "Único en la Región de Coquimbo",
    desc: "El único estudio listado en el Dolby Atmos Music Directory del norte de Chile.",
  },
  {
    n: "02",
    title: "Sistema 7.1.4 Neumann KH Series",
    desc: "Monitoreo de precisión con configuración 7.1.4 acreditada para mezcla inmersiva.",
  },
  {
    n: "03",
    title: "Créditos verificados",
    desc: "Trabajo publicado y verificado en Apple Music Spatial Audio.",
  },
];

const process = [
  {
    n: "1",
    title: "Envías tus stems y mezcla estéreo",
    desc: "Envías todos tus stems en formato .wav 48kHz / 24 bits, organizados por elemento: voz, bajo, batería, sintetizadores. También la mezcla estéreo de referencia. Te asesoramos en el proceso si lo necesitas.",
  },
  {
    n: "2",
    title: "Análisis de referencia",
    desc: "Analizamos tu mezcla estéreo para entender tu intención como artista. El upmix respeta las decisiones creativas de la mezcla original.",
  },
  {
    n: "3",
    title: "Configuración de la sesión Atmos",
    desc: "Configuramos la sesión en Pro Tools 2026 con el Dolby Atmos Renderer activo y el sistema 7.1.4 Neumann KH calibrado.",
  },
  {
    n: "4",
    title: "Mezcla en formato 7.1.4",
    desc: "Mezclamos usando beds para elementos de fondo y objetos de audio para voz y elementos principales. Cada instrumento tiene coordenadas propias en el espacio tridimensional.",
  },
  {
    n: "5",
    title: "Revisión crítica",
    desc: "Revisión en sistema 7.1.4 Neumann KH. Probamos en binaural (auriculares) y en multicanal. Si suena bien en los dos formatos, está listo.",
  },
  {
    n: "6",
    title: "Control de calidad",
    desc: "Comparación A/B con la mezcla estéreo original. Verificación de loudness, peak levels y compatibilidad con los requisitos de distribución de Apple Music y TIDAL.",
  },
  {
    n: "7",
    title: "Entrega para distribución",
    desc: "Entregamos el archivo final en formato ADM BWF, listo para distribución digital en Apple Music Spatial Audio, TIDAL, Amazon Music HD y demás plataformas premium.",
  },
];

export default function AtmosPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden grain pt-32">
        <Image src="/fotos/hero.jpg" alt="Estudio Serena sala de control" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: MESH }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-16 md:pb-24">
          <p className="font-mono text-[9px] tracking-[0.22em] text-senal mb-6">
            UPMIX INMERSIVO · 7.1.4
          </p>
          <h1 className="font-syne text-[clamp(44px,7vw,96px)] font-extrabold leading-[0.9] text-crema mb-6">
            Dolby Atmos
            <br />
            Music
          </h1>
          <p className="font-dm text-[16px] font-light text-crema/60 max-w-xl mb-8">
            Upmix profesional 7.1.4 para Apple Music Spatial Audio, TIDAL y plataformas premium.
          </p>
          <p className="font-mono text-[13px] tracking-[0.08em] text-senal">
            DESDE $250.000 CLP + IVA / SINGLE
          </p>
        </div>
      </section>

      {/* Qué es Atmos */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — QUÉ ES DOLBY ATMOS
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-12 text-center">
              Sonido que te rodea.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <FadeUp>
              <h3 className="font-syne text-[20px] font-extrabold text-crema mb-3">El formato</h3>
              <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed text-justify">
                Dolby Atmos Music es un formato de audio inmersivo que ubica los sonidos en un
                espacio tridimensional. En lugar de los dos canales del estéreo tradicional,
                el upmix 7.1.4 distribuye instrumentos y voces alrededor y por encima del oyente.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="font-syne text-[20px] font-extrabold text-crema mb-3">Por qué importa</h3>
              <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed text-justify">
                Apple Music, TIDAL y las plataformas de streaming premium priorizan el contenido
                en Spatial Audio. Publicar en Dolby Atmos amplía el alcance, mejora la experiencia
                de escucha y posiciona la música en un estándar profesional de distribución.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Por qué Estudio Serena */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — POR QUÉ ESTUDIO SERENA
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-12 text-center">
              Estándar profesional.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
            {why.map((w, i) => (
              <FadeUp key={w.n} delay={i * 0.1}>
                <div className="bg-medianoche p-8 h-full border-t-2 border-senal">
                  <p className="font-mono text-[11px] tracking-[0.1em] text-senal mb-4">{w.n}</p>
                  <h3 className="font-syne text-[18px] font-extrabold text-crema leading-tight mb-3">
                    {w.title}
                  </h3>
                  <p className="font-dm text-[14px] font-light text-crema/50 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Créditos (reutiliza el slider de la home) */}
      <Credits />

      {/* Proceso */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — PROCESO
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-12 text-center">
              Cómo trabajamos.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {process.map((p, i) => (
              <FadeUp key={p.n} delay={i * 0.05}>
                <div className="bg-medianoche p-8 h-full">
                  <p className="font-syne text-[40px] font-extrabold text-senal/30 leading-none mb-4">
                    {p.n}
                  </p>
                  <h3 className="font-syne text-[16px] font-extrabold text-crema leading-tight mb-3">
                    {p.title}
                  </h3>
                  <p className="font-dm text-[13px] font-light text-crema/50 leading-relaxed text-justify">
                    {p.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Formulario */}
      <section id="cotizar" className="w-full border-t border-crema/[0.06]">
        <div className="max-w-2xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — COTIZACIÓN
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-2 text-center">
              Cotiza tu proyecto
            </h2>
            <p className="font-mono text-[13px] tracking-[0.08em] text-senal text-center mb-10">
              DESDE $250.000 CLP + IVA / SINGLE
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form
              action="https://formsubmit.co/infoestudioserena@gmail.com"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="_subject" value="Nueva cotización Dolby Atmos — estudioserena.cl" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <Field name="Nombre" placeholder="Nombre" required />
              <Field name="Artista o Sello" placeholder="Artista o Sello" required />
              <Field name="Cantidad de temas" placeholder="Cantidad de temas" type="number" required />
              <Field
                name="Cantidad de stems de tu mezcla"
                placeholder="Cantidad de stems de tu mezcla"
                type="number"
                required
              />
              <p className="font-mono text-[10px] tracking-[0.06em] text-senal/50 leading-relaxed -mt-1">
                Formato requerido: stems en .wav 48kHz / 24 bits + mezcla estéreo de referencia.
              </p>

              <textarea
                name="Mensaje"
                placeholder="Mensaje"
                rows={4}
                required
                className="bg-medianoche border border-crema/10 text-crema/80 font-dm text-[14px] px-4 py-3 focus:border-senal focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                className="font-mono text-[10px] tracking-[0.12em] bg-senal text-white px-6 py-3.5 mt-2 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow self-start"
              >
                ENVIAR COTIZACIÓN →
              </button>
            </form>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="font-dm text-[12px] font-light text-crema/30 mt-8 text-center">
              ¿Prefieres conversar? Escríbenos por{" "}
              <Link
                href="https://wa.me/56929603501"
                target="_blank"
                rel="noopener noreferrer"
                className="text-senal hover:text-senal/80 transition-colors"
              >
                WhatsApp
              </Link>
              .
            </p>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="bg-medianoche border border-crema/10 text-crema/80 font-dm text-[14px] px-4 py-3 focus:border-senal focus:outline-none transition-colors"
    />
  );
}
