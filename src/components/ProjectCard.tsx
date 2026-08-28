"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiMiniArrowTopRightOnSquare,
  HiMiniBuildingOffice2,
  HiMiniArrowRight,
} from "react-icons/hi2";
import { industryIcons, type ProjectItem } from "@/lib/projects-data";

export const ProjectCard = ({
  project,
  index = 0,
}: {
  project: ProjectItem;
  index?: number;
}) => {
  const Icon = industryIcons[project.tag] || HiMiniBuildingOffice2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // Cap the stagger so cards far down a long grid don't wait seconds to appear.
      transition={{ delay: Math.min(index, 8) * 0.06 }}
      className="glass-card-hover overflow-hidden group flex flex-col"
    >
      {/* Preview thumbnail — links to the full case study */}
      <Link
        href={`/case-study/${project.caseStudyId}`}
        className="relative h-36 sm:h-48 overflow-hidden border-b border-border block"
        aria-label={`${project.title} case study`}
      >
        <img
          src={project.thumb}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />
        <span className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="btn-primary text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 inline-flex items-center gap-2">
            View Case Study <HiMiniArrowRight size={14} />
          </span>
        </span>
      </Link>

      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
            <Icon size={10} className="sm:hidden" />
            <Icon size={12} className="hidden sm:block" />
            {project.tag}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live site`}
            className="text-muted-foreground hover:text-primary transition-colors shrink-0"
          >
            <HiMiniArrowTopRightOnSquare size={16} className="sm:hidden" />
            <HiMiniArrowTopRightOnSquare size={18} className="hidden sm:block" />
          </a>
        </div>

        <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">
          <Link
            href={`/case-study/${project.caseStudyId}`}
            className="hover:text-primary transition-colors"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
