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

export const experiences: Experience[] = [];

export const education = [
  {
    id: "diploma",
    institution: "Darshan University, Rajkot",
    degree: "Diploma in Computer Engineering",
    startYear: "2023",
    endYear: "2026",
    description: "Currently pursuing a Diploma in Computer Engineering with a focus on software development, problem-solving, and modern technology solutions.",
  },
];
