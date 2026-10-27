import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/data/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Abu Dhabi Desert Safari",
  description:
    "Got questions about your Abu Dhabi Desert Safari? Explore answers regarding tour timings, package inclusions, safety, quad biking, dress codes, and booking logistics.",
};

interface FaqCategory {
  category: string;
  items: {
    q: string;
    a: string;
    deepLinkText?: string;
    deepLinkHref?: string;
  }[];
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    category: "Tour Inclusions & Packages",
    items: [
      {
        q: "What is included in the Evening Desert Safari?",
        a: "The Evening Desert Safari includes hotel pickup and drop-off in a 4x4 Land Cruiser, 45-minute dune bashing, sandboarding, sunset photo stops on high dunes, camel rides, Arabic coffee (Gahwa), fresh dates, henna painting, a 5-star international BBQ buffet dinner (vegetarian and non-vegetarian), unlimited soft drinks/water, and live entertainment (Tanoura dance, belly dance, and fire show).",
        deepLinkText: "View Evening Desert Safari Package",
        deepLinkHref: "/#packages",
      },
      {
        q: "What is the difference between Morning and Evening Desert Safaris?",
        a: "Morning Safaris run from 8:00 AM to 12:00 PM and focus on crisp morning desert temperatures, untouched dunes, sandboarding, and camel rides without the dinner or camp shows. Evening Safaris run from 3:30 PM to 9:30 PM and include dune bashing, sunset views, the complete Bedouin camp dinner, and cultural shows.",
        deepLinkText: "Compare Morning Desert Safari",
        deepLinkHref: "/#packages",
      },
      {
        q: "What does the VIP & Luxury Desert Safari include?",
        a: "The VIP Safari provides priority table service in an exclusive air-conditioned majlis, dedicated waiters, upgraded gourmet BBQ platters, private falconry photo opportunities, and premium shisha service.",
        deepLinkText: "See VIP & Luxury Desert Safari",
        deepLinkHref: "/#packages",
      },
      {
        q: "What makes the Liwa Desert Safari unique?",
        a: "The Liwa Safari is a full-day expedition into the Empty Quarter (Rub' al Khali), the world's largest uninterrupted sand desert. You will see colossal dunes over 300 meters high (including Tal Moreeb), historic oasis forts, date plantations, and experience extreme desert driving with certified expedition masters.",
        deepLinkText: "Explore Liwa Desert Safari",
        deepLinkHref: "/#packages",
      },
    ],
  },
  {
    category: "Safety, Health & Guidelines",
    items: [
      {
        q: "Is dune bashing safe for children and elderly guests?",
        a: "Dune bashing is a dynamic off-road adventure. For infants under 3 years old, pregnant women, or guests with chronic neck/back ailments, we recommend our Private Safari where dune bashing can be substituted with gentle scenic driving or direct transfer to our desert camp.",
        deepLinkText: "Book Private Family Safari",
        deepLinkHref: "/#packages",
      },
      {
        q: "What safety equipment is inside the 4x4 vehicles?",
        a: "All our vehicles are modern Toyota Land Cruisers fully certified by the Department of Tourism. Each vehicle is equipped with interior roll cages, reinforced suspension, first aid kits, GPS trackers, fire extinguishers, and comprehensive passenger insurance.",
      },
      {
        q: "What should I wear for an Abu Dhabi desert safari?",
        a: "We recommend comfortable, lightweight cotton clothing, sunglasses, and sandals or slip-on sneakers for easy walking in sand. During winter months (November to February), evenings can get cool, so bringing a light cardigan or jacket is advised.",
      },
    ],
  },
  {
    category: "Quad Biking & Adventure Add-ons",
    items: [
      {
        q: "Do I need a driver's license to ride quad bikes or dune buggies?",
        a: "No formal driver's license is required for desert quad biking or dune buggies. Riders must be at least 15 years old for quad bikes (or accompanied by an adult in buggies). Our marshals provide full safety briefings, helmets, and goggles before you hit the sand.",
        deepLinkText: "Check Quad Biking Desert Safari",
        deepLinkHref: "/#packages",
      },
      {
        q: "Can I rent a dune buggy during my safari?",
        a: "Yes, we offer powerful 800cc and 1000cc Polaris and Can-Am buggies for 30 or 60-minute desert rides with an expert lead guide. Buggy rentals can be pre-booked or requested upon arrival.",
      },
    ],
  },
  {
    category: "Pickup Logistics & Direct Booking",
    items: [
      {
        q: "Where will the driver pick me up?",
        a: "We offer complimentary door-to-door pickup from any hotel, private apartment, shopping mall, or the Abu Dhabi Port Cruise Terminal. The driver contacts you via WhatsApp or phone call 1 to 2 hours before pickup to confirm your exact departure time.",
      },
      {
        q: "How can I confirm a direct booking?",
        a: "You can book directly through our website booking form or WhatsApp chat at +971 54 427 8880. Direct bookings receive immediate confirmation vouchers and avoid online travel agency markups.",
        deepLinkText: "Chat with our Booking Team on WhatsApp",
        deepLinkHref: WHATSAPP_URL,
      },
      {
        q: "What is your cancellation and refund policy?",
        a: "We offer 100% free cancellation up to 24 hours prior to your scheduled safari departure. Date changes are also free of charge when requested with at least 12 hours advance notice.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-[#221C18]">
      <Header />

      {/* Hero Banner */}
      <section className="relative bg-[#1E1A17] pt-36 pb-20 px-5 text-white md:px-10 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-[1280px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFD36D] hover:underline mb-4"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          <h1 className="font-[family-name:var(--font-bebas)] text-5xl uppercase tracking-[0.02em] leading-tight sm:text-6xl md:text-7xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            Detailed guides, expert tips, and answers to help you prepare for the ultimate Abu Dhabi desert safari experience.
          </p>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-[#FAF8F5]">
        <div className="mx-auto max-w-[1180px] space-y-16">
          {FAQ_CATEGORIES.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-6">
              <div className="flex items-center gap-3 border-b border-black/10 pb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B85D19] text-sm font-bold text-white">
                  0{catIdx + 1}
                </span>
                <h2 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wide text-[#1E1A17] md:text-4xl">
                  {cat.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {cat.items.map((item) => (
                  <div
                    key={item.q}
                    className="flex flex-col justify-between rounded-xl border border-black/10 bg-white p-6 shadow-xs transition-shadow hover:shadow-md"
                  >
                    <div>
                      <h3 className="text-base font-bold text-[#1E1A17] sm:text-lg">
                        {item.q}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-[#555] sm:text-sm">
                        {item.a}
                      </p>
                    </div>

                    {item.deepLinkHref && item.deepLinkText && (
                      <div className="mt-4 pt-3 border-t border-black/5">
                        <Link
                          href={item.deepLinkHref}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B85D19] hover:underline"
                        >
                          <span>{item.deepLinkText}</span>
                          <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Need more help CTA */}
      <section className="bg-[#B85D19] py-14 px-5 text-white text-center">
        <div className="mx-auto max-w-xl">
          <HelpCircle size={36} className="mx-auto text-[#FFD36D] mb-3" />
          <h2 className="font-[family-name:var(--font-bebas)] text-3xl uppercase tracking-wide md:text-4xl">
            Still have questions? We are here 24/7.
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-white/90 sm:text-sm">
            Contact our dedicated Abu Dhabi tour specialists anytime via phone or instant WhatsApp chat.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="tel:+971544278880"
              isExternal
              variant="outline"
              size="sm"
              showIcon
              icon={<Phone size={14} />}
              iconPosition="left"
              className="bg-white hover:bg-[#FAF8F5] !text-[#1E1A17] border-black/10"
            >
              Call +971 54 427 8880
            </Button>
            <Button
              href={WHATSAPP_URL}
              isExternal
              variant="tertiary"
              size="sm"
              showIcon
              icon={<MessageCircle size={14} className="text-emerald-400" />}
              iconPosition="left"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
