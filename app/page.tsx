import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedPackagesSection } from "@/components/home/FeaturedPackagesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";

export default function HomePage() {
  return (
    <main id="top" className="bg-white text-[#221C18]">
      {/* Global Header */}
      <Header />

      {/* Section 1: Hero Section (Above-the-Fold) */}
      <Hero />

      {/* Section 2: Featured Packages Grid (Strictly 6 Desert Safari Packages) */}
      <FeaturedPackagesSection />

      <AboutSection />

      {/* Section 3: "Why Choose Us?" & Trust Signals + Customer Reviews */}
      <WhyChooseUs />

      <TestimonialsSection />

      {/* Section 4: Frequently Asked Questions (FAQ) Accordion */}
      <FaqSection />

      {/* Section 5: Final Booking & CTA Section */}
      <CtaSection />

      {/* Global Footer */}
      <Footer />

      {/* Minimal Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </main>
  );
}
