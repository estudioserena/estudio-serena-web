# ESTUDIO SERENA — Brief Completo · Web Junio 2026
> Pegar este documento como primer mensaje en Claude Code, o guardarlo como `CLAUDE.md` en la raíz del proyecto.

---

## 1. OBJETIVO

Construir el sitio web completo de Estudio Serena en Next.js 14. El diseño fue aprobado en detalle antes de esta sesión. Este brief contiene todo lo necesario para construir sin preguntas adicionales.

**Referencia visual:** dolby.com — mismo nivel de profundidad atmosférica, gradientes mesh oscuros, grain texture, blur en nav, animaciones de entrada en scroll. Aplicar ese nivel de sofisticación al sistema de marca de Estudio Serena.

---

## 2. STACK TÉCNICO

```
Next.js 14 (App Router)
Tailwind CSS
Framer Motion (animaciones scroll)
TypeScript
Vercel (deploy)
Fuentes: Google Fonts — Syne 800, DM Sans 300/400, Space Mono 400
Formularios: formsubmit.co
```

---

## 3. SISTEMA DE MARCA

### Paleta
```css
--abismo:     #07090F   /* fondo base */
--medianoche: #0D1A36   /* superficie, cards */
--profundo:   #1A2F5E   /* capa media, acentos bg */
--senal:      #4A7CF6   /* acento único — CTAs, precios, énfasis */
--crema:      #F0EDE6   /* tipografía primaria */
```

### Tipografía
- **Títulos/Display:** Syne 800, tracking -0.02em
- **Cuerpo:** DM Sans 300, line-height 1.7
- **Técnico/Precios/Labels:** Space Mono 400, color var(--senal)

### Reglas de marca
- Logo blanco sobre fondos oscuros. NUNCA distorsionar ni rotar el símbolo S.
- Sin gradientes en el logo. Sin colores fuera de la paleta. Sin tipografías fuera del sistema.
- El acento #4A7CF6 se usa SOLO en CTAs, precios y énfasis técnico.

### Assets del logo
```
/public/logos/Estudio_Serena_Logo_Blanco_Fondo_Negro.png  → vertical oscuro (símbolo + texto)
/public/logos/Estudio_Serena_Logo_Blanco.png              → versión clara
/public/logos/icono_solo.png                              → símbolo S solo (usar en nav)
```
En el nav: ícono solo (símbolo S) a altura 32px + texto "ESTUDIO SERENA" en Syne 800.

---

## 4. EFECTOS VISUALES (inspirados en dolby.com)

Implementar en el hero y secciones clave:

```css
/* Gradient mesh atmosférico — sobre fondo #07090F */
background:
  radial-gradient(ellipse 80% 50% at 20% 60%, rgba(26,47,94,0.45) 0%, transparent 60%),
  radial-gradient(ellipse 60% 40% at 80% 20%, rgba(74,124,246,0.08) 0%, transparent 50%),
  #07090F;

/* Grain overlay — SVG noise sobre el hero */
/* Usar un SVG de ruido como pseudo-elemento ::after con opacity 0.035 */

/* Navbar con blur */
backdrop-filter: blur(12px);
background: rgba(7, 9, 15, 0.85);

/* Glow en CTAs y elementos activos */
box-shadow: 0 0 24px rgba(74, 124, 246, 0.25);

/* Animaciones con Framer Motion */
/* fade-up en scroll: opacity 0→1, y 24→0, duration 0.6s */
```

---

## 5. ESTRUCTURA DE PÁGINAS

### Home (/)
Orden de secciones:
1. NAV (sticky, blur)
2. HERO
3. MARQUEE DE LOGOS (tecnología asociada)
4. MISIÓN
5. SERVICIOS
6. CRÉDITOS VERIFICADOS (slider)
7. ABOUT
8. EL ESTUDIO (galería)
9. FOOTER

### Páginas adicionales (construir después de home)
- `/atmos` — landing Dolby Atmos premium
- `/servicios` — detalle mix & master + precios
- `/grabacion` — sesiones locales + WhatsApp CTA
- `/about` — setup técnico + ficha técnica PDF
- `/blog` — Atmos Lab (Sanity CMS, integrar después)

