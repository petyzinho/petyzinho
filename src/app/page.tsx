import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhereWeAreSection } from "@/components/home/WhereWeAreSection";
import { ProfessionalsSection } from "@/components/home/ProfessionalsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <WhereWeAreSection />
      <ProfessionalsSection />
      <CTASection />
    </>
  );
}
