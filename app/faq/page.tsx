import type { Metadata } from "next";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Abu Dhabi Desert Safari",
  description:
    "Got questions about your Abu Dhabi Desert Safari? Explore answers regarding tour timings, package inclusions, safety, quad biking, dress codes, and booking logistics.",
};

export default function FaqPage() {
  return (
    <main className="bg-white text-[#221C18]">
      <PageHeroBanner
        title="FAQ"
        subtitle="Everything you need to know about tour timings, package inclusions, safety precautions, and bookings before heading into the dunes."
        imageSrc="/banner/Golden Dunes at Sunset.png"
      />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
