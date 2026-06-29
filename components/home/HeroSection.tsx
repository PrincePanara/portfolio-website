"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, BadgeCheck, ArrowRight, ArrowDown } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { InteractiveAvatar } from "../shared/InteractiveAvatar";
import { Typewriter } from "@/components/ui/typewriter";

const socials = [
  { href: "https://x.com/princepanara", icon: TwitterIcon, label: "Twitter" },
  { href: "https://www.linkedin.com/in/prince-panara-88228b311/", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com/princepanara", icon: GithubIcon, label: "GitHub" },
  { href: "/prince-panara-resume.pdf", icon: Copy, label: "Resume" }, // using copy as placeholder for doc
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("princepanara01@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 flex flex-col items-center justify-center">
      <div className="container-xl max-w-4xl flex flex-col items-center text-center">

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-[var(--bg-secondary)] shadow-sm mb-6 bg-[var(--bg-card)] flex items-center justify-center"
        >
          <InteractiveAvatar />
        </motion.div>

        {/* Dynamic Name & Role */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-6 min-h-[48px] w-full"
        >
          <h1 className="text-[clamp(1.2rem,4.5vw,2.25rem)] font-bold tracking-tight text-[var(--text-primary)] flex items-center justify-center whitespace-nowrap">
            <span>I am&nbsp;</span>
            <div className="inline-flex items-center whitespace-nowrap flex-shrink-0">
              {mounted && (
                <Typewriter
                  text={[
                    "Prince Panara.",
                    "a Problem Solver.",
                    "a Full Stack Developer.",
                    "a UI/UX Designer.",
                    "a Creative Thinker.",

                  ]}
                  speed={70}
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"|"}
                  className="whitespace-nowrap"
                />
              )}
            </div>
            <BadgeCheck className="text-[var(--bg-primary)] fill-[var(--text-primary)] -ml-1 sm:ml-0 flex-shrink-0" size={24} />
          </h1>
        </motion.div>

        {/* Email & Copy */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative flex items-center gap-2 mb-6 cursor-pointer group"
          onClick={copyEmail}
        >
          <motion.div
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all ${
              copied
                ? "bg-green-500/10 border-green-500/40 text-green-500"
                : "bg-[var(--bg-card)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
            }`}
            animate={copied ? { scale: [1, 1.04, 1] } : {}}
            transition={{ duration: 0.2 }}
          >
            <span className="font-mono text-[13px]">princepanara01@gmail.com</span>
            {copied ? (
              <BadgeCheck size={14} className="text-green-500 shrink-0" />
            ) : (
              <Copy size={14} className="opacity-50 shrink-0 group-hover:opacity-100 transition-opacity" />
            )}
          </motion.div>

          {/* Tooltip */}
          <AnimatePresence>
            {copied && (
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: -32 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-0 text-[11px] font-semibold px-3 py-1 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] whitespace-nowrap pointer-events-none shadow-md"
              >
                ✓ Copied!
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-base text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Full-stack developer and UI/UX designer building beautiful, highly functional applications, SaaS products, and digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all"
          >
            View My Work
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] px-6 py-3 rounded-full text-sm font-medium hover:border-[var(--border-strong)] hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            Let&apos;s Talk
            <ArrowDown size={16} />
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all shadow-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
