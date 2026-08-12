"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HomeServicesGrid() {
  const cardsSectionRef = useRef<HTMLDivElement>(null);

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
    <section 
      ref={cardsSectionRef} 
      className="relative z-20 bg-white mt-0 sm:mt-0 lg:mt-8 xl:mt-20 pt-8 sm:pt-10 lg:pt-20 xl:pt-24 pb-8 sm:pb-10 lg:pb-16 xl:pb-24"
    >
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 px-1 sm:px-0">
          {[
            { title: "Website", subtitle: "DEVELOPMENT", image: "/assets/images/services/service-icon-1.svg" },
            { title: "Mobile App", subtitle: "DEVELOPMENT", image: "/assets/images/services/service-icon-2.svg" },
            { title: "Software", subtitle: "DEVELOPMENT", image: "/assets/images/services/service-icon-3.svg" },
            { title: "UI/UX", subtitle: "DESIGN", image: "/assets/images/services/service-icon-4.svg" },
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
  );
}
