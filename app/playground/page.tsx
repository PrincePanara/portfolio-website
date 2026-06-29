// import type { Metadata } from "next";
// import { FadeIn } from "@/components/motion/FadeIn";
// import { SpotlightBackground } from "@/components/backgrounds/GridBackground";
// import { FlaskConical, Boxes, Cpu, Palette, Brain, Code } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Playground",
//   description: "Creative experiments by Prince Panara — Three.js, UI concepts, and more.",
// };

// const experiments = [
//   {
//     id: "threejs-galaxy",
//     title: "Galaxy Generator",
//     description: "A procedural galaxy particle system built with Three.js and custom shaders.",
//     tags: ["Three.js", "GLSL", "WebGL"],
//     icon: "🌌",
//     color: "#6C47FF",
//     status: "live",
//   },
//   {
//     id: "ai-color-palette",
//     title: "AI Color Palette",
//     description: "Generate harmonious color palettes using AI based on a mood or keyword.",
//     tags: ["OpenAI", "React", "Color Theory"],
//     icon: "🎨",
//     color: "#FFB347",
//     status: "live",
//   },
//   {
//     id: "fluid-sim",
//     title: "Fluid Simulation",
//     description: "Real-time fluid dynamics simulation running on the GPU using WebGL.",
//     tags: ["WebGL", "Physics", "GLSL"],
//     icon: "💧",
//     color: "#00D4FF",
//     status: "in-progress",
//   },
//   {
//     id: "generative-art",
//     title: "Generative Art Studio",
//     description: "Interactive canvas for creating generative art with custom algorithms.",
//     tags: ["Canvas API", "p5.js", "Creative Coding"],
//     icon: "✨",
//     color: "#4ECDC4",
//     status: "live",
//   },
//   {
//     id: "physics-engine",
//     title: "2D Physics Engine",
//     description: "A lightweight 2D physics engine built from scratch in TypeScript.",
//     tags: ["TypeScript", "Physics", "Canvas"],
//     icon: "⚙️",
//     color: "#FF6B6B",
//     status: "in-progress",
//   },
//   {
//     id: "terminal-portfolio",
//     title: "Terminal Portfolio",
//     description: "An interactive terminal interface for navigating my portfolio via CLI commands.",
//     tags: ["React", "TypeScript", "Terminal UI"],
//     icon: "💻",
//     color: "#6C47FF",
//     status: "live",
//   },
// ];

// export default function PlaygroundPage() {
//   return (
//     <div className="relative min-h-screen">
//       <SpotlightBackground />
//       <div className="relative z-10 section container-xl">
//         <FadeIn className="text-center mb-16">
//           <div className="section-label mx-auto w-fit mb-6">
//             <FlaskConical size={14} /> Playground
//           </div>
//           <h1 className="text-heading-xl font-display font-extrabold text-[var(--text-primary)] mb-4">
//             Creative <span className="gradient-text">Experiments</span>
//           </h1>
//           <p className="text-body-lg text-[var(--text-secondary)] max-w-xl mx-auto">
//             Where I explore the boundaries of what&apos;s possible on the web — Three.js, WebGL, AI, and more.
//           </p>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {experiments.map((exp, i) => (
//             <FadeIn key={exp.id} delay={i * 0.1}>
//               <div className="card card-glow h-full flex flex-col p-6 group cursor-pointer hover:border-[var(--accent-primary)] transition-fast">
//                 {/* Header */}
//                 <div className="flex items-start justify-between mb-4">
//                   <div
//                     className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
//                     style={{ background: `${exp.color}20` }}
//                   >
//                     {exp.icon}
//                   </div>
//                   <span
//                     className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
//                       exp.status === "live"
//                         ? "bg-green-500/20 text-green-400"
//                         : "bg-orange-500/20 text-orange-400"
//                     }`}
//                   >
//                     {exp.status === "live" ? "Live" : "In Progress"}
//                   </span>
//                 </div>

//                 <h3 className="text-[16px] font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-fast">
//                   {exp.title}
//                 </h3>
//                 <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
//                   {exp.description}
//                 </p>

//                 <div className="flex flex-wrap gap-1.5">
//                   {exp.tags.map((tag) => (
//                     <span key={tag} className="tag-neutral tag text-[10px]">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </FadeIn>
//           ))}
//         </div>

//         {/* Coming soon */}
//         <FadeIn className="mt-12 text-center">
//           <div className="card p-8 max-w-lg mx-auto">
//             <div className="text-4xl mb-4">🔬</div>
//             <h3 className="font-display font-bold text-[16px] text-[var(--text-primary)] mb-2">
//               More experiments coming soon
//             </h3>
//             <p className="text-[13px] text-[var(--text-secondary)]">
//               I regularly add new creative experiments. Follow me on GitHub or Twitter to stay updated.
//             </p>
//           </div>
//         </FadeIn>
//       </div>
//     </div>
//   );
// }

export default function Playground() {
  return null;
}
