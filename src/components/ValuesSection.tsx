import React from 'react';
import Link from 'next/link';

export default function ValuesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="mission-vh-wrap">
          <div className="mission-sticky-wrap">
            <div className="section-title-wrapper flex mission">
              <div className="section-title-left-wrap mission">
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
                      <div className="subtitle-text">Our Values</div>
                    </div>
                  </div>
                </div>
                <h2 className="section-title">
                  Values Shapes <span className="section-title-mark">Everything.</span>
                </h2>
              </div>
              <div className="section-title-right-wrap mission-button-wrap">
                <Link
                  data-wf--primary-button--variant="alice-blue"
                  href="/projects"
                  className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block"
                >
                  <div className="primary-button-flex">
                    <div className="primary-button-text-wrap">
                      <div className="primary-button-text">View All Projects</div>
                      <div className="primary-button-text-hover">View All Projects</div>
                    </div>
                    <div className="primary-button-arrow-wrapper">
                      <div className="primary-button-arrow-wrap">
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg"
                          loading="lazy"
                          alt="Arrow"
                          className="primary-button-arrow"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/69108960e3284bb1a2e481a4_Button-Arrow.svg"
                          loading="lazy"
                          alt="Arrow"
                          className="primary-button-arrow-hover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="primary-button-hover-bg"></div>
                </Link>
              </div>
            </div>
            <div className="mission-flex-wrap">
              {/* Card 01 - Mission */}
              <div className="single-mission-wrapper _01">
                <div className="mission-counter-wrap _01">
                  <div className="mission-name-wrap">
                    <div className="mission-name _01">Mission</div>
                    <div className="mission-name-hover-bg _01"></div>
                  </div>
                  <div className="mission-border"></div>
                </div>
                <div className="mission-card-wrap">
                  <div className="mission-card-content-wrap">
                    <div className="mission-icon-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb589d47768656dc4903_Mission-Icon-1.svg"
                        loading="lazy"
                        alt="Mission Icon"
                        className="mission-icon"
                      />
                    </div>
                    <div className="mission-contents-flex">
                      <div className="mission-details-wrap">
                        <h3 className="mission-title">Focused On Impact</h3>
                        <p className="mission-details">
                          Our mission is creating experience that inspire, deliver results.
                        </p>
                      </div>
                      <div className="mission-image-wrap _01">
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
                          loading="lazy"
                          alt="Mission Image"
                          className="mission-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 02 - Vision */}
              <div className="single-mission-wrapper _02">
                <div className="mission-counter-wrap _02">
                  <div className="mission-name-wrap">
                    <div className="mission-name _02">Vision</div>
                    <div className="mission-name-hover-bg _02"></div>
                  </div>
                  <div className="mission-border"></div>
                </div>
                <div className="mission-card-wrap">
                  <div className="mission-card-content-wrap">
                    <div className="mission-icon-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58248258afdc90491e_Mission-Icon-2.svg"
                        loading="lazy"
                        alt="Mission Icon"
                        className="mission-icon"
                      />
                    </div>
                    <div className="mission-contents-flex">
                      <div className="mission-details-wrap">
                        <h3 className="mission-title">Digital Innovation</h3>
                        <p className="mission-details">
                          Our vision is to shape the future of digital innovation.
                        </p>
                      </div>
                      <div className="mission-image-wrap _02">
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
                          loading="lazy"
                          alt="Mission Image"
                          className="mission-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 03 - Goals */}
              <div className="single-mission-wrapper _03">
                <div className="mission-counter-wrap _03">
                  <div className="mission-name-wrap">
                    <div className="mission-name _03">Goals</div>
                    <div className="mission-name-hover-bg _03"></div>
                  </div>
                  <div className="mission-border"></div>
                </div>
                <div className="mission-card-wrap">
                  <div className="mission-card-content-wrap">
                    <div className="mission-icon-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cb58c89775bca22ccba5_Mission-Icon-3.svg"
                        loading="lazy"
                        alt="Mission Icon"
                        className="mission-icon"
                      />
                    </div>
                    <div className="mission-contents-flex">
                      <div className="mission-details-wrap">
                        <h3 className="mission-title">Inspire Growth</h3>
                        <p className="mission-details">
                          Our goal is to continuously push boundaries &amp; help business.
                        </p>
                      </div>
                      <div className="mission-image-wrap _03">
                        <img
                          src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6921cc716d7304d3ca57aea9_Mission-Image-1.jpg"
                          loading="lazy"
                          alt="Mission Image"
                          className="mission-image _03"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
