'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHeroBanner() {
  // Empty images for the marquee as requested
  const tickerItems = [
    { type: 'shape', src: '/assets/images/services/Service-Banner-Shape-1.png' },
    { type: 'image', src: '/assets/images/services/Service-Banner-Image-1.jpg' },
    { type: 'shape', src: '/assets/images/services/Service-Banner-Shape-2.png' },
    { type: 'image', src: '/assets/images/services/Service-Banner-Image-2.jpg' },
    { type: 'shape', src: '/assets/images/services/Service-Banner-Shape-3.png' },
    { type: 'image', src: '/assets/images/services/Service-Banner-Image-3.jpg' },
    { type: 'shape', src: '/assets/images/services/Service-Banner-Shape-4.png' },
  ];

  return (
    <section className="relative pt-[180px] pb-[80px] overflow-hidden bg-gradient-to-b from-[#e3f0ff] to-white text-[var(--color-text-primary)] w-full flex flex-col items-center">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <motion.div 
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff] w-fit mb-6">
              <span>Our Services</span>
            </div>
            <h1 className="text-h2 font-normal max-w-2xl mb-4">
              Our Creative{' '}
              <span className="text-[var(--color-brand-default)]">Solutions.</span>
            </h1>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center w-full max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-body-base text-[var(--color-text-secondary)]">
              At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full flex overflow-hidden py-8">
        <motion.div
          className="flex flex-nowrap whitespace-nowrap items-center gap-12 w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {/* We repeat the array twice for seamless loop */}
          {[...tickerItems, ...tickerItems].map((item, index) => {
            const isImage = item.type === 'image';

            return (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                {/* Image or Shape */}
                {item.src ? (
                  <img
                    src={item.src}
                    alt={isImage ? "Work" : "Shape"}
                    className={`${isImage ? 'w-[350px] h-[350px] rounded-[100px] object-cover' : 'h-[350px] w-auto object-contain'}`}
                  />
                ) : (
                  <div className="w-[350px] h-[350px] bg-gray-200 rounded-[100px]" />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
