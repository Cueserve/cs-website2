'use client';

import React, { useState } from 'react';
import { FadeInUp } from '@/components/FadeInUp';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    Development: false,
    'UI/UX Design': false,
    Branding: false,
    Marketing: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const activeServices = Object.keys(selectedServices).filter(
      (key) => selectedServices[key]
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: activeServices,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const servicesList = ['Development', 'UI/UX Design', 'Branding', 'Marketing'];

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';

  return (
    <div id="contact" className="min-h-screen bg-white flex flex-col justify-between pt-24 pb-12 font-paragraph relative">
      {/* Background Gradient exactly for the Banner Section */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[linear-gradient(180deg,#dbeafe_0%,#ffffff_100%)] pointer-events-none z-0" />
      
      <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto py-12 relative z-10">
        {/* Banner Section */}
        <FadeInUp>
          <div className="mb-12 text-center flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-default border border-cs-border bg-white mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-cs-ink leading-tight font-display">
              Contact <span className="text-brand-default">Us.</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-cs-ink-muted max-w-2xl leading-relaxed text-center">
              At Cueserve, we offer a full range of creative and digital services designed to help brands stand out and succeed in a fast-evolving digital world.
            </p>
          </div>
        </FadeInUp>

        {/* Contact Layout Card */}
        <FadeInUp>
          <div className="bg-brand-default rounded-[32px] md:rounded-[40px] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2 p-6 md:p-10 lg:p-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Panel */}
            <div className="text-white flex flex-col h-full w-full pt-1">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight">Fill This Form.</h2>
              </div>
              
              <div className="rounded-[24px] md:rounded-[32px] overflow-hidden w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:h-[400px] relative mt-auto">
                <img 
                   src="/assets/images/contact/Contact-Team.jpg" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Panel (Form) */}
            <div className="text-white">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Services Checklist */}
                  <div>
                    <div className="text-base md:text-lg font-medium mb-4">
                      Tell us about your projects*
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {servicesList.map((service) => {
                        const isChecked = !!selectedServices[service];
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={"px-5 py-2.5 rounded-full text-xs md:text-sm transition-all duration-200 border " + (isChecked ? 'bg-black text-white border-black shadow-md' : 'bg-white/10 text-white border-transparent hover:bg-white/20')}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6 pt-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all text-sm md:text-base"
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
                        className="w-full py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all text-sm md:text-base"
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
                        className="w-full py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Message *"
                        rows={2}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white transition-all text-sm md:text-base resize-none"
                      />
                    </div>
                  </div>

                  {/* Error Notification */}
                  {error && (
                    <div className="text-red-200 text-xs md:text-sm font-medium bg-red-950/40 p-3 rounded-[16px] border border-red-500/20">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!isFormValid || loading}
                      className={"py-3 md:py-4 px-6 md:px-8 rounded-full font-semibold text-sm transition-all duration-300 " + (isFormValid && !loading ? 'bg-white text-brand-default hover:bg-gray-100 cursor-pointer shadow-lg' : 'bg-white/50 text-brand-default cursor-not-allowed')}
                    >
                      {loading ? 'Sending...' : 'Get In Touch'}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[380px] text-center p-6 bg-white/10 rounded-[24px]">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 text-brand-default text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank you, {formData.name}!</h3>
                  <p className="text-white/80 max-w-md leading-relaxed text-sm">
                    We&apos;ve successfully received your message and will get back to you shortly at <strong>{formData.email}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
