"use client";

import React, { useState, useEffect } from 'react';

export default function AboutTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Emma Johnson',
      companyLogo: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg',
      avatar: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaedad24e443801fc6e0_Testimonial-Image-1.jpg',
      quote: '“Working with Arooth was a seamless experience from start to finish. Their team truly understood our vision and brought it to life through a stunning digital identity. The results exceeded our expectations.”',
    },
    {
      id: 2,
      name: 'Emma Johnson',
      companyLogo: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg',
      avatar: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaee30cffad6d75f74b4_Testimonial-Image-2.jpg',
      quote: '“Arooth delivered exactly what we were looking for—clean design, clear structure, and a strong brand presence. Their attention to detail and creative approach made the entire process effortless.”',
    },
    {
      id: 3,
      name: 'Emma Johnson',
      companyLogo: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg',
      avatar: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeeb6faec471807e4a4_Testimonial-Image-3.jpg',
      quote: '“The team at Arooth transformed our innovative ideas into a polished and professional digital experience. Communication was smooth, timelines were consistently met, and the final outcome was exceptionally impressive.”',
    },
    {
      id: 4,
      name: 'Emma Johnson',
      companyLogo: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb118f5abb33fd2d45fd_Testimonial-Logo.svg',
      avatar: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdaeef6f6713e50ba3c26_Testimonial-Image-4.jpg',
      quote: '“From concept to execution, Arooth handled everything with precision and creativity. The final design perfectly reflects our brand and has received overwhelmingly positive feedback from our clients.”',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section testimonials about-testimonials" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Centered Header */}
        <div className="section-title-wrapper margin-bottom" style={{ textAlign: 'center', maxWidth: '54rem', margin: '0 auto 3.5rem' }}>
          <div className="section-subtile-wrap" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div data-wf--subtitle--variant="borders" className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
              <div className="subtitle-flex-wrap">
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                  loading="lazy"
                  alt="Subtitle Icon"
                  className="subtitle-icon"
                />
                <div className="subtitle-text">Our Testimonials</div>
              </div>
            </div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem', lineHeight: '1.25' }}>
            Our success is measured by the satisfaction of our clients. We{' '}
            <span className="section-title-mark">
              take pride in building long partnerships.
            </span>
          </h2>
        </div>

        {/* Carousel Grid Wrapper */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ overflow: 'hidden', width: '100%', position: 'relative' }}
        >
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              transform: `translateX(-${currentIndex * (100 / 3 + 0.5)}%)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="single-testimonial-wrap"
                style={{
                  flex: '0 0 calc(33.333% - 1rem)',
                  minWidth: '280px',
                  backgroundColor: '#edf3ff',
                  borderRadius: '1.75rem',
                  padding: '0.75rem',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  className="testimonial-content-wrapper"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e1ebfc',
                    borderRadius: '1.25rem',
                    padding: '2rem 1.75rem 1.75rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    {/* Top Author Row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                        <img
                          src={t.avatar}
                          alt={t.name}
                          style={{ width: '3rem', height: '3rem', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        <div>
                          <img src={t.companyLogo} alt="Logo" style={{ height: '1.2rem', marginBottom: '0.2rem' }} />
                          <div className="testimonial-author-name" style={{ fontSize: '0.9rem', color: '#111111', fontStyle: 'italic', letterSpacing: '-0.04em' }}>
                            {t.name}
                          </div>
                        </div>
                      </div>
                      {/* Quote Icon */}
                      <div>
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691cdb2fd8ce6cc23415e725_Testimonial-Quote.svg"
                          alt="Quote"
                          style={{ width: '2rem' }}
                        />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="testimonial-content-divider" style={{ height: '1px', backgroundColor: '#0d071914', marginBottom: '1.25rem' }} />

                    {/* Quote text */}
                    <p className="testimonial-details" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#111111', margin: 0, letterSpacing: '-0.03em' }}>
                      {t.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2.5rem' }}>
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              backgroundColor: '#edf3ff',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d8e5ff')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#edf3ff')}
          >
            <img
              src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691099d2ad33ce03facdb99e_Arrow-Left-Black.svg"
              alt="Prev"
              style={{ width: '1rem', height: '1rem' }}
            />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              backgroundColor: '#edf3ff',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d8e5ff')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#edf3ff')}
          >
            <img
              src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691099d2cb74b898d73240fe_Arrow-Right-Black.svg"
              alt="Next"
              style={{ width: '1rem', height: '1rem' }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
