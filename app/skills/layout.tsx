import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "An overview of my technical skills, tools, and expertise in software development and UI/UX design.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills | Prince Panara",
    description: "An overview of my technical skills, tools, and expertise in software development and UI/UX design.",
    url: "https://princepanara.com/skills",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
