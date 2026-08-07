import React from 'react';
import ServicesHeroBanner from '@/components/ServicesHeroBanner';
import ServicesGridSection from '@/components/ServicesGridSection';
import FaqSection from '@/components/FaqSection';

export { metadata } from "./metadata";

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroBanner />
      <ServicesGridSection />
      <FaqSection />
    </>
  );
}
