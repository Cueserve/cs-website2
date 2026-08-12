import AboutHeroBanner from './_components/AboutHeroBanner';
import AboutMainSection from './_components/AboutMainSection';
import TeamMembersSection from './_components/TeamMembersSection';
import ValuesSection from './_components/ValuesSection';
import AboutTestimonialsSection from './_components/AboutTestimonialsSection';
import FaqSection from '@/components/FaqSection';
import { FadeInUp } from '@/components/FadeInUp';

export const metadata = {
  title: 'About Us - Cueserve',
  description: 'Learn more about Cueserve, our team of designers, developers, and thinkers driven by one purpose.',
};

export default function AboutPage() {
  return (
    <>
      <FadeInUp>
        <AboutHeroBanner />
      </FadeInUp>
      <FadeInUp>
        <AboutMainSection />
      </FadeInUp>
      <FadeInUp>
        <TeamMembersSection />
      </FadeInUp>
      <FadeInUp>
        <ValuesSection />
      </FadeInUp>
      <FadeInUp>
        <AboutTestimonialsSection />
      </FadeInUp>
      <FadeInUp>
        <FaqSection />
      </FadeInUp>
    </>
  );
}

