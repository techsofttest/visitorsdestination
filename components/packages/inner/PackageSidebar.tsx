import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";
import type { PackageDetail } from "@/components/data/packages";

export function PackageSidebar({
  currentPackage,
  otherPackages,
  className = "",
}: {
  currentPackage: PackageDetail;
  otherPackages: PackageDetail[];
  className?: string;
}) {
  return (
    <aside className={`lg:col-span-4 lg:sticky lg:top-28 space-y-8 ${className}`}>
      {/* Booking & Price Summary Card */}
      <div className="rounded-2xl border border-black/10 bg-[#FAF8F5] p-6 shadow-xs">
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-bebas)] text-4xl text-[#B85D19] tracking-wide">
            {currentPackage.price}
          </span>
          <span className="text-sm text-[#555] font-medium">/ person</span>
        </div>

        <div className="mt-4 space-y-2 border-t border-black/10 pt-4 text-sm">
          <div className="flex items-center gap-2 text-[#2D241C]">
            <Check size={16} className="text-emerald-600 shrink-0" />
            <span>Instant booking confirmation</span>
          </div>
          <div className="flex items-center gap-2 text-[#2D241C]">
            <Check size={16} className="text-emerald-600 shrink-0" />
            <span>Free cancellation up to 24h prior</span>
          </div>
          <div className="flex items-center gap-2 text-[#2D241C]">
            <Check size={16} className="text-emerald-600 shrink-0" />
            <span>Pay on pickup (Cash / Card)</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 space-y-2.5">
          <Button
            href={`${WHATSAPP_URL}&text=Hello%20Abu%20Dhabi%20Desert%20Safari%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(
              currentPackage.title
            )}.`}
            isExternal
            variant="primary"
            size="md"
            showIcon
            className="w-full justify-center text-xs font-bold uppercase tracking-wider"
          >
            Instant WhatsApp Booking
          </Button>

          <Button
            href="/contact"
            variant="outline"
            size="sm"
            className="w-full justify-center text-xs"
          >
            Send Online Enquiry
          </Button>
        </div>

        {/* Operator Quick Contact Card */}
        <div className="mt-6 pt-5 border-t border-black/10 text-xs font-semibold space-y-2">
          <a
            href="tel:+971544278880"
            className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#B85D19] transition-colors"
          >
            <Phone size={16} className="text-[#B85D19]" />
            <span className="text-sm underline">Call +971 54 427 8880</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#1E1E1E] hover:text-[#25D366] transition-colors"
          >
            <FaWhatsapp size={16} className="text-[#075E54]" />
            <span className="text-sm underline">24/7 Desert Concierge Desk</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

