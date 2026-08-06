import React from 'react';
import Link from 'next/link';
import { RollingButton } from '@/components/ui/RollingButton';

export const metadata = {
  title: 'Licenses - Cueserve',
};

export default function LicensePage() {
  return (
    <div className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '24px' }}>All Licenses</h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
            All photography, typography, icons, and assets utilized in the Cueserve website digital experience are licensed for royalty-free commercial and creative applications.
          </p>
          <RollingButton variant="blue" href="/" text="Return Home" />
        </div>
      </div>
    </div>
  );
}
