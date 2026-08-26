import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Projects | Prince Panara",
  description: "Explore my portfolio of web apps, mobile apps, and UI/UX designs.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Portfolio & Projects | Prince Panara",
    description: "Explore my portfolio of web apps, mobile apps, and UI/UX designs.",
    url: "https://princepanara.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
