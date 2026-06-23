import Image from "next/image";
import FadeUp from "./FadeUp";

export default function EscuchasInmersivas() {
  return (
    <section className="w-full border-b border-crema/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <FadeUp>
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
            ESCUCHAS INMERSIVAS
          </p>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema leading-tight text-center mb-6">
            Tu música preferida como nunca
            <br />
            antes la has escuchado.
          </h2>
          <p className="font-dm text-[15px] font-light text-crema/70 leading-relaxed max-w-2xl mx-auto text-center mb-14">
            Sesiones de escucha de discos completos en Dolby Atmos 7.1.4. Sala
            semi-oscura. 6 sillas. Experiencia única en la Región de Coquimbo.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-medianoche border-t-2 border-senal max-w-2xl mx-auto p-8 md:p-12 text-center">
            <Image
              src="/escuchas-inmersivas-dark-side.png"
              width={600}
              height={800}
              className="w-full object-cover mb-8"
              alt="The Dark Side of the Moon · Escuchas Inmersivas en Estudio Serena"
            />
            <h3 className="font-syne text-2xl md:text-3xl font-extrabold text-crema leading-tight mb-3">
              The Dark Side of the Moon
            </h3>
            <p className="font-mono text-[11px] tracking-[0.12em] text-senal mb-6">
              Pink Floyd · Dolby Atmos · 50th Anniversary
            </p>
            <p className="font-dm text-base font-light text-crema/70 mb-10">
              Sábado 11 de julio
            </p>

            <a
              href="https://www.portaldisc.com/evento/darksideofthemoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-syne text-sm font-bold tracking-wide bg-senal text-crema px-10 py-4 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
            >
              Comprar entradas
            </a>

            <p className="font-mono text-[10px] tracking-[0.08em] text-crema/60 leading-relaxed mt-6">
              $13.000 CLP · Cargo incluido · 18:00 y 19:30 hrs
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
