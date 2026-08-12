import React from 'react';
import { FadeInUp } from '@/components/FadeInUp';

export function generateStaticParams() {
  return [
    { slug: 'designing-for-emotion-the-secret-to-memorable-brands-3' },
    { slug: 'the-power-of-minimalism-in-modern-web-design' },
    { slug: 'building-digital-trust-through-strong-brand-identity' },
  ];
}

export default function BlogPostPage() {
  return (
    <FadeInUp>
      <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div className="section-subtile-wrap" style={{ marginBottom: '24px' }}>
              <div data-wf--subtitle--variant="borders" className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
                <div className="subtitle-flex-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                    loading="lazy"
                    alt="Subtitle Icon"
                    className="subtitle-icon"
                  />
                  <div className="subtitle-text">Article</div>
                </div>
              </div>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#0a2540', marginBottom: '20px' }}>
              Article <span className="section-title-mark">Coming Soon</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#3f4756', lineHeight: 1.6, marginBottom: '0px' }}>
              This article is currently under editorial review and will be published shortly.
            </p>
          </div>
        </div>
      </section>
    </FadeInUp>
  );
}
