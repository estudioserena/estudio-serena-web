import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-black border-t border-crema/5 mt-[2px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-12 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Col 1 — Brand */}
          <div>
            <img
              src="/logos/es-logo-blanco.png"
              alt="Estudio Serena"
              className="h-16 w-auto object-contain mix-blend-screen mb-4"
            />
            <p className="font-mono text-[8px] tracking-[0.1em] text-senal">
              DOLBY ATMOS MUSIC
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="font-mono text-[8px] tracking-[0.12em] text-crema/30 mb-4">
              SERVICIOS
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/atmos" className="font-dm text-[13px] font-light text-crema/50 hover:text-crema/70 transition-colors">
                Dolby Atmos Music
              </Link>
              <Link href="/servicios" className="font-dm text-[13px] font-light text-crema/50 hover:text-crema/70 transition-colors">
                Mix &amp; Master
              </Link>
              <Link href="/grabacion" className="font-dm text-[13px] font-light text-crema/50 hover:text-crema/70 transition-colors">
                Grabación
              </Link>
              <Link href="/blog" className="font-dm text-[13px] font-light text-crema/50 hover:text-crema/70 transition-colors">
                Blog Atmos Lab
              </Link>
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p className="font-mono text-[8px] tracking-[0.12em] text-crema/30 mb-4">
              CONTACTO
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:infoestudioserena@gmail.com" className="font-dm text-[13px] font-light text-crema/50 hover:text-crema/70 transition-colors">
                infoestudioserena@gmail.com
              </a>
              <a href="https://wa.me/56929603501" target="_blank" rel="noopener noreferrer" className="font-dm text-[13px] font-light text-crema/50 hover:text-crema/70 transition-colors">
                +56 9 2960 3501
              </a>
              <a href="https://www.instagram.com/estudio_serena/" target="_blank" rel="noopener noreferrer" className="font-dm text-[13px] font-light text-crema/50 hover:text-crema/70 transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @estudio_serena
              </a>
              <p className="font-dm text-[13px] font-light text-crema/35">
                La Serena, Chile
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-crema/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="font-mono text-[7.5px] tracking-[0.1em] text-crema/[0.16]">
            © 2026 ESTUDIO SERENA SPA
          </p>
          <p className="font-mono text-[7.5px] tracking-[0.1em] text-crema/[0.16]">
            ESTUDIOSERENA.CL
          </p>
        </div>
      </div>
    </footer>
  );
}
