'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesGridSection() {
  const services = [
    {
      id: 'brand-identity',
      title: 'Brand Identity',
      description: 'We create consistent brand systems that define your voice, visuals, and positioning across all touchpoints.',
      icon: (
        <img src="/assets/images/services/Service-Icon-1.svg" alt="Brand Identity" className="w-28 h-28 object-contain" />
      )
    },
    {
      id: 'ui-ux-strategy',
      title: 'UI/UX Strategy',
      description: 'We design intuitive user experiences that improve usability, engagement, and conversion across digital products.',
      icon: (
        <img src="/assets/images/services/Service-Icon-2.svg" alt="UI/UX Strategy" className="w-28 h-28 object-contain" />
      )
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'We grow brands through data-driven digital strategies focused on visibility, engagement, and measurable results.',
      icon: (
        <img src="/assets/images/services/Service-Icon-3.svg" alt="Digital Marketing" className="w-28 h-28 object-contain" />
      )
    },
    {
      id: 'product-design',
      title: 'Product Design',
      description: 'We design scalable digital products that balance usability, aesthetics, and business goals.',
      icon: (
        <img src="/assets/images/services/Service-Icon-4.svg" alt="Product Design" className="w-28 h-28 object-contain" />
      )
    }
  ];

  return (
    <section className="relative py-24 bg-white text-cs-ink z-10 w-full flex flex-col items-center">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
        {/* Quote / Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center md:text-left">
          <h2 className="text-quote text-cs-ink text-center md:text-left">
            “ We prioritize trust and believe in honesty, transparency, and reliability. We consistently deliver and maintain open communication to build trust with our clients. ”
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col justify-between items-center text-center bg-[#f4f8ff] rounded-[32px] p-10 overflow-hidden min-h-[340px]"
            >
              {/* Bottom to Top Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0042c5] to-[#256dff] translate-y-[105%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

              <div className="relative z-10 flex flex-col gap-6 items-center">
                <div className="flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <h3 className="text-2xl font-display font-medium text-cs-ink group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-body-base text-neutral-500 group-hover:text-white/80 transition-colors duration-500 max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-10 flex justify-center">
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-brand-default group-hover:text-white font-medium transition-colors duration-500 group/link"
                >
                  View Details
                  <div className="w-8 h-8 rounded-full bg-brand-default group-hover:bg-white flex items-center justify-center text-white group-hover:text-[#256dff] transition-colors duration-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
