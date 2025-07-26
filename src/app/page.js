import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-work";
import {IndustriesSection, WhoWeServeSection} from "@/components/industry";
import { WhyChooseUsSection } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <section className="p-6">
      <HeroSection/>
      <WhyChooseUsSection/>
      <HowItWorksSection/>
      <WhoWeServeSection/>
    </section>
  );
}
