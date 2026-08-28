"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMiniArrowLeft, HiMiniSquares2X2 } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectCategories } from "@/lib/projects-data";

const WHATSAPP_NUMBER = "918830306901";
const ALL = "All";

const ProjectsPage = () => {
  const [activeTag, setActiveTag] = useState<string>(ALL);

  const visibleProjects = useMemo(
    () => (activeTag === ALL ? projects : projects.filter((p) => p.tag === activeTag)),
    [activeTag]
  );

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
              <HiMiniSquares2X2 className="text-primary" size={14} /> Complete Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {projects.length} production projects delivered across{" "}
              {projectCategories.length} industries — from e-commerce and FinTech to
              healthcare, real estate, and DevOps tooling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
          >
            <button
              onClick={() => setActiveTag(ALL)}
              aria-pressed={activeTag === ALL}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                activeTag === ALL
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted/30 text-muted-foreground border-border hover:text-foreground hover:border-primary/30"
              }`}
            >
              All <span className="opacity-70">({projects.length})</span>
            </button>
            {projectCategories.map(({ tag, count }) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/30 text-muted-foreground border-border hover:text-foreground hover:border-primary/30"
                }`}
              >
                {tag} <span className="opacity-70">({count})</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-16 sm:pb-24">
        <div className="glow-orb w-[400px] h-[400px] bg-secondary/10 bottom-40 -left-32 absolute" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {visibleProjects.map((project, i) => (
              // Keyed by tag too, so switching filters remounts cards and
              // replays their entrance animation instead of snapping in.
              <ProjectCard
                key={`${activeTag}-${project.title}`}
                project={project}
                index={i}
              />
            ))}
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
                Have a project in <span className="gradient-text">mind?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base">
                Let&apos;s talk about what you&apos;re building. Reach out directly on
                WhatsApp for a quick, no-obligation chat.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Saurav! I was going through your project portfolio and would like to discuss a project."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-8 py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                <FaWhatsapp size={24} />
                Let&apos;s Talk on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
