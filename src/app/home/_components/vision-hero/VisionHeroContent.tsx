"use client";

import React, { forwardRef } from "react";
import { RollingButton } from "@/components/ui/RollingButton";

export interface VisionHeroContentProps {
  className?: string;
}

export const VisionHeroContent = forwardRef<HTMLDivElement, VisionHeroContentProps>(
  ({ className = "" }, ref) => {
    return (
      <div
        ref={ref}
        data-hero-content
        className={`absolute inset-0 z-30 flex flex-col justify-center pointer-events-auto opacity-100 ${className}`}
      >
        {/* Container matching exact Header width so text aligns perfectly with breathing room from right edge on desktop/laptop */}
        <div className="mx-auto w-[96%] sm:w-[90%] xl:w-[86%] max-w-[1320px] flex justify-center md:justify-end xl:pr-12 2xl:pr-20">
          {/* Hero Content: wide width spread and clean top margin on mobile, right-aligned block on tablet/laptop/desktop */}
          <div className="w-full max-w-[480px] sm:max-w-[540px] xl:max-w-[720px] 2xl:max-w-[780px] 3xl:max-w-[840px] text-center md:text-right mt-6 sm:mt-8 md:mt-10 xl:mt-12 shrink-0">
            {/* Main Headline using centralized text-hero-title utility class, structured as a clean vertical stack with breathing room */}
            <h1
              data-hero-title
              className="text-hero-title text-text-primary mb-4 sm:mb-6 xl:mb-8 flex flex-col gap-2.5 sm:gap-3.5 xl:gap-5 2xl:gap-6 items-center md:items-end"
            >
              <span className="whitespace-nowrap">Crafting Modern</span>
              <span className="inline-flex items-center justify-center md:justify-end gap-2 sm:gap-3 md:gap-4 text-brand-default whitespace-nowrap">
                <span className="hidden md:inline-block h-[2.5px] sm:h-[3px] w-8 sm:w-12 md:w-20 bg-brand-default rounded-full shrink-0" />
                <span>Vision For the</span>
              </span>
              <span className="text-text-primary whitespace-nowrap">Ambitious Brands</span>
            </h1>

            {/* Subheadline / Description Text using universal text-para utility class with generous gap between lines */}
            <p
              data-hero-desc
              className="text-para text-text-secondary leading-[1.75] mb-5 sm:mb-6 xl:mb-8 mx-auto md:mx-0 md:ml-auto max-w-[340px] sm:max-w-[460px] xl:max-w-[560px] 2xl:max-w-[620px] text-center md:text-right"
            >
              We blend creativity with strategy to build digital experiences that move brands forward.
              From crafting standout websites.
            </p>

            <div data-hero-cta className="flex items-center justify-center md:justify-end">
              <RollingButton text="Get Started Now" href="/contact" />
            </div>
          </div>
        </div>


      </div>
    );
  }
);

VisionHeroContent.displayName = "VisionHeroContent";
