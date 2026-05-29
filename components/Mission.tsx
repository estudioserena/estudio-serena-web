import FadeUp from "./FadeUp";

export default function Mission() {
  return (
    <section className="w-full border-b border-crema/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <FadeUp>
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
            — MISIÓN
          </p>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight text-center">
            Transformando el sonido
            <br />
            en experiencias inmersivas.
          </h2>
        </FadeUp>
      </div>
    </section>
  );
}
