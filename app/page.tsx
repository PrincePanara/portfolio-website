import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutMePreview } from "@/components/home/AboutMePreview";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AchievementsCertifications } from "@/components/home/AchievementsCertifications";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Prince Panara — Software Developer, UI/UX Designer & Founder",
  description:
    "Hi, I'm Prince Panara — full-stack developer, UI/UX designer, and mobile app developer.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsPreview />
      <AboutMePreview />
      <FeaturedProjects />
      <AchievementsCertifications />
      <CTASection />
    </>
  );
}
