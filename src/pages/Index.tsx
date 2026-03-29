import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStats from "@/components/TechStats";
import Projects from "@/components/Projects";
import DevOpsProjects from "@/components/DevOpsProjects";
import Education from "@/components/Education";
import Testimonials from "@/components/ui/testimonial-v2";
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
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default Index;
