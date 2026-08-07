'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHeroBanner() {
  // Placeholder images for the marquee (replacing CDN)
  const tickerItems = [
    { type: 'shape', src: '/assets/images/about-us/Service-Banner-Shape-1.png' },
    { type: 'image', src: '/assets/images/about-us/Service-Banner-Image-1.jpg' },
    { type: 'shape', src: '/assets/images/about-us/Service-Banner-Shape-2.png' },
    { type: 'image', src: '/assets/images/about-us/Service-Banner-Image-2.jpg' },
    { type: 'shape', src: '/assets/images/about-us/Service-Banner-Shape-3.png' },
    { type: 'image', src: '/assets/images/about-us/Service-Banner-Image-3.jpg' },
    { type: 'shape', src: '/assets/images/about-us/Service-Banner-Shape-4.png' },
  ];

  return (
    <section className="relative pt-[180px] pb-[80px] overflow-hidden bg-gradient-to-b from-[#e3f0ff] to-white text-[var(--color-text-primary)]">
      <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start justify-between mb-24 text-center lg:text-left">
          <motion.div 
            className="flex-1 lg:flex-[1.5] flex flex-col items-center lg:items-start w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-h2 font-medium max-w-2xl">
              Crafting The Future Of Digital{' '}
              <span className="text-[var(--color-brand-default)]">Brands.</span>
            </h1>
          </motion.div>
          <motion.div 
            className="flex-1 lg:max-w-md pt-4 flex flex-col items-center lg:items-start w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-body-base text-[var(--color-text-secondary)]">
              At Cueserve, we believe that great design goes beyond visuals — it’s about creating meaningful digital experiences that connect people and brands.
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
            const isBlueShape = item.type === 'shape' && index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex-shrink-0 flex items-center justify-center overflow-hidden ${
                  isImage
                    ? 'w-[350px] h-[350px] rounded-full bg-gray-200' 
                    : 'w-[175px] h-[350px]'
                }`}
              >
                {/* Image or Shape */}
                <img
                  src={item.src}
                  alt={isImage ? "Work" : "Shape"}
                  className={`w-full h-full ${isImage ? 'object-cover' : 'object-contain'}`}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
