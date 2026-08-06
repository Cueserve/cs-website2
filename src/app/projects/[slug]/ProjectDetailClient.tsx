'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'social'>('overview');

  return (
    <>
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>

      <section className="inner-banner contact-us">
        <div className="container">
          {/* Header Banner Content */}
          <div className="inner-banner-content-wrap margin-bottom">
            <div className="inner-banner-subtitle-wrap">
              <div data-wf--subtitle--variant="base" className="subtitle-wrap">
                <div className="subtitle-flex-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg"
                    loading="lazy"
                    alt="Subtitle Icon"
                    className="subtitle-icon"
                  />
                  <div className="subtitle-text">Project Details</div>
                </div>
              </div>
            </div>
            <h1 className="inner-banner-title">{project.name}</h1>
            <p className="inner-banner-details">{project.description}</p>
          </div>

          {/* Featured Hero Single Image */}
          <div className="project-single-image-wrap">
            <img
              src={project.heroImage}
              loading="lazy"
              alt={project.name}
              className="project-single-image"
            />
          </div>

          {/* Project Info Bar (Client, Date, Tools) */}
          <div className="project-info-wrapper">
            <div className="project-info-content">
              <div className="single-project-info-wrap">
                <div className="project-info-label">Client:</div>
                <div className="project-info-text">{project.client}</div>
              </div>
              <div className="single-project-info-wrap">
                <div className="project-info-label">Date:</div>
                <div className="project-info-text">{project.date}</div>
              </div>
              <div className="single-project-info-wrap">
                <div className="project-info-label">Tools:</div>
                <div className="project-info-text">{project.tools}</div>
              </div>
            </div>
          </div>

          {/* Project Details Tabs */}
          <div className="project-single-details-wrapper" style={{ marginBottom: '4rem' }}>
            <div className="project-details-tab w-tabs">
              {/* Left Column: Tab Content */}
              <div className="project-details-tab-content w-tab-content">
                {activeTab === 'overview' && (
                  <div className="project-overview-details-wrap">
                    <p className="project-overview-details">{project.overview}</p>
                  </div>
                )}
                {activeTab === 'content' && (
                  <div className="project-overview-details-wrap">
                    <p className="project-overview-details">{project.contentWriting}</p>
                  </div>
                )}
                {activeTab === 'social' && (
                  <div className="project-overview-details-wrap">
                    <p className="project-overview-details">{project.socialMedia}</p>
                  </div>
                )}
              </div>

              {/* Right Column: Vertical Tabs Menu */}
              <div className="project-details-tabs-menu w-tab-menu">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`project-details-tabs-link w-inline-block w-tab-link ${
                    activeTab === 'overview' ? 'w--current' : ''
                  }`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div className="project-details-tabs-link-text">Overview</div>
                  <div className="project-tabs-link-dot"></div>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('content')}
                  className={`project-details-tabs-link w-inline-block w-tab-link ${
                    activeTab === 'content' ? 'w--current' : ''
                  }`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div className="project-details-tabs-link-text">Content Writing</div>
                  <div className="project-tabs-link-dot"></div>
                  <div className="project-tabs-link-border"></div>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('social')}
                  className={`project-details-tabs-link w-inline-block w-tab-link ${
                    activeTab === 'social' ? 'w--current' : ''
                  }`}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div className="project-details-tabs-link-text">Social Media</div>
                  <div className="project-tabs-link-dot"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Project Gallery Showcase Section */}
          <div className="project-gallery-wrapper">
            <div className="gallery-single-image-wrap">
              <img
                src={project.galleryLarge}
                loading="lazy"
                alt="Project Gallery Showcase"
                className="gallery-single-image"
              />
            </div>
            <div className="project-gallery-collection w-dyn-list">
              <div role="list" className="project-gallery-grid w-dyn-items">
                {project.galleryGrid.map((imgUrl, idx) => (
                  <div key={idx} role="listitem" className="w-dyn-item w-dyn-repeater-item">
                    <div className="project-gallery-image-wrap">
                      <img
                        src={imgUrl}
                        loading="lazy"
                        alt={`Gallery ${idx + 1}`}
                        className="project-gallery-image"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Back Button */}
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link
              href="/projects"
              className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block"
            >
              <div className="primary-button-flex">
                <div className="primary-button-text-wrap">
                  <div className="primary-button-text">← View All Projects</div>
                  <div className="primary-button-text-hover">← View All Projects</div>
                </div>
              </div>
              <div className="primary-button-hover-bg"></div>
            </Link>
          </div>
        </div>

        <div className="section-divider" style={{ marginTop: '5rem' }}></div>
      </section>
    </>
  );
}
