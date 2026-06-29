"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home, User, Briefcase, FolderOpen, BookOpen, Zap, Star,
  Mail, FileText, Image, MessageSquare, Building2, FlaskConical,
  LayoutDashboard, Search, ArrowRight, ExternalLink,
} from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  group: string;
  shortcut?: string;
}

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
}

export function CommandMenu({ open, onClose }: CommandMenuProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const navigate = (path: string) => {
    router.push(path);
    onClose();
  };

  const pages: CommandItem[] = [
    { id: "home", label: "Home", icon: <Home size={16} />, action: () => navigate("/"), group: "Pages" },
    { id: "about", label: "About", icon: <User size={16} />, action: () => navigate("/about"), group: "Pages" },
    { id: "projects", label: "Projects", icon: <FolderOpen size={16} />, action: () => navigate("/projects"), group: "Pages" },
    { id: "case-studies", label: "Case Studies", icon: <BookOpen size={16} />, action: () => navigate("/case-studies"), group: "Pages" },
    { id: "skills", label: "Skills", icon: <Zap size={16} />, action: () => navigate("/skills"), group: "Pages" },
    { id: "resume", label: "Resume", icon: <FileText size={16} />, action: () => navigate("/resume"), group: "Pages" },
    { id: "contact", label: "Contact", icon: <Mail size={16} />, action: () => navigate("/contact"), group: "Pages" },

    { id: "playground", label: "Playground", icon: <FlaskConical size={16} />, action: () => navigate("/playground"), group: "Pages" },
  ];

  const socials: CommandItem[] = [
    { id: "github", label: "GitHub", description: "github.com/princepanara", icon: <GithubIcon size={16} />, action: () => window.open("https://github.com/princepanara", "_blank"), group: "Social" },
    { id: "twitter", label: "Twitter / X", description: "@princepanara", icon: <TwitterIcon size={16} />, action: () => window.open("https://x.com/princepanara", "_blank"), group: "Social" },
    { id: "linkedin", label: "LinkedIn", description: "Prince Panara", icon: <LinkedinIcon size={16} />, action: () => window.open("https://www.linkedin.com/in/prince-panara-88228b311/", "_blank"), group: "Social" },
  ];

  const allItems = [...pages, ...socials];

  useEffect(() => {
    if (!open) setSearch("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9000] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[min(640px,calc(100vw-32px))] z-[9001]"
          >
            <Command
              className="bg-[var(--bg-card)] border border-[var(--border-strong)] rounded-2xl shadow-2xl overflow-hidden"
              shouldFilter={true}
              onKeyDown={(e) => {
                if (e.key === "Escape") onClose();
              }}
            >
              <div className="flex items-center border-b border-[var(--border)] px-4">
                <Search size={16} className="text-[var(--text-tertiary)] shrink-0" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Search pages, links..."
                  className="flex-1 px-3 py-5 bg-transparent border-none outline-none text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] text-[15px]"
                  autoFocus
                />
                <kbd className="px-2 py-1 text-xs text-[var(--text-tertiary)] bg-[var(--bg-secondary)] rounded-md border border-[var(--border)]">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-[320px] overflow-y-auto p-2 overflow-x-hidden [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full">
                <Command.Empty className="py-8 text-center text-[var(--text-tertiary)] text-sm">
                  No results found for &quot;{search}&quot;
                </Command.Empty>

                {["Pages", "Social"].map((group) => {
                  const groupItems = allItems.filter((i) => i.group === group);
                  return (
                    <Command.Group
                      key={group}
                      heading={group}
                      className="[&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-[var(--text-tertiary)] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2"
                    >
                      {groupItems.map((item) => (
                        <Command.Item
                          key={item.id}
                          value={item.label}
                          onSelect={item.action}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-[var(--text-secondary)] text-sm data-[selected=true]:bg-[var(--accent-glow)] data-[selected=true]:text-[var(--accent-primary)] transition-fast"
                        >
                          <span className="opacity-60">{item.icon}</span>
                          <span className="flex-1">{item.label}</span>
                          {item.description && (
                            <span className="text-xs text-[var(--text-tertiary)]">{item.description}</span>
                          )}
                          <ArrowRight size={12} className="opacity-30" />
                        </Command.Item>
                      ))}
                    </Command.Group>
                  );
                })}
              </Command.List>

              <div className="border-t border-[var(--border)] px-4 py-3 flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-[10px]">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-[10px]">↵</kbd>
                  Open
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border)] rounded text-[10px]">ESC</kbd>
                  Close
                </span>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
