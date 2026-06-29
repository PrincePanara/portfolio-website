"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", description: "Building digital products" },
  { value: 25, suffix: "+", label: "Projects Delivered", description: "Across 8+ countries" },

  { value: 100, suffix: "%", label: "Client Satisfaction", description: "5★ across all projects" },
];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="container-xl max-w-4xl mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1} direction="up">
            <div className="card p-6 text-center group cursor-default shadow-sm border border-[var(--border)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-center h-full">
              <div className="text-3xl font-display font-extrabold text-[var(--text-primary)] mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-[var(--text-tertiary)]">
                {stat.description}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
