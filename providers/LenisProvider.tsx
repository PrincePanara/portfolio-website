"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register ScrollTrigger if not already registered
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const instance = new Lenis({
      duration: 1.2, // Slightly faster for snappier premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease
      smoothWheel: true,
      wheelMultiplier: 1, // Standard momentum
      touchMultiplier: 2, // Better mobile momentum
      infinite: false,
    });

    lenis = instance;
    lenisRef.current = instance;

    // Sync Lenis scroll with GSAP ScrollTrigger
    instance.on("scroll", ScrollTrigger.update);

    // Sync GSAP ticker with Lenis requestAnimationFrame
    const updateLenis = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);

    // Prevent GSAP from lagging behind Lenis
    gsap.ticker.lagSmoothing(0);

    // Handle hash navigation smoothly
    const handleHashChange = () => {
      if (window.location.hash) {
        instance.scrollTo(window.location.hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check for hash
    if (window.location.hash) {
      setTimeout(() => {
        instance.scrollTo(window.location.hash);
      }, 100);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      gsap.ticker.remove(updateLenis);
      instance.destroy();
      lenis = null;
    };
  }, []);

  return <>{children}</>;
}
