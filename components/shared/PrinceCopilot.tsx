"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { X, Send, User as UserIcon, Minimize2, Maximize2 } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   INTENT ENGINE
──────────────────────────────────────────────────────────── */
type ActionType =
  | { type: "navigate"; path: string }
  | { type: "scroll"; id: string }
  | { type: "external"; url: string }
  | { type: "download"; url: string }
  | null;

interface Intent {
  keywords: string[];
  response: string;
  action: ActionType;
}

const INTENTS: Intent[] = [
  {
    keywords: ["resume", "cv", "curriculum", "download resume", "view resume", "open resume", "my resume"],
    response: "Opening your Resume right away! 📄",
    action: { type: "navigate", path: "/resume" },
  },
  {
    keywords: ["download cv", "download resume", "get resume", "get cv"],
    response: "Starting your resume download now! 📥",
    action: { type: "download", url: "/prince-panara-resume.pdf" },
  },
  {
    keywords: [
      "projects", "my work", "portfolio", "show work", "recent work",
      "featured projects", "what have you built", "what have you made",
      "show projects", "take me to projects", "flutter app", "react project",
    ],
    response: "Sure! Taking you to my Projects page right now 🚀",
    action: { type: "navigate", path: "/projects" },
  },
  {
    keywords: ["about", "who are you", "tell me about", "introduce yourself", "background", "story"],
    response: "Let me introduce myself! Scrolling to the About section… 👋",
    action: { type: "scroll", id: "about" },
  },
  {
    keywords: [
      "skills", "tech stack", "technologies", "what technologies", "what do you know",
      "what can you do", "what languages", "programming", "flutter", "react", "next",
      "typescript", "firebase", "dart",
    ],
    response: "Here's my Tech Stack! Scrolling you there now ⚡",
    action: { type: "scroll", id: "skills" },
  },
  {
    keywords: ["skills page", "all skills", "full skills"],
    response: "Taking you to the full Skills page! ⚡",
    action: { type: "navigate", path: "/skills" },
  },
  {
    keywords: [
      "contact", "hire you", "hire me", "i want to hire", "how can i contact",
      "reach you", "get in touch", "send message", "email you", "work together",
      "collaborate", "freelance",
    ],
    response: "Opening the Contact page for you! 📬",
    action: { type: "navigate", path: "/contact" },
  },
  {
    keywords: ["home", "go home", "take me home", "main page", "homepage", "start"],
    response: "Taking you back to the Home page! 🏠",
    action: { type: "navigate", path: "/" },
  },
  {
    keywords: ["case study", "case studies", "studies", "detailed work"],
    response: "Navigating to Case Studies! 📋",
    action: { type: "navigate", path: "/case-studies" },
  },
  {
    keywords: ["github", "code", "source code", "open source", "repositories", "repos"],
    response: "Opening Prince's GitHub profile in a new tab! 🐙",
    action: { type: "external", url: "https://github.com/princepanara" },
  },
  {
    keywords: ["linkedin", "professional profile", "connect on linkedin"],
    response: "Opening LinkedIn profile in a new tab! 💼",
    action: { type: "external", url: "https://www.linkedin.com/in/prince-panara-88228b311/" },
  },
  {
    keywords: ["twitter", "x.com", "tweet", "follow on twitter"],
    response: "Opening Twitter/X in a new tab! 🐦",
    action: { type: "external", url: "https://x.com/princepanara" },
  },
  {
    keywords: ["email", "send email", "mail", "email address"],
    response: "You can email Prince at princepanara01@gmail.com 📧",
    action: { type: "external", url: "mailto:princepanara01@gmail.com" },
  },
];

const GREETING =
  `Hi there! 👋 I'm **Prince Copilot**, your intelligent guide to this portfolio.\n\nYou can ask me things like:\n- *"Show me your projects"*\n- *"Open the Resume"*\n- *"How can I contact you?"*\n- *"What technologies do you use?"*\n\nWhat would you like to explore?`;

const FALLBACKS = [
  "Hmm, I'm not sure about that one. Try asking me to open a page — like **Projects**, **Resume**, or **Contact**! 😊",
  "I didn't quite catch that. You can ask me to navigate somewhere — try *'Show me your work'* or *'Open GitHub'*.",
  "I'm still learning! Try asking about my **skills**, **projects**, or how to **contact** Prince.",
];

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: Date;
}

function resolveIntent(input: string): { response: string; action: ActionType } {
  const lower = input.toLowerCase().trim();
  for (const intent of INTENTS) {
    if (intent.keywords.some((kw) => lower.includes(kw))) {
      return { response: intent.response, action: intent.action };
    }
  }
  return {
    response: FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)],
    action: null,
  };
}

