export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  slug?: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "Monitor",
    color: "#6C47FF",
    skills: [
      { name: "HTML5", level: 98, slug: "html5", category: "frontend" },
      { name: "CSS3", level: 95, slug: "css3", category: "frontend" },
      { name: "JavaScript", level: 95, slug: "javascript", category: "frontend" },
      { name: "TypeScript", level: 90, slug: "typescript", category: "frontend" },
      { name: "React", level: 95, slug: "react", category: "frontend" },
      { name: "Next.js", level: 92, slug: "nextjs", category: "frontend" },
      // { name: "Tailwind CSS", level: 97, category: "frontend" },
      // { name: "Framer Motion", level: 88, category: "frontend" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    color: "#00D4FF",
    skills: [
      { name: "Node.js", level: 82, slug: "nodejs", category: "backend" },
      { name: "Python", level: 85, slug: "python", category: "backend" },
      { name: "Java", level: 85, slug: "java", category: "backend" },
      { name: "C++", level: 80, slug: "cplusplus", category: "backend" },
      { name: "Firebase", level: 90, slug: "firebase", category: "backend" },
      // { name: "REST APIs", level: 88, category: "backend" },
      // { name: "GraphQL", level: 72, category: "backend" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "Smartphone",
    color: "#FF6B6B",
    skills: [
      { name: "Flutter", level: 88, slug: "flutter", category: "mobile" },
      { name: "Dart", level: 85, slug: "dart", category: "mobile" },
      // { name: "React Native", level: 70, category: "mobile" },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: "Palette",
    color: "#FFB347",
    skills: [
      { name: "Figma", level: 95, slug: "figma", category: "design" },
      { name: "Canva", level: 90, slug: "canva", category: "design" },
      { name: "UI Design", level: 93, category: "design" },
      { name: "UX Research", level: 85, category: "design" },
      { name: "Prototyping", level: 92, category: "design" },
      { name: "Design Systems", level: 90, category: "design" },
      { name: "Branding", level: 80, category: "design" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    icon: "Wrench",
    color: "#4ECDC4",
    skills: [
      { name: "Git & GitHub", level: 93, slug: "github", category: "tools" },
      { name: "VS Code", level: 98, slug: "vscode", category: "tools" },
      { name: "Android Studio", level: 85, slug: "androidstudio", category: "tools" },
      { name: "Cloudinary", level: 85, category: "tools" },
      { name: "Vercel", level: 90, slug: "vercel", category: "tools" },
      { name: "Data Entry", level: 95, category: "tools" },
      // { name: "Docker", level: 65, category: "tools" },
      // { name: "CI/CD", level: 75, category: "tools" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);
