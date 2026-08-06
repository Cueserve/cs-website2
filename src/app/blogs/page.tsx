import React from 'react';

export const metadata = {
  title: 'Blogs & Articles - Coming Soon | Cueserve',
  description: 'Fresh perspectives on design, strategy, and branding from Cueserve coming soon.',
};

export default function BlogsPage() {
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
            Our Blog is <span className="section-title-mark">Coming Soon</span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              color: '#3f4756',
              lineHeight: 1.65,
              marginBottom: '0px',
              maxWidth: '560px',
            }}
          >
            We are currently crafting fresh perspectives, industry insights, and strategy guides. Stay tuned for expert articles on design, branding, and digital growth.
          </p>

        </div>
      </div>
    </section>
  );
}
