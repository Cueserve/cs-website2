import React from 'react';
import { notFound } from 'next/navigation';
import { FadeInUp } from '@/components/FadeInUp';
import { HeadingPill } from '@/components/ui/HeadingPill';

export const servicesData: Record<
  string,
  { name: string; tag: string; description: string; features: { title: string; desc: string }[]; about: string; why: string; image: string }
> = {
  'brand-identity': {
    name: 'Brand Identity',
    tag: 'Service Details',
    description: 'At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f774ec996a8e2c70ec8_Service-Image-1.jpg',
    about: 'At its core, UI is the visual aspect of a digital product. It encompasses everything a user interacts with — from buttons and icons to the overall layout. The goal is to create aesthetically pleasing and intuitive design that guides users seamlessly through their journey.',
    why: 'In the digital landscape, UI/UX design isn\'t just about creating visually appealing interfaces; it\'s about crafting experiences that resonate with users, leaving a lasting impression. The synergy of design principles, user-centric thinking, and technological innovation paves the way for digital products that not only meet but exceed user expectations.',
    features: [
      { title: 'Research', desc: 'Dive into the minds of users. Understand their needs, preferences, and pain points through surveys, interviews, and usability testing.' },
      { title: 'Wireframing and Prototyping', desc: 'Create low-fidelity wireframes and interactive prototypes to visualize the product\'s structure and flow before diving into full-fledged design and development.' },
      { title: 'Usability Testing', desc: 'Gather feedback early and often. Conduct usability testing to identify any stumbling blocks or areas for improvement in the user journey.' },
      { title: 'Accessibility', desc: 'Design with inclusivity in mind. Ensure that your product is accessible to users with diverse abilities by following accessibility standards.' },
    ],
  },
  'ui-ux-strategy': {
    name: 'UI/UX Strategy',
    tag: 'Service Details',
    description: 'User-centric interfaces engineered for high conversion rates, intuitive user flows, and modern aesthetic elegance.',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f78b7687e089bcefb63_Service-Image-2.jpg',
    about: 'At its core, UI is the visual aspect of a digital product. It encompasses everything a user interacts with — from buttons and icons to the overall layout.',
    why: 'In the digital landscape, UI/UX design isn\'t just about creating visually appealing interfaces; it\'s about crafting experiences that resonate with users.',
    features: [
      { title: 'User Research', desc: 'Dive into the minds of users. Understand their needs.' },
      { title: 'Design System', desc: 'Create comprehensive design systems for scale.' },
    ],
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    tag: 'Service Details',
    description: 'Data-driven digital marketing strategies designed to amplify brand presence and convert visitors into loyal customers.',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f788a0e5a2c37a0f8c3_Service-Image-3.jpg',
    about: 'Marketing is the visual aspect of a digital product. It encompasses everything a user interacts with.',
    why: 'In the digital landscape, marketing isn\'t just about creating visually appealing ads.',
    features: [
      { title: 'SEO', desc: 'Search Engine Optimization for organic growth.' },
      { title: 'PPC', desc: 'Pay per click campaigns.' },
    ],
  },
  'product-design': {
    name: 'Product Design',
    tag: 'Service Details',
    description: 'Transforming complex ideas into sleek digital SaaS platforms, web software, and mobile application experiences.',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f78afdb6c6634ed7aea_Service-Image-4.jpg',
    about: 'Product design encompasses everything a user interacts with — from buttons and icons to the overall layout.',
    why: 'In the digital landscape, product design isn\'t just about creating visually appealing interfaces.',
    features: [
      { title: 'Architecture', desc: 'End-to-End Product Architecture.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full bg-white text-[var(--color-text-primary)]">
      {/* Hero Section (gradient) */}
      <FadeInUp>
        <section className="relative pt-[160px] pb-0 bg-gradient-to-b from-[#e3f0ff] to-white overflow-hidden">
          <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px] flex flex-col items-center text-center">
            
            <HeadingPill text={service.tag} />
            
            <h1 className="text-[3rem] sm:text-[4rem] font-medium text-cs-ink mb-6 leading-[1.1]">
              {service.name}
            </h1>
            
            <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] max-w-2xl mb-20 sm:mb-24 leading-relaxed">
              {service.description}
            </p>

            <div className="w-full relative h-[300px] sm:h-[500px] md:h-[700px] rounded-t-[32px] sm:rounded-t-[64px] overflow-hidden">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* Content Section */}
      <FadeInUp>
        <section className="py-16 sm:py-24">
          <div className="mx-auto w-[90%] xl:w-[82%] max-w-[1260px]">
            <div className="max-w-[900px]">
              {/* About The Service */}
            <div className="mb-16">
              <h2 className="text-[2rem] font-medium mb-6 text-cs-ink tracking-tight">About The Service.</h2>
              <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] leading-[1.6]">
                {service.about}
              </p>
            </div>

            {/* What is part of this service */}
            <div className="mb-16">
              <h2 className="text-[2rem] font-medium mb-8 text-cs-ink tracking-tight">What is the part of this services?</h2>
              <div className="flex flex-col gap-6">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row gap-2 items-start">
                    <span className="text-[17px] sm:text-[19px] font-medium text-cs-ink whitespace-nowrap pt-1">
                      {idx + 1}. {feat.title}:
                    </span>
                    <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] leading-[1.6] pt-1">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why you should take the service from us */}
            <div>
              <h2 className="text-[2rem] font-medium mb-6 text-cs-ink tracking-tight">Why you should take the service from us?</h2>
              <p className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] leading-[1.6]">
                {service.why}
              </p>
            </div>

            </div>
          </div>
        </section>
      </FadeInUp>
    </div>
  );
}