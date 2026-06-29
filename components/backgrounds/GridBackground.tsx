"use client";

export function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]" aria-hidden="true">
      {/* Dark Mode Premium Spotlight Glow */}
      <div className="hidden dark:block absolute top-[-30%] left-1/2 -translate-x-1/2 w-[70vw] h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)] rounded-[100%] blur-[80px] opacity-60 mix-blend-screen" />
      
      {/* Paper Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.35] dark:opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="paper-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[var(--text-tertiary)]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paper-grid)" />
      </svg>
      
      {/* Subtle radial gradient overlay to fade edges slightly */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 20%, var(--bg-primary) 150%)",
        }}
      />
    </div>
  );
}

// Keeping empty stubs to prevent import errors in other files temporarily
export function NodesBackground() { return null; }
export function SpotlightBackground() { return null; }
export function AuroraBackground() { return null; }

