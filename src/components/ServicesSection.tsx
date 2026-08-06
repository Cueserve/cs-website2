'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ServiceData {
  id: string;
  serial: string;
  name: string;
  slug: string;
  icon: string;
  image: string;
  tags: string[];
}

const servicesList: ServiceData[] = [
  {
    id: 'brand-identity',
    serial: '01',
    name: 'Brand Identity',
    slug: 'brand-identity',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691641f7b629ac13e415de88_Service-Icon-1.svg',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f774ec996a8e2c70ec8_Service-Image-1.jpg',
    tags: ['Logo Design', 'Guidelines', 'Color Strategy', 'Art Direction', 'Brand Strategy'],
  },
  {
    id: 'ui-ux-strategy',
    serial: '02',
    name: 'UI/UX Strategy',
    slug: 'ui-ux-strategy',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691641a937391a2dcba6a9c3_Service-Icon-2.svg',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f78b7687e089bcefb63_Service-Image-2.jpg',
    tags: ['User Research', 'Wireframing', 'Prototyping', 'UX Audit', 'Interface Design'],
  },
  {
    id: 'digital-marketing',
    serial: '03',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69164127ea8f130e2697098b_Service-Icon-3.svg',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f788a0e5a2c37a0f8c3_Service-Image-3.jpg',
    tags: ['SEO Optimization', 'Content Strategy', 'Social Campaigns', 'PPC Advertising', 'Growth Marketing'],
  },
  {
    id: 'product-design',
    serial: '04',
    name: 'Product Design',
    slug: 'product-design',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163fa6ee54de7d1f0fe267_Service-Icon-4.svg',
    image: 'https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691b6f78afdb6c6634ed7aea_Service-Image-4.jpg',
    tags: ['Design Systems', 'Mobile Apps', 'SaaS Products', 'Design Sprints', 'Usability Testing'],
  },
];

export default function ServicesSection() {
  const [activeTabId, setActiveTabId] = useState<string>('brand-identity');

  const activeService = servicesList.find((s) => s.id === activeTabId) || servicesList[0];

  return (
    <section className="section services">
      <div className="container">
        <div className="section-title-wrapper margin-bottom">
          <div className="section-subtile-wrap">
            <div
              data-wf--subtitle--variant="borders"
              className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450"
            >
              <div className="subtitle-flex-wrap">
                <img
                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                  loading="lazy"
                  alt="Subtitle Icon"
                  className="subtitle-icon"
                />
                <div className="subtitle-text">Our Services</div>
              </div>
            </div>
          </div>
          <h2 className="section-title">
            Creativity Meets <span className="section-title-mark">Functionality.</span>
          </h2>
        </div>
        <div className="services-wrapper">
          <div className="service-tabs-wrapper">
            {/* Left Column: Active Card Overview */}
            <div className="service-tabs-grid-left">
              <div className="single-service-card-wrap">
                <div className="service-card-content">
                  <div className="service-serial-wrap">
                    <div className="serial-numbers-wrap">
                      <div className="service-serial">{activeService.serial}</div>
                    </div>
                  </div>
                  <div className="service-icons-wrapper">
                    <div className="single-service-icon-wrapper">
                      <div className="service-icon-wrap">
                        <img
                          loading="lazy"
                          src={activeService.icon}
                          alt={activeService.name}
                          className="service-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-card-content-bottom">
                    <div className="service-buttons-wrapper">
                      <div className="single-service-button-wrap">
                        <div className="service-button-wrap">
                          <Link
                            data-wf--more-button--variant="base"
                            href={`/services/${activeService.slug}`}
                            className="more-button w-inline-block"
                          >
                            <div className="more-button-flex">
                              <div className="more-button-text">View Details</div>
                              <div className="more-button-arrow-wrap">
                                <img
                                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6916469f7b4127365127f631_More-Button-Arrow.svg"
                                  loading="lazy"
                                  alt=""
                                  className="more-button-arrow"
                                />
                                <img
                                  src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6916469f7b4127365127f631_More-Button-Arrow.svg"
                                  loading="lazy"
                                  alt=""
                                  className="more-button-arrow-hover"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tabs List */}
            <div className="service-tabs-grid-right">
              <div className="w-tabs">
                <div className="service-tab-links-wrap w-tab-menu">
                  {servicesList.map((service) => {
                    const isActive = service.id === activeTabId;
                    return (
                      <div
                        key={service.id}
                        className={`service-tab-link w-inline-block w-tab-link ${isActive ? 'w--current active' : ''}`}
                        onClick={() => setActiveTabId(service.id)}
                        onMouseEnter={() => setActiveTabId(service.id)}
                      >
                        <div className="service-tab-link-content">
                          <div className="service-tab-link-content-flex">
                            <div className="service-tab-link-flex-left">
                              <div className="service-name-wrap">
                                <div className="service-name-dot-wrap">
                                  <div className="service-name-dot"></div>
                                </div>
                                <h3 className="service-name">{service.name}</h3>
                              </div>

                              {isActive && (
                                <div className="service-tags-wrapper">
                                  <div className="service-tags-flex">
                                    {service.tags.map((tag, idx) => (
                                      <div key={idx} className="single-service-tags">
                                        <div className="service-tags-text">{tag}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {isActive && (
                              <div className="service-tab-link-image-wrap">
                                <img
                                  loading="lazy"
                                  src={service.image}
                                  alt={service.name}
                                  className="service-tab-link-image"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="service-tab-link-divider"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
