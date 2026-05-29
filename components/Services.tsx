import Link from "next/link";
import FadeUp from "./FadeUp";

const services = [
  {
    tag: "REMOTO O PRESENCIAL",
    name: "DOLBY ATMOS\nMUSIC",
    desc: "Upmix profesional a formato 7.1.4 para distribución en Apple Music Spatial Audio, TIDAL y plataformas de streaming premium. Trabajamos con artistas y equipos de todo el mundo.",
    price: "DESDE $250.000 CLP / SINGLE",
    cta: "COTIZAR PROYECTO →",
    href: "/atmos",
    accent: true,
    ctaBg: true,
  },
  {
    tag: "REMOTO O PRESENCIAL",
    name: "MIX &\nMASTER",
    desc: "Mezcla y masterización estéreo profesional. Flujo de trabajo remoto o presencial. Entregables listos para distribución digital.",
    price: "DESDE $180.000 CLP",
    cta: "VER PRECIOS →",
    href: "/servicios",
    accent: false,
    ctaBg: false,
  },
  {
    tag: "ESTUDIO EN LA SERENA",
    name: "GRABACIÓN",
    desc: "Cabina profesional con diseño acústico certificado. Recibimos artistas de todo Chile.",
    price: "$25.000 CLP / HORA",
    cta: "WHATSAPP →",
    href: "https://wa.me/56929603501",
    accent: false,
    ctaBg: false,
  },
];

export default function Services() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <FadeUp>
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
            — SERVICIOS
          </p>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-10 text-center">
            Producción profesional
            <br />
            en cualquier formato.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr_1fr] gap-[2px]">
          {services.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className="bg-medianoche p-6 md:p-8 flex flex-col justify-between h-full"
                style={{
                  borderTop: s.accent
                    ? "2px solid #4A7CF6"
                    : i === 1
                    ? "2px solid rgba(240,237,230,0.13)"
                    : "2px solid rgba(240,237,230,0.07)",
                }}
              >
                <div>
                  <p className="font-mono text-[7.5px] tracking-[0.14em] text-crema/30 mb-4">
                    {s.tag}
                  </p>
                  <h3 className="font-syne text-[22px] md:text-[26px] font-extrabold text-crema leading-tight mb-4 whitespace-pre-line">
                    {s.name}
                  </h3>
                  <p className="font-dm text-[13px] font-light text-crema/45 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.06em] text-senal mb-1">
                    {s.price}
                  </p>
                  <p className="font-mono text-[7.5px] tracking-[0.1em] text-crema/25 mb-5">
                    PRECIO + IVA
                  </p>
                  <Link
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={
                      s.ctaBg
                        ? "inline-block font-mono text-[9px] tracking-[0.1em] bg-senal text-white px-5 py-2.5 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
                        : "inline-block font-mono text-[9px] tracking-[0.1em] text-senal hover:text-senal/80 transition-colors"
                    }
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
