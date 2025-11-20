import { GridBackground } from "@/components/ui/grid-background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";


export default function Home() {
  return (
    <main className="min-h-screen">
      <GridBackground>
        <Navbar />
        <div className="space-y-20 pb-20 pt-10">
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <Skills />
          <Projects />
          <div id="experience">
            <Experience />
          </div>
          <div id="education">
            <Education />
          </div>

          <footer id="contact" className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            <p>© {new Date().getFullYear()} Pinank Trivedi. All rights reserved.</p>
          </footer>
        </div>
      </GridBackground>
    </main>
  );
}
