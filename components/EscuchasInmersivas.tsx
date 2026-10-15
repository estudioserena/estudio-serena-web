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
    fecha: "Jueves 22 de Octubre",
    sesiones: [
      {
        src: "/escuchas-inmersivas-wish-you-were-here.webp",
        alt: "Wish You Were Here · Pink Floyd · Escuchas Inmersivas en Estudio Serena",
        titulo: "Wish You Were Here",
        meta: "Pink Floyd · Dolby Atmos",
        hora: "19:00",
        link: "https://www.portaldisc.com/evento/wishyouwerehere",
      },
      {
        src: "/escuchas-inmersivas-io-peter-gabriel.webp",
        alt: "I/O · Peter Gabriel · Escuchas Inmersivas en Estudio Serena",
        titulo: "I/O",
        meta: "Peter Gabriel · Dolby Atmos",
        hora: "20:30",
        link: "https://www.portaldisc.com/evento/petergabriel",
      },
    ],
  },
  {
    fecha: "Viernes 23 de Octubre",
    sesiones: [
      {
        src: "/escuchas-inmersivas-dark-side-of-the-moon.png",
        alt: "Dark Side of the Moon · Pink Floyd · Escuchas Inmersivas en Estudio Serena",
        titulo: "Dark Side of the Moon",
        meta: "Pink Floyd · Dolby Atmos",
        hora: "19:00",
        link: "https://www.portaldisc.com/evento/darkside",
      },
      {
        src: "/escuchas-inmersivas-random-access-memories.png",
        alt: "Random Access Memories · Daft Punk · Escuchas Inmersivas en Estudio Serena",
        titulo: "Random Access Memories",
        meta: "Daft Punk · Dolby Atmos",
        hora: "20:30",
        link: "https://www.portaldisc.com/evento/daftpunk23octubre",
      },
    ],
  },
  {
    fecha: "Sábado 24 de Octubre",
    sesiones: [
      {
        src: "/escuchas-inmersivas-arirang-bts.webp",
        alt: "Arirang · BTS · Escuchas Inmersivas en Estudio Serena",
        titulo: "Arirang",
        meta: "BTS · Dolby Atmos",
        hora: "16:30",
        link: "https://www.portaldisc.com/evento/arirangbts",
      },
      {
        src: "/escuchas-inmersivas-a-rush-of-blood-to-the-head.png",
        alt: "A Rush of Blood to the Head · Coldplay · Escuchas Inmersivas en Estudio Serena",
        titulo: "A Rush of Blood to the Head",
        meta: "Coldplay · Dolby Atmos",
        hora: "18:00",
        link: "https://www.portaldisc.com/evento/coldplay",
      },
      {
        src: "/escuchas-inmersivas-ten-pearl-jam.webp",
        alt: "Ten · Pearl Jam · Escuchas Inmersivas en Estudio Serena",
        titulo: "Ten",
        meta: "Pearl Jam · Dolby Atmos",
        hora: "19:30",
        link: "https://www.portaldisc.com/evento/pearljamten",
      },
    ],
  },
  {
    fecha: "Domingo 25 de Octubre",
    sesiones: [
      {
        src: "/escuchas-inmersivas-happier-than-ever.webp",
        alt: "Happier Than Ever · Billie Eilish · Escuchas Inmersivas en Estudio Serena",
        titulo: "Happier Than Ever",
        meta: "Billie Eilish · Dolby Atmos",
        hora: "16:30",
        link: "https://www.portaldisc.com/evento/happierthanever",
      },
      {
        src: "/escuchas-inmersivas-rubber-soul.webp",
        alt: "Rubber Soul · The Beatles · Escuchas Inmersivas en Estudio Serena",
        titulo: "Rubber Soul",
        meta: "The Beatles · Dolby Atmos",
        hora: "18:00",
        link: "https://www.portaldisc.com/evento/rubbersoul",
      },
      {
        src: "/escuchas-inmersivas-bad-michael-jackson.webp",
        alt: "Bad · Michael Jackson · Escuchas Inmersivas en Estudio Serena",
        titulo: "Bad",
        meta: "Michael Jackson · Dolby Atmos",
        hora: "19:30",
        link: "https://www.portaldisc.com/evento/badmichaeljackson",
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

        <div className="max-w-6xl mx-auto flex flex-col gap-16">
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
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <div className="bg-medianoche border-t-2 border-senal p-6 md:p-8 text-center h-full flex flex-col">
                      <Image
                        src={sesion.src}
                        width={1080}
                        height={1350}
                        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
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
