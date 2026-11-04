import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";

const HIGHLIGHTS = [
  "Department of Tourism certified drivers",
  "Private Bedouin desert camp in Al Khatim",
  "Direct operator booking with no markups",
  "International 5-star standard BBQ dinner",
  "Eco-conscious leave-no-trace practices",
  "Instant 24/7 WhatsApp guest assistance",
];

export function CompanyOverview() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <SectionLabel>About Abu Dhabi Desert Safari</SectionLabel>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.02em] leading-tight text-[#1E1A17] sm:text-5xl md:text-6xl">
              More Than a Tour — An Authentic Encounter With Arabia
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#555] sm:text-base sm:leading-7">
              <p>
                Rooted in the cultural capital of the UAE,{" "}
                <strong className="font-semibold text-[#1E1A17]">
                  Abu Dhabi Desert Safari
                </strong>{" "}
                was founded with one clear ambition: to present the timeless
                magnificence of the Arabian dunes without the cookie-cutter shortcuts.
              </p>
              <p>
                From the moment our certified 4x4 Land Cruiser picks you up at your
                hotel, every nuance is engineered for delight and peace of mind. Whether
                you seek the pulse-racing rush of high-dune bashing in Al Khatim, a
                romantic sunset dinner under a canopy of stars, or a deep expedition
                into the colossal red mountains of the Liwa Empty Quarter, our team
                orchestrates every detail with clockwork precision.
              </p>
              <p>
                As an officially licensed direct tour operator with our own maintained
                desert camp and vehicles, we cut through the confusion of intermediaries
                — providing genuine value, verified safety, and the personalized warmth
                of genuine Arabian hospitality.
              </p>
            </div>

            {/* Bullet highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs font-medium text-[#2E2E2E] sm:text-sm"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#B85D19]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/#packages" variant="primary" size="md" showIcon>
                Explore Our Tours
              </Button>
              <Button href={WHATSAPP_URL} isExternal variant="outline" size="md">
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/about-page/Overnight Safari.jpg"
                alt="Caravan in the Abu Dhabi desert"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-lg border border-black/10 bg-white p-5 shadow-2xl sm:block md:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B85D19]/10 text-[#B85D19]">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#888]">
                    Safety Record
                  </p>
                  <p className="text-base font-bold text-[#1E1A17]">
                    100% Insured Fleet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

