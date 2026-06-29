"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, Lightbulb, PenTool, Code, CheckCircle, Rocket } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const phases = [
  { step: "01", icon: Search, label: "Idea & Discovery", description: "Deep dive into user needs, market trends, and product strategy to set a rock-solid foundation.", color: "#6C47FF" },
  { step: "02", icon: Lightbulb, label: "Plan & Strategize", description: "Architecting scalable solutions, mapping user journeys, and defining the core technology stack.", color: "#00D4FF" },
  { step: "03", icon: PenTool, label: "UI/UX Design", description: "Crafting intuitive interfaces, premium aesthetics, and highly accessible user experiences.", color: "#FFB347" },
  { step: "04", icon: Code, label: "Develop & Build", description: "Writing robust, performant, and secure code using cutting-edge frameworks and practices.", color: "#4ECDC4" },
  { step: "05", icon: CheckCircle, label: "Test & Optimize", description: "Ensuring flawless performance, comprehensive security audits, and bug-free digital experiences.", color: "#F0932B" },
  { step: "06", icon: Rocket, label: "Launch & Deliver", description: "Seamless deployments, continuous performance monitoring, and ongoing technical support.", color: "#FF6B6B" },
];

export function CaseStudyFramework() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth the scroll progress for a premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="mb-32 relative" ref={containerRef}>
      <FadeIn className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-6">
          My Thought <span className="gradient-text">Process</span>
        </h2>
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          From the first spark of an idea to the final product launch, I follow a highly structured, iterative workflow to ensure excellence at every stage.
        </p>
      </FadeIn>
      
      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Background Track Line */}
        <div className="absolute top-0 bottom-0 left-[43px] md:left-[71px] w-[2px] bg-[var(--border)] rounded-full" />
        
        {/* Animated Glow Line */}
        <motion.div 
          style={{ scaleY: smoothProgress, transformOrigin: "top" }}
          className="absolute top-0 bottom-0 left-[43px] md:left-[71px] w-[2px] bg-gradient-to-b from-[#6C47FF] via-[#00D4FF] to-[#FF6B6B] rounded-full z-10 shadow-[0_0_15px_rgba(108,71,255,0.5)]" 
        />

        <div className="flex flex-col gap-12 md:gap-20 relative z-20 py-10">
          {phases.map((phase, i) => (
            <FrameworkStage key={phase.step} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FrameworkStage({ phase, index }: { phase: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track this specific item's visibility
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"], // Becomes fully active when it hits the center of screen
  });

  // Animate opacity and scale based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const iconScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const glowOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const borderColor = useTransform(scrollYProgress, [0.8, 1], ["var(--border)", phase.color]);
  
  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="relative flex items-center gap-6 md:gap-12 group"
    >
      {/* Node / Number Indicator */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-[var(--bg-primary)] shadow-sm z-20">
        
        {/* Active Glow behind the circle */}
        <motion.div 
          style={{ opacity: glowOpacity, background: phase.color }}
          className="absolute inset-0 rounded-full blur-md md:blur-xl transition-opacity duration-300"
        />
        
        {/* Number Circle */}
        <motion.div 
          style={{ borderColor }}
          className="relative z-10 bg-[var(--bg-primary)] w-full h-full rounded-full flex items-center justify-center font-display font-bold text-lg md:text-xl text-[var(--text-primary)] border-2 transition-colors duration-300"
        >
          {phase.step}
        </motion.div>
      </div>

      {/* Content Card (Glassmorphism) */}
      <div className="flex-1">
        <motion.div 
          whileHover={{ x: 6 }}
          className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-primary)] border border-[var(--border)] shadow-sm backdrop-blur-sm overflow-hidden transition-transform duration-300"
        >
          {/* Subtle Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 opacity-70" style={{ background: `linear-gradient(90deg, ${phase.color}, transparent)` }} />

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3 md:mb-4">
            <motion.div 
              style={{ scale: iconScale, background: `linear-gradient(135deg, ${phase.color}, ${phase.color}CC)` }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0"
            >
              <phase.icon size={24} />
            </motion.div>
            
            <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              {phase.label}
            </h3>
          </div>
          
          <p className="text-[14px] md:text-[16px] text-[var(--text-secondary)] leading-relaxed sm:pl-[4.5rem]">
            {phase.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
