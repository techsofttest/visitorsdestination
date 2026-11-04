import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";
import { FEATURED_DESERT_PACKAGES } from "@/components/home/FeaturedPackagesSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Packages | Abu Dhabi Desert Safari Tours & Pricing",
  description:
    "Explore our complete Abu Dhabi Desert Safari packages — evening, morning, VIP luxury, private, Liwa Empty Quarter, and quad biking adventures with direct operator pricing.",
};

export default function PackagesPage() {
  return (
    <main className="bg-white text-[#221C18]">
      {/* Small Banner - Only "Packages" as title */}
      <section className="relative isolate flex min-h-[220px] items-center justify-center overflow-hidden bg-[#1E1A17] text-white sm:min-h-[260px] md:min-h-[280px]">
        <Image
          src="/banner/Desert Caravan Beneath Endless Skies.png"
          alt="Abu Dhabi Desert Safari Packages"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A17] via-[#1E1A17]/60 to-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 pt-24 pb-8 text-center md:px-10 md:pt-28 md:pb-10">
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-[0.04em] text-white sm:text-6xl md:text-7xl">
            Packages
          </h1>
        </div>
      </section>

      {/* Packages Listing Grid - Identical card design to home page FeaturedPackagesSection */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_DESERT_PACKAGES.map((pkg) => (
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
                      <span className="text-white font-medium drop-shadow-sm text-[11px]">
                        ({pkg.reviews} reviews)
                      </span>
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
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#222222]">
                        Key Inclusions:
                      </span>
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
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4A4A4A]">
                      Starting from
                    </span>
                    <div className="text-base font-extrabold text-[#B85D19] leading-tight">
                      {pkg.price} <span className="text-xs font-semibold text-[#333333]">/ person</span>
                    </div>
                  </div>

                  <Button
                    href={`${WHATSAPP_URL}&text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(
                      pkg.title
                    )}.`}
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

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
}

