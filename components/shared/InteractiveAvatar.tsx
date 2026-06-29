"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export function InteractiveAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tracking cursor position relative to the avatar center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the movement using spring physics
  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Transform coordinates into rotation angles for a 3D tilt effect
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate distance from center (normalized from -0.5 to 0.5)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Snap back to center when cursor leaves
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative w-full h-full perspective-1000"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full relative rounded-full overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Image
          src="/avatar.png"
          alt="Profile Avatar"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 112px, 128px"
          priority
        />
        
        {/* Subtle dynamic gloss overlay on hover */}
        <motion.div
          className="absolute inset-0 z-10 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 50%, transparent 80%)",
            opacity: isHovered ? 1 : 0,
            x: useTransform(smoothX, [-0.5, 0.5], ["-50%", "50%"]),
            y: useTransform(smoothY, [-0.5, 0.5], ["-50%", "50%"]),
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
}
