import Link from "next/link";
import { GridBackground } from "@/components/backgrounds/GridBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <GridBackground />
      <div className="relative z-10 text-center px-4 max-w-xl mx-auto">
        <h1 className="text-[120px] md:text-[150px] font-display font-extrabold text-[var(--text-primary)] leading-none mb-4">
          404
        </h1>
        <h2 className="text-heading-sm font-bold text-[var(--text-primary)] mb-6">
          Page Not Found
        </h2>
        <p className="text-body-lg text-[var(--text-secondary)] mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] px-6 py-3 rounded-full text-sm font-medium hover:border-[var(--border-strong)] hover:scale-105 active:scale-95 transition-all shadow-sm"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
