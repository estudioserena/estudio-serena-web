import Image from "next/image";
import FadeUp from "./FadeUp";

type Sesion = {
  src: string;
  alt: string;
  titulo: string;
  meta: string;
  hora: string;
  link: string;
};

type Dia = {
  fecha: string;
  sesiones: Sesion[];
};

const dias: Dia[] = [
  {
    fecha: "Sábado 5 de Diciembre",
    sesiones: [
      {
        src: "/escuchas-inmersivas-abbey-road-5-diciembre.webp",
        alt: "Abbey Road · The Beatles · Escuchas Inmersivas en Estudio Serena, sábado 5 de diciembre",
        titulo: "Abbey Road",
        meta: "The Beatles · Dolby Atmos",
        hora: "18:00",
        link: "https://www.portaldisc.com/evento/abbeyroad5dic",
      },
      {
        src: "/escuchas-inmersivas-the-dark-side-5-diciembre.png",
        alt: "The Dark Side of the Moon · Pink Floyd · Escuchas Inmersivas en Estudio Serena, sábado 5 de diciembre",
        titulo: "The Dark Side of the Moon",
        meta: "Pink Floyd · Dolby Atmos",
        hora: "19:30",
        link: "https://www.portaldisc.com/evento/darksideofthemoon5dic",
      },
    ],
  },
  {
    fecha: "Sábado 19 de Diciembre",
    sesiones: [
      {
        src: "/escuchas-inmersivas-hit-me-hard-and-soft-19-diciembre.png",
        alt: "Hit Me Hard and Soft · Billie Eilish · Escuchas Inmersivas en Estudio Serena, sábado 19 de diciembre",
        titulo: "Hit Me Hard and Soft",
        meta: "Billie Eilish · Dolby Atmos",
        hora: "18:00",
        link: "https://www.portaldisc.com/evento/hitmehardandsoft",
      },
      {
        src: "/escuchas-inmersivas-dawn-fm-19-diciembre.webp",
        alt: "Dawn FM · The Weeknd · Escuchas Inmersivas en Estudio Serena, sábado 19 de diciembre",
        titulo: "Dawn FM",
        meta: "The Weeknd · Dolby Atmos",
        hora: "19:30",
        link: "https://www.portaldisc.com/evento/dawnfm19dic",
      },
    ],
  },
];

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
          <p className="font-dm text-[15px] font-light text-crema/70 leading-relaxed max-w-2xl mx-auto text-center mb-4">
            Sesiones de escucha de discos completos en Dolby Atmos 7.1.4. Sala
            semi-oscura. 6 sillas. Experiencia única en la Región de Coquimbo.
          </p>
          <p className="font-mono text-[11px] tracking-[0.12em] text-senal text-center mb-14">
            6 CUPOS POR FUNCIÓN · $13.000 CLP · CARGO INCLUIDO
          </p>
        </FadeUp>

        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          {dias.map((dia) => (
            <div key={dia.fecha}>
              <FadeUp>
                <h3 className="font-mono text-sm tracking-widest text-crema/80 text-center uppercase mb-8">
                  {dia.fecha}
                </h3>
              </FadeUp>
              <div className="flex flex-wrap justify-center gap-6">
                {dia.sesiones.map((sesion, i) => (
                  <FadeUp
                    key={sesion.link}
                    delay={i * 0.1}
                    className="w-full sm:w-[calc(50%-12px)]"
                  >
                    <div className="bg-medianoche border-t-2 border-senal p-6 md:p-8 text-center h-full flex flex-col">
                      <Image
                        src={sesion.src}
                        width={1080}
                        height={1350}
                        sizes="(min-width: 768px) 320px, (min-width: 640px) 45vw, 90vw"
                        className="w-full h-auto mb-6"
                        alt={sesion.alt}
                      />
                      <h4 className="font-syne text-lg md:text-xl lg:text-sm font-extrabold text-crema leading-tight mb-2 line-clamp-2 min-h-[2.6em]">
                        {sesion.titulo}
                      </h4>
                      <p className="font-mono text-[11px] tracking-[0.12em] text-senal mb-6">
                        {sesion.meta}
                      </p>
                      <div className="mt-auto flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href={sesion.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-block font-syne text-sm font-bold tracking-wide bg-senal text-crema px-6 py-3 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
                        >
                          Entradas · {sesion.hora} hrs
                        </a>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
