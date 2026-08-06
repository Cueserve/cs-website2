import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const projectsData: Record<
  string,
  { name: string; category: string; description: string; image: string }
> = {
  'pixel-forge': {
    name: 'Pixel Forge',
    category: 'UI/UX Design',
    description:
      'A next-generation design platform crafted for creative teams to collaborate in real-time.',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1.jpg',
  },
  'studio-nova': {
    name: 'Studio Nova',
    category: 'UI/UX Design',
    description:
      'Brand identity and web experience for an avant-garde digital arts agency.',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2.jpg',
  },
  'brand-orbit': {
    name: 'Brand Orbit',
    category: 'UI/UX Design',
    description:
      'A comprehensive brand ecosystem and design framework for global technology products.',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3.jpg',
  },
  'vision-core': {
    name: 'Vision Core',
    category: 'UI/UX Design',
    description:
      'Modern web design and interactive dashboard platform for high-growth tech startups.',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4.jpg',
  },
  'design-flow': {
    name: 'Design Flow',
    category: 'UI/UX Design',
    description:
      'Streamlined workflow app interface optimized for seamless product designer productivity.',
    image:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5.jpg',
  },
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="section" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#fff' }}>
          <div
            data-wf--subtitle--variant="borders"
            className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
            style={{ marginBottom: '20px' }}
          >
            <div className="subtitle-flex-wrap">
              <div className="subtitle-text">{project.category}</div>
            </div>
          </div>

          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            {project.name}
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
              marginBottom: '40px',
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              marginBottom: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <Link
            href="/projects"
            className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block"
          >
            <div className="primary-button-flex">
              <div className="primary-button-text-wrap">
                <div className="primary-button-text">← Back to Projects</div>
                <div className="primary-button-text-hover">← Back to Projects</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
