'use client';

import React from 'react';
import { FadeInUp } from '@/components/FadeInUp';
import { HeadingPill } from '@/components/ui/HeadingPill';

export interface ProjectData {
  slug: string;
  name: string;
  category: string;
  description: string;
  client: string;
  date: string;
  tools: string;
  heroImage: string;
  overview: string;
  contentWriting: string;
  socialMedia: string;
  galleryLarge: string;
  galleryGrid: string[];
}

export default function ProjectDetailClient({ project }: { project: ProjectData }) {
  return (
    <div className="w-full bg-white text-[var(--color-text-primary)]">
      {/* Hero Section */}
      <FadeInUp>
        <section className="relative pt-[160px] pb-16 sm:pb-24 bg-gradient-to-b from-[#e3f0ff] to-white overflow-hidden">
          <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px] flex flex-col items-center text-center">
            
            <HeadingPill text="Project Details" />
            
            <h1 className="text-[3rem] sm:text-[4rem] font-normal text-cs-ink mb-6 leading-[1.1]">
              {project.name}
            </h1>
            
            <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] max-w-2xl mb-20 sm:mb-24 leading-relaxed">
              {project.description}
            </p>

            <div className="w-full relative h-[300px] sm:h-[500px] md:h-[600px] rounded-[32px] sm:rounded-[64px] overflow-hidden mb-8 sm:mb-12">
              <img 
                src={project.heroImage} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full bg-brand-default rounded-[32px] md:rounded-full py-8 sm:py-10 px-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 md:gap-40 text-white">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[13px] font-medium tracking-wider uppercase opacity-90">CLIENT:</span>
                  <span className="text-[17px] font-medium">{project.client}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[13px] font-medium tracking-wider uppercase opacity-90">DATE:</span>
                  <span className="text-[17px] font-medium">{project.date}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[13px] font-medium tracking-wider uppercase opacity-90">TOOLS:</span>
                  <span className="text-[17px] font-medium">{project.tools}</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </FadeInUp>
    </div>
  );
}
