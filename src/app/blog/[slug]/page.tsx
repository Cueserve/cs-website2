import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '../data';
import Link from 'next/link';
import { FadeInUp } from '@/components/FadeInUp';
import { HeadingPill } from '@/components/ui/HeadingPill';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-[var(--color-text-primary)]">
      {/* Hero Section */}
      <FadeInUp>
        <section className="relative pt-[160px] pb-16 sm:pb-24 bg-gradient-to-b from-[#e3f0ff] to-white overflow-hidden">
          <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px]">
            
            <HeadingPill text={`${post.category} • ${post.date}`} />
            
            <h1 className="text-[2.5rem] sm:text-[3.5rem] font-normal text-cs-ink mb-12 sm:mb-16 leading-[1.2] max-w-4xl">
              {post.title}
            </h1>

            <div className="w-full relative h-[400px] sm:h-[600px] md:h-[700px] rounded-[32px] sm:rounded-[40px] overflow-hidden mb-8 sm:mb-24">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Area */}
            <div className="w-full">
              
              {post.contentHeading1 && (
                <h2 className="text-[28px] sm:text-[32px] font-normal text-cs-ink mb-6">
                  {post.contentHeading1}
                </h2>
              )}

              {post.contentParagraph1 && (
                <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] leading-relaxed mb-12">
                  {post.contentParagraph1}
                </p>
              )}

              {post.quote && (
                <blockquote className="border-l-4 border-brand-default pl-6 sm:pl-8 py-2 my-12 text-[18px] sm:text-[20px] font-normal text-cs-ink leading-relaxed italic">
                  &ldquo;{post.quote}&rdquo;
                </blockquote>
              )}

              {post.contentParagraph2 && (
                <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] leading-relaxed mb-16">
                  {post.contentParagraph2}
                </p>
              )}

              {/* In-content image grid */}
              {post.contentImages && post.contentImages.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
                  {post.contentImages.map((img, index) => (
                    <div key={index} className="w-full h-[250px] sm:h-[300px] rounded-[24px] overflow-hidden">
                      <img src={img} alt={`Content image ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {post.contentHeading2 && (
                <h2 className="text-[28px] sm:text-[32px] font-normal text-cs-ink mb-6">
                  {post.contentHeading2}
                </h2>
              )}

              {post.contentParagraph3 && (
                <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] leading-relaxed mb-24">
                  {post.contentParagraph3}
                </p>
              )}

            </div>

          </div>
        </section>
      </FadeInUp>

      {/* Footer / Read More Section */}
      <FadeInUp>
        <section className="pb-24 border-t border-gray-100 pt-16">
          <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px] flex justify-center">
            <Link href="/blog" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#f4f8ff] text-brand-default font-normal hover:bg-[#e3f0ff] transition-colors">
              <span>← Back to all articles</span>
            </Link>
          </div>
        </section>
      </FadeInUp>
    </div>
  );
}
