import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Star, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";

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

        {/* 6 Packages Grid Layout */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DESERT_PACKAGES.map((pkg, idx) => (
            <article
              key={pkg.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#B85D19]/40"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#2D241C]">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge */}
                  {pkg.badge && (
                    <div className="absolute left-3.5 top-3.5">
                      <span className="rounded bg-[#B85D19] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white shadow-sm">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Duration */}
                  <div className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 text-[10.5px] font-medium text-white backdrop-blur-xs">
                    <Clock size={11} />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Rating pill bottom-left */}
                  <div className="absolute bottom-2.5 left-3.5 flex items-center gap-1.5 text-xs text-white">
                    <span className="flex items-center gap-0.5 rounded bg-black/70 px-2 py-0.5 font-bold text-white backdrop-blur-xs text-[11.5px]">
                      <Star size={11} fill="#FDB414" color="#FDB414" /> {pkg.rating}
                    </span>
                    <span className="text-white font-medium drop-shadow-sm text-[11px]">({pkg.reviews} reviews)</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-bebas)] text-[23px] uppercase tracking-wide leading-tight text-[#111111] transition-colors group-hover:text-[#B85D19]">
                    {pkg.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] text-[#333333] leading-snug line-clamp-2 font-normal">
                    {pkg.subtitle}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-3.5 border-t border-black/10 pt-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#222222]">Key Inclusions:</span>
                    <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1.5 text-[11.5px] font-medium text-[#1A1A1A]">
                      {pkg.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#B85D19] shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & Direct CTA */}
              <div className="border-t border-black/5 bg-[#FAF8F5] px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4A4A4A]">Starting from</span>
                  <div className="text-base font-extrabold text-[#B85D19] leading-tight">
                    {pkg.price} <span className="text-xs font-semibold text-[#333333]">/ person</span>
                  </div>
                </div>

                <Button
                  href={`${WHATSAPP_URL}&text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.title)}.`}
                  isExternal
                  variant="primary"
                  size="sm"
                  showIcon
                  className="rounded-md"
                >
                  Book Now
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
