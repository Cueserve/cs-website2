'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeadingPill } from '@/components/ui/HeadingPill';

export default function AboutTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Emma Johnson',
      avatar: '/assets/images/about-us/Testimonial-Image-1.jpg',
      quote: '“Working with Cueserve was a seamless experience from start to finish. Their team truly understood our vision and brought it to life through a stunning digital identity. The results exceeded our expectations.”',
    },
    {
      id: 2,
      name: 'Emma Johnson',
      avatar: '/assets/images/about-us/Testimonial-Image-2.jpg',
      quote: '“Cueserve delivered exactly what we were looking for—clean design, clear structure, and a strong brand presence. Their attention to detail and creative approach made the entire process effortless.”',
    },
    {
      id: 3,
      name: 'Emma Johnson',
      avatar: '/assets/images/about-us/Testimonial-Image-3.jpg',
      quote: '“The team at Cueserve transformed our innovative ideas into a polished and professional digital experience. Communication was smooth, timelines were consistently met, and the final outcome was exceptionally impressive.”',
    },
    {
      id: 4,
      name: 'Emma Johnson',
      avatar: '/assets/images/about-us/Testimonial-Image-4.jpg',
      quote: '“From concept to execution, Cueserve handled everything with precision and creativity. The final design perfectly reflects our brand and has received overwhelmingly positive feedback from our clients.”',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 xl:py-32 bg-white text-cs-ink overflow-hidden">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 gap-6 max-w-[900px] mx-auto">
          <HeadingPill text="Our Testimonials" className="mb-0" />
          <h2 className="text-4xl md:text-5xl font-display font-normal text-cs-ink leading-tight">
            Our success is measured by the satisfaction of our clients. We{' '}
            <span className="text-brand-default">
              take pride in building long partnerships.
            </span>
          </h2>
        </div>

        {/* Carousel Grid Wrapper */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(-${currentIndex} * (33.333% + 1.5rem))`,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1
            }}
            style={{ width: '100%' }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.3333%-1rem)] shrink-0"
              >
                {/* Thick border effect using nested divs */}
                <div className="bg-[#f4f8ff] p-[10px] rounded-[36px] h-full flex flex-col">
                  <div className="bg-white rounded-[26px] p-8 h-full flex flex-col justify-start">
                    
                    {/* Top Row: Author & Quote Icon */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover bg-gray-200 shrink-0"
                        />
                        <div className="flex flex-col items-start gap-1 justify-center">
                          <div className="text-base text-cs-ink font-medium">
                            {t.name}
                          </div>
                        </div>
                      </div>
                      
                      {/* Giant Quote Icon */}
                      <div className="text-[#e2ebfc] shrink-0">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.571 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="text-sm font-paragraph leading-relaxed text-cs-ink">
                      {t.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-full bg-[#f4f8ff] hover:bg-[#e2ebfc] text-cs-ink flex items-center justify-center transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-full bg-[#f4f8ff] hover:bg-[#e2ebfc] text-cs-ink flex items-center justify-center transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
