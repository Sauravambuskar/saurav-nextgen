"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HiMiniArrowLeft,
  HiMiniArrowRight,
  HiMiniSparkles,
  HiMiniCheckCircle,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesData } from "@/lib/services-data";

const WHATSAPP_NUMBER = "918830306901";

const smoothTransition = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-10 sm:pb-14 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-primary/15 -top-40 -right-40 absolute" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <HiMiniArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-4">
              <HiMiniSparkles className="text-primary" size={14} /> What I Do
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              All <span className="gradient-text">Services</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {servicesData.length} end-to-end services spanning web and mobile
              development, AI automation, DevOps, and business systems — from first
              prototype to production launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative pb-16 sm:pb-24">
        <div className="glow-orb w-[400px] h-[400px] bg-secondary/10 bottom-40 -left-32 absolute" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothTransition, delay: Math.min(i, 6) * 0.06 }}
                  className="glass-card-hover overflow-hidden group flex flex-col"
                >
                  <Link
                    href={`/service/${service.slug}`}
                    className="relative h-40 sm:h-44 overflow-hidden border-b border-border block"
                    aria-label={`${service.title} details`}
                  >
                    <img
                      src={service.heroImage.replace("w=1200&h=600", "w=600&h=400")}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 p-2.5 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </Link>

                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-base sm:text-lg font-semibold mb-2">
                      <Link
                        href={`/service/${service.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p className="text-xs sm:text-sm text-primary/90 font-medium mb-3">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {service.description}
                    </p>

                    {/* Top few capabilities as a quick scan */}
                    <ul className="space-y-1.5 mb-5">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <HiMiniCheckCircle
                            size={14}
                            className="text-primary mt-0.5 shrink-0"
                          />
                          <span className="text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/service/${service.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all"
                    >
                      Explore details <HiMiniArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden mt-12 sm:mt-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 blur-3xl" />
            <div className="relative glass-card p-8 sm:p-12 text-center border border-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Not sure which service you <span className="gradient-text">need?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base">
                Tell me what you&apos;re trying to build and I&apos;ll point you to the
                right approach — no obligation, no sales pitch.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hi Saurav! I went through your services page and would like to discuss a project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
                >
                  <FaWhatsapp size={24} />
                  Let&apos;s Talk on WhatsApp
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-border rounded-full text-foreground hover:bg-muted/50 transition-colors font-medium text-sm sm:text-base"
                >
                  See My Work <HiMiniArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
