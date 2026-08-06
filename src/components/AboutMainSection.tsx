import React from 'react';
import Link from 'next/link';

export default function AboutMainSection() {
  return (
    <section className="section about-us">
      <div className="container">
        <div className="about-us-title-wrapper mb-0">
          <div className="about-us-title-flex">
            <div className="about-flex-left">
              <div className="about-us-stat-wrappper">
                <div className="about-us-subtitle-wrap">
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
                      <div className="subtitle-text">About Us</div>
                    </div>
                  </div>
                </div>
                <div className="about-award-count-wrap">
                  <div className="about-award-count-number">40+</div>
                  <div className="award-count-arrow-wrap one">
                    <div className="award-count-arrow-text">Worldwide</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f33702cc97b2f28589225_Award-Arrow-One.png"
                      alt="Award Arrow"
                      className="award-count-arrow-icon one"
                    />
                  </div>
                  <div className="award-count-arrow-wrap two">
                    <div className="award-count-arrow-text two">Awards Won</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691f33700369e38aee50c1d5_Award-Arrow-Two.png"
                      alt="Award Arrow"
                      className="award-count-arrow-icon two"
                    />
                  </div>
                </div>
              </div>
              <div className="mission-vision-wrap">
                <div className="our-mission-wrap">
                  <h2 className="our-mission-title">Our Mission</h2>
                  <p className="our-mission-details">
                    We reimagine your brand&apos;s digital presence and change how individuals interact with your brand.
                  </p>
                </div>
                <div className="our-mission-wrap">
                  <h2 className="our-mission-title">Our Vision</h2>
                  <p className="our-mission-details">
                    Our vision is to create meaningful digital experiences that combine creativity, clarity, and purpose.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-title-flex-right">
              <div className="about-us-title-border"></div>
              <div className="about-right-contents">
                <div className="about-us-title-wrap">
                  <h3 className="about-us-title">
                    Our team of designers, developers, and thinkers driven by{' '}
                    <span className="about-us-title-mark">
                      one purpose — to craft digital experiences.
                    </span>
                  </h3>
                  <p className="about-section-details">
                    We combine strategy, creativity, and technology to help brands grow in the modern digital landscape. Every project we take on is fueled by curiosity, guided by precision.
                  </p>
                  <Link
                    data-wf--primary-button--variant="alice-blue"
                    href="/about-us"
                    className="primary-button w-variant-3b35c6e6-bf39-22a4-81e5-2d58550c88a7 w-inline-block"
                  >
                    <div className="primary-button-flex">
                      <div className="primary-button-text-wrap">
                        <div className="primary-button-text">More About Us</div>
                        <div className="primary-button-text-hover">More About Us</div>
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
                <div className="about-us-image-wrap">
                  <img
                    src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6942f0e8d0fe21fb280fe263_About-Us-Image.jpg"
                    loading="lazy"
                    alt="About Image"
                    className="about-us-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
