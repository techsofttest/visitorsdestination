import { ShieldCheck, Award, HeartHandshake, Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhyChooseUs() {
  return (
    <section className="bg-[#FAF8F5] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <SectionLabel className="justify-center">Why Choose Abu Dhabi Desert Safari</SectionLabel>
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.02em] leading-tight text-[#1E1A17] sm:text-5xl md:text-6xl">
            Trusted Hospitality & Unmatched Safety
          </h2>
        </div>

        {/* Minimal 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          {/* Item 1 */}
          <div className="flex flex-col items-start">
            <span className="mb-5 text-[#B85D19] animate-icon-float">
              <ShieldCheck size={40} strokeWidth={1.6} />
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-[0.03em] leading-snug text-[#1E1A17] md:text-3xl">
              100% Certified Desert Drivers
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#555] md:text-sm">
              All 4x4 vehicles are fully insured, fitted with roll cages, and driven by DTCM & tourism-licensed dune marshals.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-start">
            <span className="mb-5 text-[#B85D19] animate-icon-float-delayed-1">
              <Award size={40} strokeWidth={1.6} />
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-[0.03em] leading-snug text-[#1E1A17] md:text-3xl">
              Direct Booking Guarantee
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#555] md:text-sm">
              No middleman markups or surprise fees. Immediate WhatsApp booking confirmations with free date modifications.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-start">
            <span className="mb-5 text-[#B85D19] animate-icon-float-delayed-2">
              <HeartHandshake size={40} strokeWidth={1.6} />
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-[0.03em] leading-snug text-[#1E1A17] md:text-3xl">
              Authentic Bedouin Hospitality
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#555] md:text-sm">
              Live Arabic coffee brewing, authentic dates, henna artistry, live BBQ buffet grills, and mesmerizing cultural shows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
