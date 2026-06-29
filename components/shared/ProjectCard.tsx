"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { ExternalLink } from "lucide-react";

export const getIconSlug = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes('next')) return 'nextdotjs';
  if (t.includes('react')) return 'react';
  if (t.includes('typescript')) return 'typescript';
  if (t.includes('tailwind')) return 'tailwindcss';
  if (t.includes('firebase')) return 'firebase';
  if (t.includes('framer')) return 'framer';
  if (t.includes('node')) return 'nodedotjs';
  if (t.includes('postgres')) return 'postgresql';
  if (t.includes('python')) return 'python';
  if (t.includes('stripe')) return 'stripe';
  if (t.includes('flutter')) return 'flutter';
  if (t.includes('dart')) return 'dart';
  if (t.includes('d3')) return 'd3dotjs';
  if (t.includes('openai')) return 'openai';
  if (t.includes('prisma')) return 'prisma';
  if (t.includes('css')) return 'css3';
  if (t.includes('html')) return 'html5';
  if (t.includes('figma')) return 'figma';
  if (t.includes('storybook')) return 'storybook';
  if (t.includes('streamlit')) return 'streamlit';
  if (t.includes('esp')) return 'espressif';
  if (t.includes('tensor')) return 'tensorflow';
  return t.replace(/[^a-z0-9]/g, '');
};

function TechIcon({ tag }: { tag: string }) {
  const [error, setError] = useState(false);
  const slug = getIconSlug(tag);
  return (
    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0" title={tag}>
      {!error ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}/black`}
          alt={tag}
          className="w-5 h-5 object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-[11px] font-bold text-black uppercase">{tag.substring(0, 2)}</span>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: any;
  color?: string;
}

export function ProjectCard({ project, color = "#6C47FF" }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="card p-4 h-full flex flex-col group spotlight bg-[var(--bg-card)] border border-[var(--border)] rounded-[24px]"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Cover Image */}
      <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-5 bg-[#000] border border-[var(--border)] shrink-0">
        {project.coverImage && !imgError ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white opacity-20" style={{ background: color }}>
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      {/* Title */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <Link href={project.liveUrl || project.githubUrl || `/projects/${project.id}`} className="text-[24px] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors tracking-tight">
          {project.title}
        </Link>
      </div>

      {/* Description */}
      <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 justify-center text-sm py-2.5">
            <ExternalLink size={16} />
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1 justify-center text-sm py-2.5">
            <GithubIcon size={16} /> GitHub Repo
          </a>
        )}
      </div>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.tags.slice(0, 4).map((tag: string) => (
          <TechIcon key={tag} tag={tag} />
        ))}
      </div>
    </motion.div>
  );
}
