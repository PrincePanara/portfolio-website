import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";
import { SpotlightBackground } from "@/components/backgrounds/GridBackground";
import { Download, Mail, Phone, MapPin, Globe, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { education } from "@/data/experience";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Prince Panara's interactive resume — experience, skills, and education.",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen pt-24">
      <SpotlightBackground />
      <div className="relative z-10 container-xl py-12">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[var(--border)] pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-3">
              Resume
            </h1>
            <p className="text-[var(--text-secondary)] text-[16px]">
              A quick look at my experience, projects, and skills.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/prince-panara-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 text-[14px] font-medium text-[var(--text-primary)] bg-transparent border border-[var(--border)] rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
            >
              Open PDF <ExternalLink size={16} />
            </a>
            <a
              href="/prince-panara-resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-2.5 text-[14px] font-medium text-[var(--text-primary)] bg-transparent border border-[var(--border)] rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
            >
              Download <Download size={16} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Embedded Resume PDF */}
          <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl bg-[#323639]">
            {/* Floating Action Button */}
            <a
              href="/prince-panara-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Open in New Tab"
              className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 bg-[#2d2d2d] hover:bg-[#404040] border border-white/10 rounded-md text-white/90 hover:text-white transition-all shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            >
              <ExternalLink size={18} />
            </a>
            
            <iframe
              src="/prince-panara-resume.pdf#view=FitH&toolbar=0"
              className="w-full h-[85vh] min-h-[800px]"
              title="Prince Panara Resume PDF"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
