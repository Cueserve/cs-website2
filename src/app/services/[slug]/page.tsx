import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    <div className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
          <div
            data-wf--subtitle--variant="borders"
            className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
            style={{ marginBottom: '20px' }}
          >
            <div className="subtitle-flex-wrap">
              <div className="subtitle-text">{service.tag}</div>
            </div>
          </div>

          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            {service.name}
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}
          >
            {service.description}
          </p>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '40px',
              marginBottom: '40px',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
              What We Deliver
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.features.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '1.1rem',
                    padding: '12px 0',
                    borderBottom:
                      idx < service.features.length - 1
                        ? '1px solid rgba(255, 255, 255, 0.05)'
                        : 'none',
                  }}
                >
                  <span style={{ color: '#2d8cff', fontWeight: 'bold' }}>✓</span>{' '}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact-us"
            className="primary-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block"
          >
            <div className="primary-button-flex">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">Start A Project</div>
                <div className="primary-button-text-hover">Start A Project</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
