import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, services, unsplash } from "@/components/data/content";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Services | Abu Dhabi Desert Safari & Tours",
  description:
    "Explore all services by Abu Dhabi Desert Safari — from desert adventures and overnight camps to city tours, airport transfers, and hotel bookings across the UAE.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#221C18]">
      {/* Small Banner - Only "Services" as title */}
      <section className="relative isolate flex min-h-[220px] items-center justify-center overflow-hidden bg-[#1E1A17] text-white sm:min-h-[260px] md:min-h-[280px]">
        <Image
          src="/banner/Desert Adventure2.png"
          alt="Abu Dhabi Desert Safari Services"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A17] via-[#1E1A17]/60 to-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 pt-24 pb-8 text-center md:px-10 md:pt-28 md:pb-10">
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-[0.04em] text-white sm:text-6xl md:text-7xl">
            Services
          </h1>
        </div>
      </section>

      {/* Services Listing Grid - Using exact card structure from ServicesCarousel */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative flex h-[410px] w-full flex-col justify-end overflow-hidden rounded-xl bg-[#302B25] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={
                    service.image.startsWith("/")
                      ? service.image
                      : unsplash(service.image, 760)
                  }
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5 transition-colors duration-300 group-hover:from-black/95" />

                {/* Bottom Details */}
                <div className="relative z-10 p-5">
                  <h3 className="text-2xl font-semibold leading-snug tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 min-h-[40px] text-xs leading-5 text-white/80">
                    {service.description}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 text-xs font-bold !text-[#1A1613] transition-colors hover:bg-[#FDB414]"
                  >
                    <span>Enquire now</span>
                    <ArrowUpRight size={16} className="text-[#1A1613]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}

