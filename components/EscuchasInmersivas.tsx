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
            <div className="bg-medianoche border-t-2 border-senal p-10 text-center flex flex-col items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.14em] text-senal">
                PRÓXIMAS FECHAS
              </span>
              <p className="font-dm text-[15px] font-light text-crema/60">
                Muy pronto anunciaremos nuevas sesiones de escucha inmersiva.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
