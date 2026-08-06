'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RollingButton } from '@/components/ui/RollingButton';

interface TechItem {
  name: string;
  icon: string;
}

const techItems: TechItem[] = [
  { name: 'Microsoft .NET', icon: '/Sliding_logos/dotnet.png' },
  { name: 'Angular', icon: '/Sliding_logos/angular.png' },
  { name: 'React', icon: '/Sliding_logos/react.png' },
  { name: 'Next.js', icon: '/Sliding_logos/nextjs.png' },
  { name: 'HTML5', icon: '/Sliding_logos/html.png' },
  { name: 'CSS3', icon: '/Sliding_logos/css.png' },
  { name: 'JavaScript', icon: '/Sliding_logos/javascript.png' },
  { name: 'Android Studio', icon: '/Sliding_logos/android-studio.png' },
];

export default function HeroBanner() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  const MESSAGES = [
    'Initializing Platform...',
    'Connecting Services...',
    'Loading Assets...',
    'Preparing Experience...',
    'Almost Ready...',
  ];

  useEffect(() => {
    // Only show preloader on desktop (≥1024px)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setLoading(false);
      return;
    }
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // Tick progress up randomly like kush
    let p = 0;
    const progressInterval = setInterval(() => {
      p += Math.floor(Math.random() * 8) + 2;
      if (p > 95) p = 95;
      setProgress(p);
    }, 120);

    // Rotate messages
    let m = 0;
    const msgInterval = setInterval(() => {
      m = Math.min(m + 1, MESSAGES.length - 1);
      setMsgIndex(m);
    }, 700);

    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
      setProgress(100);
      setMsgIndex(MESSAGES.length - 1);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = '';
        }, 500);
      }, 200);
    }, 850);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  const renderLogoGroup = (keyPrefix: string) => (
    <>
      {techItems.map((item, index) => (
        <div key={`${keyPrefix}-${index}`} className="tech-logo-item" title={item.name}>
          <img
            src={item.icon}
            alt={`${item.name} logo`}
            className="tech-logo-img"
            loading="eager"
          />
        </div>
      ))}
    </>
  );

  return (
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            opacity: fadeOut ? 0 : 1,
            transition: 'opacity 0.5s ease',
            pointerEvents: fadeOut ? 'none' : 'auto',
          }}
        >
          {/* Blueprint grid — same as kush */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(12, 56, 90, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 56, 90, 0.12) 1px, transparent 1px),
              linear-gradient(rgba(12, 56, 90, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(12, 56, 90, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            backgroundPosition: 'center center',
            opacity: 0.07,
          }} />

          {/* Centred logo */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="/cueserve-logo.png"
              alt="Cueserve"
              style={{ height: '36px', width: 'auto', opacity: 0.85 }}
            />
          </div>

          {/* Bottom bar — boot text left, % counter right (exact kush layout) */}
          <div style={{
            position: 'absolute',
            bottom: '10vh',
            left: 0,
            right: 0,
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
            {/* Boot text */}
            <div style={{
              color: 'rgba(12, 56, 90, 0.7)',
              fontFamily: "var(--font-sans, 'Instrument Sans', 'Poppins', sans-serif)",
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}>
              {MESSAGES[msgIndex]}
            </div>

            {/* Large % counter */}
            <div style={{
              color: 'rgba(12, 56, 90, 0.85)',
              fontFamily: "var(--font-sans, 'Instrument Sans', 'Poppins', sans-serif)",
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'flex-end',
              gap: '2px',
            }}>
              {String(progress).padStart(2, '0')}
              <span style={{ fontSize: '1.2rem', marginBottom: '0.4rem', opacity: 0.55 }}>%</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile / Tablet static hero — shown only below 1024px */}
      <section className="banner-section mobile-hero-section">
        <div className="mobile-hero-inner">
          <div className="container" style={{ position: 'relative', zIndex: 3 }}>
            <div className="mobile-hero-content">
              <h1 className="mobile-hero-title">
                Crafting Modern <span className="mobile-hero-mark">Vision</span> For the Ambitious Brands
              </h1>
              <p className="mobile-hero-desc">
                We blend creativity with strategy to build digital experiences that move brands forward.
              </p>
              <div className="mobile-hero-buttons">
                <RollingButton variant="blue" href="/contact-us" text="Book a Free Call" />
                <RollingButton variant="alice-blue" href="/contact-us" text="Get Started Now" />
              </div>
            </div>
          </div>
          <div className="mobile-hero-bg">
            <div className="mobile-hero-squared-grid" />
          </div>
          <div className="banner-borders-wrapper mobile-borders-wrapper">
            <div className="banner-borders-flex">
              <div className="banner-border-line"></div>
              <div className="banner-border-line"></div>
              <div className="banner-border-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Vision scroll animation — hidden on mobile/tablet */}
      <section className="banner-section desktop-vision-section">
        <div className="banner-vh-wrap">
          <div className="banner-sticky-wrap">

            <div className="banner-wrapper">
              <div className="banner-letters-wrap">
                <div className="banner-letters-row">
                  <div className="banner-letters-flex">
                    <div className="single-banner-letter _01">
                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a0dce81b6c2e6d25a7_V.svg" loading="lazy" alt="Banner Letter" className="banner-letter _01" />
                    </div>
                    <div className="single-banner-letter _02">
                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a090ec532a71755ced_I-1.svg" loading="lazy" alt="Banner Letter" className="banner-letter _02" />
                    </div>
                    <div className="single-banner-letter _03">
                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a01adbcc362b61bb48_S.svg" loading="lazy" alt="Banner Letter" className="banner-letter _03" />
                    </div>
                    <div className="single-banner-letter _04">
                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a090ec532a71755ced_I-1.svg" loading="lazy" alt="Banner Letter" className="banner-letter _04" />
                    </div>

                    <div className="after-banner-wrapper">
                      <div className="after-banner-inner">
                        <div className="after-banner-wrap">
                          <div className="container navbar-container">
                            <div className="after-banner-content-wrap">
                              <h2 className="after-banner-title">Crafting Modern <span className="after-banner-title-line">&nbsp;</span><span className="after-banner-title-mark">Vision For the</span> Ambitious Brands</h2>
                              <p className="after-banner-details">We blend creativity with strategy to build digital experiences that move brands forward. From crafting standout websites.</p>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                <RollingButton variant="white" href="/contact-us" text="Get Started Now" />
                              </div>
                            </div>

                            <div className="after-banner-ticker-wrap">
                              <div className="after-banner-ticker-flex">
                                {renderLogoGroup('group-1')}
                                {renderLogoGroup('group-2')}
                                {renderLogoGroup('group-3')}
                              </div>
                            </div>
                          </div>

                          <div className="banner-bg-wrap">
                            <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image.jpg" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-500.jpg 500w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-800.jpg 800w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-1080.jpg 1080w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-1600.jpg 1600w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-2000.jpg 2000w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-2600.jpg 2600w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-3200.jpg 3200w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image.jpg 3840w" alt="Banner Image" className="banner-bg-image" />
                            <div className="banner-bg-shape"></div>
                          </div>
                        </div>
                      </div>
                      <div className="banner-letter-o"></div>
                    </div>

                    <div className="single-banner-letter _05">
                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a05c4b8bbb901ff9ce_N.svg" loading="lazy" alt="Banner Letter" className="banner-letter _05" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="container banner-container">
                <div className="banner-content-wrapper">
                  <div className="banner-content-bottom">
                    <div className="banner-details-wrap">
                      <p className="banner-details">At Cueserve, we blend creativity with strategy to build digital experiences that move brands forward. From crafting standout websites.</p>
                    </div>
                    <div className="banner-button-wrap" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <RollingButton variant="blue" href="/contact-us" text="Book a Free Call" />
                      <RollingButton variant="alice-blue" href="/contact-us" text="Get Started Now" />
                    </div>
                  </div>
                </div>
                <div className="banner-borders-wrapper">
                  <div className="banner-borders-flex">
                    <div className="banner-border-line"></div>
                    <div className="banner-border-line"></div>
                    <div className="banner-border-line"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
