import React from 'react';
import Link from 'next/link';
import { blogPosts } from './data';
import { FadeInUp } from '@/components/FadeInUp';
import { HeadingPill } from '@/components/ui/HeadingPill';

export const metadata = {
  title: 'Blog | Cueserve',
  description: 'Our latest articles, news, and insights.',
};

export default function BlogPage() {
  return (
    <div className="w-full bg-white text-[var(--color-text-primary)]">
      {/* Hero Section */}
      <FadeInUp>
        <section className="relative pt-[160px] pb-16 sm:pb-24 bg-gradient-to-b from-[#e3f0ff] to-white overflow-hidden">
          <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px] flex flex-col items-center text-center">
            
            <HeadingPill text="News & Articles" />
            
            <h1 className="text-[3rem] sm:text-[4rem] font-normal text-cs-ink mb-6 leading-[1.1]">
              Our Latest <span className="text-brand-default">Articles.</span>
            </h1>
            
            <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
            </p>
            
          </div>
        </section>
      </FadeInUp>

      {/* Blog Cards Grid */}
      <FadeInUp>
        <section className="pb-24">
          <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-[#f4f8ff] rounded-[32px] sm:rounded-[40px] p-4 sm:p-6 flex flex-col gap-6">
                  
                  {/* Card Image */}
                  <div className="w-full relative h-[280px] sm:h-[320px] rounded-[24px] sm:rounded-[32px] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                    
                    {/* Category & Date Pill */}
                    <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 flex items-center gap-2 text-[12px] font-medium text-brand-default shadow-sm">
                      <span>{post.category}</span>
                      <div className="w-1 h-1 rounded-full bg-brand-default"></div>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col gap-6 flex-grow justify-between px-2 pb-2">
                    <h3 className="text-[22px] sm:text-[24px] font-medium text-cs-ink leading-[1.3] pr-4">
                      {post.title}
                    </h3>
                    
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-3 mt-auto group w-fit">
                      <span className="text-[14px] font-medium text-cs-ink">Read More</span>
                      <div className="w-7 h-7 rounded-full bg-brand-default flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInUp>
    </div>
  );
}

