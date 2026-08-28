"use client";

import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { EtheralShadow } from "@/components/ui/etheral-shadow";
import { useGSAPSmooth } from "@/hooks/use-gsap";

const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Skills = lazy(() => import("@/components/Skills"));
const TechStats = lazy(() => import("@/components/TechStats"));
const Projects = lazy(() => import("@/components/Projects"));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const DevOpsProjects = lazy(() => import("@/components/DevOpsProjects"));
const Education = lazy(() => import("@/components/Education"));
const Testimonials = lazy(() => import("@/components/ui/testimonial-v2"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const Chatbot = lazy(() => import("@/components/Chatbot"));

const SectionFallback = () => (
  <div className="section-padding flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Home = () => {
  useGSAPSmooth();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <EtheralShadow
        color="hsl(var(--primary) / 0.05)"
        animation={{ scale: 12, speed: 20 }}
        noise={{ opacity: 0.03, scale: 3 }}
      />
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Services />
        <Skills />
        <TechStats />
        <Projects />
        <CaseStudies />
        <DevOpsProjects />
        <Education />
        <Testimonials />
        <Contact />
        <Footer />
        <Chatbot />
      </Suspense>
    </div>
  );
};

export default Home;
