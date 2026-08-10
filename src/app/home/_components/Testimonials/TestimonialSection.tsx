"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Lindel Wabhembe",
    company: "New Chapter Books",
    logo: "/testimonial/testimonial_logo.png",
    image: "/testimonial/client.jpg",
    quote: "If you want your job to be done professionally and on time, I highly recommend Team Cueserve. Very professional and will hire again in my future projects. Job well done. Thank you."
  },
  {
    name: "Emma Johnson",
    company: "Vario",
    logo: "/testimonial/testimonial_logo.png",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb028f55e0b0169b82a_Project-Gallery-Image-1.jpg",
    quote: "The team at Cueserve transformed our ideas into a polished and professional digital experience. Communication was smooth, timelines were met, and the final outcome was exceptional."
  },
  {
    name: "David Smith",
    company: "PixelForge",
    logo: "/testimonial/testimonial_logo.png",
    image: "https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb3fdf07c4ef098e9a0_Project-Gallery-Image-2.jpg",
    quote: "From concept to execution, Cueserve handled everything with precision and creativity. The final design perfectly reflects our brand and received great feedback from our clients."
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000); // Auto-scroll every 6 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = testimonials[currentIndex];
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const next = testimonials[nextIndex];

  // Card animation variants
  const cardVariants = {
    enter: (dir: number) => ({
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      zIndex: 10,
    }),
    exit: (dir: number) => ({
      x: dir * 280,
      y: -220, // Lift the card higher
      rotate: dir * 30,
      opacity: 0,
      scale: 0.92,
      zIndex: 9,
      transition: { duration: 0.8, ease: "easeOut" as const } // Slower exit
    })
  };

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-[90%] xl:w-[82%] max-w-[1260px] mx-auto flex flex-col items-center text-center">

        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
            Our Testimonials
          </span>

          <h2 className="text-lg sm:text-xl md:text-4xl font-paragraph font-normal text-cs-ink leading-[1.3] w-[95%] sm:w-[90%] md:w-[100%] mx-auto">
            Our success is measured by the satisfaction of our clients.
            <br className="hidden lg:block" />
            <span className="text-brand-default">
              {" "}We take pride in building long partnerships.
            </span>
          </h2>
        </div>

        {/* Testimonial Section Content: Stack + Side Arrows Container */}
        <div className="relative w-full flex flex-col items-center justify-center min-h-[460px] md:min-h-[340px] lg:min-h-[440px] px-0 md:px-12 mb-16 md:mb-2">

          {/* Left Arrow Button (Desktop Only) */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 md:left-4 z-20 w-11 h-11 rounded-full border border-[#e2edff] bg-white justify-center items-center text-brand-default hover:bg-[#f4f8ff] hover:scale-105 transition-all shadow-sm shrink-0"
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          {/* Cards Deck Stack Container */}
          <div className="relative w-full md:max-w-[680px] lg:max-w-[1050px] aspect-auto min-h-[420px] md:min-h-[280px] lg:min-h-[400px] flex items-center justify-center px-4 md:px-0">
            <AnimatePresence initial={false} custom={direction}>
              {/* Background Deck Card (Preview of the next card) */}
              <motion.div
                key={`bg-${nextIndex}`}
                className="absolute inset-0 p-0 md:p-5 lg:p-6 rounded-[24px] md:rounded-[32px] lg:rounded-[48px] border-0 md:border-[1.5px] md:border-[#e2edff] bg-transparent md:bg-white text-left pointer-events-none select-none opacity-50 hidden md:block"
                style={{ originX: 0.5, originY: 0.5 }}
                initial={{ rotate: direction * 5, scale: 0.95, y: 15 }}
                animate={{ rotate: 5, scale: 0.96, y: 12 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 h-full blur-[1px]">
                  <div className="relative w-full md:w-[35%] lg:w-[32%] aspect-[16/10] md:aspect-auto h-auto md:h-full rounded-[20px] md:rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#5899FF] shrink-0">
                    <img src={next.image} alt={next.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 border-[1.5px] border-[#e2edff] md:border-0 rounded-[20px] md:rounded-0 p-5 md:p-0 md:pt-4 md:pb-6 flex flex-col justify-start relative bg-white md:bg-transparent">
                    <div className="flex justify-between items-start md:items-center mb-4">
                      <div className="flex flex-col items-start">
                        <img src={next.logo} alt={next.company} className="h-6 md:h-8 lg:h-12 w-auto object-contain mb-1" />
                        <h4 className="font-paragraph font-normal text-sm md:text-base lg:text-xl italic text-cs-ink">{next.name}</h4>
                      </div>
                    </div>
                    <hr className="border-t border-[#e2edff] mb-4 w-full" />
                    <p className="font-paragraph font-light text-base md:text-[15px] lg:text-2xl text-cs-ink leading-relaxed">{next.quote}</p>
                  </div>
                </div>
              </motion.div>

              {/* Active Deck Card (Flipped / Active) */}
              <motion.div
                key={`active-${currentIndex}`}
                custom={direction}
                variants={cardVariants}
                initial="exit"
                animate="enter"
                exit="exit"
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="absolute inset-0 p-0 md:p-5 lg:p-6 rounded-[24px] md:rounded-[32px] lg:rounded-[48px] border-0 md:border-[1.5px] md:border-[#e2edff] bg-transparent md:bg-white shadow-none md:shadow-cs-md text-left"
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 h-full">
                  {/* Left Photo */}
                  <div className="relative w-full md:w-[35%] lg:w-[32%] aspect-[16/10] md:aspect-auto h-auto md:h-full rounded-[20px] md:rounded-[24px] lg:rounded-[36px] overflow-hidden bg-[#5899FF] shrink-0 shadow-sm">
                    <img src={current.image} alt={current.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>

                  {/* Right Text Panel */}
                  <div className="flex-1 border-[1.5px] border-[#e2edff] md:border-0 rounded-[20px] md:rounded-0 p-5 md:p-0 md:pt-4 md:pb-6 flex flex-col justify-start relative bg-white md:bg-transparent shadow-sm md:shadow-none">
                    {/* Logo & Name Row */}
                    <div className="flex justify-between items-start md:items-center mb-4 md:mb-5 lg:mb-6">
                      <div className="flex flex-col items-start">
                        <img src={current.logo} alt={current.company} className="h-6 md:h-8 lg:h-12 w-auto object-contain mb-1 md:mb-2 lg:mb-4" />
                        <h4 className="font-paragraph font-normal text-sm md:text-base lg:text-xl italic text-cs-ink">{current.name}</h4>
                      </div>
                      {/* Quote Icon */}
                      <div className="shrink-0 ml-4">
                        <img src="/testimonial/quote-icon.png" alt="Quote" className="w-8 md:w-8 lg:w-12 h-auto object-contain opacity-50 md:opacity-100" />
                      </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-t border-[#e2edff] mb-4 md:mb-8 w-full" />

                    {/* Quote Text */}
                    <p className="font-paragraph font-light text-base md:text-[15px] lg:text-2xl text-cs-ink leading-relaxed">
                      “{current.quote}”
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button (Desktop Only) */}
          <button
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 md:right-4 z-20 w-11 h-11 rounded-full border border-[#e2edff] bg-white justify-center items-center text-brand-default hover:bg-[#f4f8ff] hover:scale-105 transition-all shadow-sm shrink-0"
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

        </div>

        {/* Stats Strip */}
        <div className="w-full max-w-[1150px] mx-auto mt-6 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4 md:gap-x-0 items-start justify-center">

            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">95%</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-medium uppercase tracking-widest text-neutral-500 max-w-[130px] leading-relaxed">
                Client Satisfaction Rate
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center relative w-full">
              {/* Left Desktop Divider */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-28 bg-border-default"></div>

              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">120+</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-medium uppercase tracking-widest text-neutral-500 max-w-[140px] leading-relaxed">
                Global Brands Served Worldwide
              </p>

              {/* Right Desktop Divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-28 bg-border-default"></div>
            </div>

            {/* Stat 3 (Centered on Mobile) */}
            <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
              <h3 className="text-4xl md:text-[56px] font-paragraph font-normal text-cs-ink leading-none mb-3">5X</h3>
              <p className="text-[10px] md:text-xs font-paragraph font-medium uppercase tracking-widest text-neutral-500 max-w-[130px] leading-relaxed">
                Average Growth Achieved
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Full Width Bottom Border */}
      <hr className="w-full border-t border-border-default mt-16 md:mt-24" />
    </section>
  );
}
