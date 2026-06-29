import type { Metadata } from "next";
import { GridBackground } from "@/components/backgrounds/GridBackground";
import { FadeIn } from "@/components/motion/FadeIn";
import { education } from "@/data/experience";
import { Briefcase, Calendar, ExternalLink, ChevronRight, GraduationCap, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Prince Panara — his journey, values, education, and the experiences that shaped him as a developer and designer.",
};

const values = [
  {
    icon: "🧩",
    title: "Problem Solving",
    description: "I enjoy breaking down complex challenges into simple, elegant, and effective solutions.",
  },
  {
    icon: "📚",
    title: "Continuous Learning",
    description: "Technology moves fast. I stay ahead by constantly exploring new tools and frameworks.",
  },
  {
    icon: "✨",
    title: "User Experience",
    description: "I build with the end-user in mind, ensuring every interaction feels intuitive and seamless.",
  },
  {
    icon: "🎯",
    title: "Quality First",
    description: "I believe in doing things right. High-quality code and polished design are non-negotiable.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "I love exploring creative ideas to build products that stand out and make a difference.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "I value teamwork and clear communication, treating every project as a true partnership.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <GridBackground />

      <div className="relative z-10">
        {/* Hero */}
        <section className="section container-xl">
          <FadeIn className="max-w-3xl">
            <div className="section-label mb-6">
              <span>👋</span> About Me
            </div>
            <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-6">
              I Build Things That{" "}
              <span className="gradient-text">Matter</span>
            </h1>
            <div className="space-y-4 text-body-lg text-[var(--text-secondary)] max-w-2xl">
              <p>
                Hey — I&apos;m <strong className="text-[var(--text-primary)]">Prince Panara</strong>, a
                full-stack developer, UI/UX designer, and mobile app developer. Based in India,
                working globally.
              </p>
              <p>
                I’m passionate about building things that matter. As a Developer and UI/UX Designer, I enjoy bringing ideas to life through thoughtful design and practical solutions. I love exploring new technologies, solving challenges, and creating experiences that are simple, useful, and enjoyable for people. My goal is to keep learning, keep building, and create work that makes a difference.
              </p>

            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section className="section-sm bg-[var(--bg-secondary)] relative overflow-hidden">
          <div className="container-xl">
            <FadeIn className="text-center mb-10">
              <h2 className="text-heading-lg font-display font-bold text-[var(--text-primary)]">
                What I Stand For
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.1}>
                  <div className="card card-glow p-6 h-full">
                    <div className="text-3xl mb-4">{v.icon}</div>
                    <h3 className="text-[15px] font-display font-bold text-[var(--text-primary)] mb-2">
                      {v.title}
                    </h3>
                    <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn delay={0} direction="left">
              <div className="card card-glow p-8 h-full border-l-4 border-l-[var(--accent-primary)]">
                <h2 className="text-heading-sm font-display font-bold text-[var(--accent-primary)] mb-3">
                  Mission
                </h2>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  To create digital products that combine functional excellence with extraordinary
                  design — tools that users actually enjoy using, and businesses are proud to show off.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} direction="right">
              <div className="card card-glow p-8 h-full border-l-4 border-l-[var(--accent-secondary)]">
                <h2 className="text-heading-sm font-display font-bold text-[var(--accent-secondary)] mb-3">
                  Vision
                </h2>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  A future where quality software is accessible to everyone — where the gap between
                  enterprise-grade tools and small business solutions no longer exists.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>


        {/* Education */}
        <section className="section-sm bg-[var(--bg-secondary)] relative overflow-hidden">
          <div className="container-xl">
            <FadeIn className="mb-10">
              <div className="section-label mb-4">
                <GraduationCap size={14} /> Education
              </div>
              <h2 className="text-heading-lg font-display font-bold text-[var(--text-primary)]">
                Academic Background
              </h2>
            </FadeIn>
            {education.map((edu) => (
              <FadeIn key={edu.id}>
                <div className="card card-glow p-6 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="text-[12px] font-mono text-[var(--accent-primary)] mb-1">
                      {edu.startYear} — {edu.endYear}
                    </div>
                    <h3 className="text-[16px] font-display font-bold text-[var(--text-primary)] mb-1">
                      {edu.degree}
                    </h3>
                    <div className="text-[14px] text-[var(--text-secondary)] mb-2">
                      {edu.institution}
                    </div>
                    <p className="text-[13px] text-[var(--text-tertiary)]">{edu.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Fun facts */}
        {/* <section className="section container-xl">
          <FadeIn className="text-center mb-10">
            <h2 className="text-heading-lg font-display font-bold text-[var(--text-primary)]">
              A Few Fun Facts
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "☕", label: "Cups of coffee per day", value: "3-4" },
              { emoji: "🎵", label: "Genre while coding", value: "Lo-fi Hip Hop" },
              { emoji: "🌙", label: "Peak coding hours", value: "10pm–2am" },
              { emoji: "🎮", label: "Favourite downtime", value: "Gaming" },
            ].map((fact) => (
              <FadeIn key={fact.label}>
                <div className="card p-5 text-center">
                  <div className="text-3xl mb-3">{fact.emoji}</div>
                  <div className="text-[14px] font-bold text-[var(--text-primary)] mb-1">{fact.value}</div>
                  <div className="text-[11px] text-[var(--text-tertiary)]">{fact.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}