---

## 6. COMPONENTES — HOME PAGE

### 6.1 NAV
```
Sticky, posición fixed top-0
Background: rgba(7,9,15,0.85) + backdrop-blur-md
Border-bottom: 1px solid rgba(74,124,246,0.14)
Padding: 13px 48px

Izquierda: [ícono logo S] + "ESTUDIO SERENA" (Syne 800, 11px, tracking 0.18em)
Centro: ATMOS / SERVICIOS / GRABACIÓN / BLOG (Space Mono, 9px, tracking 0.12em, color rgba(240,237,230,0.38))
Derecha: botón "AGENDAR →" (bg #4A7CF6, Space Mono 9px)

Menú móvil: hamburger, panel full-screen oscuro
```

### 6.2 HERO
```
min-height: 100vh
Background: foto del estudio con overlay rgba(7,9,15,0.62) + gradient mesh atmosférico + grain SVG
Foto hero: /public/fotos/01_sala_control_principal.jpg (object-fit cover)

Layout: flex, align-items flex-end, padding bottom 80px
Contenido izquierdo (max-width 560px):
  - Eyebrow: "LA SERENA · CHILE · REGIÓN DE COQUIMBO" (Space Mono, 9px, color #4A7CF6, tracking 0.22em)
  - H1: "DOLBY\nATMOS\nMUSIC" (Syne 800, clamp(52px,8vw,108px), line-height 0.88, color #F0EDE6)
  - Subtítulo: "Primer estudio acreditado Dolby Atmos Music del norte de Chile."
    (DM Sans 300, 15px, color rgba(240,237,230,0.6))
  - CTAs: [EXPLORAR ATMOS] (bg #4A7CF6) + [AGENDAR SESIÓN] (border outline)

Badge flotante (bottom-right):
  Background: rgba(13,26,54,0.88), border: 1px solid rgba(74,124,246,0.3)
  Padding: 14px 18px, text-align right
  Línea 1 label: "LISTADO EN" (Space Mono 7.5px, color rgba(240,237,230,0.35))
  Línea 1 valor: "DOLBY ATMOS MUSIC\nDIRECTORY" (Space Mono 8.5px, color #4A7CF6)
  Divider: 1px solid rgba(74,124,246,0.2)
  Línea 2 label: "CRÉDITOS VERIFICADOS"
  Línea 2 valor: "APPLE MUSIC\nSPATIAL AUDIO"

Scroll indicator: flecha animada al fondo centro
```

### 6.3 MARQUEE DE LOGOS (barra de tecnología asociada)
```
Background: #0D1A36
Border: top y bottom 1px solid rgba(240,237,230,0.05)
Padding: 14px 0
Overflow: hidden

Logos en scroll infinito (duplicar array para seamless loop):
  1. Dolby Atmos    → /public/logos/dolby-atmos.png
  2. Universal Audio → /public/logos/universal-audio.png
  3. Neumann Berlin  → /public/logos/neumann-berlin.png
  4. Avid Pro Tools  → /public/logos/avid-protools.png
  5. Apple Music     → /public/logos/apple-music.png

Cada logo: height 22px, object-fit contain, opacity 0.40, filter brightness(10) (para hacerlos blancos)
Separador entre logos: dot 4px #4A7CF6 con opacity 0.3
Velocidad: 24s linear infinite
Pausar animación on hover
```

### 6.4 MISIÓN
```
Padding: 80px 48px
Border-bottom: 1px solid rgba(240,237,230,0.06)

Label: "— MISIÓN" (Space Mono 9px, #4A7CF6)
H2: "Transformando el sonido\nen experiencias inmersivas." (Syne 800, 38px, color rgba(240,237,230,0.82))

Animación: fade-up al entrar en viewport (Framer Motion)
```

