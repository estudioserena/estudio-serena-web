import Image from "next/image";
import FadeUp from "./FadeUp";

const sesion = {
  src: "/escuchas-inmersivas-ado.png",
  alt: "Playlist Especial — Ado · Escuchas Inmersivas en Estudio Serena",
  titulo: "Playlist Especial — Ado",
  meta: "Dolby Atmos",
  botones: [
    {
      texto: "Sábado 12 de Septiembre · 18:00 hrs",
      link: "https://www.portaldisc.com/evento/adodolbyatmos12septiembre",
    },
  ],
};

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
          <FadeUp key={sesion.titulo}>
            <div className="bg-medianoche border-t-2 border-senal p-6 md:p-8 text-center h-full flex flex-col">
              <Image
                src={sesion.src}
                width={600}
                height={800}
                className="w-full object-cover mb-6"
                alt={sesion.alt}
              />
              <h3 className="font-syne text-lg md:text-xl lg:text-sm font-extrabold text-crema leading-tight mb-2 line-clamp-2 min-h-[2.6em]">
                {sesion.titulo}
              </h3>
              <p className="font-mono text-[11px] tracking-[0.12em] text-senal mb-6">
                {sesion.meta}
              </p>
              <div className="mt-auto flex flex-col sm:flex-row gap-3 justify-center">
                {sesion.botones.map((boton) => (
                  <a
                    key={boton.texto}
                    href={boton.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-block font-syne text-sm font-bold tracking-wide bg-senal text-crema px-6 py-3 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
                  >
                    {boton.texto}
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
