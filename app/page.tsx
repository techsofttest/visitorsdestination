import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <main id="top" className="overflow-hidden bg-white text-[#242424]">
      <Header />
      <Hero />
      <FeaturedExperiences />
      <IntroSection />
      <ServicesCarousel />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
