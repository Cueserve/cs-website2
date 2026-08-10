"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RollingButton } from "@/components/ui/RollingButton";
import { HeadingPill } from "@/components/ui/HeadingPill";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: "pixel-forge", num: "01", name: "Pixel Forge", category: "UI/UX DESIGN", image: "/assets/images/home/Project-Image-1.jpg", isLarge: false },
  { id: "studio-nova", num: "02", name: "Studio Nova", category: "UI/UX DESIGN", image: "/assets/images/home/Project-Image-2.jpg", isLarge: false },
  { id: "brand-orbit", num: "03", name: "Brand Orbit", category: "UI/UX DESIGN", image: "/assets/images/home/Project-Image-3.jpg", isLarge: true },
  { id: "vision-core", num: "04", name: "Vision Core", category: "UI/UX DESIGN", image: "/assets/images/home/Project-Image-4.jpg", isLarge: false },
  { id: "design-flow", num: "05", name: "Design Flow", category: "UI/UX DESIGN", image: "/assets/images/home/Project-Image-5.jpg", isLarge: false },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const arrow = arrowRefs.current[idx];
    if (!arrow) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - rect.width / 2;
    const dy = y - rect.height / 2;

    // Slow moving, dampened shift towards the cursor (e.g. 0.45 factor of distance)
    gsap.to(arrow, {
      x: dx * 0.45,
      y: dy * 0.45,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (idx: number) => {
    const arrow = arrowRefs.current[idx];
    if (!arrow) return;

    // Reset back to center slowly
    gsap.to(arrow, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  useGSAP(() => {
    const projectCards = gsap.utils.toArray<HTMLElement>('.project-card');
    
    projectCards.forEach((card, index) => {
      const content = card.querySelector('.project-content');
      if (content) {
        // Set the perspective so the rotation looks 3D
        gsap.set(content, { transformPerspective: 1500, transformOrigin: "bottom center" });
        
        gsap.from(content, {
          y: 80,
          rotation: index % 2 === 0 ? -4 : 4, // Opposite tilt angle
          rotationX: 45, // Tilted backward
          opacity: 0,
          ease: "power2.out", // Smoother easing
          scrollTrigger: {
            trigger: content,
            start: "top 95%", // Starts earlier, right when the top enters the screen
            end: "top 75%", // Finishes unfolding much sooner
            scrub: 1, // Ties the animation to the scrollbar
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-between border-t border-b border-cs-border pb-24">
      {/* 5 Vertical Lines spanning wider than the navbar */}
      <div className="absolute inset-0 w-[96%] max-w-[1600px] mx-auto h-full flex justify-between pointer-events-none z-0">
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
        <div className="w-px h-full bg-cs-border" />
      </div>

      {/* Inner Content Container */}
      <div className="relative z-10 w-[90%] xl:w-[82%] max-w-[1260px] mx-auto pt-20 h-full flex flex-col">

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-24 gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-6">
            <HeadingPill text="Our Projects" className="mb-0" />
            <h2 className="text-4xl md:text-5xl font-paragraph font-normal text-cs-ink">
              Our Latest <span className="text-cs-dark-blue">Projects.</span>
            </h2>
          </div>

          <RollingButton
            text="View Projects"
            href="/projects"
            variant="secondary"
            className="border-none bg-brand-subtle !shadow-none hover:bg-brand-muted sm:mb-2"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-32">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card flex flex-col ${project.isLarge ? "md:col-span-2" : "col-span-1"} ${idx === 1 || idx === 4 ? "lg:mt-32" : ""}`}
            >
              {/* Inner Grid for exact diagonal attachment */}
              <div className="grid grid-cols-[auto_1fr]">

                {/* Number: Row 1, Col 1 */}
                <div className="relative z-20 text-7xl md:text-[80px] lg:text-[120px] font-paragraph font-normal text-cs-ink leading-[0.75] col-start-1 col-end-2 row-start-1 row-end-2">
                  {project.num}
                </div>

                {/* Image & Text Wrapper: Row 2, spans both cols on mobile/tablet, indented on desktop */}
                <div className={`project-content flex flex-col items-start w-full col-start-1 lg:col-start-2 col-end-3 row-start-2 row-end-3 -mt-6 md:mt-2 lg:-mt-8 ${project.isLarge ? "" : "lg:max-w-[452px]"}`}>
                  <Link
                    href={`/projects/${project.id}`}
                    onMouseMove={(e) => handleMouseMove(e, idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                    className={`relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden mb-6 group cursor-pointer block ${project.isLarge
                      ? "aspect-[4/5] md:aspect-[2/1]"
                      : "aspect-[4/5]"
                      }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes={project.isLarge ? "(max-width: 1400px) 90vw, 1260px" : "(max-width: 768px) 90vw, (max-width: 1400px) 45vw, 630px"}
                      priority={idx === 0}
                      className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[3px]"
                    />

                    {/* Hover Floating Arrow Overlay */}
                    <div
                      ref={(el) => { arrowRefs.current[idx] = el; }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl text-cs-dark-blue"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-0">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </Link>
                  <div className="flex flex-col items-start gap-3 mt-2">
                    <h3 className="text-xl md:text-2xl font-paragraph font-normal text-cs-ink">
                      {project.name}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-paragraph font-medium leading-none uppercase tracking-[0.1em] text-neutral-900 bg-brand-muted">
                      {project.category}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
