import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import DevOpsProjects from "@/components/DevOpsProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <DevOpsProjects />
    <Education />
    <Contact />
    <Footer />
  </div>
);

export default Index;
