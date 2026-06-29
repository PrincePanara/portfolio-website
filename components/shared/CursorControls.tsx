"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, MousePointer2 } from "lucide-react";
import { CursorMode, setCursorMode } from "./CustomCursor";

const modes: { id: CursorMode; label: string; icon: string }[] = [
  { id: "classic", label: "Classic", icon: "⚪️" },
  { id: "dots", label: "Dots Trail", icon: "🫧" },
  { id: "glow", label: "Glow", icon: "✨" },
  { id: "pet", label: "Pet Follower", icon: "🐕" },
  { id: "emoji", label: "Sparkles", icon: "🎇" },
];

export function CursorControls() {
  const [open, setOpen] = useState(false);
  const [activeMode, setActiveMode] = useState<CursorMode>("pet");

  // Sync state if changed externally (optional, but good for robust state)
  useEffect(() => {
    const handleModeChange = (e: Event) => {
      setActiveMode((e as CustomEvent).detail);
    };
    window.addEventListener("cursor-mode-change", handleModeChange);
    return () => window.removeEventListener("cursor-mode-change", handleModeChange);
  }, []);

  const handleSelect = (mode: CursorMode) => {
    setCursorMode(mode);
    setActiveMode(mode);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute bottom-16 right-0 bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--border)] rounded-2xl p-4 shadow-xl w-48"
          >
            <div className="text-[10px] font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-3 px-2">
              Cursor Style
            </div>
            <div className="flex flex-col gap-1">
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleSelect(m.id)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors w-full text-left ${
                    activeMode === m.id
                      ? "bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--text-primary)]"
                  }`}
                >
                  <span className="text-base">{m.icon}</span>
                  {m.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-[var(--bg-card)] border border-[var(--border)] shadow-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
      >
        {open ? <X size={20} /> : <MousePointer2 size={20} />}
      </motion.button>
    </div>
  );
}
