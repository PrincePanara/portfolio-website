export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
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
    id: "development",
    name: "Development",
    icon: "Monitor",
    color: "#6C47FF",
    skills: [
      { name: "HTML/CSS/JS", level: 95, category: "development" },
      { name: "Java", level: 85, category: "development" },
      { name: "C++", level: 80, category: "development" },
      { name: "Flutter", level: 88, category: "development" },
      { name: "Webdev", level: 90, category: "development" },
    ],
  },
  {
    id: "design",
    name: "Design",
    icon: "Palette",
    color: "#FFB347",
    skills: [
      { name: "UI/UX Design", level: 93, category: "design" },
      { name: "Data Entry", level: 95, category: "design" },
    ],
  },
  {
    id: "tools",
    name: "Tools",
    icon: "Wrench",
    color: "#4ECDC4",
    skills: [
      { name: "Figma", level: 95, category: "tools" },
      { name: "VS Code", level: 98, category: "tools" },
      { name: "Android Studio", level: 85, category: "tools" },
      { name: "Canva", level: 90, category: "tools" },
      { name: "Git & GitHub", level: 93, category: "tools" },
      { name: "Vercel", level: 90, category: "tools" },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);
