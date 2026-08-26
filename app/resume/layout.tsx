import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download my professional resume.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume | Prince Panara",
    description: "View and download my professional resume.",
    url: "https://princepanara.com/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
