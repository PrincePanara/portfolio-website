import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "An overview of my technical skills, tools, and expertise in software development and UI/UX design.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
