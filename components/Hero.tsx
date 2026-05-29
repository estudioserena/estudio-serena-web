"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden grain">
      {/* Background photo */}
      <Image
        src="/fotos/hero.jpg"
        alt="Estudio Serena sala de control"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay + gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to top, rgba(7,9,15,0.85) 0%, rgba(7,9,15,0.3) 50%, rgba(7,9,15,0.5) 100%),
            radial-gradient(ellipse 80% 50% at 20% 60%, rgba(26,47,94,0.45) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(74,124,246,0.08) 0%, transparent 50%),
            rgba(7,9,15,0.62)
          `,
        }}
      />

      {/* Grain overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/grain.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
          opacity: 0.035,
          pointerEvents: "none",
          zIndex: 3,
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-20 pt-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        {/* Left */}
        <motion.div
          className="max-w-[560px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-[9px] tracking-[0.22em] text-senal mb-6">
            LA SERENA · CHILE · REGIÓN DE COQUIMBO
          </p>
          <h1 className="font-syne text-[clamp(52px,8vw,108px)] font-extrabold leading-[0.88] text-crema mb-6">
            DOLBY
            <br />
            ATMOS
            <br />
            MUSIC
          </h1>
          <p className="font-dm text-[15px] font-light text-crema/60 mb-8 max-w-md">
            Primer estudio acreditado Dolby Atmos Music del norte de Chile.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/atmos"
              className="font-mono text-[9px] tracking-[0.12em] bg-senal text-white px-6 py-3 hover:shadow-[0_0_24px_rgba(74,124,246,0.25)] transition-shadow"
            >
              EXPLORAR ATMOS
            </Link>
            <Link
              href="#contacto"
              className="font-mono text-[9px] tracking-[0.12em] border border-crema/20 text-crema/70 px-6 py-3 hover:border-crema/40 transition-colors"
            >
              AGENDAR SESIÓN
            </Link>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="border border-senal/30 p-[14px_18px] text-right max-w-[220px] self-end"
          style={{ background: "rgba(13,26,54,0.88)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-mono text-[7.5px] tracking-[0.12em] text-crema/35 mb-0.5">
            LISTADO EN
          </p>
          <p className="font-mono text-[8.5px] tracking-[0.08em] text-senal leading-snug">
            DOLBY ATMOS MUSIC
            <br />
            DIRECTORY
          </p>
          <div className="border-t border-senal/20 my-2" />
          <p className="font-mono text-[7.5px] tracking-[0.12em] text-crema/35 mb-0.5">
            CRÉDITOS VERIFICADOS
          </p>
          <p className="font-mono text-[8.5px] tracking-[0.08em] text-senal leading-snug">
            APPLE MUSIC
            <br />
            SPATIAL AUDIO
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="rgba(240,237,230,0.3)" strokeWidth="1.5">
          <path d="M8 4v16M2 14l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}
