import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogPostsData: Record<
  string,
  { title: string; category: string; date: string; image: string; content: string }
> = {
  'designing-for-emotion-the-secret-to-memorable-brands-3': {
    title: 'Designing for Emotion: The Secret to Memorable Brands.',
    category: 'Advice',
    date: 'Nov 14, 2025',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163a5192d7749a090ca88b_Blog-Image-1.jpg',
    content:
      'Emotional branding creates a strong connection between consumers and brands by appealing directly to the customer’s emotional state, needs, and desires. In modern web design, micro-interactions, cohesive typography, and harmonious color palettes evoke trust and delight.',
  },
  'the-power-of-minimalism-in-modern-web-design': {
    title: 'The Power of Minimalism in Modern Web Design.',
    category: 'Advice',
    date: 'Nov 14, 2025',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163a37dc79e51d34432ff1_Blog-Image-2.jpg',
    content:
      'Minimalism isn’t just about having less content—it’s about amplifying what truly matters. By stripping away non-essential elements, minimalistic design elevates readability, accelerates load speed, and focuses user attention on key calls-to-action.',
  },
  'building-digital-trust-through-strong-brand-identity': {
    title: 'Building Digital Trust Through Strong Brand Identity.',
    category: 'Advice',
    date: 'Nov 14, 2025',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163a128551ce062ec12c66_Blog-Image-3.jpg',
    content:
      'Trust is the currency of the digital web. Consistent visual branding, accessible interfaces, and transparent communication reassure visitors that your brand is reliable, high-quality, and market-tested.',
  },
};

export function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({ slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPostsData[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', color: '#fff' }}>
          <div
            data-wf--subtitle--variant="borders"
            className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
            style={{ marginBottom: '20px' }}
          >
            <div className="subtitle-flex-wrap">
              <div className="subtitle-text">
                {post.category} • {post.date}
              </div>
            </div>
          </div>

          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '32px',
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
            }}
          >
            {post.content}
          </p>

          <Link
            href="/blogs"
            className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block"
          >
            <div className="primary-button-flex">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">← Back to Articles</div>
                <div className="primary-button-text-hover">← Back to Articles</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
