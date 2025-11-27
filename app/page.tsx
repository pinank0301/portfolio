import { GridBackground } from "@/components/ui/grid-background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contributions } from "@/components/Contributions";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <GridBackground>
        <Navbar />
        <div className="space-y-20 pb-20 pt-10">
          <div id="hero">
            <Hero />
          </div>
          <Skills />
          <Projects />
          <Contributions />
          <div id="experience">
            <Experience />
          </div>
          <div id="education">
            <Education />
          </div>

        </div>
      </GridBackground>
      <Footer />
    </main>
  );
}
