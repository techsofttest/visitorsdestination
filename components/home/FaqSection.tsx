import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { WHATSAPP_URL } from "@/components/data/content";

export interface FaqItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "What is included in the standard Evening Desert Safari?",
    answer:
      "Our standard Evening Desert Safari includes round-trip hotel pickup in an air-conditioned 4x4 Land Cruiser, 45 minutes of thrilling dune bashing, sandboarding, sunset photo stops, a welcome reception with Arabic coffee (Gahwa) and dates, camel rides, henna painting, a sumptuous international BBQ buffet with vegetarian and non-vegetarian selections, and live cultural entertainment including Tanoura and fire shows.",
    linkText: "View Evening Desert Safari details",
    linkHref: "#packages",
  },
  {
    question: "How do Morning and Evening Desert Safaris differ?",
    answer:
      "Morning safaris typically run from 8:00 AM to 12:00 PM, focusing on cooler temperatures, crisp sunrise dune landscapes, sandboarding, and camel rides—ideal for guests with limited evening time or those who prefer daylight photography. Evening safaris (3:30 PM to 9:30 PM) include the full desert camp experience, sunset viewing, live BBQ dinner, and traditional entertainment.",
    linkText: "Compare Morning Safari",
    linkHref: "#packages",
  },
  {
    question: "What are the benefits of booking a Private Desert Safari?",
    answer:
      "A Private Desert Safari reserves an exclusive 4x4 Land Cruiser solely for you and your family or group (up to 6 guests per vehicle). You enjoy flexible pickup timing, personalized dune bashing intensity (gentle for seniors or toddlers, thrill-packed for adventure lovers), and dedicated VIP seating at our desert camp.",
    linkText: "Explore Private Safari options",
    linkHref: "#packages",
  },
  {
    question: "Where are pickup and drop-off points located?",
    answer:
      "We provide complimentary door-to-door pickup and drop-off from any hotel, residence, shopping mall, or cruise terminal across Abu Dhabi city. Exact pickup times are confirmed via WhatsApp 2 hours prior to departure.",
    linkText: "Check pickup logistics on WhatsApp",
    linkHref: "https://wa.me/971544278880",
  },
  {
    question: "Are desert safaris safe for young children and pregnant women?",
    answer:
      "Safety is our number one priority. Dune bashing is not recommended for infants under 3 years old, pregnant women, or guests with serious spinal or heart conditions. However, we offer gentle desert drives or direct camp transfers so families can still enjoy the sunset, camel rides, and BBQ dinner without harsh dune driving.",
    linkText: "Inquire about customized family packages",
    linkHref: "#packages",
  },
  {
    question: "Can I add Quad Biking or Dune Buggy rides to my safari?",
    answer:
      "Yes! Both 350cc single quad bikes and 800cc/1000cc 2-seater/4-seater dune buggies can be added during your online booking or upon arrival at our desert staging station. Full protective helmets, goggles, and safety briefings are provided by our marshals.",
    linkText: "See Quad Biking Safari",
    linkHref: "#packages",
  },
  {
    question: "How long does the entire safari tour last?",
    answer:
      "Morning Desert Safaris last approximately 4 hours total, Evening Desert Safaris run around 6 to 7 hours, and our Liwa Desert Expeditions span a full day (10 to 12 hours) due to the scenic journey into the Empty Quarter.",
    linkText: "Discover Liwa Desert Safari",
    linkHref: "#packages",
  },
  {
    question: "How does the direct booking process work?",
    answer:
      "Booking directly with Abu Dhabi Desert Safari guarantees the lowest rates without third-party fees. You can reserve instantly via our website or direct WhatsApp chat, receive immediate confirmation vouchers, and choose flexible payment options including cash on pickup, credit card, or PayPal with free cancellation up to 24 hours prior.",
    linkText: "Book direct via WhatsApp",
    linkHref: "https://wa.me/971544278880",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#FAF8F5] py-16 md:py-24">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Subtitle & Contact Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <SectionLabel>Clear Answers & Practical Advice</SectionLabel>
            <h2 className="font-[family-name:var(--font-bebas)] text-4xl uppercase tracking-[0.02em] leading-[0.95] text-[#1E1A17] sm:text-5xl md:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm text-[#555] md:text-base leading-relaxed">
              Find quick answers to common questions about our Abu Dhabi desert safaris, private bookings, and tour logistics.
            </p>

            {/* Left Contact Card matching design system */}
            <div className="mt-8 rounded-2xl bg-[#F0EDE6] p-6 md:p-8">
              <p className="text-sm font-medium leading-relaxed text-[#2A2A2A] md:text-[15px]">
                Have more questions for us? Our desert tour specialists are here to assist 24/7. Get in touch with us!
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  href={WHATSAPP_URL}
                  isExternal
                  variant="primary"
                  size="md"
                  showIcon
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Radix UI Smooth Accordion List */}
          <div className="lg:col-span-7">
            <FaqAccordion items={HOMEPAGE_FAQS} defaultValue="item-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
