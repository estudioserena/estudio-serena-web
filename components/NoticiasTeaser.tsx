import Link from "next/link";
import { getAllNoticias } from "@/lib/noticias";

export default function NoticiasTeaser() {
  const [ultima] = getAllNoticias();
  if (!ultima) return null;

  return (
    <div className="w-full bg-medianoche border-b border-senal/[0.14]">
      <Link
        href={`/noticias/${ultima.slug}`}
        className="group flex flex-wrap items-center justify-center gap-3 px-6 py-3 text-center hover:bg-profundo/30 transition-colors"
      >
        <span className="font-mono text-[9px] tracking-[0.14em] text-senal font-medium">
          NOTICIAS
        </span>
        <span className="font-dm text-[13px] font-light text-crema/75 truncate max-w-[480px]">
          {ultima.title}
        </span>
        <span className="font-mono text-[9px] tracking-[0.12em] text-senal group-hover:text-senal/80 transition-colors">
          LEER →
        </span>
      </Link>
    </div>
  );
}
