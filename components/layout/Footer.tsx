"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const socials = [
  { href: "https://x.com/princepanara", icon: TwitterIcon, label: "Twitter" },
  { href: "https://www.linkedin.com/in/prince-panara-88228b311/", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com/princepanara", icon: GithubIcon, label: "GitHub" },
];

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="relative overflow-hidden">
      {/* Quote and Visitor Block - Only on Home Page */}
      {isHome && (
        <>
          <div className="container-xl pt-16 pb-12">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm">
              
              {/* Left Side: Quote */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[var(--border)] relative">
                <span className="text-4xl font-serif text-[var(--text-tertiary)] absolute top-4 left-4 opacity-40 leading-none">
                  “
                </span>
                <p className="text-[14px] md:text-[15px] text-[var(--text-primary)] font-medium leading-relaxed mb-4 mt-2 z-10 pl-2">
                  Success is not final, failure is not fatal: it is the courage to continue that counts.
                </p>
                <p className="text-[13px] text-[var(--text-secondary)] text-right z-10">
                  — Winston Churchill
                </p>
              </div>

              {/* Right Side: Visitor Count */}
              <div className="md:w-[35%] p-6 md:p-8 flex items-center justify-center bg-[var(--bg-secondary)]/50">
                <p className="text-[14px] text-[var(--text-secondary)]">
                  You are the <span className="font-bold text-[15px] text-[var(--text-primary)] mx-1">475</span><sup className="text-[10px] font-semibold -top-1">th</sup> visitor
                </p>
              </div>

            </div>
          </div>

          {/* Divider Below Card */}
          <div className="w-full h-px bg-[var(--border)]" />
        </>
      )}

      <div className="relative container-xl py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Copyright & Text */}
          <div className="flex flex-col items-center md:items-start text-[13px] font-mono text-[var(--text-secondary)] gap-2">
            <p>© {new Date().getFullYear()} Prince Panara</p>
            <p className="text-[var(--text-tertiary)]">Built with love, late nights, coffee</p>
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-transparent border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-card)] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
