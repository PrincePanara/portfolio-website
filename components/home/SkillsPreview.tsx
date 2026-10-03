"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TechItem = {
  name: string;
  slug: string;
  iconUrl?: string;
};

const techStack: TechItem[] = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Firebase", slug: "firebase" },
  { name: "Flutter", slug: "flutter" },
  { name: "Dart", slug: "dart" },
  { name: "Java", slug: "java" },
  { name: "PHP", slug: "php" },
  { name: "Python", slug: "python" },
  { name: "C++", slug: "cplusplus" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
  { name: "Vercel", slug: "vercel" },
];

export function SkillsPreview() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="w-full pt-4 pb-12 relative overflow-hidden">
      {/* Background grid line */}
      <div className="absolute top-36 left-0 right-0 h-px bg-[var(--border)] w-full opacity-50" />
      
      <div className="container-xl max-w-5xl relative z-10">
        
        {/* Local Time Card */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="card px-8 py-4 flex items-center justify-center gap-3 shadow-md border border-[var(--border)] rounded-2xl bg-[var(--bg-card)] hover:shadow-lg hover:border-[var(--border-strong)] transition-all cursor-default"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <p className="text-lg font-display font-bold text-[var(--text-primary)] tracking-wide">
              {time || "12:00 PM"}
            </p>
            <span className="text-sm font-medium text-[var(--text-tertiary)] uppercase tracking-widest ml-1">
              LOCAL TIME
            </span>
          </motion.div>
        </div>

        <h3 className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-8 bg-[var(--bg-primary)] w-fit pr-4">
          TECH STACK
        </h3>

        <div className="flex flex-wrap gap-4 items-center">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.06, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              className="w-16 h-16 flex items-center justify-center bg-white border border-[#e5e7eb] rounded-2xl hover:border-[#d1d5db] shadow-sm hover:shadow-md transition-all group"
              title={tech.name}
            >
              <img
                src={tech.iconUrl || `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-original.svg`}
                alt={tech.name}
                className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
