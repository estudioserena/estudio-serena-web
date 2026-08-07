import type { Metadata } from "next";
import Script from "next/script";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1616979136431104&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
