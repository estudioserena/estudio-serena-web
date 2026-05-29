import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Credits from "@/components/Credits";
import About from "@/components/About";
import Studio from "@/components/Studio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoMarquee />
      <Mission />
      <Services />
      <Credits />
      <About />
      <Studio />
      <Footer />
    </>
  );
}
