"use client";

import React from "react";

export function TechScroller() {
  return (
    <div
      className="relative w-full py-8 sm:py-10 xl:py-12 overflow-hidden z-20 bg-white"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes heroLogoScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `
      }} />
      <div
        className="flex w-max items-center whitespace-nowrap select-none"
        style={{
          animation: "heroLogoScroll 55s linear infinite",
        }}
      >
        {[0, 1].map((loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-[48px] sm:gap-[64px] xl:gap-[80px] 2xl:gap-[96px] pr-[48px] sm:pr-[64px] xl:pr-[80px] 2xl:pr-[96px] shrink-0">
            {[
              { name: "Microsoft .NET", src: "/Sliding_logos/dotnet.png" },
              { name: "Angular", src: "/Sliding_logos/angular.png" },
              { name: "React", src: "/Sliding_logos/react.png" },
              { name: "Next.js", src: "/Sliding_logos/nextjs.png" },
              { name: "HTML5", src: "/Sliding_logos/html.png" },
              { name: "CSS3", src: "/Sliding_logos/css.png" },
              { name: "JavaScript", src: "/Sliding_logos/javascript.png" },
              { name: "Android Studio", src: "/Sliding_logos/android-studio.png" },
            ].map((logo, idx) => (
              <div
                key={`${loopIdx}-${idx}`}
                className="flex items-center justify-center shrink-0 transition-opacity duration-300 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-[36px] sm:h-[44px] xl:h-[54px] 2xl:h-[64px] w-auto object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
