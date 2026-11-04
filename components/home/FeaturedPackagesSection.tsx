import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PackageCard } from "@/components/packages/PackageCard";

export interface DesertPackage {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  rating: string;
  reviews: number;
  price: string;
  badge?: string;
  highlights: string[];
}

export const FEATURED_DESERT_PACKAGES: DesertPackage[] = [
  {
    id: "evening-desert-safari",
    title: "Evening Desert Safari",
    subtitle: "Dune bashing, sunset views, BBQ dinner & live shows",
    image: "/services/Overnight safari.png",
    duration: "6 Hours",
    rating: "4.9",
    reviews: 1240,
    price: "AED 175",
    badge: "MOST POPULAR",
    highlights: ["4x4 Dune Bashing", "BBQ Buffet Dinner", "Camel Ride & Sandboarding", "Tanoura & Belly Dance"],
  },
  {
    id: "morning-desert-safari",
    title: "Morning Desert Safari",
    subtitle: "Crisp sunrise dunes, sandboarding & camel trek",
    image: "/desert-adventure/d2.png",
    duration: "4 Hours",
    rating: "4.8",
    reviews: 860,
    price: "AED 140",
    badge: "BEST VALUE",
    highlights: ["Morning Dune Drive", "Sand Skiing / Boarding", "Camel Farm Visit", "Refreshments & Water"],
  },
  {
    id: "private-desert-safari",
    title: "Private Desert Safari",
    subtitle: "Exclusive 4x4 vehicle & personalized desert itinerary",
    image: "/desert-adventure/d3.jpg",
    duration: "6-7 Hours",
    rating: "5.0",
    reviews: 430,
    price: "AED 950",
    badge: "EXCLUSIVE",
    highlights: ["Private 4x4 Land Cruiser", "Customizable Pace", "VIP Table Service", "Hotel Door-to-Door Pickup"],
  },
  {
    id: "vip-luxury-desert-safari",
    title: "VIP & Luxury Desert Safari Abu Dhabi",
    subtitle: "Royal treatment with air-conditioned majlis & gourmet dining",
    image: "/desert-adventure/s3.jpg",
    duration: "6 Hours",
    rating: "4.9",
    reviews: 520,
    price: "AED 350",
    badge: "VIP EXPERIENCE",
    highlights: ["Dedicated Service Staff", "Gourmet Live BBQ Stations", "Falconry Photo Opportunity", "Henna & Shisha Lounge"],
  },
  {
    id: "liwa-desert-safari",
    title: "Liwa Desert Safari",
    subtitle: "Journey to the legendary Empty Quarter (Rub' al Khali)",
    image: "/desert-adventure/d1.png",
    duration: "Full Day",
    rating: "5.0",
    reviews: 310,
    price: "AED 580",
    badge: "EXPEDITION",
    highlights: ["Tal Moreeb Giant Dune", "Liwa Forts & Oasis Heritage", "Dramatic Deep Sand Driving", "Sunset Over High Dunes"],
  },
  {
    id: "quad-biking-desert-safari",
    title: "Quad Biking Desert Safari",
    subtitle: "High-octane ATV quad bike adventure on open sand dunes",
    image: "/services/Desert Safaris.png",
    duration: "4-5 Hours",
    rating: "4.9",
    reviews: 970,
    price: "AED 260",
    badge: "THRILL SEEKER",
    highlights: ["Powerful 350cc/400cc Quads", "Full Safety Gear & Briefing", "Open Desert Track Riding", "Photo Stop on High Dune"],
  },
];

export function FeaturedPackagesSection() {
  return (
    <section id="packages" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <SectionLabel>Handcrafted Desert Adventures</SectionLabel>
            <h2 className="font-[family-name:var(--font-bebas)] max-w-3xl text-4xl uppercase tracking-[0.02em] leading-[0.95] md:text-6xl text-[#1E1A17]">
              Featured Abu Dhabi Desert Safaris
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <p className="max-w-md text-sm leading-6 text-[#666] sm:text-right md:text-base">
              Choose from 6 curated desert experiences guaranteed to deliver thrill, luxury, and authentic Arabian memories.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85D19]">
              <ShieldCheck size={16} /> 100% Best Price & Direct Booking Guarantee
            </div>
          </div>
        </div>

        {/* 6 Packages Grid Layout using shared PackageCard */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DESERT_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
