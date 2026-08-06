'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    Development: false,
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

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

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
            {!submitted ? (
              <div className="contact-flex-wrap">
                {/* Left Column */}
                <div className="contact-flex-left-wrap">
                  <div className="contact-contents-wrap">
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
                    <form onSubmit={handleSubmit} className="contact-form-content">
                      <div className="contact-checkbox-wrapper">
                        <div className="contact-checkbox-title">Tell us about your projects*</div>
                        <div className="contact-checkbox-flex">
                          {servicesList.map((service) => {
                            const isChecked = !!selectedServices[service];
                            return (
                              <button
                                key={service}
                                type="button"
                                className={`single-checkbox-wrap ${isChecked ? 'active-checkbox' : ''}`}
                                style={{
                                  backgroundColor: isChecked ? '#000000' : 'rgba(255, 255, 255, 0.2)',
                                  border: 'none',
                                  outline: 'none',
                                  cursor: 'pointer',
                                }}
                                onClick={() => toggleService(service)}
                              >
                                <span
                                  className="checkbox-label"
                                  style={{ color: '#ffffff', fontWeight: 400 }}
                                >
                                  {service}
                                </span>
                              </button>
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

                      <input
                        type="submit"
                        className="submit-button w-button"
                        value="Get In Touch"
                        disabled={!isFormValid}
                        style={{
                          opacity: isFormValid ? 1 : 0.5,
                          cursor: isFormValid ? 'pointer' : 'not-allowed',
                          pointerEvents: isFormValid ? 'auto' : 'none',
                        }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="contact-success-message-wrap w-form-done"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '380px',
                  width: '100%',
                }}
              >
                <div
                  className="contact-success-message"
                  style={{
                    fontSize: '1.25rem',
                    padding: '48px 64px',
                    textAlign: 'center',
                    maxWidth: '640px',
                    backgroundColor: '#ffffff',
                    color: '#0a2540',
                    borderRadius: '24px',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(12, 56, 90, 0.08)',
                  }}
                >
                  Thank you for reaching out, <strong>{formData.name}</strong>!<br /><br />
                  We have received your message and will get back to you shortly at <strong>{formData.email}</strong>.
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="section-divider"></div>
      </section>
    </>
  );
}
