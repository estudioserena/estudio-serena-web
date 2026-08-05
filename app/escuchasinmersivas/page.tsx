import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EscuchasInmersivas from "@/components/EscuchasInmersivas";

export const metadata: Metadata = {
  title: "Escuchas Inmersivas — Estudio Serena | Dolby Atmos",
  description:
    "Sesiones de escucha de discos completos en Dolby Atmos 7.1.4. Sala semi-oscura. 6 sillas. Experiencia única en la Región de Coquimbo.",
  openGraph: {
    title: "Escuchas Inmersivas — Estudio Serena | Dolby Atmos",
    description:
      "Sesiones de escucha de discos completos en Dolby Atmos 7.1.4. Sala semi-oscura. 6 sillas. Experiencia única en la Región de Coquimbo.",
    images: ["/escuchas-inmersivas-dark-side-agosto.png"],
    url: "https://www.estudioserena.cl/escuchasinmersivas",
    type: "website",
  },
  alternates: { canonical: "https://www.estudioserena.cl/escuchasinmersivas" },
};

export default function EscuchasInmersivasPage() {
  return (
    <>
      <Nav />
      <EscuchasInmersivas />
      <Footer />
    </>
  );
}
