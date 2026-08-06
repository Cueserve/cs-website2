import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Style Guide - Cueserve',
};

export default function StyleGuidePage() {
  return (
    <div className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>Style Guide</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', marginBottom: '32px' }}>
            Typography scale, brand colors, button variants, and spacing guidelines for Cueserve design system.
          </p>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
            <div style={{ padding: '20px', background: '#0a2540', borderRadius: '12px' }}>
              <strong>Primary Brand Navy:</strong> #0a2540
            </div>
            <div style={{ padding: '20px', background: '#2d8cff', borderRadius: '12px' }}>
              <strong>Brand Accent Blue:</strong> #2d8cff
            </div>
          </div>

          <Link href="/" className="primary-button w-inline-block">
            <div className="primary-button-text">Return Home</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
