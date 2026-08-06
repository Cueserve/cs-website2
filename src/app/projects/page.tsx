import React from 'react';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'Works & Projects - Cueserve',
  description: 'Explore our latest design, development, and branding projects.',
};

export default function ProjectsPage() {
  return (
    <>
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>

      {/* Inner Hero Banner */}
      <section className="inner-banner">
        <div className="container">
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
                  <div className="subtitle-text">Our Works</div>
                </div>
              </div>
            </div>
            <h1 className="inner-banner-title">
              Our Latest <span className="inner-banner-title-mark">Projects.</span>
            </h1>
            <p className="inner-banner-details">
              At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
            </p>
          </div>

          {/* All Projects Container */}
          <div className="all-projects-wrap">
            {/* Row 1: 2 Columns */}
            <div className="project-collection-row">
              <div className="projects-grid-wrap">
                {/* Project 1: Pixel Forge */}
                <div className="single-project-wrap">
                  <Link href="/projects/pixel-forge" className="single-project-image-wrap w-inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1.jpg"
                      loading="lazy"
                      alt="Pixel Forge"
                      className="project-image single-project"
                    />
                    <div className="project-arrow-button single-project">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg"
                        loading="lazy"
                        alt="Project Arrow"
                        className="project-button-arrow single-project"
                      />
                    </div>
                  </Link>
                  <div className="single-project-content-wrap">
                    <div className="single-project-contents-flex">
                      <div className="project-name-wrap single-project">
                        <Link href="/projects/pixel-forge" className="single-project-name">
                          Pixel Forge
                        </Link>
                      </div>
                      <div className="single-project-category-wrap">
                        <div className="single-project-cat-dot"></div>
                        <div className="single-project-category">UI/UX Design</div>
                      </div>
                    </div>
                    <div className="single-project-hover-bg"></div>
                  </div>
                </div>

                {/* Project 2: Studio Nova */}
                <div className="single-project-wrap">
                  <Link href="/projects/studio-nova" className="single-project-image-wrap w-inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2.jpg"
                      loading="lazy"
                      alt="Studio Nova"
                      className="project-image single-project"
                    />
                    <div className="project-arrow-button single-project">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg"
                        loading="lazy"
                        alt="Project Arrow"
                        className="project-button-arrow single-project"
                      />
                    </div>
                  </Link>
                  <div className="single-project-content-wrap">
                    <div className="single-project-contents-flex">
                      <div className="project-name-wrap single-project">
                        <Link href="/projects/studio-nova" className="single-project-name">
                          Studio Nova
                        </Link>
                      </div>
                      <div className="single-project-category-wrap">
                        <div className="single-project-cat-dot"></div>
                        <div className="single-project-category">UI/UX Design</div>
                      </div>
                    </div>
                    <div className="single-project-hover-bg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Full Width Single Project */}
            <div className="project-collection-row" style={{ marginTop: '30px', marginBottom: '30px' }}>
              <div className="single-project-wrap full-width-project">
                <Link href="/projects/brand-orbit" className="single-project-image-wrap w-inline-block">
                  <img
                    src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3.jpg"
                    loading="lazy"
                    alt="Brand Orbit"
                    className="project-image single-project"
                  />
                  <div className="project-arrow-button single-project">
                    <img
                      src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg"
                      loading="lazy"
                      alt="Project Arrow"
                      className="project-button-arrow single-project"
                    />
                  </div>
                </Link>
                <div className="single-project-content-wrap">
                  <div className="single-project-contents-flex">
                    <div className="project-name-wrap single-project">
                      <Link href="/projects/brand-orbit" className="single-project-name">
                        Brand Orbit
                      </Link>
                    </div>
                    <div className="single-project-category-wrap">
                      <div className="single-project-cat-dot"></div>
                      <div className="single-project-category">UI/UX Design</div>
                    </div>
                  </div>
                  <div className="single-project-hover-bg"></div>
                </div>
              </div>
            </div>

            {/* Row 3: 2 Columns */}
            <div className="project-collection-row">
              <div className="projects-grid-wrap">
                {/* Project 4: Vision Core */}
                <div className="single-project-wrap">
                  <Link href="/projects/vision-core" className="single-project-image-wrap w-inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4.jpg"
                      loading="lazy"
                      alt="Vision Core"
                      className="project-image single-project"
                    />
                    <div className="project-arrow-button single-project">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg"
                        loading="lazy"
                        alt="Project Arrow"
                        className="project-button-arrow single-project"
                      />
                    </div>
                  </Link>
                  <div className="single-project-content-wrap">
                    <div className="single-project-contents-flex">
                      <div className="project-name-wrap single-project">
                        <Link href="/projects/vision-core" className="single-project-name">
                          Vision Core
                        </Link>
                      </div>
                      <div className="single-project-category-wrap">
                        <div className="single-project-cat-dot"></div>
                        <div className="single-project-category">UI/UX Design</div>
                      </div>
                    </div>
                    <div className="single-project-hover-bg"></div>
                  </div>
                </div>

                {/* Project 5: Design Flow */}
                <div className="single-project-wrap">
                  <Link href="/projects/design-flow" className="single-project-image-wrap w-inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5.jpg"
                      loading="lazy"
                      alt="Design Flow"
                      className="project-image single-project"
                    />
                    <div className="project-arrow-button single-project">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg"
                        loading="lazy"
                        alt="Project Arrow"
                        className="project-button-arrow single-project"
                      />
                    </div>
                  </Link>
                  <div className="single-project-content-wrap">
                    <div className="single-project-contents-flex">
                      <div className="project-name-wrap single-project">
                        <Link href="/projects/design-flow" className="single-project-name">
                          Design Flow
                        </Link>
                      </div>
                      <div className="single-project-category-wrap">
                        <div className="single-project-cat-dot"></div>
                        <div className="single-project-category">UI/UX Design</div>
                      </div>
                    </div>
                    <div className="single-project-hover-bg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </>
  );
}
