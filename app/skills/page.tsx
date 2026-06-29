import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { GridBackground } from "@/components/backgrounds/GridBackground";
import { skillCategories } from "@/data/skills";
import { Monitor, Server, Smartphone, Palette, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Prince Panara's technical skills across frontend, backend, mobile, design, and DevOps.",
};

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Smartphone: <Smartphone size={20} />,
  Palette: <Palette size={20} />,
  Wrench: <Wrench size={20} />,
};

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <div className="relative z-10 section container-xl">
        <FadeIn className="text-center mb-16">
          <div className="section-label mx-auto w-fit mb-6">
            <span>⚡</span> Skills
          </div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            My <span className="gradient-text">Technical Arsenal</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            A comprehensive overview of my skills — built through years of real-world projects.
          </p>
        </FadeIn>

        {skillCategories.map((cat, ci) => (
          <FadeIn key={cat.id} delay={ci * 0.1} className="mb-10">
            <div className="card p-8">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: cat.color }}
                >
                  {iconMap[cat.icon]}
                </div>
                <h2 className="text-heading-sm font-display font-bold text-[var(--text-primary)]">
                  {cat.name}
                </h2>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                        {skill.name}
                      </span>
                      <span
                        className="text-[12px] font-bold font-mono"
                        style={{ color: cat.color }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
