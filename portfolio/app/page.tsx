import Hero from "@/app/components/Hero";
import NavBar from "@/app/components/NavBar";
import About from "@/app/components/About";
import TechStack from "@/app/components/TechStack";
import { Reveal } from "@/app/components/ui/Reveal";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home(){
  return (
    <main className="min-h-screen w-full">
        <NavBar activeSection={""} />
        <Hero />
        <Reveal>  
          <About />
        </Reveal>
        <Reveal delay={0.3}>
           <TechStack />
        </Reveal>
        <Reveal delay={0.4}>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
    </main>
  );
}