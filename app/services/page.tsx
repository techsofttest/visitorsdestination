import type { Metadata } from "next";
import { services } from "@/components/data/content";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "All Tours & Travel Services | Abu Dhabi Desert Safari",
  description:
    "Explore all services by Abu Dhabi Desert Safari — from desert adventures and overnight camps to city tours, airport transfers, and hotel bookings across the UAE.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Common Hero Banner */}
      <PageHeroBanner
        title="Services"
        subtitle="Complete travel & excursion solutions across Abu Dhabi and the UAE, from desert expeditions to private city explorations."
        imageSrc="/banner/Six Saddled Camels in Golden Dunes.png"
      />

      {/* 2. Services Grid */}
      <ServicesGrid services={services} />

      {/* 3. CTA Section */}
      <CtaSection />
    </main>
  );
}
