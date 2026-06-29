"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function AuroraBackground() {
  const { normalized } = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--mouse-x", `${(normalized.x + 1) * 50}%`);
      containerRef.current.style.setProperty("--mouse-y", `${(normalized.y + 1) * 50}%`);
    }
  }, [normalized]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Aurora blobs */}
      <div
        className="absolute w-[700px] h-[500px] rounded-full opacity-20 dark:opacity-15 animate-aurora"
        style={{
          background: "radial-gradient(ellipse, #6C47FF 0%, #9333EA 40%, transparent 70%)",
          top: "-10%",
          left: "10%",
          filter: "blur(60px)",
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute w-[500px] h-[400px] rounded-full opacity-15 dark:opacity-10 animate-aurora"
        style={{
          background: "radial-gradient(ellipse, #00D4FF 0%, #0EA5E9 50%, transparent 70%)",
          top: "20%",
          right: "-5%",
          filter: "blur(80px)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute w-[400px] h-[350px] rounded-full opacity-10 dark:opacity-10 animate-aurora"
        style={{
          background: "radial-gradient(ellipse, #FF6B6B 0%, #F97316 50%, transparent 70%)",
          bottom: "10%",
          left: "30%",
          filter: "blur(70px)",
          animationDelay: "-5s",
        }}
      />

      {/* Mouse reactive glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-[0.08] pointer-events-none transition-[transform] duration-700"
        style={{
          background: "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
          top: `calc(${(normalized.y + 1) * 50}% - 300px)`,
          left: `calc(${(normalized.x + 1) * 50}% - 300px)`,
          filter: "blur(40px)",
          transition: "top 1s ease, left 1s ease",
        }}
      />

      {/* Particle field */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[var(--accent-primary)]"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.05,
            animation: `drift ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `-${Math.random() * 15}s`,
          }}
        />
      ))}

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20" />
    </div>
  );
}
