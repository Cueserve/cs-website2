export { metadata } from "./metadata";

import { HeroSection } from "./_components/HeroSection";
import { TechScroller } from "@/components/ui/TechScroller";
import { AboutSection } from "./_components/AboutSection";
import { AboutMediaSection } from "./_components/AboutMediaSection";
import { ServicesSection } from "./_components/ServicesSection";
import { ProjectsSection } from "./_components/ProjectsSection";
import { TestimonialSection } from "./_components/Testimonials/TestimonialSection";
import { ArticlesSection } from "./_components/ArticlesSection";
import FaqSection from "@/components/FaqSection";
import { FadeInUp } from "@/components/FadeInUp";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechScroller />
      <FadeInUp>
        <AboutSection />
      </FadeInUp>
      <FadeInUp>
        <AboutMediaSection />
      </FadeInUp>
      <FadeInUp>
        <ServicesSection />
      </FadeInUp>
      <FadeInUp>
        <ProjectsSection />
      </FadeInUp>
      <FadeInUp>
        <TestimonialSection />
      </FadeInUp>
      <FadeInUp>
        <ArticlesSection />
      </FadeInUp>
      <FadeInUp>
        <FaqSection />
      </FadeInUp>
    </>
  );
}

