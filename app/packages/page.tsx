import type { Metadata } from "next";
import { FEATURED_DESERT_PACKAGES } from "@/components/home/FeaturedPackagesSection";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { PackagesGrid } from "@/components/packages/PackagesGrid";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Desert Safari Packages | Abu Dhabi Desert Safari",
  description:
    "Explore our complete Abu Dhabi Desert Safari packages — evening, morning, VIP luxury, private, Liwa Empty Quarter, and quad biking adventures with direct operator pricing.",
};

export default function PackagesPage() {
  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Common Hero Banner */}
      <PageHeroBanner
        title="Packages"
        subtitle="Handpicked desert safaris, VIP majlis retreats, and thrilling dune adventures designed for unforgettable Arabian journeys."
        imageSrc="/banner/Airborne Black Desert Truck.png"
      />

      {/* 2. Packages Grid */}
      <PackagesGrid packages={FEATURED_DESERT_PACKAGES} />

      {/* 3. CTA Section */}
      <CtaSection />
    </main>
  );
}
