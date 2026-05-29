import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Studio from "@/components/Studio";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "El estudio — Estudio Serena",
  description:
    "Mauricio Flores, Dolby Atmos Mixer avalado por el Dolby Institute. El único estudio listado en el Dolby Atmos Music Directory en la Región de Coquimbo.",
};

const MESH = `
  radial-gradient(ellipse 80% 50% at 20% 40%, rgba(26,47,94,0.45) 0%, transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 10%, rgba(74,124,246,0.10) 0%, transparent 50%),
  #07090F
`;

const credenciales = [
  ["Dolby Atmos Music Directory", "Único estudio listado en la Región de Coquimbo"],
  ["Dolby Atmos Mixer", "Avalado por el Dolby Institute"],
  ["Apple Music Spatial Audio", "Créditos verificados"],
  ["Diseño acústico", "Ing. Gonzalo Sepúlveda"],
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero mínimo */}
      <section className="relative overflow-hidden grain pt-40 pb-20" style={{ background: MESH }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4">
            — EL ESTUDIO
          </p>
          <h1 className="font-syne text-[clamp(44px,7vw,88px)] font-extrabold leading-[0.95] text-crema">
            El estudio
          </h1>
        </div>
      </section>

      {/* Mauricio Flores */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-12 text-center">
              — DIRECTOR
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-14 max-w-4xl mx-auto items-start">
            <FadeUp>
              <div className="w-full max-w-[260px] aspect-[3/4] overflow-hidden mx-auto">
                <Image
                  src="/fotos/mauricio.png"
                  alt="Mauricio Flores"
                  width={260}
                  height={347}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(15%)" }}
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-crema mb-4">
                Mauricio Flores
              </h2>
              <p className="text-sm md:text-base tracking-widest font-medium text-senal font-mono leading-relaxed mb-6">
                GUITARRISTA · BAJISTA · PRODUCTOR MUSICAL · DISEÑADOR SONORO · DOLBY ATMOS MIXER
              </p>
              <p className="font-dm text-[15px] font-light text-crema/[0.55] leading-relaxed">
                Más de 20 años de trayectoria en la música independiente como guitarrista,
                bajista, productor musical y diseñador sonoro para teatro. Dolby Atmos Mixer
                avalado por el Dolby Institute. Director del único estudio listado en el Dolby
                Atmos Music Directory en la Región de Coquimbo. Créditos verificados en Apple
                Music Spatial Audio.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* El espacio — galería reutilizada */}
      <Studio />

      {/* Credenciales */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — CREDENCIALES
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-12 text-center">
              Acreditaciones.
            </h2>
          </FadeUp>
          <div className="max-w-3xl mx-auto flex flex-col">
            {credenciales.map(([title, detail], i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 py-5 border-b border-crema/[0.08]">
                  <span className="font-syne text-[17px] font-extrabold text-crema">{title}</span>
                  <span className="font-dm text-[14px] font-light text-crema/45 sm:text-right">
                    {detail}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-12">
              — CONTACTO
            </p>
            <div className="flex flex-col gap-4 items-center">
              <a
                href="mailto:infoestudioserena@gmail.com"
                className="font-dm text-[16px] font-light text-crema/70 hover:text-crema transition-colors"
              >
                infoestudioserena@gmail.com
              </a>
              <Link
                href="https://wa.me/56929603501"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-[16px] font-light text-crema/70 hover:text-crema transition-colors"
              >
                +56 9 2960 3501
              </Link>
              <Link
                href="https://www.instagram.com/estudio_serena/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-[16px] font-light text-crema/70 hover:text-crema transition-colors"
              >
                @estudio_serena
              </Link>
              <p className="font-dm text-[16px] font-light text-crema/40">La Serena, Chile</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Documentación — Ficha técnica descargable */}
      <section className="w-full py-16 px-6" style={{ backgroundColor: "#0D1A36" }}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4">
              — DOCUMENTACIÓN
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold text-crema/[0.82] leading-tight mb-6">
              Especificaciones técnicas completas
            </h2>
            <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed max-w-xl mx-auto mb-10">
              Descarga la ficha técnica del estudio con toda la información de equipamiento,
              credenciales y créditos verificados.
            </p>
            <a
              href="/EstudioSerena_FichaTecnica_2026.pdf"
              download
              className="inline-block font-mono text-[12px] tracking-[0.14em] bg-senal text-white px-10 py-5 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
            >
              DESCARGAR FICHA TÉCNICA →
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
