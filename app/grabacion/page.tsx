import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Grabación — Estudio Serena",
  description:
    "Cabina de grabación profesional de 8 m² con diseño acústico certificado en La Serena. Microfonía Universal Audio, Apollo X16 y Pro Tools 2026.",
};

const MESH = `
  linear-gradient(to top, rgba(7,9,15,0.9) 0%, rgba(7,9,15,0.4) 45%, rgba(7,9,15,0.55) 100%),
  radial-gradient(ellipse 80% 50% at 20% 60%, rgba(26,47,94,0.45) 0%, transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 20%, rgba(74,124,246,0.08) 0%, transparent 50%),
  rgba(7,9,15,0.62)
`;

const equipo = [
  "Microfonía Universal Audio (Townsend Labs Sphere L22 + otros)",
  "Preamplificador análogo · Focusrite ISA 828",
  "Interfaz UA Apollo X16",
  "Pro Tools 2026",
  "Monitoreo Neumann KH Series",
];

const idealPara = ["Voz", "Guitarra acústica y eléctrica", "Bajo", "Instrumentos acústicos"];

const WA_LINK =
  "https://wa.me/56929603501?text=" +
  encodeURIComponent("Hola, quiero agendar una sesión de grabación en Estudio Serena");

export default function GrabacionPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden grain pt-32">
        <Image src="/fotos/cabina.jpg" alt="Cabina de grabación Estudio Serena" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: MESH }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pb-16 md:pb-24">
          <p className="font-mono text-[9px] tracking-[0.22em] text-senal mb-6">
            CABINA PROFESIONAL · LA SERENA
          </p>
          <h1 className="font-syne text-[clamp(48px,8vw,104px)] font-extrabold leading-[0.92] text-crema mb-6">
            Grabación
          </h1>
          <p className="font-mono text-[14px] tracking-[0.06em] text-senal">
            $25.000 CLP + IVA / HORA
          </p>
        </div>
      </section>

      {/* El espacio */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — EL ESPACIO
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-12 text-center">
              Cabina diseñada acústicamente.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-3 gap-1 w-full mb-6">
              {["cabina_1.jpg", "cabina_2.jpg", "cabina_3.jpg"].map((src) => (
                <div key={src} className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`/fotos/${src}`}
                    alt="Cabina de grabación Estudio Serena"
                    fill
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed max-w-2xl mx-auto text-center">
              Cabina de grabación de 8 m² con diseño acústico profesional.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Equipamiento */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — EQUIPAMIENTO
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-12 text-center">
              Cadena de señal profesional.
            </h2>
          </FadeUp>
          <div className="max-w-2xl mx-auto flex flex-col gap-[2px]">
            {equipo.map((e, i) => (
              <FadeUp key={e} delay={i * 0.08}>
                <div className="bg-medianoche px-6 py-5 flex items-center gap-4">
                  <span className="font-mono text-[11px] text-senal/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-dm text-[15px] font-light text-crema/70">{e}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal para */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <FadeUp>
            <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
              — IDEAL PARA
            </p>
            <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-12 text-center">
              Cualquier fuente acústica.
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
            {idealPara.map((item, i) => (
              <FadeUp key={item} delay={i * 0.08}>
                <div className="bg-medianoche p-8 h-full flex items-center justify-center text-center min-h-[120px]">
                  <span className="font-syne text-[17px] font-extrabold text-crema/85">{item}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA principal WhatsApp */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 text-center">
          <FadeUp>
            <p className="font-mono text-[15px] tracking-[0.06em] text-senal mb-8">
              $25.000 CLP + IVA / HORA
            </p>
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[12px] tracking-[0.12em] bg-senal text-white px-10 py-5 hover:shadow-[0_0_32px_rgba(74,124,246,0.35)] transition-shadow"
            >
              AGENDAR POR WHATSAPP →
            </Link>
            <p className="font-dm text-[14px] font-light text-crema/45 leading-relaxed max-w-md mx-auto mt-10">
              Recibimos artistas de todo Chile. A pasos del centro de La Serena.
            </p>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
