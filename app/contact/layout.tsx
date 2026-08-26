import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Prince Panara | Freelance Developer",
  description: "Get in touch with me for freelance projects, collaboration, or any other inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Prince Panara | Freelance Developer",
    description: "Get in touch with me for freelance projects, collaboration, or any other inquiries.",
    url: "https://princepanara.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
