'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import FaqSection from '@/components/FaqSection';
import { FadeInUp } from '@/components/FadeInUp';

const projects = [

  { 
    id: 'pixel-forge', 
    title: 'Pixel Forge', 
    category: 'UI/UX Design', 
    image: '/assets/images/projects/Project-Image-1.jpg' 
  },
  { 
    id: 'studio-nova', 
    title: 'Studio Nova', 
    category: 'UI/UX Design', 
    image: '/assets/images/projects/Project-Image-2.jpg' 
  },
  { 
    id: 'brand-orbit', 
    title: 'Brand Orbit', 
    category: 'UI/UX Design', 
    image: '/assets/images/projects/Project-Image-3.jpg', 
    isLarge: true 
  },
  { 
    id: 'vision-core', 
    title: 'Vision Core', 
    category: 'UI/UX Design', 
    image: '/assets/images/projects/Project-Image-4.jpg' 
  },
  { 
    id: 'design-flow', 
    title: 'Design Flow', 
    category: 'UI/UX Design', 
    image: '/assets/images/projects/Project-Image-5.jpg' 
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>

      <main className="w-full bg-white">
        {/* Hero Section with Gradient */}
        <FadeInUp>
          <div className="w-full flex flex-col items-center pt-[180px] pb-20 bg-gradient-to-b from-[#e3f0ff] to-white">
            <section className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
              <div className="flex flex-col items-center justify-center text-center">
                <motion.div 
                  className="flex flex-col items-center w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-label uppercase tracking-wider text-brand-default border border-brand-default/30 bg-[#f4f8ff] w-fit mb-6">
                    <span>Our Works</span>
                  </div>
                  <h1 className="text-h2 font-medium max-w-2xl mb-4 text-cs-ink">
                    Our Latest{' '}
                    <span className="text-[var(--color-brand-default)]">Projects.</span>
                  </h1>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center w-full max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <p className="text-body-base text-[var(--color-text-secondary)]">
                    At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
                  </p>
                </motion.div>
              </div>
            </section>
          </div>
        </FadeInUp>

        {/* Projects Grid Section with White Background */}
        <FadeInUp>
          <div className="w-full flex flex-col items-center pb-24 bg-white">
            <section className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className={`flex flex-col gap-6 group ${project.isLarge ? 'md:col-span-2' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: (index % 2) * 0.1 }}
                >
                  <Link href={`/projects/${project.id}`} className={`relative overflow-hidden rounded-[32px] block bg-[#f4f8ff] ${project.isLarge ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/3] md:aspect-[3/2]'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                    {/* Hover Overlay with Button */}
                    <div className="absolute inset-0 bg-[#0042c5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-auto">
                        <ArrowUpRight className="w-7 h-7 text-brand-default" />
                      </div>
                    </div>
                  </Link>
                  <Link href={`/projects/${project.id}`} className="relative overflow-hidden rounded-[32px] px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#f4f8ff]">
                    {/* Bottom to Top Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0042c5] to-[#256dff] translate-y-[105%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                    
                    <span className="relative z-10 text-[20px] md:text-[24px] leading-tight font-semibold text-cs-ink group-hover:text-white transition-colors duration-500">
                      {project.title}
                    </span>
                    <div className="relative z-10 flex items-center gap-2 text-[var(--color-text-secondary)] group-hover:text-white transition-colors duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-default)] group-hover:bg-white transition-colors duration-500"></div>
                      <span className="text-sm uppercase tracking-wider">{project.category}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
          </div>
        </FadeInUp>
      </main>

      {/* FAQ Section */}
      <FadeInUp>
        <FaqSection />
      </FadeInUp>
    </>
  );
}
