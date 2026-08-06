import AboutHeroBanner from '@/components/AboutHeroBanner';
import AboutMainSection from '@/components/AboutMainSection';
import TeamMembersSection from '@/components/TeamMembersSection';
import ValuesSection from '@/components/ValuesSection';
import AboutTestimonialsSection from '@/components/AboutTestimonialsSection';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'About Us - Cueserve',
  description: 'Learn more about Cueserve, our team of designers, developers, and thinkers driven by one purpose.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroBanner />
      <AboutMainSection />
      <TeamMembersSection />
      <ValuesSection />
      <AboutTestimonialsSection />
      <FaqSection />
    </>
  );
}
