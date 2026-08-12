import React from 'react';
import { notFound } from 'next/navigation';
import ProjectDetailClient, { ProjectData } from './ProjectDetailClient';

const projectsData: Record<string, ProjectData> = {
  'pixel-forge': {
    slug: 'pixel-forge',
    name: 'Pixel Forge',
    category: 'UI/UX Design',
    description:
      'At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.',
    client: 'Gondi Brand .inc',
    date: '20/9/2025',
    tools: 'Figma, PS',
    heroImage:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69221637c20028e855183972_Project-Single-Image-4.jpg',
    overview:
      'At Cueserve, every project is a story of creativity, collaboration, and innovation. We work closely with our clients to turn bold ideas into powerful digital experiences that inspire and perform. From concept to execution, our projects reflect our dedication to detail, strategy, and meaningful design — delivering results that make brands stand out in the digital landscape.',
    contentWriting:
      'Crafting articulate brand voices and compelling narrative frameworks designed to engage users and convert visitors across digital touchpoints.',
    socialMedia:
      'Strategic social campaign creation, visual content design, and audience engagement strategies tailored for multi-platform brand growth.',
    galleryLarge:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69395fba90b7bfcf99cf50c0_Project-Single-Image-Large.jpg',
    galleryGrid: [
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb028f55e0b0169b82a_Project-Gallery-Image-1.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb3fdf07c4ef098e9a0_Project-Gallery-Image-2.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb87bb02ab6390d3594_Project-Gallery-Image-3.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cbbb9efb1cee72fdf86_Project-Gallery-Image-4.jpg',
    ],
  },
  'studio-nova': {
    slug: 'studio-nova',
    name: 'Studio Nova',
    category: 'UI/UX Design',
    description:
      'At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.',
    client: 'Nova Creative Labs',
    date: '15/10/2025',
    tools: 'Figma, Illustrator',
    heroImage:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2.jpg',
    overview:
      'At Cueserve, every project is a story of creativity, collaboration, and innovation. We work closely with our clients to turn bold ideas into powerful digital experiences that inspire and perform. From concept to execution, our projects reflect our dedication to detail, strategy, and meaningful design — delivering results that make brands stand out in the digital landscape.',
    contentWriting:
      'Developing structured content architecture, clear UX copy, and engaging storytelling to guide users seamlessly through complex digital products.',
    socialMedia:
      'Dynamic social media assets, interactive stories, and video snippets built to amplify brand presence across digital channels.',
    galleryLarge:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69395fba90b7bfcf99cf50c0_Project-Single-Image-Large.jpg',
    galleryGrid: [
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb028f55e0b0169b82a_Project-Gallery-Image-1.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb3fdf07c4ef098e9a0_Project-Gallery-Image-2.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb87bb02ab6390d3594_Project-Gallery-Image-3.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cbbb9efb1cee72fdf86_Project-Gallery-Image-4.jpg',
    ],
  },
  'brand-orbit': {
    slug: 'brand-orbit',
    name: 'Brand Orbit',
    category: 'UI/UX Design',
    description:
      'At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.',
    client: 'Orbit Global Corp',
    date: '02/11/2025',
    tools: 'Figma, Webflow, AE',
    heroImage:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3.jpg',
    overview:
      'At Cueserve, every project is a story of creativity, collaboration, and innovation. We work closely with our clients to turn bold ideas into powerful digital experiences that inspire and perform. From concept to execution, our projects reflect our dedication to detail, strategy, and meaningful design — delivering results that make brands stand out in the digital landscape.',
    contentWriting:
      'High-impact copy strategy, brand positioning statements, and value proposition frameworks tailored for enterprise technology leaders.',
    socialMedia:
      'Comprehensive social campaign rollouts, brand guidelines for social platforms, and custom animated graphics.',
    galleryLarge:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69395fba90b7bfcf99cf50c0_Project-Single-Image-Large.jpg',
    galleryGrid: [
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb028f55e0b0169b82a_Project-Gallery-Image-1.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb3fdf07c4ef098e9a0_Project-Gallery-Image-2.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb87bb02ab6390d3594_Project-Gallery-Image-3.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cbbb9efb1cee72fdf86_Project-Gallery-Image-4.jpg',
    ],
  },
  'vision-core': {
    slug: 'vision-core',
    name: 'Vision Core',
    category: 'UI/UX Design',
    description:
      'At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.',
    client: 'Gondi Brand .inc',
    date: '20/9/2025',
    tools: 'Figma, PS',
    heroImage:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69221637c20028e855183972_Project-Single-Image-4.jpg',
    overview:
      'At Cueserve, every project is a story of creativity, collaboration, and innovation. We work closely with our clients to turn bold ideas into powerful digital experiences that inspire and perform. From concept to execution, our projects reflect our dedication to detail, strategy, and meaningful design — delivering results that make brands stand out in the digital landscape.',
    contentWriting:
      'Strategic brand communication, product messaging, and technical documentation designed to convey clarity and authority.',
    socialMedia:
      'Targeted social media strategies, visual branding templates, and performance-driven ad creative suites.',
    galleryLarge:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69395fba90b7bfcf99cf50c0_Project-Single-Image-Large.jpg',
    galleryGrid: [
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb028f55e0b0169b82a_Project-Gallery-Image-1.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb3fdf07c4ef098e9a0_Project-Gallery-Image-2.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb87bb02ab6390d3594_Project-Gallery-Image-3.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cbbb9efb1cee72fdf86_Project-Gallery-Image-4.jpg',
    ],
  },
  'design-flow': {
    slug: 'design-flow',
    name: 'Design Flow',
    category: 'UI/UX Design',
    description:
      'At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.',
    client: 'Design Flow Systems',
    date: '12/12/2025',
    tools: 'Figma, React, Tailwind',
    heroImage:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5.jpg',
    overview:
      'At Cueserve, every project is a story of creativity, collaboration, and innovation. We work closely with our clients to turn bold ideas into powerful digital experiences that inspire and perform. From concept to execution, our projects reflect our dedication to detail, strategy, and meaningful design — delivering results that make brands stand out in the digital landscape.',
    contentWriting:
      'Intuitive user flow documentation, in-app messaging microcopy, and onboarding guides crafted for seamless user adoption.',
    socialMedia:
      'Omnichannel social content rollout, developer-focused social posts, and visual product feature highlights.',
    galleryLarge:
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69395fba90b7bfcf99cf50c0_Project-Single-Image-Large.jpg',
    galleryGrid: [
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb028f55e0b0169b82a_Project-Gallery-Image-1.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb3fdf07c4ef098e9a0_Project-Gallery-Image-2.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cb87bb02ab6390d3594_Project-Gallery-Image-3.jpg',
      'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163cbbb9efb1cee72fdf86_Project-Gallery-Image-4.jpg',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetailClient project={project} />
    </>
  );
}
