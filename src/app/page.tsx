import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Background from "@/components/ui/Background";
import MatrixRain from "@/components/ui/MatrixRain";
import SectionDivider from "@/components/ui/SectionDivider";
import ScrollArrow from "@/components/ui/ScrollArrow";

export default function Home() {
  return (
    <>
      <Background />
      <MatrixRain />
      <main className="relative" style={{ zIndex: 10 }}>
      <ScrollArrow />

      <Navbar />
      <Hero />
      <SectionDivider color="amber" />
      <About />
      <SectionDivider color="orange" />
      <TechStack />
      <SectionDivider color="amber" />
      <Projects />
      <SectionDivider color="yellow" />
      <Experience />
      <SectionDivider color="orange" />
      <Contact />
      <Footer />
      </main>
    </>
  );
}
