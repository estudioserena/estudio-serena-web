import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const NOTICIAS_DIR = path.join(process.cwd(), 'content/noticias')

export interface Noticia {
  slug: string
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  readTime: string
  content: string
}

export function getAllNoticias(): Noticia[] {
  if (!fs.existsSync(NOTICIAS_DIR)) return []
  const files = fs.readdirSync(NOTICIAS_DIR).filter(f => f.endsWith('.mdx'))
  return files.map(file => {
    const raw = fs.readFileSync(path.join(NOTICIAS_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    return { ...data, slug: data.slug || file.replace('.mdx', ''), content } as Noticia
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return getAllNoticias().find(n => n.slug === slug)
}
