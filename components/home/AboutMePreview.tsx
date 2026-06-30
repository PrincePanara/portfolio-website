"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

export function AboutMePreview() {
  return (
    <section id="about" className="container-xl max-w-4xl mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start shadow-sm border border-[var(--border)]"
      >
        <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-2xl flex items-center justify-center shrink-0 border border-[var(--border)]">
          <User size={24} className="text-[var(--text-secondary)]" />
        </div>

        <div className="flex-1">
          <h3 className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
            About Me
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
            I build digital experiences that blend form and function.
          </h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
            I’m passionate about building things that matter. As a Developer and UI/UX Designer, I enjoy bringing ideas to life through thoughtful design and practical solutions. I love exploring new technologies, solving challenges, and creating experiences that are simple, useful, and enjoyable for people. My goal is to keep learning, keep building, and create work that makes a difference.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors group"
          >
            Read More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
