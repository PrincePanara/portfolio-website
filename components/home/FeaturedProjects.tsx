"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectCard } from "@/components/shared/ProjectCard";

const categoryColors: Record<string, string> = {
  web: "#6C47FF",
  mobile: "#00D4FF",
  "ui-ux": "#FFB347",
  saas: "#4ECDC4",
};

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="container-xl max-w-4xl mb-24 relative overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest">
          Featured Work
        </h3>
        <Link
          href="/projects"
          className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 group"
        >
          View All <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 2 Project Cards — equal width, equal height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {featuredProjects.slice(0, 2).map((project, i) => {
          const color = categoryColors[project.category] || "#6C47FF";
          return (
            <FadeIn key={project.id} delay={i * 0.15} direction="up" className="h-full">
              <div className="h-full">
                <ProjectCard project={project} color={color} />
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* View All Projects Button */}
      <FadeIn delay={0.4} direction="up" className="mt-12 flex justify-center">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-[14px] font-semibold bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:shadow-md transition-all group"
          >
            View All Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </FadeIn>
    </section>
  );
}
