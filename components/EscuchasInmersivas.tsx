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

        <div className="grid grid-cols-1 max-w-sm mx-auto">
          <FadeUp>
            <div className="bg-medianoche border-t-2 border-senal p-6 md:p-8 text-center h-full flex flex-col">
              <div className="relative mb-6">
                <Image
                  src="/escuchas-inmersivas-the-dark-side-14-noviembre.png"
                  width={1080}
                  height={1350}
                  sizes="(min-width: 640px) 320px, 90vw"
                  className="w-full h-auto"
                  alt="The Dark Side of the Moon · Pink Floyd · Escuchas Inmersivas en Estudio Serena, sábado 14 de noviembre"
                />
                <span className="absolute top-3 right-3 bg-abismo/90 border border-senal text-senal font-mono text-[11px] tracking-[0.14em] px-3 py-1">
                  AGOTADO
                </span>
              </div>
              <h3 className="font-syne text-lg md:text-xl lg:text-sm font-extrabold text-crema leading-tight mb-2">
                The Dark Side of the Moon
              </h3>
              <p className="font-mono text-[11px] tracking-[0.12em] text-senal mb-6">
                Pink Floyd · Dolby Atmos
              </p>
              <a
                href="https://www.portaldisc.com/evento/darksideofthemoon14nov"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block font-syne text-sm font-bold tracking-wide border border-crema/20 text-crema/70 px-6 py-3 hover:border-senal hover:text-crema transition-colors"
              >
                Sábado 14 de Noviembre · Agotado
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
