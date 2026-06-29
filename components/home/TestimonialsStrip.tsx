"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { featuredTestimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/motion/FadeIn";

export function TestimonialsStrip() {
  return (
    <section id="testimonials-strip" className="container-xl max-w-4xl mb-24">
      <h3 className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
        Client Feedback
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredTestimonials.map((t, i) => (
          <FadeIn key={t.id} delay={i * 0.1} direction="up">
            <motion.div
              className="card p-6 h-full flex flex-col shadow-sm border border-[var(--border)] hover:border-[var(--border-strong)] transition-all"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Quote icon */}
                <Quote size={24} className="text-[var(--accent-primary)] opacity-40 mb-4" />

                {/* Review */}
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-5 flex-1 italic">
                  &ldquo;{t.review}&rdquo;
                </p>

                {/* Stars */}
                <div className="star-rating mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div className="avatar-ring">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[var(--text-primary)]">{t.name}</div>
                    <div className="text-[11px] text-[var(--text-tertiary)]">
                      {t.role}, {t.company}
                    </div>
                  </div>
                  <span className="ml-auto tag-neutral tag text-[10px]">{t.projectType}</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
    </section>
  );
}
