import React from 'react';
import ServicesHeroBanner from './_components/ServicesHeroBanner';
import ServicesGridSection from './_components/ServicesGridSection';
import FaqSection from '@/components/FaqSection';
import { FadeInUp } from '@/components/FadeInUp';

export { metadata } from "./metadata";

export default function ServicesPage() {
  return (
    <>
      <FadeInUp>
        <ServicesHeroBanner />
      </FadeInUp>
      <FadeInUp>
        <ServicesGridSection />
      </FadeInUp>
      <FadeInUp>
        <FaqSection />
      </FadeInUp>
    </>
  );
}

