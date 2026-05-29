import Image from "next/image";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section className="w-full border-t border-crema/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <FadeUp>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <div className="w-[160px] h-[220px] overflow-hidden mb-8">
              <Image
                src="/fotos/mauricio.png"
                alt="Mauricio Flores"
                width={160}
                height={220}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(15%)" }}
              />
            </div>
            <h3 className="font-syne text-[24px] font-extrabold text-crema mb-2">
              Mauricio Flores
            </h3>
            <p className="font-mono text-sm md:text-base tracking-widest font-medium text-senal leading-relaxed mb-4">
              GUITARRISTA · BAJISTA · PRODUCTOR MUSICAL · DISEÑADOR SONORO · DOLBY ATMOS MIXER
            </p>
            <p className="font-dm text-[14px] font-light text-crema/[0.52] leading-relaxed max-w-lg text-justify">
              Más de 20 años de trayectoria en la música independiente como
              guitarrista, bajista, productor musical y diseñador sonoro para
              teatro. Dolby Atmos Mixer avalado por el Dolby Institute. Director
              del único estudio listado en el Dolby Atmos Music Directory en la
              Región de Coquimbo. Créditos verificados en Apple Music Spatial
              Audio.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
