"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import FadeUp from "./FadeUp";

interface Credit {
  artist: string;
  title: string;
  type: string;
  year: string;
  appleId: string;
  trackId: string;
  link: string;
}

const credits: Credit[] = [
  {
    artist: "Saiko",
    title: '"Romance"',
    type: "SINGLE",
    year: "2026",
    appleId: "1867554600",
    trackId: "1867554603",
    link: "https://music.apple.com/cl/album/romance/1867554600?i=1867554603",
  },
  {
    artist: "Wankara de Chile",
    title: '"Incertidumbre Sinfónico"',
    type: "SINGLE",
    year: "2026",
    appleId: "1890031303",
    trackId: "1890031304",
    link: "https://music.apple.com/cl/album/incertidumbre-sinf%C3%B3nico/1890031303?i=1890031304",
  },
  {
    artist: "Improvincia",
    title: '"Mors Graffiti"',
    type: "SINGLE",
    year: "2026",
    appleId: "1888332432",
    trackId: "1888332437",
    link: "https://music.apple.com/cl/album/mors-graffiti/1888332432?i=1888332437",
  },
  {
    artist: "Tuna San Bartolomé",
    title: "Cuerdas Nuevas Sonidos Eternos",
    type: "ÁLBUM",
    year: "2025",
    appleId: "1859193436",
    trackId: "1859193439",
    link: "https://music.apple.com/cl/album/doce-cascabeles/1859193436?i=1859193439",
  },
  {
    artist: "Purple Tone Flower",
    title: '"I Wanna Make It"',
    type: "SINGLE",
    year: "2020",
    appleId: "1838354316",
    trackId: "1838354318",
    link: "https://music.apple.com/cl/album/i-wanna-make-it/1838354316?i=1838354318",
  },
];

export default function Credits() {
  const [current, setCurrent] = useState(0);
  const [artworks, setArtworks] = useState<Record<string, string>>({});

  useEffect(() => {
    credits.forEach(async (c) => {
      try {
        const res = await fetch(`/api/artwork?id=${c.appleId}`);
        const data = await res.json();
        if (data.url) {
          setArtworks((prev) => ({ ...prev, [c.appleId]: data.url }));
        }
      } catch {
        // fallback — no artwork
      }
    });
  }, []);

  const next = useCallback(() => setCurrent((p) => (p + 1) % credits.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + credits.length) % credits.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const c = credits[current];
  const artUrl = artworks[c.appleId] ?? null;

  return (
    <section className="w-full border-t border-crema/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <FadeUp>
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4 text-center">
            — CRÉDITOS VERIFICADOS
          </p>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold text-crema/[0.82] leading-tight mb-2 text-center">
            Apple Music
            <br />
            Spatial Audio.
          </h2>
          <p className="font-mono text-[8px] tracking-[0.1em] text-crema/30 mb-10 text-center">
            DOLBY ATMOS 7.1.4
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-6 min-h-[140px] text-center">
              {/* Artwork */}
              <div className="w-[110px] h-[110px] bg-medianoche shrink-0 overflow-hidden">
                {artUrl ? (
                  <Image
                    src={artUrl}
                    alt={`${c.artist} - ${c.title}`}
                    width={110}
                    height={110}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-mono text-[8px] text-crema/20">...</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <h3 className="font-syne text-[20px] font-extrabold text-crema mb-1">
                  {c.artist}
                </h3>
                <p className="font-syne text-[16px] text-senal mb-2">{c.title}</p>
                <p className="font-mono text-[8px] tracking-[0.1em] text-crema/30 mb-3">
                  {c.type} · {c.year}
                </p>
                <p className="font-mono text-[8px] tracking-[0.1em] text-crema/25 mb-1">
                  ROL: DOLBY ATMOS MIXER
                </p>
                <p className="font-mono text-[8px] tracking-[0.1em] text-crema/25 mb-3">
                  ESTADO: <span className="text-green-400">EN LÍNEA</span>
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[9px] tracking-[0.1em] text-senal hover:text-senal/80 transition-colors"
                >
                  ESCUCHAR EN APPLE MUSIC →
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="text-crema/30 hover:text-crema/60 transition-colors"
                aria-label="Anterior"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4l-6 6 6 6" />
                </svg>
              </button>
              <div className="flex gap-2">
                {credits.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-senal" : "bg-crema/15"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="text-crema/30 hover:text-crema/60 transition-colors"
                aria-label="Siguiente"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 4l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
