import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import MatrixRain from "@/components/ui/MatrixRain";
import GradientBlobs from "@/components/ui/GradientBlobs";
import FloatingShapes from "@/components/ui/FloatingShapes";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative">
      {/* Animated backgrounds */}
      <GradientBlobs />
      <MatrixRain />
      <FloatingShapes />

      <Navbar />
      <Hero />
      <SectionDivider color="indigo" />
      <About />
      <SectionDivider color="purple" />
      <TechStack />
      <SectionDivider color="cyan" />
      <Experience />
      <SectionDivider color="pink" />
      <Projects />
      <SectionDivider color="indigo" />
      <Contact />
      <Footer />
    </main>
  );
}
