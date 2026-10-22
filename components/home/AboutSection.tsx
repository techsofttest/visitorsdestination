import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WHATSAPP_URL, unsplash } from "@/components/data/content";

export function AboutSection() {
  return (
    <section id="about" className="relative isolate min-h-[520px] overflow-hidden bg-white text-[#242424] md:min-h-[600px]">
      <Image
        src="/banner/Abu Dhabi2.jpg"
        alt="Desert landscape stretching to the horizon"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 top-0 h-3/4 bg-gradient-to-b from-white via-white/85 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1280px] flex-col justify-between gap-10 px-5 py-16 md:min-h-[600px] md:flex-row md:items-start md:px-10 lg:gap-16">
        <div>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-[0.03em] leading-[0.92] text-[#1E1E1E] md:text-7xl lg:text-8xl">
            Good journeys.<br />Great stories.
          </h2>
        </div>
        <div className="flex max-w-lg flex-col items-start md:items-end md:text-right">
          <p className="text-base leading-7 text-[#2A2A2A] md:text-sm md:leading-5">
            We believe the best travel experiences feel effortless. Our team brings together local knowledge, thoughtful planning, and genuine hospitality to help you experience the Emirates with confidence.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-5 rounded-sm bg-[#FDB414] px-6 py-4 text-sm font-semibold !text-[#1E1508] transition-all hover:gap-7 hover:bg-[#8B181B] hover:!text-white"
          >
            Get to know us <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
