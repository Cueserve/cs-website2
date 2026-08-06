import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Protected Page - Cueserve',
};

export default function ProtectedPage() {
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
      <div className="container" style={{ maxWidth: '500px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Protected Page</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '24px' }}>
          This page is password protected. Please enter your password to gain access.
        </p>
        <input
          type="password"
          placeholder="Enter password..."
          style={{
            width: '100%',
            padding: '16px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            outline: 'none',
            fontSize: '1rem',
            marginBottom: '20px',
          }}
        />
        <Link
          href="/"
          className="primary-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block"
        >
          <div className="primary-button-flex">
            <div className="primary-button-text-wrap">
              <div className="primary-button-text">Submit</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
