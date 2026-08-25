import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "In-depth case studies of my major projects and the problems they solve.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
