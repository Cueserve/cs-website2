import React from 'react';

export default function AboutHeroBanner() {
  const tickerShapesAndImages = (
    <>
      <img
        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d07a40ba87bac99f0b7_Service-Banner-Shape-1.png"
        loading="lazy"
        alt="Service Shape"
        className="service-banner-ticker-shape"
      />
      <img
        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d08c8e3fb09fce6078c_Service-Banner-Image-1.jpg"
        loading="lazy"
        alt="Service Image"
        className="service-banner-ticker-image about"
      />
      <img
        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d073128e3f19ab5a222_Service-Banner-Shape-3.png"
        loading="lazy"
        alt="Service Shape"
        className="service-banner-ticker-shape"
      />
      <img
        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d0882b2236cd282fe37_Service-Banner-Image-2.jpg"
        loading="lazy"
        alt="Service Image"
        className="service-banner-ticker-image about"
      />
      <img
        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d0788a52f5da2435d75_Service-Banner-Shape-4.png"
        loading="lazy"
        alt="Service Shape"
        className="service-banner-ticker-shape"
      />
      <img
        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d084673eda36d3786d4_Service-Banner-Image-3.jpg"
        loading="lazy"
        alt="Service Image"
        className="service-banner-ticker-image about"
      />
      <img
        src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/691a1d079061c2bb210bd10d_Service-Banner-Shape-2.png"
        loading="lazy"
        alt="Service Shape"
        className="service-banner-ticker-shape"
      />
    </>
  );

  return (
    <>
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>
      <section className="inner-banner">
        <div className="container navbar-container">
          <div className="feature-banner-content-wrap">
            <div className="feature-banner-content-flex">
              <div className="feature-banner-content-left">
                <h1 className="inner-banner-title mb-0">
                  Crafting The Future Of Digital{' '}
                  <span className="inner-banner-title-mark">Brands.</span>
                </h1>
              </div>
              <div className="feature-banner-content-right">
                <p className="inner-banner-details">
                  At Arooth, we believe that great design goes beyond visuals — it’s about creating meaningful digital experiences that connect people and brands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-banner-ticker-wrap">
          <div className="service-banner-ticker-flex">
            <div className="service-banner-ticker-item">
              {tickerShapesAndImages}
            </div>
            <div className="service-banner-ticker-item">
              {tickerShapesAndImages}
            </div>
            <div className="service-banner-ticker-item">
              {tickerShapesAndImages}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
