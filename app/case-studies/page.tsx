import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { SpotlightBackground } from "@/components/backgrounds/GridBackground";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudyFramework } from "@/components/shared/CaseStudyFramework";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Detailed case studies of Prince Panara's most impactful projects.",
};

const caseStudies = projects.slice(0, 3);



export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen">
      <SpotlightBackground />
      <div className="relative z-10 section container-xl">
        <FadeIn className="text-center mb-16">
          <div className="section-label mx-auto w-fit mb-6"><span>📖</span> Case Studies</div>
          <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
            Deep-Dive <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            The thinking, challenges, and solutions behind my most impactful projects.
          </p>
        </FadeIn>

        {/* Process Overview */}
        <CaseStudyFramework />

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.15}>
              <div className="card card-glow overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Visual */}
                  <div
                    className="h-48 lg:h-auto flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, #6C47FF15, #6C47FF30)`,
                    }}
                  >
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-white text-3xl font-display font-bold shadow-glow">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag">{project.category.replace("-", " ")}</span>
                      <span className="text-[12px] text-[var(--text-tertiary)] font-mono">{project.year}</span>
                    </div>
                    <h2 className="text-heading-md font-display font-bold text-[var(--text-primary)] mb-3">
                      {project.title}
                    </h2>
                    <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-4">
                      {project.longDescription}
                    </p>

                    {project.metrics && (
                      <div className="flex flex-wrap gap-4 mb-5">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-[16px] font-bold gradient-text font-display">{m.value}</div>
                            <div className="text-[11px] text-[var(--text-tertiary)]">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-neutral tag">{tag}</span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${project.id}`}
                      className="btn-primary inline-flex text-[13px] py-2.5 px-5"
                    >
                      Read Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
