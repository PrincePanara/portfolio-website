"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Menu, X,
  Home, User, Briefcase, FolderOpen, BookOpen, Zap, Star,
  Mail, FileText, Image, MessageSquare, Building2, FlaskConical,
} from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { CommandMenu } from "@/components/shared/CommandMenu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/case-studies", label: "Cases", icon: BookOpen },
  { href: "/skills", label: "Skills", icon: Zap },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socialLinks = [
  { href: "https://github.com/princepanara", icon: GithubIcon, label: "GitHub" },
  { href: "https://x.com/princepanara", icon: TwitterIcon, label: "Twitter" },
  { href: "https://www.linkedin.com/feed/", icon: LinkedinIcon, label: "LinkedIn" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setCommandOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-[var(--glass-border)] py-3"
            : "bg-transparent py-5"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <nav className="container-xl h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
            <motion.div
              className="relative w-9 h-9 rounded-full overflow-hidden flex items-center justify-center shadow-sm border border-[var(--border)]"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <NextImage 
                src="/avatar.png" 
                alt="Prince Panara Logo" 
                fill 
                className="object-cover"
                sizes="36px"
              />
            </motion.div>
            <span className="font-display font-bold text-[var(--text-primary)] text-[16px] tracking-tight">
              Prince Panara
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  className={cn(
                    "relative px-3 py-1.5 rounded-lg text-[13px] font-medium transition-fast",
                    active
                      ? "text-[var(--accent-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[var(--accent-glow)] rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Search / Command */}
            <motion.button
              id="nav-search"
              onClick={() => setCommandOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-tertiary)] text-[13px] hover:border-[var(--border-strong)] hover:text-[var(--text-secondary)] transition-fast"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Search size={13} />
              <span>Search</span>
              <kbd className="ml-1 px-1 py-0.5 text-[10px] bg-[var(--bg-secondary)] rounded border border-[var(--border)]">
                ⌘K
              </kbd>
            </motion.button>

            {/* Social Links */}
            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-fast"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>

            <ThemeToggle />

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                id="nav-cta"
                className="hidden md:inline-flex btn-primary text-sm py-2 px-4"
              >
                Hire Me
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-fast"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[var(--bg-card)] border-l border-[var(--border)] p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-lg">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-fast",
                          active
                            ? "bg-[var(--accent-glow)] text-[var(--accent-primary)]"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                        )}
                      >
                        <link.icon size={16} />
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="flex items-center gap-3 mb-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-fast"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Menu */}
      <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
}
