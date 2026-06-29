"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export function CTASection() {
  return (
    <section id="cta" className="container-xl max-w-4xl mb-24 relative overflow-hidden card p-10 border border-[var(--border)] shadow-sm">

      <div className="relative z-10 container-xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mx-auto w-fit mb-6">
              <span>✨</span> Open to Work
            </div>
            <h2 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span>{" "}
              Together
            </h2>
            <p className="text-body-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              Whether you need a full product built from scratch, a stunning redesign, or a technical
              partner who cares as much as you do — I&apos;m ready.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  id="cta-contact"
                  className="btn-primary text-[15px] px-8 py-4 gap-2.5"
                >
                  <Mail size={16} />
                  Start a Project
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>

              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[13px] text-[var(--text-tertiary)]">
              <span className="flex items-center gap-2">
                <span className="text-[var(--text-primary)]">●</span>
                Available for projects
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--accent-primary)]">⚡</span>
                Fast turnaround
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#FFB347]">★</span>
                5.0 client rating
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[var(--accent-secondary)]">🌍</span>
                Remote-friendly
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
