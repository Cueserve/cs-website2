import React from 'react';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'Services - Cueserve',
  description: 'Explore the full spectrum of creative and digital services offered by Cueserve.',
};

const serviceItems = [
  {
    title: 'Brand Identity',
    slug: 'brand-identity',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691641f7b629ac13e415de88_Service-Icon-1.svg',
    description: 'We create consistent brand systems that define your voice, visuals, and positioning across all touchpoints.',
  },
  {
    title: 'UI/UX Strategy',
    slug: 'ui-ux-strategy',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/691641a937391a2dcba6a9c3_Service-Icon-2.svg',
    description: 'We design intuitive user experiences that improve usability, engagement, and conversion across digital products.',
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69164127ea8f130e2697098b_Service-Icon-3.svg',
    description: 'We grow brands through data-driven digital strategies focused on visibility, engagement, and measurable results.',
  },
  {
    title: 'Product Design',
    slug: 'product-design',
    icon: 'https://cdn.prod.website-files.com/6916390ccd119327e597f20f/69163fa6ee54de7d1f0fe267_Service-Icon-4.svg',
    description: 'We design scalable digital products that balance usability, aesthetics, and business goals.',
  },
];

export default function ServicesPage() {
  const renderTickerGroup = (keyPrefix: string) => (
    <div key={keyPrefix} className="service-banner-ticker-item">
      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d07a40ba87bac99f0b7_Service-Banner-Shape-1.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d08c8e3fb09fce6078c_Service-Banner-Image-1.jpg" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d073128e3f19ab5a222_Service-Banner-Shape-3.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d0882b2236cd282fe37_Service-Banner-Image-2.jpg" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d0788a52f5da2435d75_Service-Banner-Shape-4.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d084673eda36d3786d4_Service-Banner-Image-3.jpg" loading="lazy" alt="Service Image" className="service-banner-ticker-image" />
      <img src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d079061c2bb210bd10d_Service-Banner-Shape-2.png" loading="lazy" alt="Service Shape" className="service-banner-ticker-shape" />
    </div>
  );

  return (
    <>
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>

      {/* Hero Banner Section */}
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
                  <div className="subtitle-text">Our Services</div>
                </div>
              </div>
            </div>
            <h1 className="inner-banner-title">
              Our Creative <span className="inner-banner-title-mark">Solutions.</span>
            </h1>
            <p className="inner-banner-details">
              At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
            </p>
          </div>
        </div>

        {/* Animated Marquee Ticker */}
        <div className="service-banner-ticker-wrap">
          <div className="service-banner-ticker-flex">
            {renderTickerGroup('group-1')}
            {renderTickerGroup('group-2')}
            {renderTickerGroup('group-3')}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section service">
        <div className="container">
          <div className="services-title-wrap">
            <h2 className="services-title">
              “ We prioritize trust and believe in honesty, transparency, and reliability. We consistently deliver and maintain open communication to build trust with our clients. ”
            </h2>
          </div>

          <div className="all-services-wrap">
            <div className="services-grid-wrap">
              {serviceItems.map((item, index) => (
                <div key={index} className="single-service-wrap">
                  <div className="service-contents">
                    <div className="single-service-icon-wrap">
                      <img
                        src={item.icon}
                        loading="lazy"
                        alt={item.title}
                        className="single-service-icon"
                      />
                    </div>
                    <div className="service-details-wrapper">
                      <div className="single-service-name-wrap">
                        <Link href={`/services/${item.slug}`} className="single-service-name">
                          {item.title}
                        </Link>
                      </div>
                      <p className="single-service-details">{item.description}</p>
                    </div>
                    <div className="service-more-buttons-wrap">
                      <div className="service-more-button">
                        <Link
                          data-wf--more-button--variant="base"
                          href={`/services/${item.slug}`}
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
                  <div className="single-service-hover-bg"></div>
                </div>
              ))}
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
