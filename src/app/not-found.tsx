import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="section"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <div className="container">
        <h1 style={{ fontSize: '8rem', color: '#2d8cff', margin: 0, fontWeight: 800 }}>
          404
        </h1>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Page Not Found</h2>
        <p
          style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '32px',
          }}
        >
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="primary-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block"
          style={{ display: 'inline-block' }}
        >
          <div className="primary-button-flex">
            <div className="primary-button-text-wrap">
              <div className="primary-button-text">Back To Home</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
