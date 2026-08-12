"use client";

import React, { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function AboutMediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoPinContainerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const statsWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
            height: "clamp(480px, 80vh, 800px)",
            y: -40,
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

  return (
    <>
      <section
        ref={sectionRef}
        className="relative z-30 bg-white pt-12 sm:pt-16 xl:pt-24 pb-8 sm:pb-10 lg:pb-20 xl:pb-24 min-h-0 lg:min-h-[680px] xl:min-h-[750px]"
      >
        {/* Exact navbar width container: w-[90%] xl:w-[82%] max-w-[1260px] mx-auto */}
        <div ref={videoPinContainerRef} className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">

          {/* Side-by-side resting layout: Both reduced equally (46% each) with a clean gap between, and EXACT SAME height (250px) */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-[6%] w-full">

            {/* Left Container: Video Format Card (Exact same resting height as right box: h-[200px]) */}
            <div
              ref={videoWrapperRef}
              className="w-full lg:w-[47%] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[280px] rounded-[32px] sm:rounded-[38px] overflow-hidden relative bg-cs-ink/5 border border-cs-border shrink-0 flex items-center justify-center group"
            >
              {/* Background Video */}
              <video
                ref={videoRef}
                src="/assets/videos/video1.mp4"
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
                className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/40 border border-white/60 flex items-center justify-center text-white hover:bg-white/50 hover:scale-110 transition-all"
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
              className="w-full lg:w-[47%] h-auto rounded-[32px] sm:rounded-[38px] p-5 sm:p-5 border border-[#e2edff] bg-[#F5FAFF] flex flex-col sm:flex-row items-center gap-5 sm:gap-6 justify-between shrink-0"
            >
              {/* Left Icon Box with gradient: linear-gradient(180deg, #0136A2 0%, #266DFB 100%) */}
              <div
                className="w-full aspect-[1/0.8] sm:aspect-auto sm:w-28 sm:h-28 lg:w-[132px] lg:h-[132px] rounded-[24px] sm:rounded-[30px] shrink-0 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(180deg, #0136A2 0%, #266DFB 100%)" }}
              >
                {/* Timer / Clock Icon from public folder */}
                <img
                  src="/assets/images/icons/timer.png"
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
    </>
  );
}
