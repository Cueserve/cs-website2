"use client";

import React, { forwardRef } from "react";

export interface VisionHeroMediaProps {
  mediaUrl?: string;
  className?: string;
}

export const VisionHeroMedia = forwardRef<HTMLDivElement, VisionHeroMediaProps>(
  (
    {
      className = "",
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden z-[100] ${className}`}
        style={{
          width: "clamp(138px, min(30vw, 55vh), 492px)",
          height: "clamp(70px, min(14.3vw, 27vh), 236px)",
          borderRadius: "9999px",
          backgroundColor: "transparent",
          transform: "translateZ(0)",
        }}
      >
        {/* Crisp Dark Blue Border Ring ON TOP */}
        <div
          data-media-border
          className="absolute inset-0 pointer-events-none z-[100] border-solid border-[#0040C1]"
          style={{
            border: "clamp(22px, min(3vw, 4.8vh), 35px) solid #0040C1",
            borderRadius: "9999px",
            transform: "translateZ(0)",
          }}
        />
      </div>
    );
  }
);

VisionHeroMedia.displayName = "VisionHeroMedia";
