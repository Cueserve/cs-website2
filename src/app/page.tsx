import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import AwardsSection from '@/components/AwardsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <AwardsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
    </>
  );
}
