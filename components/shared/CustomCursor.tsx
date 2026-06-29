"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

export type CursorMode = "classic" | "dots" | "glow" | "pet" | "emoji";

// Global event to change mode
export const setCursorMode = (mode: CursorMode) => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cursor-mode-change", { detail: mode }));
  }
};

const TRAIL_LENGTHS = {
  classic: 0,
  dots: 12,
  glow: 1,
  pet: 1, // The pet itself is a single follower
  emoji: 8,
};

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [mode, setMode] = useState<CursorMode>("pet");

  // Physics springs for main dot
  const cursorX = useSpring(0, { stiffness: 800, damping: 40 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 40 });
  const ringX = useSpring(0, { stiffness: 200, damping: 30 });
  const ringY = useSpring(0, { stiffness: 200, damping: 30 });

  // Trails logic
  const mouseRef = useRef({ x: 0, y: 0, velX: 0, velY: 0, speed: 0 });
  const trailRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);
  const requestRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Pet logic
  const petRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    state: "idle" as "idle" | "walk" | "run",
    flip: false
  });
  const petImageRef = useRef<HTMLImageElement | null>(null);

  const initTrails = useCallback((m: CursorMode) => {
    trailRef.current = Array.from({ length: TRAIL_LENGTHS[m] }, () => ({
      x: mouseRef.current.x,
      y: mouseRef.current.y,
      vx: 0,
      vy: 0,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("custom-cursor");
    initTrails(mode);

    if (typeof window !== "undefined") {
      const img = new Image();
      img.src = "/pet.png";
      img.onload = () => {
        petImageRef.current = img;
      };
    }

    const handleModeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setMode(customEvent.detail);
      initTrails(customEvent.detail);
    };
    window.addEventListener("cursor-mode-change", handleModeChange);

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("cursor-mode-change", handleModeChange);
    };
  }, [mode, initTrails]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouseRef.current.x;
      const dy = e.clientY - mouseRef.current.y;
      mouseRef.current.velX = dx;
      mouseRef.current.velY = dy;
      mouseRef.current.speed = Math.sqrt(dx * dx + dy * dy);
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, select, textarea, [data-cursor='hover']")) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, select, textarea, [data-cursor='hover']")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  // Request Animation Frame loop for Canvas / Trails
  useEffect(() => {
    const renderLoop = () => {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      // Ensure canvas matches window size
      if (canvasRef.current.width !== window.innerWidth || canvasRef.current.height !== window.innerHeight) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      if (mode === "dots") {
        let x = targetX;
        let y = targetY;
        
        trailRef.current.forEach((p, i) => {
          const nextP = trailRef.current[i + 1] || trailRef.current[trailRef.current.length - 1];
          p.x += (x - p.x) * 0.4;
          p.y += (y - p.y) * 0.4;
          
          x = p.x;
          y = p.y;
          
          const ratio = (trailRef.current.length - i) / trailRef.current.length;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4 * ratio, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(108, 71, 255, ${ratio * 0.5})`;
          ctx.fill();
        });
      } else if (mode === "glow") {
        // Slow glowing follower
        const glow = trailRef.current[0];
        if (glow) {
          glow.x += (targetX - glow.x) * 0.1;
          glow.y += (targetY - glow.y) * 0.1;

          const gradient = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, 100);
          gradient.addColorStop(0, "rgba(108, 71, 255, 0.15)");
          gradient.addColorStop(1, "rgba(108, 71, 255, 0)");

          ctx.beginPath();
          ctx.arc(glow.x, glow.y, 100, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      } else if (mode === "emoji") {
        let x = targetX;
        let y = targetY;
        
        trailRef.current.forEach((p, i) => {
          p.x += (x - p.x) * 0.25;
          p.y += (y - p.y) * 0.25;
          x = p.x;
          y = p.y;
          
          const ratio = (trailRef.current.length - i) / trailRef.current.length;
          ctx.font = `${Math.max(10, 24 * ratio)}px Arial`;
          ctx.globalAlpha = ratio;
          ctx.fillText("✨", p.x - 10, p.y + 10);
          ctx.globalAlpha = 1;
        });
      }

      // Physics logic for Pet
      if (mode === "pet") {
        const pet = petRef.current as any;
        pet.idleTime = pet.idleTime || 0;
        
        const dx = targetX - pet.x;
        const dy = targetY - pet.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Pet leash physics - doesn't move if too close
        if (dist > 40) {
          pet.vx += dx * 0.002;
          pet.vy += dy * 0.002;
        }

        // Friction
        pet.vx *= 0.85;
        pet.vy *= 0.85;

        pet.x += pet.vx;
        pet.y += pet.vy;

        // Determine state
        const speed = Math.sqrt(pet.vx * pet.vx + pet.vy * pet.vy);
        if (speed > 5) {
          pet.state = "run";
          pet.idleTime = 0;
        } else if (speed > 0.5) {
          pet.state = "walk";
          pet.idleTime = 0;
        } else {
          pet.state = "idle";
          pet.idleTime += 1;
        }

        // Flip based on direction
        if (dx > 2) pet.flip = false;
        else if (dx < -2) pet.flip = true;

        // Render Pet
        ctx.save();
        ctx.translate(pet.x, pet.y);
        if (pet.flip) ctx.scale(-1, 1);
        
        // Scale up the pet slightly for better visibility
        ctx.scale(1.5, 1.5);

        const time = Date.now();
        let bounce = 0;
        let legAngle = 0;
        let tailAngle = 0;
        let stretch = 1;

        if (pet.state === "run") {
          bounce = Math.abs(Math.sin(time / 80)) * 4;
          legAngle = Math.sin(time / 80) * 0.8;
          tailAngle = Math.PI / 4; 
          stretch = 1.1; 
        } else if (pet.state === "walk") {
          bounce = Math.abs(Math.sin(time / 150)) * 2;
          legAngle = Math.sin(time / 150) * 0.5;
          tailAngle = Math.sin(time / 150) * 0.2; 
          stretch = 1.0;
        } else {
          // Idle
          bounce = 0;
          legAngle = 0;
          tailAngle = Math.sin(time / 300) * 0.1; 
          stretch = 1.0;
        }

        ctx.translate(0, -bounce);
        ctx.scale(stretch, 1 / stretch);

        // Extremely robust dark mode detection
        let isDark = false;
        if (typeof document !== 'undefined') {
          isDark = document.documentElement.classList.contains("dark") || document.body.classList.contains("dark");
        }
        
        // High contrast colors
        const color = isDark ? "#1A1A1A" : "#FFFFFF"; // Body color (slightly lighter than pitch black for visibility)
        const outline = isDark ? "#FFFFFF" : "#000000"; // Outline, ears, eyes, nose (pure white/black for max contrast)
        
        ctx.lineWidth = 2.5; // Thicker pixel-style outline
        ctx.strokeStyle = outline;

        // Draw Tail
        ctx.beginPath();
        ctx.moveTo(-10, -2);
        ctx.quadraticCurveTo(-18 + tailAngle * 10, -8 + tailAngle * 5, -16, -14 + tailAngle * 15);
        ctx.lineTo(-12, -14 + tailAngle * 15);
        ctx.quadraticCurveTo(-14 + tailAngle * 10, -6 + tailAngle * 5, -8, 0);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        // Draw Legs
        const drawLeg = (x: number, y: number, angle: number) => {
          ctx.beginPath();
          ctx.moveTo(x - 2, y);
          ctx.lineTo(x - 2 + Math.sin(angle) * 8, y + 8 + Math.cos(angle) * 8);
          ctx.lineTo(x + 2 + Math.sin(angle) * 8, y + 8 + Math.cos(angle) * 8);
          ctx.lineTo(x + 2, y);
          ctx.closePath();
          ctx.fillStyle = color;
          ctx.fill();
          ctx.stroke();
        };

        if (pet.state === "idle") {
          drawLeg(-8, 5, 0.1); // Back right
          drawLeg(4, 5, 0.1);  // Front right
          drawLeg(-4, 5, -0.1); // Back left
          drawLeg(8, 5, -0.1);  // Front left
        } else {
          drawLeg(-8, 5, legAngle); // Back left
          drawLeg(4, 5, -legAngle); // Front left
          drawLeg(-4, 5, -legAngle); // Back right
          drawLeg(8, 5, legAngle);   // Front right
        }

        // Draw Body
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(-14, -6, 26, 14, 4);
        } else {
          ctx.rect(-14, -6, 26, 14);
        }
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        // Draw Head
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(2, -14, 16, 14, 4);
        } else {
          ctx.rect(2, -14, 16, 14);
        }
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        // Draw Ear (solid black)
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(2, -14, 6, 12, 3);
        } else {
          ctx.rect(2, -14, 6, 12);
        }
        ctx.fillStyle = outline;
        ctx.fill();

        // Draw Eye
        ctx.fillStyle = outline;
        ctx.fillRect(12, -10, 2, 2);
        
        // Draw Nose
        ctx.fillRect(16, -6, 2, 2);

        // Draw "Bark" / Excitement lines when moving
        if (pet.state !== "idle") {
           ctx.beginPath();
           ctx.moveTo(20, -16);
           ctx.lineTo(24, -20);
           ctx.moveTo(22, -10);
           ctx.lineTo(26, -12);
           ctx.stroke();
        }

        // Draw Zzz if idle
        if (pet.idleTime > 180) {
          const zOffset = (time / 20) % 30; // floats up
          const zOpacity = 1 - zOffset / 30;
          ctx.globalAlpha = Math.max(0, zOpacity);
          ctx.font = "bold 12px Arial";
          ctx.fillStyle = "#A0A0A0";
          ctx.fillText("Z", 15 + zOffset * 0.2, -20 - zOffset);
          if (pet.idleTime > 240) {
             const zOffset2 = ((time - 1000) / 20) % 30;
             const zOpacity2 = 1 - zOffset2 / 30;
             ctx.globalAlpha = Math.max(0, zOpacity2);
             ctx.font = "bold 8px Arial";
             ctx.fillText("z", 25 + zOffset2 * 0.2, -15 - zOffset2);
          }
          ctx.globalAlpha = 1.0;
        }

        ctx.restore();
      }

      mouseRef.current.velX *= 0.8;
      mouseRef.current.velY *= 0.8;
      mouseRef.current.speed *= 0.8;

      requestRef.current = requestAnimationFrame(renderLoop);
    };

    requestRef.current = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mode]);

  if (!mounted) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ width: "100vw", height: "100vh" }}
      />
    </>
  );
}
