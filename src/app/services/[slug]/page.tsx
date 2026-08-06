import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RollingButton } from '@/components/ui/RollingButton';

const servicesData: Record<
  string,
  { name: string; tag: string; description: string; features: string[] }
> = {
  'brand-identity': {
    name: 'Brand Identity',
    tag: 'Branding & Visual Design',
    description:
      'We build iconic brand identities that connect emotionally with your audience and make your business unforgettable.',
    features: [
      'Logo Design & Marks',
      'Brand Guidelines & Typography',
      'Color Palette & Visual Strategy',
      'Art Direction & Imagery',
      'Brand Positioning Strategy',
    ],
  },
  'ui-ux-strategy': {
    name: 'UI/UX Strategy',
    tag: 'User Experience & Interface',
    description:
      'User-centric interfaces engineered for high conversion rates, intuitive user flows, and modern aesthetic elegance.',
    features: [
      'User Research & Persona Mapping',
      'Wireframing & Interactive Prototypes',
      'Design System Architecture',
      'Usability Testing & Iteration',
      'Responsive Cross-Platform UI',
    ],
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    tag: 'Growth & Performance',
    description:
      'Data-driven digital marketing strategies designed to amplify brand presence and convert visitors into loyal customers.',
    features: [
      'Search Engine Optimization (SEO)',
      'Content Marketing Strategy',
      'Social Media Branding',
      'Pay-Per-Click (PPC) Campaigns',
      'Conversion Rate Optimization',
    ],
  },
  'product-design': {
    name: 'Product Design',
    tag: 'Digital Product Development',
    description:
      'Transforming complex ideas into sleek digital SaaS platforms, web software, and mobile application experiences.',
    features: [
      'End-to-End Product Architecture',
      'SaaS Platform UX Design',
      'Mobile App UI/UX',
      'Design Handoff & Developer Specs',
      'Continuous Feature Optimization',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

return (
    <section
      className="section"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Subtitle tag */}
          <div className="section-subtile-wrap" style={{ marginBottom: '24px' }}>
            <div data-wf--subtitle--variant="borders" className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
              <div className="subtitle-flex-wrap">
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                  loading="lazy"
                  alt="Subtitle Icon"
                  className="subtitle-icon"
                />
                <div className="subtitle-text">News &amp; Articles</div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1
            className="section-title"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#0a2540',
              marginBottom: '20px',
            }}
          >
            Our Service page is <span className="section-title-mark">Coming Soon</span>
          </h1>
        </div>
      </div>
    </section>
  );
}