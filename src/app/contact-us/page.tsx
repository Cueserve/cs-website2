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
    <div id="contact" className="min-h-screen bg-cs-surface-tint flex flex-col justify-between pt-24 pb-12 font-paragraph">
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto py-12">
        {/* Banner Section */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-cs-dark-blue border border-cs-border bg-brand-subtle mb-6">
            <svg
              className="w-3.5 h-3.5 mr-2 text-cs-dark-blue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-cs-ink leading-tight font-display">
            Contact <span className="text-cs-dark-blue">Us.</span>
          </h1>
          <p className="mt-6 text-lg text-cs-ink-muted max-w-2xl leading-relaxed">
            At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="bg-cs-surface rounded-3xl border border-cs-border overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel */}
          <div className="lg:col-span-5 bg-cs-surface-dark text-text-inverse p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-blue-600 to-slate-950 pointer-events-none" />
            
            <div className="relative z-10">
              <Link href="/" className="inline-block mb-12">
                <img
                  loading="lazy"
                  src="/cueserve-logo.png"
                  alt="Cueserve Logo"
                  className="brightness-0 invert max-h-9 w-auto"
                />
              </Link>
              
              <h2 className="text-3xl font-semibold mb-6 font-display">Fill out the form.</h2>
              <p className="text-text-inverse-muted max-w-xs leading-relaxed text-sm md:text-base">
                Tell us about your project requirements and we will get back to you within 24 hours.
              </p>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-cs-border-strong flex flex-col gap-4 text-sm text-text-inverse-muted">
              <div className="flex items-center gap-3">
                <span className="text-lg">✉</span>
                <span>hello@cueserve.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">☏</span>
                <span>+1 (555) 019-2834</span>
              </div>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-cs-surface">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Services Checklist */}
                <div>
                  <div className="text-sm font-semibold text-cs-ink mb-4">
                    Tell us about your project *
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {servicesList.map((service) => {
                      const isChecked = !!selectedServices[service];
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                            isChecked
                              ? 'bg-cs-dark-blue text-text-inverse border-cs-dark-blue shadow-sm'
                              : 'bg-cs-surface-tint text-cs-ink-muted border-cs-border hover:border-cs-border-strong'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-cs-surface-tint border border-cs-border rounded-2xl text-cs-ink placeholder-cs-ink-subtle focus:outline-none focus:border-cs-dark-blue focus:bg-cs-surface transition-all text-sm"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-cs-surface-tint border border-cs-border rounded-2xl text-cs-ink placeholder-cs-ink-subtle focus:outline-none focus:border-cs-dark-blue focus:bg-cs-surface transition-all text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-cs-surface-tint border border-cs-border rounded-2xl text-cs-ink placeholder-cs-ink-subtle focus:outline-none focus:border-cs-dark-blue focus:bg-cs-surface transition-all text-sm"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message *"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 bg-cs-surface-tint border border-cs-border rounded-2xl text-cs-ink placeholder-cs-ink-subtle focus:outline-none focus:border-cs-dark-blue focus:bg-cs-surface transition-all text-sm resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                      isFormValid
                        ? 'bg-cs-dark-blue text-text-inverse hover:bg-cs-dark-blue-hover shadow-md cursor-pointer'
                        : 'bg-cs-border-strong text-cs-ink-subtle cursor-not-allowed'
                    }`}
                  >
                    Get In Touch
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[380px] text-center p-6 bg-cs-surface">
                <div className="w-16 h-16 bg-brand-subtle rounded-full flex items-center justify-center mb-6 text-cs-dark-blue text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-cs-ink mb-2">Thank you, {formData.name}!</h3>
                <p className="text-cs-ink-muted max-w-md leading-relaxed text-sm">
                  We've successfully received your message and will get back to you shortly at <strong className="text-cs-ink">{formData.email}</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
