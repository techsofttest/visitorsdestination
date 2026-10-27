import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { unsplash } from "@/components/data/content";

export function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[480px] md:min-h-[540px] flex items-center">
      {/* Full width background image */}
      <Image
        src="/banner/Desert Adventure2.png"
        alt="UAE Desert Destination"
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle backdrop gradient across the full image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/20" />

      {/* Container with boxed content aligned to the right */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 py-12 md:px-10 md:py-20 mb-20 flex justify-end">
        <div className="w-full max-w-lg md:max-w-xl rounded-lg bg-[#B85D19]/95 p-8 text-white backdrop-blur-md md:p-12 shadow-xl">
          <div className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD36D]">
            <Sparkles size={14} /> Official Desert Operator
          </div>

          <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wide leading-[0.95] sm:text-5xl md:text-6xl text-white">
            Book Your Abu Dhabi<br /> Desert Safari Today.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
            Reserve directly with Abu Dhabi Desert Safari for guaranteed lowest rates, instant WhatsApp confirmations, and five-star Arabian hospitality.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href="#packages"
              variant="secondary"
              size="md"
              showIcon
            >
              Explore Packages
            </Button>
            <Button
              href="tel:+971544278880"
              isExternal
              variant="glass"
              size="md"
            >
              Call +971 54 427 8880
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
