import type { Metadata } from "next";
import { PageHeroBanner } from "@/components/global/PageHeroBanner";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Contact Us & Book Safari | Abu Dhabi Desert Safari",
  description:
    "Contact Abu Dhabi Desert Safari for bookings, custom private tour quotes, and queries. Call, WhatsApp +971 54 427 8880 or send us an enquiry online.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-[#221C18]">
      {/* 1. Page Hero Banner */}
      <PageHeroBanner
        title="Contact Us"
        subtitle="Reach out to our Abu Dhabi tour desk directly. Reserve your desert safari, request a custom quote, or ask any question 24/7."
        imageSrc="/banner/Golden Hour Dune Companions.png"
      />

      {/* 2. Section One: Contact Details (Unboxed open layout) */}
      <section className="py-14 sm:py-16 md:py-20 border-b border-black/5">
        <div className="mx-auto max-w-[1360px] px-5 md:px-10">
          <ContactInfoSection />
        </div>
      </section>

      {/* 3. Section Two: Full-bleed Background Image with Form on Left Edge */}
      <ContactFormSection imageSrc="/banner/Desert Dunes 4x4 Sunset Expedition2.png" />

    </main>
  );
}
