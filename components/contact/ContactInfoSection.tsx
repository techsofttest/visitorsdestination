import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { WHATSAPP_URL } from "@/components/data/content";
import { SectionLabel } from "../ui/SectionLabel";

export function ContactInfoSection() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-2xl">
        <SectionLabel>Get in Touch</SectionLabel>
        <h2 className="mt-1 font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl uppercase tracking-wide text-[#1E1A17] leading-none">
          We Are Here To Help You
        </h2>
        <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#555]">
          Have questions about pickup timings, customized private safari itineraries, or VIP majlis arrangements? Reach our Abu Dhabi operations desk 24 hours a day.
        </p>
      </div>

      {/* Clean open grid of contact channels */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Item 1: Office */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <MapPin size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">Head Office</h4>
            <p className="mt-1 text-sm font-semibold text-[#1E1A17] leading-snug">
              Al Fahim Tower, Abu Dhabi, UAE
            </p>
          </div>
        </div>

        {/* Item 2: Phone */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <Phone size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">Direct Hotline</h4>
            <a
              href="tel:+971544278880"
              className="mt-1 inline-block text-sm font-semibold text-[#1E1A17] underline decoration-[#B85D19]/40 underline-offset-4 transition-all duration-200 hover:text-[#B85D19] hover:decoration-[#B85D19] hover:translate-x-0.5"
            >
              +971 54 427 8880
            </a>
          </div>
        </div>

        {/* Item 3: WhatsApp */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <MessageSquare size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">WhatsApp Desk</h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm font-semibold text-[#1E1A17] underline decoration-[#B85D19]/40 underline-offset-4 transition-all duration-200 hover:text-[#B85D19] hover:decoration-[#B85D19] hover:translate-x-0.5"
            >
              +971 54 427 8880 (24/7)
            </a>
          </div>
        </div>

        {/* Item 4: Email */}
        <div className="group flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF8F5] text-[#B85D19] transition-all duration-300 group-hover:bg-[#B85D19] group-hover:text-white group-hover:scale-105 group-hover:shadow-md">
            <Mail size={22} />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#888]">Email Us</h4>
            <a
              href="mailto:info@abudhabidesert-safari.com"
              className="mt-1 inline-block text-sm font-semibold text-[#1E1A17] underline decoration-[#B85D19]/40 underline-offset-4 transition-all duration-200 hover:text-[#B85D19] hover:decoration-[#B85D19] hover:translate-x-0.5 break-all"
            >
              info@abudhabidesert-safari.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
