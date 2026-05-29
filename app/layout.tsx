import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne-var",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-var",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estudio Serena — Dolby Atmos Music · La Serena, Chile",
  description:
    "Primer estudio acreditado Dolby Atmos Music del norte de Chile. Upmix profesional, mezcla y masterización. Créditos verificados en Apple Music Spatial Audio.",
  keywords:
    "dolby atmos mixer chile, estudio grabacion la serena, mix master atmos, spatial audio",
  openGraph: {
    title: "Estudio Serena — Dolby Atmos Music · La Serena, Chile",
    description:
      "Primer estudio acreditado Dolby Atmos Music del norte de Chile. Upmix profesional, mezcla y masterización.",
    images: ["/fotos/hero.jpg"],
    url: "https://www.estudioserena.cl",
    type: "website",
  },
  metadataBase: new URL("https://www.estudioserena.cl"),
  alternates: { canonical: "https://www.estudioserena.cl" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
