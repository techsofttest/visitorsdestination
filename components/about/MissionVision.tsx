import { Target, Eye } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function MissionVision() {
  return (
    <section className="bg-[#FAF8F5] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <SectionLabel className="justify-center">Core Purpose</SectionLabel>
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.02em] leading-tight text-[#1E1A17] sm:text-5xl md:text-6xl">
            Our Mission & Vision
          </h2>
          <p className="mt-3 text-sm text-[#666] sm:text-base">
            The guiding compass behind every sand track, itinerary, and guest experience we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Mission Card */}
          <div className="relative flex flex-col justify-between rounded-xl border border-black/10 bg-white p-8 md:p-12 shadow-xs transition-all hover:shadow-md">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#B85D19]/10 text-[#B85D19]">
                <Target size={34} strokeWidth={1.8} />
              </div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#B85D19]">
                Our Mission
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wide text-[#1E1A17] sm:text-4xl">
                To Deliver World-Class Desert Adventures with Absolute Integrity
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#555] sm:text-base sm:leading-7">
                Our mission is to immerse travelers from across the globe into the authentic majesty of Abu Dhabi&apos;s dunes through safety-first off-road driving, eco-conscious desert tourism, and heartfelt Arabian hospitality. We strive to create lifelong memories by ensuring every safari is seamless, transparent, and genuinely respectful of local Bedouin traditions.
              </p>
            </div>

            <div className="mt-8 border-t border-black/5 pt-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#1E1A17]">
                <span className="h-2 w-2 rounded-full bg-[#B85D19]" />
                Safety · Transparency · Cultural Respect
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative flex flex-col justify-between rounded-xl border border-black/10 bg-white p-8 md:p-12 shadow-xs transition-all hover:shadow-md">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#B85D19]/10 text-[#B85D19]">
                <Eye size={34} strokeWidth={1.8} />
              </div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#B85D19]">
                Our Vision
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wide text-[#1E1A17] sm:text-4xl">
                To Be the Arabian Gulf&apos;s Most Trusted Desert Experience Brand
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#555] sm:text-base sm:leading-7">
                Our vision is to set the benchmark for luxury and adventure desert tourism across the United Arab Emirates. We envision a future where every visitor to Abu Dhabi experiences the silent wonder of the dunes with zero environmental footprint, celebrated culinary standards, and an inspiring appreciation for Emirati heritage.
              </p>
            </div>

            <div className="mt-8 border-t border-black/5 pt-6">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#1E1A17]">
                <span className="h-2 w-2 rounded-full bg-[#B85D19]" />
                Excellence · Sustainability · Global Recognition
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

