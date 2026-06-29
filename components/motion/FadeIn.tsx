"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  const directionMap = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
      transition={{
        delay,
        duration,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode[];
  delay?: number;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Stagger({
  children,
  delay = 0,
  stagger = 0.1,
  direction = "up",
  className = "",
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
    >
      {children.map((child, i) => (
        <FadeIn key={i} delay={delay + i * stagger} direction={direction}>
          {child}
        </FadeIn>
      ))}
    </motion.div>
  );
}
