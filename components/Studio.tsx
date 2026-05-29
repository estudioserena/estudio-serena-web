import Image from "next/image";
import FadeUp from "./FadeUp";

const photos = {
  main: { src: "/fotos/sala_control.jpg", label: "SALA DE CONTROL · 15 M² · NEUMANN 7.1.4" },
  row2: [
    { src: "/fotos/parlantes.jpg", label: "MONITOREO" },
    { src: "/fotos/cabina.jpg", label: "CABINA DE GRABACIÓN · 8 M²" },
  ],
  row3: [
    { src: "/fotos/monitores.jpg", label: "SURROUND · KH 80 ×8" },
    { src: "/fotos/placa_dolby.jpg", label: "DOLBY ATMOS MUSIC DIRECTORY" },
  ],
};

function PhotoCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative overflow-hidden group aspect-video">
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover transition-transform duration-[400ms] group-hover:scale-[1.02]"
      />
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2" style={{ background: "rgba(7,9,15,0.70)" }}>
        <span className="font-mono text-[7.5px] tracking-[0.16em] text-crema/50">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Studio() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20">
      <FadeUp>
        <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
          — EL ESTUDIO
        </p>
        <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-10 text-center">
          Precisión en
          <br />
          cada metro cuadrado.
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="flex flex-col gap-[2px] mb-[2px]">
          {/* Row 1 — full width */}
          <PhotoCard src={photos.main.src} label={photos.main.label} />

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            {photos.row2.map((p) => (
              <PhotoCard key={p.src} src={p.src} label={p.label} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
            {photos.row3.map((p) => (
              <PhotoCard key={p.src} src={p.src} label={p.label} />
            ))}
          </div>
        </div>
      </FadeUp>
      </div>
    </section>
  );
}
