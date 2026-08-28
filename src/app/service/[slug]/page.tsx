"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiMiniArrowLeft,
  HiMiniCheckCircle,
  HiMiniChartBar,
  HiMiniCog6Tooth,
  HiMiniSparkles,
  HiMiniArrowRight,
  HiMiniChevronDown,
  HiMiniQuestionMarkCircle,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import { servicesData } from "@/lib/services-data";
import { useState } from "react";

const WHATSAPP_NUMBER = "918830306901";

const smoothTransition = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
          <h1 className="text-3xl font-bold">Service Not Found</h1>
          <Link href="/#services" className="text-primary hover:underline flex items-center gap-2">
            <HiMiniArrowLeft className="w-5 h-5" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-primary/15 -top-40 -right-40 absolute" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8"
            >
              <HiMiniArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={smoothTransition}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
                <Icon className="w-4 h-4" />
                {service.title}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {service.tagline}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in your ${service.title} service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  <FaWhatsapp className="w-5 h-5" /> Get a Quote
                </a>
                <a
                  href="#examples"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-foreground hover:bg-muted/50 transition-colors font-medium"
                >
                  View Examples <HiMiniArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-[300px] sm:h-[380px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <HiMiniSparkles className="w-4 h-4" /> Key Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              What's <span className="gradient-text">Included</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothTransition, delay: i * 0.05 }}
                className="glass-card p-4 flex items-start gap-3"
              >
                <HiMiniCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90 text-sm leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <HiMiniCog6Tooth className="w-4 h-4" /> Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Built With <span className="gradient-text">Modern Tools</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...smoothTransition, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border bg-muted/30 text-foreground text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Our <span className="gradient-text">Process</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothTransition, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="text-foreground font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section id="examples" className="py-16 relative">
        <div className="glow-orb w-[400px] h-[400px] bg-secondary/10 bottom-0 -left-32 absolute" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <HiMiniChartBar className="w-4 h-4" /> Real Examples
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Projects We've <span className="gradient-text">Delivered</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothTransition, delay: i * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-medium">{example.industry}</span>
                  <h3 className="text-foreground font-semibold mt-1 mb-2">{example.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{example.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {example.results.map((result, j) => (
                      <div key={j} className="text-xs text-foreground/80 bg-muted/30 rounded-lg px-3 py-2 border border-border/50">
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
              <HiMiniQuestionMarkCircle className="w-4 h-4" /> FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={smoothTransition}
            className="glass-card p-8 sm:p-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Let's discuss your project requirements and build something exceptional together.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in your ${service.title} service. Let's discuss my project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg"
            >
              <FaWhatsapp className="w-6 h-6" /> Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...{ type: "spring", stiffness: 80, damping: 20, mass: 0.8 }, delay: index * 0.06 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-foreground font-medium text-sm sm:text-base pr-4">{question}</span>
        <HiMiniChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
