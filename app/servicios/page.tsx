import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Servicios — Estudio Serena",
  description:
    "Producción profesional en cualquier formato: Dolby Atmos Music, mezcla y masterización estéreo, y grabación de sesiones en La Serena.",
};

const MESH = `
  radial-gradient(ellipse 80% 50% at 20% 40%, rgba(26,47,94,0.45) 0%, transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 10%, rgba(74,124,246,0.10) 0%, transparent 50%),
  #07090F
`;

const atmosTiers = [
  { label: "Single", price: "DESDE $250.000 CLP + IVA" },
  { label: "EP (hasta 6 temas)", price: "DESDE $1.200.000 CLP + IVA" },
  { label: "Álbum (hasta 12 temas)", price: "DESDE $2.200.000 CLP + IVA" },
];

const mixTiers = [
  { label: "Single", price: "DESDE $180.000 CLP + IVA" },
  { label: "EP", price: "DESDE $750.000 CLP + IVA" },
  { label: "Álbum", price: "DESDE $1.400.000 CLP + IVA" },
];

export default function ServiciosPage() {
  return (
    <>
      <Nav />

      {/* Hero mínimo */}
      <section className="relative overflow-hidden grain pt-40 pb-20" style={{ background: MESH }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4">
            — SERVICIOS
          </p>
          <h1 className="font-syne text-[clamp(44px,7vw,88px)] font-extrabold leading-[0.95] text-crema mb-6">
            Servicios
          </h1>
          <p className="font-dm text-[16px] font-light text-crema/60 max-w-xl mx-auto">
            Producción profesional en cualquier formato.
          </p>
        </div>
      </section>

      {/* Dolby Atmos Music */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <div className="bg-medianoche p-8 md:p-12 border-t-2 border-senal">
              <p className="font-mono text-[8px] tracking-[0.14em] text-crema/30 mb-4">
                REMOTO O PRESENCIAL
              </p>
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-crema leading-tight mb-5">
                Dolby Atmos Music
              </h2>
              <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed max-w-2xl mb-8">
                Upmix profesional a formato inmersivo 7.1.4 para distribución en Apple Music
                Spatial Audio, TIDAL y plataformas de streaming premium. Mezcla realizada en
                sistema Neumann KH Series certificado. Entrega en ADM BWF lista para distribución.
                Trabajamos con artistas y equipos de todo el mundo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] mb-8">
                {atmosTiers.map((t) => (
                  <div key={t.label} className="bg-abismo/40 p-5">
                    <p className="font-dm text-[13px] text-crema/50 mb-2">{t.label}</p>
                    <p className="font-mono text-[12px] tracking-[0.06em] text-senal">{t.price}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/atmos"
                className="inline-block font-mono text-[10px] tracking-[0.12em] bg-senal text-white px-6 py-3 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
              >
                COTIZAR PROYECTO →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mix & Master estéreo */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <div className="bg-medianoche p-8 md:p-12 border-t-2 border-crema/[0.13]">
              <p className="font-mono text-[8px] tracking-[0.14em] text-crema/30 mb-4">
                REMOTO O PRESENCIAL
              </p>
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-crema leading-tight mb-5">
                Mix &amp; Master estéreo
              </h2>
              <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed max-w-2xl mb-8">
                Mezcla y masterización estéreo profesional. Flujo de trabajo remoto o presencial.
                Entregables listos para distribución digital en todas las plataformas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] mb-10">
                {mixTiers.map((t) => (
                  <div key={t.label} className="bg-abismo/40 p-5">
                    <p className="font-dm text-[13px] text-crema/50 mb-2">{t.label}</p>
                    <p className="font-mono text-[12px] tracking-[0.06em] text-senal">{t.price}</p>
                  </div>
                ))}
              </div>

              {/* Formulario inline simple */}
              <p className="font-mono text-[9px] tracking-[0.12em] text-crema/40 mb-4">
                SOLICITAR INFORMACIÓN
              </p>
              <form
                action="https://formsubmit.co/infoestudioserena@gmail.com"
                method="POST"
                className="flex flex-col gap-4 max-w-xl"
              >
                <input type="hidden" name="_subject" value="Consulta Mix & Master — estudioserena.cl" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <input
                  type="text"
                  name="Nombre"
                  placeholder="Nombre"
                  required
                  className="bg-abismo/40 border border-crema/10 text-crema/80 font-dm text-[14px] px-4 py-3 focus:border-senal focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required
                  className="bg-abismo/40 border border-crema/10 text-crema/80 font-dm text-[14px] px-4 py-3 focus:border-senal focus:outline-none transition-colors"
                />
                <textarea
                  name="Mensaje"
                  placeholder="Mensaje"
                  rows={4}
                  required
                  className="bg-abismo/40 border border-crema/10 text-crema/80 font-dm text-[14px] px-4 py-3 focus:border-senal focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="font-mono text-[10px] tracking-[0.12em] bg-senal text-white px-6 py-3.5 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow self-start"
                >
                  ENVIAR →
                </button>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Grabación de sesiones */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <div className="bg-medianoche p-8 md:p-12 border-t-2 border-crema/[0.07]">
              <p className="font-mono text-[8px] tracking-[0.14em] text-crema/30 mb-4">
                ESTUDIO EN LA SERENA
              </p>
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-crema leading-tight mb-5">
                Grabación de sesiones
              </h2>
              <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed max-w-2xl mb-8">
                Cabina profesional de 8 m² con diseño acústico certificado. Microfonía Universal
                Audio, interfaz Apollo X16 y Pro Tools 2026. Recibimos artistas de todo Chile.
              </p>

              <p className="font-mono text-[14px] tracking-[0.06em] text-senal mb-8">
                $25.000 CLP + IVA / HORA
              </p>

              <Link
                href="https://wa.me/56929603501"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[10px] tracking-[0.12em] bg-senal text-white px-6 py-3 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
              >
                AGENDAR POR WHATSAPP →
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-dm text-[12px] font-light text-crema/30 leading-relaxed mt-10 max-w-2xl">
              Precios referenciales. Cada proyecto se cotiza según requerimientos específicos.
              Todos los precios incluyen IVA.
            </p>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
