import Link from 'next/link';
import { RollingButton } from '@/components/ui/RollingButton';

export default function ProjectsSection() {
  return (
    <section className="section projects">
      <div className="container">
        <div className="home-projects-wrapper">
          <div className="section-title-wrapper flex projects-title">
            <div className="section-title-left-wrap project">
              <div className="section-subtile-wrap">
                <div data-wf--subtitle--variant="borders" className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
                  <div className="subtitle-flex-wrap">
                    <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/690f9e158664fc7bd2753513_Subtitle-Icon.svg" loading="lazy" alt="Subtitle Icon" className="subtitle-icon" />
                    <div className="subtitle-text">Our Projects</div>
                  </div>
                </div>
              </div>
              <h2 className="section-title">Our Latest <span className="section-title-mark">Projects.</span></h2>
            </div>
            <div className="section-title-right-wrap project-button-wrap">
              <RollingButton variant="alice-blue" href="/projects" text="View All Projects" />
            </div>
          </div>
          <div className="projects-wrapper">
            <div className="projects-flex-wrapper">
              <div className="single-projects-row">
                <div className="projects-row-flex">
                  <div className="single-project-collection _01 w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="single-project-wrapper">
                          <div className="project-serial">01</div>
                          <div className="single-project-contents">
                            <Link href="/projects/pixel-forge" className="project-image-wrap w-inline-block">
                              <img src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1.jpg" loading="lazy" alt="Project Image" sizes="100vw" srcSet="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1-p-500.jpg 500w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1-p-800.jpg 800w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c9d9db2b8811c1f2f51_Project-Image-1.jpg 904w" className="project-image" />
                              <div className="project-arrow-button">
                                <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg" loading="lazy" alt="Project Arrow" className="project-button-arrow" />
                              </div>
                            </Link>
                            <div className="project-content-wrap">
                              <div className="project-name-wrap">
                                <Link href="/projects/pixel-forge" className="project-name">Pixel Forge</Link>
                              </div>
                              <div className="project-category">UI/UX Design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-project-collection _02 w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="single-project-wrapper">
                          <div className="project-serial">02</div>
                          <div className="single-project-contents">
                            <Link href="/projects/studio-nova" className="project-image-wrap w-inline-block">
                              <img src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2.jpg" loading="lazy" alt="Project Image" sizes="100vw" srcSet="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2-p-500.jpg 500w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2-p-800.jpg 800w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163ca08474f6ede5554410_Project-Image-2.jpg 904w" className="project-image" />
                              <div className="project-arrow-button">
                                <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg" loading="lazy" alt="Project Arrow" className="project-button-arrow" />
                              </div>
                            </Link>
                            <div className="project-content-wrap">
                              <div className="project-name-wrap">
                                <Link href="/projects/studio-nova" className="project-name">Studio Nova</Link>
                              </div>
                              <div className="project-category">UI/UX Design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-projects-row">
                <div className="single-project-collection w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <div className="large-project-wrap">
                        <div className="project-serial">03</div>
                        <div className="single-project-contents">
                          <Link href="/projects/brand-orbit" className="project-image-wrap w-inline-block">
                            <img src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3.jpg" loading="lazy" alt="Project Image" sizes="100vw" srcSet="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3-p-500.jpg 500w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3-p-800.jpg 800w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3-p-1080.jpg 1080w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3-p-1600.jpg 1600w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3-p-2000.jpg 2000w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d638bec0e84a11ff019_Project-Image-3.jpg 2350w" className="project-image" />
                            <div className="project-arrow-button">
                              <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg" loading="lazy" alt="Project Arrow" className="project-button-arrow" />
                            </div>
                          </Link>
                          <div className="project-content-wrap">
                            <div className="project-name-wrap">
                              <Link href="/projects/brand-orbit" className="project-name">Brand Orbit</Link>
                            </div>
                            <div className="project-category">UI/UX Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-projects-row">
                <div className="projects-row-flex">
                  <div className="single-project-collection _01 w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="single-project-wrapper">
                          <div className="project-serial">04</div>
                          <div className="single-project-contents">
                            <Link href="/projects/vision-core" className="project-image-wrap w-inline-block">
                              <img src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4.jpg" loading="lazy" alt="Project Image" sizes="100vw" srcSet="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4-p-500.jpg 500w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4-p-800.jpg 800w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163d432b3ca5e849c8d6ec_Project-Image-4.jpg 904w" className="project-image" />
                              <div className="project-arrow-button">
                                <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg" loading="lazy" alt="Project Arrow" className="project-button-arrow" />
                              </div>
                            </Link>
                            <div className="project-content-wrap">
                              <div className="project-name-wrap">
                                <Link href="/projects/vision-core" className="project-name">Vision Core</Link>
                              </div>
                              <div className="project-category">UI/UX Design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single-project-collection _02 w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="single-project-wrapper">
                          <div className="project-serial">05</div>
                          <div className="single-project-contents">
                            <Link href="/projects/design-flow" className="project-image-wrap w-inline-block">
                              <img src="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5.jpg" loading="lazy" alt="Project Image" sizes="100vw" srcSet="https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5-p-500.jpg 500w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5-p-800.jpg 800w, https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163c4a9db173af5aef85ba_Project-Image-5.jpg 904w" className="project-image" />
                              <div className="project-arrow-button">
                                <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1357349460d0603446de_Project-Button-Arrow.svg" loading="lazy" alt="Project Arrow" className="project-button-arrow" />
                              </div>
                            </Link>
                            <div className="project-content-wrap">
                              <div className="project-name-wrap">
                                <Link href="/projects/design-flow" className="project-name">Design Flow</Link>
                              </div>
                              <div className="project-category">UI/UX Design</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-borders-wrapper">
              <div className="projects-border-line"></div>
              <div className="projects-border-line"></div>
              <div className="projects-border-line"></div>
              <div className="projects-border-line"></div>
            </div>
          </div>
        </div>
        <div className="section-border-top"></div>
        <div className="section-border-bottom"></div>
      </div>
    </section>
  );
}
