"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Filter } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/motion/FadeIn";
import { SpotlightBackground } from "@/components/backgrounds/GridBackground";
import { ProjectCard } from "@/components/shared/ProjectCard";

const filters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "UI/UX", value: "ui-ux" },
  { label: "SaaS", value: "saas" },
];

const categoryColors: Record<string, string> = {
  web: "#6C47FF",
  mobile: "#00D4FF",
  "ui-ux": "#FFB347",
  saas: "#4ECDC4",
};

export default function ProjectsPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="relative min-h-screen">
      <SpotlightBackground />

      <div className="relative z-10 section container-xl">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <div className="section-label mx-auto w-fit mb-6">
            <span>🚀</span> Portfolio
          </div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            A complete collection of my work — web apps, mobile apps, design systems, and more.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter size={14} className="text-[var(--text-tertiary)] mr-1 mt-1" />
          {filters.map((f) => (
            <motion.button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-fast border ${
                active === f.value
                  ? "gradient-primary text-white border-transparent shadow-glow"
                  : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {f.label}
            </motion.button>
          ))}
        </FadeIn>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => {
              const color = categoryColors[project.category] || "#6C47FF";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
                >
                  <div className="h-full">
                    <ProjectCard project={project} color={color} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <FadeIn className="text-center py-24">
            <p className="text-[var(--text-tertiary)] text-lg">No projects in this category yet.</p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
