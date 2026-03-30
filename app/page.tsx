import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyBartio from "@/components/sections/WhyBartio";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioPreview />
      <WhyBartio />
      <ProcessSection />
      <CTASection />
    </>
  );
}
