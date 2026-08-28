import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { HiMiniArrowRight } from "react-icons/hi2";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects, projects } from "@/lib/projects-data";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative bg-background-secondary" ref={ref}>
      <div className="glow-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-secondary bottom-0 left-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
            Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {projects.length}+ production projects across multiple industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/projects"
            className="btn-primary text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3 inline-flex items-center gap-2"
          >
            View All {projects.length} Projects
            <HiMiniArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
