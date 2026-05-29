"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "ATMOS", href: "/atmos" },
  { label: "SERVICIOS", href: "/servicios" },
  { label: "GRABACIÓN", href: "/grabacion" },
  { label: "BLOG", href: "/blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-[13px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logos/es-logo-blanco.png"
              alt="Estudio Serena"
              className="h-10 w-auto object-contain mix-blend-screen"
            />
            <span className="font-syne text-[11px] tracking-[0.18em] text-crema font-extrabold">
              ESTUDIO SERENA
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) =>
              l.href ? (
                <Link
                  key={l.label}
                  href={l.href}
                  className="font-mono text-[9px] tracking-[0.12em] text-crema/[0.38] hover:text-crema/70 transition-colors"
                >
                  {l.label}
                </Link>
              ) : (
                <span
                  key={l.label}
                  className="font-mono text-[9px] tracking-[0.12em] text-crema/[0.38] cursor-default"
                >
                  {l.label}
                </span>
              )
            )}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/56929603501?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20en%20Estudio%20Serena"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex font-mono text-[9px] tracking-[0.12em] bg-senal text-white px-4 py-2 hover:bg-senal/90 transition-colors"
            >
              AGENDAR →
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-crema p-1"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8">
          {links.map((l) =>
            l.href ? (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[11px] tracking-[0.16em] text-crema/60 hover:text-crema transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <span
                key={l.label}
                className="font-mono text-[11px] tracking-[0.16em] text-crema/30 cursor-default"
              >
                {l.label}
              </span>
            )
          )}
          <a
            href="https://wa.me/56929603501?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20en%20Estudio%20Serena"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-mono text-[11px] tracking-[0.12em] bg-senal text-white px-6 py-3 mt-4"
          >
            AGENDAR →
          </a>
        </div>
      )}
    </>
  );
}
