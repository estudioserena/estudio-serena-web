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
              ARQUITECTO · MÚSICO · PRODUCTOR MUSICAL · DOLBY ATMOS MIXER
            </p>
            <p className="font-dm text-[14px] font-light text-crema/[0.52] leading-relaxed max-w-lg text-justify">
              El sonido no solo se escucha, se habita. Esa es mi visión: diseñar
              experiencias donde el espacio, la música y la tecnología se
              encuentran. Mi propósito es convertir Estudio Serena en un centro
              de innovación sonora para y desde la Región de Coquimbo.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