/* ────────────────────────────────────────────────────────────
   AVATAR COMPONENT
──────────────────────────────────────────────────────────── */
function CopilotAvatar({
  size = 32,
  pulse = false,
  showStatus = true,
  glowRing = false,
}: {
  size?: number;
  pulse?: boolean;
  showStatus?: boolean;
  glowRing?: boolean;
}) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {/* Glow ring */}
      {glowRing && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #6C47FF, #00D4FF, #6C47FF)",
            padding: 2,
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Pulse ring */}
      {pulse && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 0 0 rgba(108, 71, 255, 0.4)",
          }}
          animate={{ boxShadow: ["0 0 0 0 rgba(108,71,255,0.4)", "0 0 0 8px rgba(108,71,255,0)"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}

      {/* Avatar image */}
      <div
        className="relative rounded-full overflow-hidden border-2 border-[var(--accent-primary)]/30"
        style={{ width: size, height: size }}
      >
        <NextImage
          src="/avatar.png"
          alt="Prince Panara"
          fill
          className="object-cover"
          sizes={`${size}px`}
          priority
        />
      </div>

      {/* Online status dot */}
      {showStatus && (
        <span
          className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[var(--bg-card)]"
          style={{ width: size * 0.28, height: size * 0.28 }}
        />
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN COMPONENT
──────────────────────────────────────────────────────────── */
export function PrinceCopilot() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "0", role: "bot", text: GREETING, timestamp: new Date() },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimized]);

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, minimized]);

  const executeAction = (action: ActionType) => {
    if (!action) return;
    setTimeout(() => {
      switch (action.type) {
        case "navigate":
          router.push(action.path);
          break;
        case "scroll": {
          const el = document.getElementById(action.id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            router.push(`/#${action.id}`);
          }
          break;
        }
        case "external":
          window.open(action.url, "_blank", "noopener,noreferrer");
          break;
        case "download": {
          const a = document.createElement("a");
          a.href = action.url;
          a.download = "Prince-Panara-Resume.pdf";
          a.click();
          break;
        }
      }
    }, 700);
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 700));

    const { response, action } = resolveIntent(text);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "bot",
      text: response,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
    executeAction(action);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\n)/g);
    return parts.map((part, i) => {
      if (part === "\n") return <br key={i} />;
      if (part.startsWith("**") && part.endsWith("**"))
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      if (part.startsWith("*") && part.endsWith("*"))
        return <em key={i}>{part.slice(1, -1)}</em>;
      if (part.startsWith("- "))
        return (
          <span key={i} className="block pl-2 before:content-['•'] before:mr-2 before:text-[var(--accent-primary)]">
            {part.slice(2)}
          </span>
        );
      return <span key={i}>{part}</span>;
    });
  };

  const handleQuickAction = (label: string) => {
    const userMsg: Message = {
      id: (Date.now() - 1).toString(),
      role: "user",
      text: label,
      timestamp: new Date(),
    };
    const { response, action } = resolveIntent(label);
    const botMsg: Message = {
      id: Date.now().toString(),
      role: "bot",
      text: response,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    executeAction(action);
  };

  return (
    <>
      {/* ── Floating Action Button ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setOpen(true)}
            aria-label="Open Prince Copilot"
            id="copilot-fab"
            className="fixed bottom-6 right-6 z-[9000] rounded-full shadow-lg shadow-[var(--accent-primary)]/20 hover:shadow-xl hover:shadow-[var(--accent-primary)]/40 transition-shadow"
          >
            {/* Idle pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[var(--accent-primary)]/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <CopilotAvatar size={54} showStatus pulse={false} glowRing={false} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="fixed bottom-6 right-6 z-[9000] w-[min(390px,calc(100vw-24px))] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{
              height: minimized ? "72px" : "540px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              transition: "height 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center gap-3 px-4 py-3 shrink-0"
              style={{ background: "linear-gradient(135deg, #6C47FF 0%, #4f35cc 100%)" }}
            >
              {/* Avatar in header */}
              <CopilotAvatar size={38} showStatus glowRing={false} pulse={isTyping} />

              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-[14px] leading-tight">Prince Copilot</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  {isTyping ? (
                    <p className="text-white/70 text-[11px] italic">Typing…</p>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-white/70 text-[11px]">Always available</p>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={() => setMinimized((p) => !p)}
                aria-label={minimized ? "Expand" : "Minimize"}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                {minimized ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X size={13} />
              </button>
            </div>

            {/* ── Body ── */}
            {!minimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[var(--border-strong)] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      {/* Avatar / User icon */}
                      {msg.role === "bot" ? (
                        <CopilotAvatar size={26} showStatus={false} glowRing={false} />
                      ) : (
                        <div className="w-[26px] h-[26px] rounded-full shrink-0 bg-[var(--border-strong)] flex items-center justify-center">
                          <UserIcon size={13} className="text-[var(--text-secondary)]" />
                        </div>
                      )}

                      {/* Bubble */}
                      <div
                        className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "text-white rounded-br-sm"
                            : "bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border)] rounded-bl-sm"
                        }`}
                        style={
                          msg.role === "user"
                            ? { background: "linear-gradient(135deg, #6C47FF, #4f35cc)" }
                            : {}
                        }
                      >
                        {renderText(msg.text)}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-end gap-2"
                    >
                      {/* Pulsing avatar while typing */}
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <CopilotAvatar size={26} showStatus={false} glowRing={false} />
                      </motion.div>
                      <div className="px-3.5 py-3 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl rounded-bl-sm flex gap-1 items-center">
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <motion.span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div ref={bottomRef} />
                </div>

                {/* ── Quick Actions ── */}
                <div className="px-4 pb-2 flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden shrink-0">
                  {["Projects", "Resume", "Skills", "Contact", "GitHub"].map((label) => (
                    <button
                      key={label}
                      onClick={() => handleQuickAction(label)}
                      className="shrink-0 px-3 py-1.5 text-[11px] font-medium rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] bg-[var(--bg-secondary)] transition-all whitespace-nowrap"
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* ── Input ── */}
                <div className="px-4 pb-4 pt-2 border-t border-[var(--border)] shrink-0">
                  <div className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl px-3 py-2 focus-within:border-[var(--accent-primary)] transition-colors">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKey}
                      placeholder="Ask me anything…"
                      id="copilot-input"
                      className="flex-1 bg-transparent border-none outline-none text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                    />
                    <motion.button
                      onClick={sendMessage}
                      disabled={!input.trim()}
                      id="copilot-send"
                      aria-label="Send message"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed transition-opacity shrink-0"
                      style={{ background: "linear-gradient(135deg, #6C47FF, #4f35cc)" }}
                    >
                      <Send size={12} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
