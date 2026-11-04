import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";
import type { PackageDetail } from "@/components/data/packages";

export function PackageContent({ pkg }: { pkg: PackageDetail }) {
  return (
    <article className="lg:col-span-8">
      {/* Back to Packages link */}
      <Link
        href="/packages"
        className="inline-flex items-center gap-2 text-xs font-bold text-[#B85D19] hover:underline mb-6"
      >
        <ArrowLeft size={14} /> Back to all packages
      </Link>

      {/* Lead Intro Paragraph */}
      <div className="rounded-xl bg-[#FAF8F5] p-5 sm:p-6 mb-8">
        <p className="text-base sm:text-lg leading-relaxed text-[#2D241C] font-medium">
          {pkg.description.intro}
        </p>
      </div>

      {/* Package Main Image */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl mb-10 bg-[#2D241C]">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      {/* Package Structured Sections */}
      <div className="space-y-8 text-[#333333]">
        {pkg.description.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl uppercase tracking-wide text-[#111111]">
              {section.heading}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#444444]">
              {section.body}
            </p>

            {/* Bullet Points if present */}
            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul className="mt-3 space-y-2 rounded-xl bg-[#FAF8F5] p-4 sm:p-5 border border-black/5">
                {section.bulletPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2D241C]">
                    <CheckCircle2 size={16} className="text-[#B85D19] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/10">
          {/* What is Included */}
          <div className="rounded-xl bg-white border border-black/10 p-5 shadow-xs">
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#1E1A17] mb-3 flex items-center gap-2">
              What is Included
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#333]">
              {pkg.description.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What is Not Included */}
          <div className="rounded-xl bg-white border border-black/10 p-5 shadow-xs">
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#1E1A17] mb-3 flex items-center gap-2">
              Exclusions / Optional
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#555]">
              {pkg.description.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle size={15} className="text-[#B71955] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Info / Guidelines */}
        {pkg.description.importantInfo && pkg.description.importantInfo.length > 0 && (
          <div className="rounded-xl bg-[#FFF8F0] border border-[#B85D19]/20 p-5 sm:p-6">
            <h3 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-[#B85D19] mb-3 flex items-center gap-2">
              <Info size={28} />
              Important Guidelines & Advice
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#443830]">
              {pkg.description.importantInfo.map((info, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B85D19] shrink-0 mt-2" />
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Booking Quick Box */}
      <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#1E1A17] to-[#2D241C] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <h4 className="font-[family-name:var(--font-bebas)] text-2xl uppercase tracking-wide text-white">
            Ready to Book {pkg.title}?
          </h4>
          <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-md">
            Direct reservation with instant confirmation voucher, zero booking fees, and free cancellation up to 24 hours.
          </p>
        </div>
        <Button
          href={`${WHATSAPP_URL}&text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(
            pkg.title
          )}.`}
          isExternal
          variant="primary"
          size="md"
          showIcon
          className="whitespace-nowrap"
        >
          Book on WhatsApp
        </Button>
      </div>
    </article>
  );
}

