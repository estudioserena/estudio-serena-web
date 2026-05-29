import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Atmos Lab — Blog · Estudio Serena",
  description:
    "Atmos Lab: artículos sobre Dolby Atmos Music, audio inmersivo, mezcla, masterización y producción musical desde Estudio Serena.",
};

const MESH = `
  radial-gradient(ellipse 80% 50% at 20% 40%, rgba(26,47,94,0.45) 0%, transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 10%, rgba(74,124,246,0.10) 0%, transparent 50%),
  #07090F
`;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />

      {/* Hero mínimo */}
      <section className="relative overflow-hidden grain pt-40 pb-20" style={{ background: MESH }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <p className="font-mono text-sm tracking-widest text-senal font-medium mb-4">
            — ATMOS LAB
          </p>
          <h1 className="font-syne text-[clamp(44px,7vw,88px)] font-extrabold leading-[0.95] text-crema mb-6">
            Atmos Lab
          </h1>
          <p className="font-dm text-[16px] font-light text-crema/60 max-w-xl mx-auto">
            Notas sobre audio inmersivo, mezcla y producción musical.
          </p>
        </div>
      </section>

      {/* Listado */}
      <section className="w-full border-t border-crema/[0.06]">
        <div className="max-w-5xl mx-auto px-6 lg:px-16 py-20">
          {posts.length === 0 ? (
            <p className="font-dm text-[15px] font-light text-crema/40 text-center">
              Pronto publicaremos los primeros artículos.
            </p>
          ) : (
            <div className="flex flex-col gap-[2px]">
              {posts.map((post, i) => (
                <FadeUp key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-medianoche p-8 md:p-10 hover:bg-profundo/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-5">
                      <span className="font-mono text-[9px] tracking-[0.14em] text-senal border border-senal/30 px-3 py-1">
                        {post.category}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.1em] text-crema/30">
                        {formatDate(post.date)}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.1em] text-crema/30">
                        {post.readTime} DE LECTURA
                      </span>
                    </div>
                    <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-crema leading-tight mb-4 group-hover:text-crema/90 transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-dm text-[15px] font-light text-crema/55 leading-relaxed max-w-2xl mb-5">
                      {post.excerpt}
                    </p>
                    <span className="font-mono text-[10px] tracking-[0.12em] text-senal group-hover:text-senal/80 transition-colors">
                      LEER ARTÍCULO →
                    </span>
                  </Link>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
