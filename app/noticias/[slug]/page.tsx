import type { Metadata } from "next";
import { Children, isValidElement } from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllNoticias, getNoticiaBySlug } from "@/lib/noticias";

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

function MdxImage({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <figure className="my-10 -mx-6 md:mx-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={alt} className="w-full h-auto" {...props} />
      {alt && (
        <figcaption className="font-mono text-[10px] tracking-[0.12em] text-crema/40 mt-3 text-center px-6 md:px-0">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-crema leading-tight text-left mt-12 mb-5" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-syne text-xl font-extrabold text-crema leading-tight text-left mt-8 mb-4" {...props} />
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const childArray = Children.toArray(children);
    const isImageOnly =
      childArray.length === 1 &&
      isValidElement(childArray[0]) &&
      childArray[0].type === MdxImage;
    if (isImageOnly) return <>{children}</>;
    return (
      <p className="font-dm text-[17px] font-light leading-[1.8] text-crema/85 mb-6" {...props}>
        {children}
      </p>
    );
  },
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-senal hover:text-senal/80 underline underline-offset-2 transition-colors" {...props} />
  ),
  img: MdxImage,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-6 flex flex-col gap-2 font-dm text-[17px] font-light leading-[1.8] text-crema/85 marker:text-senal" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-6 flex flex-col gap-2 font-dm text-[17px] font-light leading-[1.8] text-crema/85 marker:text-senal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="pl-1" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-normal text-crema" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-[14px] text-senal bg-medianoche px-1.5 py-0.5 rounded" {...props} />
  ),
};

export function generateStaticParams() {
  return getAllNoticias().map((noticia) => ({ slug: noticia.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const noticia = getNoticiaBySlug(slug);
  if (!noticia) return { title: "Noticia no encontrada — Estudio Serena" };

  const url = `https://www.estudioserena.cl/noticias/${noticia.slug}`;
  return {
    title: `${noticia.title} — Noticias · Estudio Serena`,
    description: noticia.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: noticia.title,
      description: noticia.excerpt,
      url,
      type: "article",
      publishedTime: noticia.date,
      authors: ["Estudio Serena"],
    },
  };
}

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const noticia = getNoticiaBySlug(slug);
  if (!noticia) notFound();

  return (
    <>
      <Nav />

      {/* Header */}
      <section className="relative overflow-hidden grain pt-40 pb-16" style={{ background: MESH }}>
        <div className="relative z-10 max-w-[720px] mx-auto px-6">
          <span className="inline-block font-mono text-[9px] tracking-[0.14em] text-senal border border-senal/30 px-3 py-1 mb-6">
            {noticia.category}
          </span>
          <h1 className="font-syne text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] text-crema mb-6">
            {noticia.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.1em] text-crema/50">
              Estudio Serena
            </span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-crema/30">
              {formatDate(noticia.date)}
            </span>
          </div>
        </div>
      </section>

      {/* Cuerpo MDX */}
      <article className="w-full border-t border-crema/[0.06]">
        <div className="blog-content max-w-[720px] mx-auto px-6 py-16 text-justify">
          <MDXRemote source={noticia.content} components={mdxComponents} />
        </div>
      </article>

      <Footer />
    </>
  );
}
