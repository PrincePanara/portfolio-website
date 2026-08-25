import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "A collection of experimental projects, UI components, and creative coding snippets.",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
