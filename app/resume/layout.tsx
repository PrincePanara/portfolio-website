import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Resume | Prince Panara",
  description: "View and download my professional resume.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Professional Resume | Prince Panara",
    description: "View and download my professional resume.",
    url: "https://princepanara.vercel.app/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
