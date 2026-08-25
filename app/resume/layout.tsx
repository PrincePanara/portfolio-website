import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download my professional resume.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
