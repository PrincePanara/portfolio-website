"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState(0); // 1, 2, 3
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Only show if it's the first visit in this session
    const hasSeenSplash = sessionStorage.getItem("splash_shown");

    if (!hasSeenSplash) {
      setShow(true);
      document.body.style.overflow = "hidden";

      // Timeline orchestration
      const t1 = setTimeout(() => setPhase(1), 200);
      const t2 = setTimeout(() => setPhase(2), 1800);
      const t3 = setTimeout(() => setPhase(3), 3200);
      const t4 = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("splash_shown", "1");
        document.body.style.overflow = "unset";
      }, 4800);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        document.body.style.overflow = "unset";
      };
    }
  }, []);

  if (!mounted) return null;

  // Premium easing curve (Apple/Linear style)
  const premiumEasing: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const textVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: premiumEasing }
    },
    exit: {
      y: -20,
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.6, ease: premiumEasing }
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--bg-primary)] pointer-events-auto overflow-hidden"
        >
          {/* Subtle animated background gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--bg-secondary)]/30 via-[var(--bg-primary)] to-[var(--bg-primary)]" />

          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-6 text-center">
            <AnimatePresence mode="wait">

              {/* PHASE 1: Greeting */}
              {phase === 1 && (
                <motion.div
                  key="phase1"
                  className="flex flex-col items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                  }}
                >
                  <motion.h1 variants={textVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    Hello <motion.span
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      className="origin-bottom-right inline-block"
                    >👋</motion.span>
                  </motion.h1>
                  <motion.p variants={textVariants} className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium tracking-tight">
                    Nice to meet you.
                  </motion.p>
                </motion.div>
              )}

              {/* PHASE 2: Introduction */}
              {phase === 2 && (
                <motion.div
                  key="phase2"
                  className="flex flex-col items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                >
                  <motion.h1 variants={textVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
                    I&apos;m Prince Panara
                  </motion.h1>
                  <motion.p variants={textVariants} className="text-xl md:text-2xl font-medium tracking-tight bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text text-transparent">
                    Full Stack Developer
                  </motion.p>
                </motion.div>
              )}

              {/* PHASE 3: Logo Reveal */}
              {phase === 3 && (
                <motion.div
                  key="phase3"
                  className="flex flex-col items-center"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    visible: { transition: { staggerChildren: 0.3 } }
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 1, ease: premiumEasing }
                      },
                      exit: { scale: 1.1, opacity: 0, filter: "blur(10px)", transition: { duration: 0.6, ease: premiumEasing } }
                    }}
                    className="relative mb-8"
                  >
                    {/* Glow effect */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-[var(--text-primary)] blur-2xl"
                    />
                    {/* Logo container (Floating + Pulse) */}
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-2xl"
                    >
                      <span className="text-5xl font-bold tracking-tighter">P³</span>
                    </motion.div>
                  </motion.div>

                  <motion.p
                    variants={textVariants}
                    className="text-sm md:text-base font-medium tracking-[0.2em] text-[var(--text-secondary)] uppercase"
                  >
                    Building Digital Experiences
                  </motion.p>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
