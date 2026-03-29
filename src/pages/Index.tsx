import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useGSAPSmooth } from "@/hooks/use-gsap";

const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const TechStats = lazy(() => import("@/components/TechStats"));
const Projects = lazy(() => import("@/components/Projects"));
const DevOpsProjects = lazy(() => import("@/components/DevOpsProjects"));
const Education = lazy(() => import("@/components/Education"));
const Testimonials = lazy(() => import("@/components/ui/testimonial-v2"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="section-padding flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  useGSAPSmooth();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <TechStats />
        <Projects />
        <DevOpsProjects />
        <Education />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
