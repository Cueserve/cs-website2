"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function AboutMainSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsParallaxRef = useRef<HTMLDivElement>(null);
  const projectsFloatRef = useRef<HTMLDivElement>(null);
  const completedParallaxRef = useRef<HTMLDivElement>(null);
  const completedFloatRef = useRef<HTMLDivElement>(null);
  const metricParallaxRef = useRef<HTMLDivElement>(null);
  const metricFloatRef = useRef<HTMLDivElement>(null);

  // High-performance quickTo setters for buttery-smooth interpolation without frame drop
  const xSetProjects = useRef<((val: number) => void) | null>(null);
  const ySetProjects = useRef<((val: number) => void) | null>(null);
  const xSetCompleted = useRef<((val: number) => void) | null>(null);
  const ySetCompleted = useRef<((val: number) => void) | null>(null);
  const xSetMetric = useRef<((val: number) => void) | null>(null);
  const ySetMetric = useRef<((val: number) => void) | null>(null);

  // 1. Initialize quickTo setters for buttery-smooth mouse parallax tracking
  useEffect(() => {
    if (projectsParallaxRef.current && completedParallaxRef.current && metricParallaxRef.current) {
      xSetProjects.current = gsap.quickTo(projectsParallaxRef.current, "x", { duration: 1.2, ease: "power3.out" });
      ySetProjects.current = gsap.quickTo(projectsParallaxRef.current, "y", { duration: 1.2, ease: "power3.out" });
      xSetCompleted.current = gsap.quickTo(completedParallaxRef.current, "x", { duration: 1.2, ease: "power3.out" });
      ySetCompleted.current = gsap.quickTo(completedParallaxRef.current, "y", { duration: 1.2, ease: "power3.out" });
      xSetMetric.current = gsap.quickTo(metricParallaxRef.current, "x", { duration: 1.2, ease: "power3.out" });
      ySetMetric.current = gsap.quickTo(metricParallaxRef.current, "y", { duration: 1.2, ease: "power3.out" });
    }
  }, []);

  // 2. Interactive Buttery-Smooth Mouse Parallax Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (e.clientX - rect.left - centerX) / centerX;
    const deltaY = (e.clientY - rect.top - centerY) / centerY;

    xSetProjects.current?.(deltaX * -46);
    ySetProjects.current?.(deltaY * -36);

    xSetCompleted.current?.(deltaX * -36);
    ySetCompleted.current?.(deltaY * -30);

    xSetMetric.current?.(deltaX * 22);
    ySetMetric.current?.(deltaY * 18);
  };

  const handleMouseLeave = () => {
    xSetProjects.current?.(0);
    ySetProjects.current?.(0);
    xSetCompleted.current?.(0);
    ySetCompleted.current?.(0);
    xSetMetric.current?.(0);
    ySetMetric.current?.(0);
  };

  return (
    <section id="about" className="relative z-20 bg-white py-16 sm:py-24 xl:py-32 overflow-hidden">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        <div className="mb-8 sm:mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff]">
            About Us
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[40px] w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-12 sm:gap-20">
            {/* 40+ Block */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-w-[420px] flex items-center justify-center rounded-3xl bg-transparent cursor-pointer [perspective:1000px] mb-8"
            >
              <div className="relative flex flex-col items-center justify-center select-none w-full h-full py-6 sm:py-8">
                
                {/* Top Right "Awards Won" Pill */}
                <div ref={projectsParallaxRef} className="absolute top-6 sm:top-8 right-0 sm:right-4 z-20">
                  <div ref={projectsFloatRef} className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-label text-cs-ink bg-[#e2edff] shadow-sm overflow-visible relative animate-cs-float-pill-a [will-change:transform]">
                    <span>Awards Won</span>
                    <svg className="absolute -bottom-2 sm:-bottom-2.5 left-4 sm:left-5 w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#e2edff] fill-current pointer-events-none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0 L14 0 L0 14 Z" />
                    </svg>
                  </div>
                </div>

                {/* Big Metric Number */}
                <div ref={metricParallaxRef} className="z-10">
                  <div ref={metricFloatRef} className="font-paragraph font-normal text-brand-default tracking-tight leading-none flex items-center animate-cs-float-metric [will-change:transform]" style={{ fontSize: "clamp(4.5rem, 8vw, 8rem)" }}>
                    <span>40</span>
                    <span className="text-brand-default font-normal ml-1">+</span>
                  </div>
                </div>

                {/* Bottom Left "Worldwide" Pill */}
                <div ref={completedParallaxRef} className="absolute bottom-6 sm:bottom-10 left-0 sm:left-4 z-20">
                  <div ref={completedFloatRef} className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-label text-cs-ink bg-[#f1eeff] shadow-sm overflow-visible relative animate-cs-float-pill-b [will-change:transform]">
                    <span>Worldwide</span>
                    <svg className="absolute -top-2 sm:-top-2.5 right-4 sm:right-5 w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#f1eeff] fill-current pointer-events-none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 14 L0 14 L14 0 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission and Vision Blocks */}
            <div className="flex flex-col gap-10 w-full max-w-[500px] mt-4">
              <div>
                <h4 className="text-[28px] font-display font-normal mb-4 text-cs-ink">Our Mission</h4>
                <p className="text-base text-neutral-500 leading-relaxed font-paragraph">
                  We reimagine your brand&apos;s digital presence and change how individuals interact with your brand.
                </p>
              </div>
              <div>
                <h4 className="text-[28px] font-display font-normal mb-4 text-cs-ink">Our Vision</h4>
                <p className="text-base text-neutral-500 leading-relaxed font-paragraph">
                  Our vision is to create meaningful digital experiences that combine creativity, clarity, and purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:border-l md:border-cs-border md:pl-8 xl:pl-10 py-2 flex flex-col justify-start w-full">
            <h2 className="text-h3 font-display font-normal text-cs-ink mb-6 sm:mb-8">
              Our team of designers, developers, and thinkers driven by{" "}
              <span className="text-brand-default font-normal">
                one purpose — to craft digital experiences.
              </span>
            </h2>

            <p className="text-para text-neutral-900 leading-[1.75] mb-8 sm:mb-10">
              We combine strategy, creativity, and technology to help brands grow in the modern
              digital landscape. Every project we take on is fueled by curiosity, guided by precision.
            </p>

            {/* Image Placeholder under text */}
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-3xl overflow-hidden mt-auto bg-gray-100">
              <img 
                src="/assets/images/about-us/About-Us-Image.jpg" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
