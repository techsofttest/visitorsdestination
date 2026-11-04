import type { Metadata } from "next";
import {
  AboutHero,
  AboutStats,
  CompanyOverview,
  MissionVision,
  CoreValues,
  MilestoneTimeline,
} from "@/components/about";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Us | Official Abu Dhabi Desert Safari Operator",
  description:
    "Learn about Abu Dhabi Desert Safari — our mission, vision, certified fleet, experienced dune marshals, and commitment to authentic Arabian desert hospitality.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Hero Banner */}
      <AboutHero />

      {/* 2. Key Metrics Bar */}
      <AboutStats />

      {/* 3. Company Overview */}
      <CompanyOverview />

      {/* 4. Mission & Vision */}
      <MissionVision />

      {/* 5. Core Values */}
      <CoreValues />

      {/* 6. Milestone Timeline */}
      <MilestoneTimeline />

      {/* 7. Call To Action */}
      <CtaSection />
    </main>
  );
}
