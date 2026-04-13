import { HeroSection } from "@/components/home/HeroSection";
import { AudienceCards } from "@/components/home/AudienceCards";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { PartnersStrip } from "@/components/home/PartnersStrip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceCards />
      <HowItWorksPreview />
      <StatsSection />
      <TestimonialsSection />
      <PartnersStrip />
      <AppDownloadSection />
    </>
  );
}
