import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Changelog - Cueserve',
};

export default function ChangelogPage() {
  return (
    <div className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>Changelog</h1>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '30px',
              marginBottom: '32px',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: '#2d8cff', marginBottom: '8px' }}>
              v1.0.0 — Initial Release
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Full release of Cueserve Next.js web platform, featuring dynamic React components, interactive tabs, testimonial slider, and FAQ accordion.
            </p>
          </div>
          <Link href="/" className="primary-button w-inline-block">
            <div className="primary-button-text">Return Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