### 6.5 SERVICIOS
```
Padding: 80px 48px
Label: "— SERVICIOS"
H2: "Producción profesional\nen cualquier formato."

Grid: 3 columnas — [1.55fr 1fr 1fr], gap 2px

CARD 01 — DOLBY ATMOS MUSIC (columna grande, borde top #4A7CF6)
  Tag: "REMOTO O PRESENCIAL"
  Nombre: "DOLBY ATMOS\nMUSIC"
  Descripción: "Upmix profesional a formato 7.1.4 para distribución en Apple Music Spatial Audio, TIDAL y plataformas de streaming premium. Trabajamos con artistas y equipos de todo el mundo."
  Precio: "DESDE $250.000 CLP / SINGLE"
  IVA: "PRECIO + IVA"
  CTA: "COTIZAR PROYECTO →" (bg #4A7CF6)
  Link: /atmos

CARD 02 — MIX & MASTER (borde top rgba(240,237,230,0.13))
  Tag: "REMOTO O PRESENCIAL"
  Nombre: "MIX &\nMASTER"
  Descripción: "Mezcla y masterización estéreo profesional. Flujo de trabajo remoto o presencial. Entregables listos para distribución digital."
  Precio: "DESDE $180.000 CLP"
  IVA: "PRECIO + IVA"
  CTA: "VER PRECIOS →"
  Link: /servicios

CARD 03 — GRABACIÓN (borde top rgba(240,237,230,0.07))
  Tag: "ESTUDIO EN LA SERENA"
  Nombre: "GRABACIÓN"
  Descripción: "Cabina profesional con diseño acústico certificado. Recibimos artistas de todo Chile."
  Precio: "$25.000 CLP / HORA"
  IVA: "PRECIO + IVA"
  CTA: "WHATSAPP →" (color #4A7CF6)
  Link: https://wa.me/56929603501
```

### 6.6 CRÉDITOS VERIFICADOS (slider)
```
Padding: 80px 48px
Label: "— CRÉDITOS VERIFICADOS"
H2: "Apple Music\nSpatial Audio."
Stats: "5 EN LÍNEA · 3 PRÓXIMAMENTE · DOLBY ATMOS 7.1.4"

Slider auto-rotante (5s por slide) con navegación manual (dots + flechas).
Cada slide: [artwork 110×110px] + [info]
Info: artista (Syne 800), título (Syne, color #4A7CF6), tipo·año (Space Mono), rol, estado, link

DATOS — array de créditos:
[
  {
    artist: "Saiko",
    title: "\"Romance\"",
    type: "SINGLE",
    year: "2026",
    status: "online",
    appleId: "1867554600",
    trackId: "1867554603",
    link: "https://music.apple.com/cl/album/romance/1867554600?i=1867554603"
  },
  {
    artist: "Wankara de Chile",
    title: "\"Incertidumbre Sinfónico\"",
    type: "SINGLE",
    year: "2026",
    status: "online",
    appleId: "1890031303",
    trackId: "1890031304",
    link: "https://music.apple.com/cl/album/incertidumbre-sinf%C3%B3nico/1890031303?i=1890031304"
  },
  {
    artist: "Improvincia",
    title: "\"Mors Graffiti\"",
    type: "SINGLE",
    year: "2026",
    status: "online",
    appleId: "1888332432",
    trackId: "1888332437",
    link: "https://music.apple.com/cl/album/mors-graffiti/1888332432?i=1888332437"
  },
  {
    artist: "Tuna San Bartolomé",
    title: "Cuerdas Nuevas Sonidos Eternos",
    type: "ÁLBUM",
    year: "2025",
    status: "online",
    appleId: "1859193436",
    trackId: "1859193439",
    link: "https://music.apple.com/cl/album/doce-cascabeles/1859193436?i=1859193439"
  },
  {
    artist: "Purple Tone Flower",
    title: "\"I Wanna Make It\"",
    type: "SINGLE",
    year: "2020",
    status: "online",
    appleId: "1838354316",
    trackId: "1838354318",
    link: "https://music.apple.com/cl/album/i-wanna-make-it/1838354316?i=1838354318"
  },
  { artist: "Próximamente", title: "Single", type: "SINGLE", year: "2026", status: "coming", link: null },
  { artist: "Próximamente", title: "Single", type: "SINGLE", year: "2026", status: "coming", link: null },
  { artist: "Próximamente", title: "EP",     type: "EP",     year: "2026", status: "coming", link: null }
]

Para el artwork: usar iTunes API en una server action de Next.js:
  fetch(`https://itunes.apple.com/lookup?id=${appleId}&country=cl`)
  → resultado.results[0].artworkUrl100.replace('100x100', '600x600')
