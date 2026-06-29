"use client";

import { useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  id?: string;
  "aria-label"?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 30,
  onClick,
  href,
  id,
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const xValue = useRef(0);
  const yValue = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) / (rect.width / 2);
    const distY = (e.clientY - centerY) / (rect.height / 2);
    xValue.current = distX * strength;
    yValue.current = distY * strength;
  };

  const handleMouseLeave = () => {
    xValue.current = 0;
    yValue.current = 0;
  };

  const Component = href ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        id={id}
        href={href as string}
        onClick={onClick}
        aria-label={ariaLabel}
        className={className}
        whileHover={{ x: xValue.current, y: yValue.current }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </Component>
    </motion.div>
  );
}
