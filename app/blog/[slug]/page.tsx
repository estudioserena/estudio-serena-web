import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

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

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-syne text-2xl md:text-3xl font-extrabold text-crema leading-tight mt-12 mb-5" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-syne text-xl font-extrabold text-crema leading-tight mt-8 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-dm text-[17px] font-light leading-[1.8] text-crema/85 mb-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-senal hover:text-senal/80 underline underline-offset-2 transition-colors" {...props} />
  ),
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
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado — Estudio Serena" };

  const url = `https://www.estudioserena.cl/blog/${post.slug}`;
  return {
    title: `${post.title} — Atmos Lab · Estudio Serena`,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />

      {/* Header */}
      <section className="relative overflow-hidden grain pt-40 pb-16" style={{ background: MESH }}>
        <div className="relative z-10 max-w-[720px] mx-auto px-6">
          <span className="inline-block font-mono text-[9px] tracking-[0.14em] text-senal border border-senal/30 px-3 py-1 mb-6">
            {post.category}
          </span>
          <h1 className="font-syne text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] text-crema mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.1em] text-crema/50">
              {post.author}
            </span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-crema/30">
              {formatDate(post.date)} · {post.readTime} DE LECTURA
            </span>
          </div>
        </div>
      </section>

      {/* Cuerpo MDX */}
      <article className="w-full border-t border-crema/[0.06]">
        <div className="max-w-[720px] mx-auto px-6 py-16">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      <Footer />
    </>
  );
}
