'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RollingButton } from '@/components/ui/RollingButton';
import { HeadingPill } from '@/components/ui/HeadingPill';

export default function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const vhWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!vhWrapRef.current) return;
      const rect = vhWrapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrolled = -rect.top;
      // Start transitions when scrolled past 20vh (when it pins) and end at 150vh to allow 2-3 scrolls to finish
      const startScroll = windowHeight * 0.20;
      const endScroll = windowHeight * 1.50;
      const range = endScroll - startScroll;
      const progress = range > 0 ? Math.max(0, Math.min(1, (scrolled - startScroll) / range)) : 0;

      if (progress < 0.28) {
        setActiveIndex(0);
      } else if (progress < 0.72) {
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
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <rect x="3" y="3" width="14" height="14" rx="2" />
          <rect x="7" y="7" width="14" height="14" rx="2" />
        </svg>
      ),
      image: '/assets/images/about/mission-image-1.jpg',
    },
    {
      id: '02',
      name: 'Vision',
      title: 'Digital Innovation',
      details: 'Our vision is to shape the future of digital innovation.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
          <circle cx="12" cy="12" r="9" strokeDasharray="4 4" />
        </svg>
      ),
      image: '/assets/images/icons/graph-image.jpg',
    },
    {
      id: '03',
      name: 'Goals',
      title: 'Inspire Growth',
      details: 'Our goal is to continuously push boundaries & help business.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      image: '/assets/images/about/about-us-image.jpg',
    },
  ];

  return (
    <section className="relative bg-white text-cs-ink z-20">
      {/* --- DESKTOP LAYOUT (Sticky, interactive accordion) --- */}
      <div className="hidden lg:block">
        <div ref={vhWrapRef} className="py-24 xl:py-32" style={{ height: '260vh' }}>
          <div className="sticky top-[20vh] w-full">
            <div className="w-[82%] max-w-[1260px] mx-auto">
              {/* Header */}
              <div className="flex flex-row justify-between items-end gap-8 mb-12">
                <div className="flex flex-col gap-6 items-start">
                  <HeadingPill text="Our Values" className="mb-0" />
                  <h2 className="text-h2 font-display font-normal text-cs-ink">
                    Values Shapes <span className="text-brand-default font-normal">Everything.</span>
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <RollingButton
                    variant="secondary"
                    href="/projects"
                    text="View All Projects"
                    className="border-none bg-brand-subtle !shadow-none hover:bg-brand-muted sm:mb-2"
                  />
                </div>
              </div>

              {/* Horizontal Line behind pills */}
              <div className="relative w-full">
                <div className="absolute top-[22px] left-0 w-full h-[1px] bg-[#e2e8f0]" />

                {/* Interactive Accordion Columns */}
                <div className="relative z-10 flex flex-row items-stretch gap-6 w-full">
                  {cards.map((card, idx) => {
                    const isActive = activeIndex === idx;

                    return (
                      <div
                        key={card.id}
                        className="flex flex-col gap-6 transition-[flex] duration-700 ease-out"
                        style={{
                          flex: isActive ? '1.8' : '1',
                        }}
                      >
                        {/* Pill aligned to start of column (left edge of card) */}
                        <div className="self-start z-10 bg-white pr-2">
                          <div
                            className={`px-8 py-2.5 rounded-full text-base transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer ${isActive
                                ? 'bg-gradient-to-b from-[#1c49c4] to-[#4a84fd] text-white shadow-md'
                                : 'bg-[#f4f8ff] text-cs-ink hover:bg-[#e6efff]'
                              }`}
                          >
                            {card.name}
                          </div>
                        </div>

                        {/* Card Container */}
                        <div className="flex flex-col justify-between rounded-[32px] overflow-hidden cursor-default bg-[#f4f8ff] p-8 h-[300px] lg:h-[320px] w-full">
                          {/* Top Icon */}
                          <div className="w-16 h-16 rounded-full bg-[#7ca9ff] flex items-center justify-center shadow-sm">
                            {card.icon}
                          </div>

                          {/* Card Content & Image */}
                          <div className="flex items-end justify-between gap-6 mt-auto">
                            <div className="flex flex-col gap-3 max-w-[280px]">
                              <h3 className="text-2xl font-display font-normal text-cs-ink">{card.title}</h3>
                              <p className="text-sm text-neutral-500 leading-relaxed font-paragraph">
                                {card.details}
                              </p>
                            </div>

                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  initial={{ opacity: 0, width: 0 }}
                                  animate={{ opacity: 1, width: 140 }}
                                  exit={{ opacity: 0, width: 0 }}
                                  transition={{ duration: 0.4 }}
                                  className="shrink-0 h-[100px] rounded-[16px] overflow-hidden bg-gray-300 shadow-md"
                                >
                                  <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE LAYOUT (Stacked, full expanded, no scroll effect) --- */}
      <div className="block lg:hidden w-[90%] mx-auto py-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-10">
          <HeadingPill text="Our Values" className="mb-0" />
          <h2 className="text-4xl font-display font-normal text-cs-ink">
            Values Shapes <br className="sm:hidden" /><span className="text-brand-default font-normal">Everything.</span>
          </h2>
          <RollingButton
            variant="secondary"
            href="/projects"
            text="View All Projects"
            className="border-none bg-brand-subtle !shadow-none hover:bg-brand-muted w-fit"
          />
        </div>

        {/* Stacked Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              <div className="self-start px-6 py-2 rounded-full bg-[#f4f8ff] text-cs-ink font-medium mb-4 text-sm">
                {card.name}
              </div>
              <div className="rounded-[32px] bg-[#f4f8ff] p-6 flex flex-col">
                <div className="w-14 h-14 rounded-full bg-[#7ca9ff] flex items-center justify-center shadow-sm mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-display font-medium text-cs-ink mb-3">{card.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-paragraph mb-6">
                  {card.details}
                </p>
                <div className="rounded-[16px] overflow-hidden bg-gray-300 w-full aspect-[4/3]">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