Cachear en revalidate: 86400 (24h). Mostrar como <Image> con fallback placeholder.
```

### 6.7 ABOUT
```
Padding: 80px 48px
Border-top: 1px solid rgba(240,237,230,0.06)
Grid: [160px 1fr], gap 48px

Foto: /public/fotos/mauricio.jpg — object-fit cover, height 220px, sutil desaturación (filter grayscale 15%)
Nombre: "Mauricio Flores" (Syne 800, 24px)
Rol: "GUITARRISTA · BAJISTA · PRODUCTOR MUSICAL\nDISEÑADOR SONORO · DOLBY ATMOS MIXER"
  (Space Mono 7px, tracking 0.13em, color #4A7CF6, line-height 1.6)
Bio: "Más de 20 años de trayectoria en la música independiente como guitarrista, bajista,
  productor musical y diseñador sonoro para teatro. Dolby Atmos Mixer avalado por el
  Dolby Institute. Director del único estudio listado en el Dolby Atmos Music Directory
  en la Región de Coquimbo. Créditos verificados en Apple Music Spatial Audio."
  (DM Sans 300, 14px, color rgba(240,237,230,0.52))
```

### 6.8 EL ESTUDIO (galería)
```
Padding: 80px 48px 0
Label: "— EL ESTUDIO"
H2: "Precisión en\ncada metro cuadrado."

LAYOUT — todas las fotos en ratio 16:9, object-fit cover:

ROW 1: foto principal a ancho completo (16:9)
  /public/fotos/01_sala_control_principal.jpg
  Label overlay: "SALA DE CONTROL · 15 M² · NEUMANN 7.1.4"

ROW 2: grid 2 columnas
  /public/fotos/02_monitores_neumann.jpg       → "MONITOREO"
  /public/fotos/03_cabina_grabacion.jpg        → "CABINA DE GRABACIÓN · 8 M²"

ROW 3: grid 2 columnas
  /public/fotos/05_parlantes_surround.jpg      → "SURROUND · KH 80 ×8"
  /public/fotos/06_placa_dolby.jpg             → "DOLBY ATMOS MUSIC DIRECTORY"

Overlay etiquetas: position absolute, bottom, background rgba(7,9,15,0.70)
  Space Mono 7.5px, tracking 0.16em, color rgba(240,237,230,0.5)

Hover: foto escala 1.02, transición suave 0.4s
Gap entre fotos: 2px
Margin-bottom: 2px entre rows
```

### 6.9 FOOTER
```
Background: #0D1A36
Border-top: 1px solid rgba(240,237,230,0.05)
Padding: 48px 48px 28px

Grid 3 columnas:
  COL 1: Logo ícono + "ESTUDIO SERENA" (Syne 800) + "DOLBY ATMOS MUSIC" (#4A7CF6)
  COL 2: SERVICIOS → Dolby Atmos Music / Mix & Master / Grabación / Blog Atmos Lab
  COL 3: CONTACTO → infoestudioserena@gmail.com / +56 9 2960 3501 / @estudio_serena / La Serena, Chile

Línea inferior: "© 2026 ESTUDIO SERENA SPA" | "ESTUDIOSERENA.CL"
  Space Mono 7.5px, tracking 0.1em, color rgba(240,237,230,0.16)

Redes sociales: iconos Instagram + WhatsApp (pequeños, inline en col 3)
```

---

## 7. ASSETS — RUTAS LOCALES

```
Copiar antes de iniciar:
cp -r "/Volumes/ESTUDIO SERENA/CLAUDE/WEB/logos"  ./public/logos/
cp -r "/Volumes/ESTUDIO SERENA/CLAUDE/WEB/fotos_estudio"  ./public/fotos/

Logos disponibles:
  public/logos/dolby-atmos.png
  public/logos/universal-audio.png
  public/logos/neumann-berlin.png
  public/logos/avid-protools.png
  public/logos/apple-music.png
  public/logos/Estudio_Serena_Logo_Blanco_Fondo_Negro.png  (vertical oscuro)
  public/logos/icono_solo.png  (símbolo S — usar en nav y favicon)

Fotos del estudio (nombrar así al copiar):
  public/fotos/hero.jpg                      (foto principal sala de control)
  public/fotos/01_sala_control.jpg
  public/fotos/02_monitores_neumann.jpg
  public/fotos/03_cabina_grabacion.jpg
  public/fotos/04_setup_produccion.jpg
  public/fotos/05_parlantes_surround.jpg
  public/fotos/06_placa_dolby.jpg
  public/fotos/mauricio.jpg

Fuente de los archivos: /Volumes/ESTUDIO SERENA/CLAUDE/
(Disco externo — debe estar montado. Si no, usar copia local en ~/projects/estudio-serena-web/assets/)
```

---

## 8. CONTACTO Y CONFIGURACIÓN

```
Email:     infoestudioserena@gmail.com
WhatsApp:  +56929603501  → https://wa.me/56929603501
Instagram: @estudio_serena → https://www.instagram.com/estudio_serena/
Web:       estudioserena.cl

Formulario Atmos (CTA principal):
  formsubmit.co endpoint: infoestudioserena@gmail.com
  Campos: Nombre / Artista o Sello / Cantidad de temas / Mensaje / Email de respuesta

Formulario grabación: redirigir a WhatsApp directamente
```

---

## 9. SEO

```
Title: "Estudio Serena — Dolby Atmos Music · La Serena, Chile"
Description: "Primer estudio acreditado Dolby Atmos Music del norte de Chile.
  Upmix profesional, mezcla y masterización. Créditos verificados en Apple Music Spatial Audio."
Keywords: dolby atmos mixer chile, estudio grabacion la serena, mix master atmos, spatial audio
OG Image: /public/fotos/hero.jpg
Canonical: https://www.estudioserena.cl
robots: index, follow  ← CRÍTICO (el Wix actual tiene noindex — corregir)
```

---

## 10. INSTRUCCIÓN DE INICIO PARA CLAUDE CODE

Pegar esto al abrir Claude Code:

```
Construye el sitio web completo de Estudio Serena siguiendo el brief en CLAUDE.md (o en este mensaje).
Empieza por:
1. npx create-next-app@latest estudio-serena-web --typescript --tailwind --app
2. Instalar: framer-motion
3. Configurar tailwind.config con los colores del sistema de marca
4. Implementar la home page completa con todos los componentes descritos

La profundidad visual debe ser comparable a dolby.com:
gradientes mesh radiales sobre fondo oscuro, grain SVG en el hero,
glow en elementos #4A7CF6, blur en navbar, fade-up animations con Framer Motion.

Assets están en /Volumes/ESTUDIO SERENA/CLAUDE/WEB/ — copiar a /public/ al inicio.
Construir primero la home completa. Luego rutas individuales.
```

---

## 11. CHECKLIST PRE-CLAUDE CODE

- [ ] Disco externo "ESTUDIO SERENA" montado y accesible en `/Volumes/`
- [ ] Apple Music logo movido del escritorio a `/Volumes/ESTUDIO SERENA/CLAUDE/WEB/logos/apple-music.png`
- [ ] Fotos del estudio organizadas y nombradas en `/Volumes/.../CLAUDE/WEB/fotos_estudio/`
- [ ] Foto de Mauricio disponible en esa carpeta (nombrar `mauricio.jpg`)
- [ ] Node.js 18+ instalado (`node -v`)
- [ ] Claude Code abierto en el directorio donde crear el proyecto (`cd ~/projects`)
