import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
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
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 py-12 md:px-10 md:py-20 flex justify-end">
        <div className="w-full max-w-lg md:max-w-xl rounded-lg bg-[#8B181B]/95 p-8 text-white backdrop-blur-md md:p-12 border border-white/10">
          <div className="mb-4 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD36D]">
            <Sparkles size={14} /> Your next chapter awaits
          </div>

          <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-wide leading-[0.95] sm:text-5xl md:text-6xl text-white">
            Let&apos;s make your<br /> UAE trip unforgettable.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
            Tell us what you have in mind. We&apos;ll help you find the right experiences, plan every detail, and ensure you make the most of your journey.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 rounded-sm bg-[#FDB414] px-6 py-3.5 text-sm font-semibold !text-[#1E1508] transition-all hover:bg-white hover:gap-4"
            >
              Plan Your Trip
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="tel:+971544278880"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white hover:!text-[#8B181B]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
