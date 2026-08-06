import React from 'react';
import Link from 'next/link';
import { RollingButton } from '@/components/ui/RollingButton';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <h1 style={{ fontSize: '120px', fontWeight: 'bold', lineHeight: '1', margin: '0' }}>404</h1>
        <h2 style={{ fontSize: '32px', margin: '20px 0 10px' }}>Page Not Found</h2>
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '32px',
          }}
        >
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <RollingButton variant="blue" href="/" text="Back To Home" />
      </div>
    </div>
  );
}
