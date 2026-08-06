'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    Development: true,
    'UI/UX Design': false,
    Branding: false,
    Marketing: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const toggleService = (serviceKey: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceKey]: !prev[serviceKey],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const servicesList = ['Development', 'UI/UX Design', 'Branding', 'Marketing'];

  return (
    <>
      <div className="inner-page-top-bg">
        <div className="inner-page-bg-overlay"></div>
      </div>

      <section className="inner-banner contact-us">
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
                  <div className="subtitle-text">Get In Touch</div>
                </div>
              </div>
            </div>
            <h1 className="inner-banner-title">
              Contact <span className="inner-banner-title-mark">Us.</span>
            </h1>
            <p className="inner-banner-details">
              At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
            </p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-flex-wrap">
              {/* Left Column */}
              <div className="contact-flex-left-wrap">
                <div className="contact-contents-wrap">
                  <Link href="/" className="contact-logo-wrap w-inline-block">
                    <img
                      loading="lazy"
                      src="/cueserve-logo.png"
                      alt="Cueserve Logo"
                      className="contact-logo"
                      style={{ maxHeight: '36px', width: 'auto' }}
                    />
                  </Link>
                  <h2 className="conatct-title">Fill This Form.</h2>
                </div>
                <div className="contact-image-wrap">
                  <img
                    className="contact-image"
                    src="https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c/6918bc29c60a086055740d7e_Contact-Image.jpg"
                    alt="Contact Image"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column (Form) */}
              <div className="contact-flex-right-wrap">
                <div className="contact-form-wrap w-form">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="contact-form-content">
                      <div className="contact-checkbox-wrapper">
                        <div className="contact-checkbox-title">Tell us about your projects*</div>
                        <div className="contact-checkbox-flex">
                          {servicesList.map((service) => {
                            const isChecked = !!selectedServices[service];
                            return (
                              <label
                                key={service}
                                className={`w-checkbox single-checkbox-wrap ${isChecked ? 'active-checkbox' : ''}`}
                                onClick={() => toggleService(service)}
                              >
                                <div
                                  className={`w-checkbox-input w-checkbox-input--inputType-custom contact-checkbox ${
                                    isChecked ? 'w--redirected-checked' : ''
                                  }`}
                                ></div>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {}}
                                  style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                                />
                                <span className="checkbox-label w-form-label">{service}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      <div className="contact-fields-wrapper">
                        <div className="single-conatct-field-wrap">
                          <input
                            className="contact-field w-input"
                            maxLength={256}
                            name="name"
                            placeholder="Your Name *"
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="single-conatct-field-wrap">
                          <input
                            className="contact-field w-input"
                            maxLength={256}
                            name="Phone-Number"
                            placeholder="Phone Number *"
                            type="tel"
                            id="Phone-Number"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="single-conatct-field-wrap">
                          <input
                            className="contact-field w-input"
                            maxLength={256}
                            name="email"
                            placeholder="Email *"
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="single-conatct-field-wrap">
                          <textarea
                            id="Message"
                            name="Message"
                            maxLength={5000}
                            placeholder="Message *"
                            required
                            className="contact-field message w-input"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          ></textarea>
                        </div>
                      </div>

                      <input type="submit" className="submit-button w-button" value="Get In Touch" />
                    </form>
                  ) : (
                    <div className="contact-success-message-wrap w-form-done" style={{ display: 'block' }}>
                      <div className="contact-success-message" style={{ fontSize: '1.2rem', padding: '30px' }}>
                        Thank you for reaching out, <strong>{formData.name}</strong>! We will get back to you shortly at {formData.email}.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
}
