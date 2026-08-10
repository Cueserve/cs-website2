"use client";

import React, { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function AboutMediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoPinContainerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const statsWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardsSectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!videoPinContainerRef.current || !videoWrapperRef.current || !statsWrapperRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current, // Pin the top-level section right below the floating navbar so the entire section and footer below are cleanly spaced
            start: "top top+=100",
            end: "+=800",
            scrub: 1.5,
            pin: true,
            pinSpacing: true,
          },
        });

        // STAGE 1: Right stats box stays right at its horizontal place, glides straight UP (y: -420), and disappears cleanly
        tl.to(
          statsWrapperRef.current,
          {
            y: -420,
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0
        );

        // Once the right box has gone up and disappeared completely at 1.2s, instantly hide its layout box
        // so it never shifts sideways while going up and never pushes the video sideways when zooming
        tl.set(
          statsWrapperRef.current,
          {
            display: "none",
          },
          1.2
        );

        // STAGE 2: After the right box went up and disappeared, left video zooms wide across 100% navbar width
        tl.to(
          videoWrapperRef.current,
          {
            width: "100%",
            height: "clamp(380px, 64vh, 620px)",
            y: 0,
            duration: 2.0,
            ease: "power3.inOut",
          },
          1.2
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  // Smooth Staggered Scroll-Reveal Entrance Animation
  useGSAP(
    () => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".service-card-wrapper");
      if (wrappers.length === 0) return;

      // Set initial state
      gsap.set(wrappers, {
        y: 60,
        opacity: 0,
        scale: 0.95,
      });

      // Animate on scroll trigger
      gsap.to(wrappers, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsSectionRef.current,
          start: "top 80%", // Trigger when the top of the section enters 80% down the screen
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: cardsSectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative z-20 bg-white pt-12 sm:pt-16 xl:pt-24 pb-12 lg:pb-16 xl:pb-20 min-h-0 lg:min-h-[680px] xl:min-h-[750px]"
      >
        {/* Exact navbar width container: w-[90%] xl:w-[82%] max-w-[1260px] mx-auto */}
        <div ref={videoPinContainerRef} className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">

          {/* Side-by-side resting layout: Both reduced equally (46% each) with a clean gap between, and EXACT SAME height (250px) */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-[6%] w-full">

            {/* Left Container: Video Format Card (Exact same resting height as right box: h-[200px]) */}
            <div
              ref={videoWrapperRef}
              className="w-full lg:w-[47%] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[200px] rounded-[32px] sm:rounded-[38px] overflow-hidden relative bg-cs-ink/5 border border-cs-border shrink-0 flex items-center justify-center group"
            >
              {/* Background Video */}
              <video
                ref={videoRef}
                src="/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle Gradient Overlay for contrast and controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Pause / Play Glassmorphic Button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all"
              >
                {isPlaying ? (
                  /* Pause Icon (||) */
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                ) : (
                  /* Play Icon (Triangle) */
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 16 16">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63 1.693-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Right Container: Icon & Metrics Box (Exact same resting height as video: h-[200px]) */}
            <div
              ref={statsWrapperRef}
              className="w-full lg:w-[47%] h-auto sm:h-[195px] lg:h-[200px] rounded-[32px] sm:rounded-[38px] p-5 sm:p-6 border border-[#e2edff] bg-[#F5FAFF] flex flex-col sm:flex-row items-center gap-5 sm:gap-6 justify-between shrink-0"
            >
              {/* Left Icon Box with gradient: linear-gradient(180deg, #0136A2 0%, #266DFB 100%) */}
              <div
                className="w-full aspect-[1/0.8] sm:aspect-auto sm:w-28 sm:h-28 lg:w-[132px] lg:h-[132px] rounded-[24px] sm:rounded-[30px] shrink-0 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(180deg, #0136A2 0%, #266DFB 100%)" }}
              >
                {/* Timer / Clock Icon from public folder */}
                <img
                  src="/timer.png"
                  alt="Alarm Timer Icon"
                  className="w-[65%] h-[65%] sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                />
              </div>

              {/* Right Side Stats Columns */}
              <div className="flex flex-1 items-start sm:items-center justify-around gap-4 sm:gap-6 w-full px-2 sm:px-0 sm:pl-2 pt-2 sm:pt-0">
                {/* Stat 1: 96% Positive Feedback */}
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <span className="text-4xl sm:text-h3 font-display font-normal sm:font-medium text-cs-ink tracking-tight leading-none mb-1.5 sm:mb-2.5">
                    96%
                  </span>
                  <span className="font-paragraph font-light text-[10px] sm:text-base text-neutral-900 leading-[1.3] sm:leading-none uppercase w-[120px] sm:w-[147px]">
                    Positive Feedback<br />From Clients
                  </span>
                </div>

                {/* Subtle Vertical Divider */}
                <div className="w-[1px] h-12 bg-cs-border/60 hidden sm:block shrink-0" />

                {/* Stat 2: 98% Accurately Delivered */}
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <span className="text-4xl sm:text-h3 font-display font-normal sm:font-medium text-cs-ink tracking-tight leading-none mb-1.5 sm:mb-2.5">
                    98%
                  </span>
                  <span className="font-paragraph font-light text-[10px] sm:text-base text-neutral-900 leading-[1.3] sm:leading-none uppercase w-[120px] sm:w-[147px]">
                    Accurately<br />Delivered
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={cardsSectionRef} className="relative z-20 bg-white pt-0 md:pt-4 lg:pt-16 pb-16 sm:pb-24 border-b border-cs-border">
        {/* Subtle divider line between sections */}
        <hr className="lg:hidden w-[90%] xl:w-[82%] max-w-[1260px] mx-auto border-t border-cs-border mb-6 md:mb-10 lg:mb-20" />
        <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 px-1 sm:px-0">
            {[
              {title: "Website", subtitle: "DEVELOPMENT", image: "/assets/images/services/Service-Icon-1.svg" },
              { title: "Mobile App", subtitle: "DEVELOPMENT", image: "/assets/images/services/Service-Icon-2.svg" },
              { title: "Software", subtitle: "DEVELOPMENT", image: "/assets/images/services/Service-Icon-3.svg" },
              { title: "UI/UX", subtitle: "DESIGN", image: "/assets/images/services/Service-Icon-4.svg" },
              { title: "Kiosk", subtitle: "DEVELOPMENT", image: "/tech_logo.png" },
              { title: "Graphics", subtitle: "DESIGN", image: "/service-icon-pen.png" },
            ].map((service, index) => (
              <div key={index} className="service-card-wrapper">
                <div
                  className="bg-blue-50 rounded-[16px] sm:rounded-xxl p-3.5 sm:p-6 md:p-4 lg:p-6 flex flex-col justify-between h-[150px] sm:h-[300px] md:h-[180px] lg:h-[300px] hover:scale-[1.02] transition-transform duration-300 w-full"
                >
                  <div className="flex flex-col">
                    <h3 className="font-title text-[15px] sm:text-[32px] md:text-[20px] lg:text-[32px] font-medium sm:font-normal leading-tight sm:leading-none text-neutral-1000">
                      {service.title}
                    </h3>
                    <p className="font-paragraph text-[9px] sm:text-[14px] md:text-[11px] lg:text-[14px] font-medium sm:font-normal leading-tight sm:leading-none sm:tracking-[0.1em] uppercase text-neutral-1000 mt-1 sm:mt-[14px] md:mt-2 lg:mt-[14px]">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="flex justify-center sm:justify-end mt-auto mb-2 sm:mb-0">
                    <img
                      src={service.image}
                      alt={`${service.title} logo`}
                      className="h-16 sm:h-[200px] md:h-[100px] lg:h-[200px] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
