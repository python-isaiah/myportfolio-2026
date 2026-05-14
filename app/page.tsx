import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About"; // Make sure to import it
import Education from "@/components/Education"; // Make sure to import it
import Labs from "@/components/Labs";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-purple-500/30">
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Education />
      <Labs />
      <Contact />
    </main>
  );
}