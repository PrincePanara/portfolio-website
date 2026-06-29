import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { LenisProvider } from "@/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";
import { SplashScreen } from "@/components/shared/SplashScreen";
import { GridBackground } from "@/components/backgrounds/GridBackground";
import { PrinceCopilot } from "@/components/shared/PrinceCopilot";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://princepanara.com"),
  title: {
    template: "%s | Prince Panara",
    default: "Prince Panara — Software Developer, UI/UX Designer & Founder",
  },
  description:
    "Prince Panara is a full-stack developer, UI/UX designer, and mobile app developer. Building premium digital experiences that impress clients, users, and teams worldwide.",
  keywords: [
    "Prince Panara",
    "Software Developer",
    "UI/UX Designer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Flutter Developer",
    "React Developer",
    "Next.js Developer",

    "Web Designer",
    "Frontend Developer",
  ],
  authors: [{ name: "Prince Panara", url: "https://princepanara.com" }],
  creator: "Prince Panara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://princepanara.com",
    siteName: "Prince Panara",
    title: "Prince Panara — Software Developer, UI/UX Designer & Founder",
    description:
      "Full-stack developer and UI/UX designer. Building world-class digital products.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Prince Panara" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Panara — Software Developer, UI/UX Designer & Founder",
    description: "Full-stack developer and UI/UX designer.",
    creator: "@princepanara",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#080810" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LenisProvider>
            {/* Global UI */}
            <SplashScreen />
            <ScrollProgressBar />
            <CustomCursor />

            {/* Layout */}
            <div className="flex flex-col min-h-screen relative">
              <GridBackground />
              <Navbar />
              <main className="flex-1 pt-[var(--nav-height)]">
                {children}
              </main>
              <Footer />
            </div>

            {/* Prince Copilot - AI Chat Assistant */}
            <PrinceCopilot />

            {/* Toast notifications */}
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "var(--bg-card)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                },
              }}
            />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
