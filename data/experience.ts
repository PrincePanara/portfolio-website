export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "full-time" | "freelance" | "startup" | "contract";
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  companyUrl?: string;
}

export const experiences: Experience[] = [

  {
    id: "freelance-fullstack",
    company: "Independent",
    role: "Full-Stack Developer & UI/UX Designer",
    type: "freelance",
    startDate: "2021-06",
    endDate: "Present",
    description: "Working with startups and agencies worldwide to design and build premium digital products. Specializing in web apps, mobile applications, and SaaS products.",
    achievements: [
      "Delivered 25+ projects for clients across 8 countries",
      "Maintained a 5-star rating across all major freelance platforms",
      "Increased client conversion rates by an average of 40% through UX improvements",
      "Managed projects from discovery and design through to production deployment",
    ],
    technologies: ["React", "Next.js", "Flutter", "Figma", "Node.js", "Firebase"],
  },
  {
    id: "tech-startup-lead",
    company: "TechVenture Labs",
    role: "Lead Frontend Engineer",
    type: "full-time",
    startDate: "2022-03",
    endDate: "2023-01",
    description: "Led the frontend engineering team at a Series A startup, building scalable web applications used by thousands of SMBs.",
    achievements: [
      "Reduced page load time by 60% through code splitting and optimization",
      "Mentored a team of 4 junior engineers",
      "Architected a micro-frontend system for team independence",
      "Introduced Storybook-based design system adopted company-wide",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "AWS", "Storybook"],
  },
  {
    id: "junior-dev",
    company: "PixelForge Agency",
    role: "Junior Full-Stack Developer",
    type: "full-time",
    startDate: "2020-08",
    endDate: "2022-02",
    description: "Started professional career at a digital agency building websites and web apps for a diverse client base spanning e-commerce, media, and SaaS.",
    achievements: [
      "Developed 15+ client websites and web applications",
      "Built a CMS-integrated blog platform used by 3 major clients",
      "Improved CI/CD pipeline reducing deployment time by 70%",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MySQL"],
  },
];


