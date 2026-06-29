"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

const themes = [
  { value: "system", icon: Monitor, label: "System" },
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  const current = themes.find((t) => t.value === theme) || themes[0];
  const Icon = current.icon;

  const cycle = () => {
    const idx = themes.findIndex((t) => t.value === theme);
    setTheme(themes[(idx + 1) % themes.length].value);
  };

  return (
    <motion.button
      id="theme-toggle"
      onClick={cycle}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:bg-accent-glow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to next theme (current: ${current.label})`}
      title={`Theme: ${current.label}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 90 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Icon
            size={18}
            className="text-text-secondary hover:text-accent-primary transition-fast"
          />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
