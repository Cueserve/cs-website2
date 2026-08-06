'use client';

import Link from 'next/link';
import { RollingButton } from '@/components/ui/RollingButton';

interface TechItem {
  name: string;
  icon: string;
}

const techItems: TechItem[] = [
  { name: 'Microsoft .NET', icon: '/Sliding_logos/dotnet.png' },
  { name: 'Angular', icon: '/Sliding_logos/angular.png' },
  { name: 'React', icon: '/Sliding_logos/react.png' },
  { name: 'Next.js', icon: '/Sliding_logos/nextjs.png' },
  { name: 'HTML5', icon: '/Sliding_logos/html.png' },
  { name: 'CSS3', icon: '/Sliding_logos/css.png' },
  { name: 'JavaScript', icon: '/Sliding_logos/javascript.png' },
  { name: 'Android Studio', icon: '/Sliding_logos/android-studio.png' },
];

export default function HeroBanner() {
  const renderLogoGroup = (keyPrefix: string) => (
    <>
      {techItems.map((item, index) => (
        <div key={`${keyPrefix}-${index}`} className="tech-logo-item" title={item.name}>
          <img
            src={item.icon}
            alt={`${item.name} logo`}
            className="tech-logo-img"
            loading="eager"
          />
        </div>
      ))}
    </>
  );

  return (
    <section className="banner-section">
      <div className="banner-vh-wrap">
        <div className="banner-sticky-wrap">
          <div className="banner-wrapper">
            <div className="banner-letters-wrap">
              <div className="banner-letters-row">
                <div className="banner-letters-flex">
                  <div className="single-banner-letter _01">
                    <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a0dce81b6c2e6d25a7_V.svg" loading="lazy" alt="Banner Letter" className="banner-letter _01" />
                  </div>
                  <div className="single-banner-letter _02">
                    <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a090ec532a71755ced_I-1.svg" loading="lazy" alt="Banner Letter" className="banner-letter _02" />
                  </div>
                  <div className="single-banner-letter _03">
                    <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a01adbcc362b61bb48_S.svg" loading="lazy" alt="Banner Letter" className="banner-letter _03" />
                  </div>
                  <div className="single-banner-letter _04">
                    <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a090ec532a71755ced_I-1.svg" loading="lazy" alt="Banner Letter" className="banner-letter _04" />
                  </div>

                  <div className="after-banner-wrapper">
                    <div className="after-banner-inner">
                      <div className="after-banner-wrap">
                        <div className="container navbar-container">
                          <div className="after-banner-content-wrap">
                            <h2 className="after-banner-title">Crafting Modern <span className="after-banner-title-line">&nbsp;</span><span className="after-banner-title-mark">Vision For the</span> Ambitious Brands</h2>
                            <p className="after-banner-details">We blend creativity with strategy to build digital experiences that move brands forward. From crafting standout websites.</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                              <Link
                                data-wf--primary-button--variant="blue"
                                href="/contact-us"
                                className="primary-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block"
                              >
                                <div className="primary-button-flex">
                                  <div className="primary-button-text-wrap">
                                    <div className="primary-button-text w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">Book a Free Call</div>
                                    <div className="primary-button-text-hover w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">Book a Free Call</div>
                                  </div>
                                  <div className="primary-button-arrow-wrapper w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">
                                    <div className="primary-button-arrow-wrap">
                                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
                                    </div>
                                  </div>
                                </div>
                                <div className="primary-button-hover-bg"></div>
                              </Link>

                              <Link data-wf--primary-button--variant="white" href="/contact-us" className="primary-button w-inline-block">
                                <div className="primary-button-flex">
                                  <div className="primary-button-text-wrap">
                                    <div className="primary-button-text">Get Started Now</div>
                                    <div className="primary-button-text-hover">Get Started Now</div>
                                  </div>
                                  <div className="primary-button-arrow-wrapper">
                                    <div className="primary-button-arrow-wrap">
                                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                                      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
                                    </div>
                                  </div>
                                </div>
                                <div className="primary-button-hover-bg"></div>
                              </Link>
                            </div>
                          </div>

                          <div className="after-banner-ticker-wrap">
                            <div className="after-banner-ticker-flex">
                              {renderLogoGroup('group-1')}
                              {renderLogoGroup('group-2')}
                              {renderLogoGroup('group-3')}
                            </div>
                          </div>
                        </div>

                        <div className="banner-bg-wrap">
                          <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image.jpg" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-500.jpg 500w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-800.jpg 800w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-1080.jpg 1080w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-1600.jpg 1600w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-2000.jpg 2000w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-2600.jpg 2600w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image-p-3200.jpg 3200w, https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69393d89707a466887665505_Banner-Image.jpg 3840w" alt="Banner Image" className="banner-bg-image" />
                          <div className="banner-bg-shape"></div>
                        </div>
                      </div>
                    </div>
                    <div className="banner-letter-o"></div>
                  </div>

                  <div className="single-banner-letter _05">
                    <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/692090a05c4b8bbb901ff9ce_N.svg" loading="lazy" alt="Banner Letter" className="banner-letter _05" />
                  </div>
                </div>
              </div>
            </div>

            <div className="container banner-container">
              <div className="banner-content-wrapper">
                <div className="banner-content-bottom">
                  <div className="banner-details-wrap">
                    <p className="banner-details">At Cueserve, we blend creativity with strategy to build digital experiences that move brands forward. From crafting standout websites.</p>
                  </div>
                  <div className="banner-button-wrap" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {/* Book a Free Call Button (Left) */}
                    <Link
                      data-wf--primary-button--variant="blue"
                      href="/contact-us"
                      className="primary-button w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66 w-inline-block"
                    >
                      <div className="primary-button-flex">
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">Book a Free Call</div>
                          <div className="primary-button-text-hover w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">Book a Free Call</div>
                        </div>
                        <div className="primary-button-arrow-wrapper w-variant-4c2497dc-c520-3049-f2ee-2eb4bb579d66">
                          <div className="primary-button-arrow-wrap">
                            <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                            <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
                          </div>
                        </div>
                      </div>
                      <div className="primary-button-hover-bg"></div>
                    </Link>

                    {/* Get Started Now Button (Right) */}
                    <Link data-wf--primary-button--variant="alice-blue" href="/contact-us" className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block">
                      <div className="primary-button-flex">
                        <div className="primary-button-text-wrap">
                          <div className="primary-button-text">Get Started Now</div>
                          <div className="primary-button-text-hover">Get Started Now</div>
                        </div>
                        <div className="primary-button-arrow-wrapper">
                          <div className="primary-button-arrow-wrap">
                            <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow" />
                            <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg" loading="lazy" alt="Arrow" className="primary-button-arrow-hover" />
                          </div>
                        </div>
                      </div>
                      <div className="primary-button-hover-bg"></div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="banner-borders-wrapper">
                <div className="banner-borders-flex">
                  <div className="banner-border-line"></div>
                  <div className="banner-border-line"></div>
                  <div className="banner-border-line"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
