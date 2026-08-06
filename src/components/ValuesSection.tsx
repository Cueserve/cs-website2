"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { RollingButton } from '@/components/ui/RollingButton';

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const vhWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!vhWrapRef.current) return;
      const rect = vhWrapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      if (progress < 0.35) {
        setActiveIndex(0);
      } else if (progress < 0.7) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      id: '01',
      name: 'Mission',
      title: 'Focused On Impact',
      details: 'Our mission is creating experience that inspire, deliver results.',
      icon: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb589d47768656dc4903_Mission-Icon-1.svg',
      image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg',
    },
    {
      id: '02',
      name: 'Vision',
      title: 'Digital Innovation',
      details: 'Our vision is to shape the future of digital innovation.',
      icon: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58248258afdc90491e_Mission-Icon-2.svg',
      image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg',
    },
    {
      id: '03',
      name: 'Goals',
      title: 'Inspire Growth',
      details: 'Our goal is to continuously push boundaries & help business.',
      icon: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58c89775bca22ccba5_Mission-Icon-3.svg',
      image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div ref={vhWrapRef} className="mission-vh-wrap" style={{ height: '220vh' }}>
          <div className="mission-sticky-wrap" style={{ position: 'sticky', top: '7rem' }}>
            <div className="section-title-wrapper flex mission">
              <div className="section-title-left-wrap mission">
                <div className="section-subtile-wrap">
                  <div
                    data-wf--subtitle--variant="borders"
                    className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
                  >
                    <div className="subtitle-flex-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                        loading="lazy"
                        alt="Subtitle Icon"
                        className="subtitle-icon"
                      />
                      <div className="subtitle-text">Our Values</div>
                    </div>
                  </div>
                </div>
                <h2 className="section-title">
                  Values Shapes <span className="section-title-mark">Everything.</span>
                </h2>
              </div>
              <div className="section-title-right-wrap mission-button-wrap">
                <RollingButton variant="alice-blue" href="/projects" text="View All Projects" />
              </div>
            </div>

            <div className="mission-flex-wrap" style={{ display: 'flex', alignItems: 'stretch', gap: '1.5rem', width: '100%' }}>
              {cards.map((card, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={card.id}
                    className={`single-mission-wrapper _${card.id} ${isActive ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flex: isActive ? '1.8 1 0%' : '1 1 0%',
                      transition: 'flex 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      userSelect: 'none',
                    }}
                  >
                    <div className="mission-counter-wrap">
                      <div className="mission-name-wrap" style={{ userSelect: 'none' }}>
                        <div
                          className={`mission-name _${card.id}`}
                          style={{
                            color: isActive ? '#ffffff' : '#111111',
                            position: 'relative',
                            zIndex: 2,
                            transition: 'color 0.3s ease',
                            userSelect: 'none',
                          }}
                        >
                          {card.name}
                        </div>
                        <div
                          className={`mission-name-hover-bg _${card.id}`}
                          style={{
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? 'scale(1)' : 'scale(0.95)',
                            transition: 'opacity 0.3s ease, transform 0.3s ease',
                          }}
                        />
                      </div>
                      <div className="mission-border"></div>
                    </div>
                    <div className="mission-card-wrap" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="mission-card-content-wrap" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="mission-icon-wrap">
                          <img
                            src={card.icon}
                            loading="lazy"
                            alt={`${card.name} Icon`}
                            className="mission-icon"
                          />
                        </div>
                        <div className="mission-contents-flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                          <div className="mission-details-wrap">
                            <h3 className="mission-title">{card.title}</h3>
                            <p className="mission-details">{card.details}</p>
                          </div>
                          <div
                            className={`mission-image-wrap _${card.id}`}
                            style={{
                              opacity: isActive ? 1 : 0,
                              visibility: isActive ? 'visible' : 'hidden',
                              maxWidth: isActive ? '7.5rem' : '0px',
                              overflow: 'hidden',
                              transition: 'all 0.4s ease',
                              flexShrink: 0,
                            }}
                          >
                            <img
                              src={card.image}
                              loading="lazy"
                              alt={`${card.name} Image`}
                              className="mission-image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
