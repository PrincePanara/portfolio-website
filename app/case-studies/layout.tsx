import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Prince Panara",
  description: "In-depth case studies of my major projects and the problems they solve.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Prince Panara",
    description: "In-depth case studies of my major projects and the problems they solve.",
    url: "https://princepanara.vercel.app/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
