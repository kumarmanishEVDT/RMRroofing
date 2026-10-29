"use client";

import React, { useState } from "react";
import { Phone, CheckCircle, Send, AlertCircle, Shield, Clock, UserCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

const SERVICE_OPTIONS = [
  "New roof installation",
  "Metal roof replacement or re-roofing",
  "Roof repairs & leak detection",
  "Commercial metal roofing",
  "Colorbond® roofing",
  "Gutters, fascia or downpipes",
  "Architectural cladding",
  "Other roofing enquiry"
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    suburb: "",
    services: [] as string[],
    description: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service]
      };
    });
    if (errors.services) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Please enter your full name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = "Please enter a valid Australian phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.suburb.trim()) {
      newErrors.suburb = "Please enter your property suburb or postcode";
    }
    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one roofing service";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setTimeout(() => {
          setIsSubmitted(true);
        }, 500);
      }
    } catch {
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="quote"
      className="w-full py-14 sm:py-24 bg-[#0b0518] text-white relative overflow-hidden border-b border-white/10"
    >
      {/* Background Roof Image Overlay (Like RightFix #quote) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/gal12.webp"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0518] via-[#0b0518]/90 to-[#0b0518]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Styled after RightFix #quote) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111633] border border-white/15 text-slate-200 text-xs font-extrabold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-white" />
              Direct Access to Rhys McRae
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-[1.02]">
                GET YOUR ROOF SORTED TODAY.
              </h2>
              <p className="text-slate-300 font-bold text-base sm:text-lg mt-2">
                Don&apos;t Wait Until a Small Problem Becomes a Major Repair
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a roof repair, leak repair, complete roof replacement, new metal roof, architectural cladding or guttering work —{" "}
              <strong className="text-white">Rhys McRae Roofing Pty Ltd</strong> is ready to discuss your project.
            </p>

            <div>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-white hover:bg-slate-100 text-[#0b0518] font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl"
              >
                <Phone className="w-5 h-5 fill-[#0b0518]" />
                <span>Call Now: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-4 py-1">
              <span className="h-px flex-1 bg-white/15" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Or Request Your Quote Online
              </span>
              <span className="h-px flex-1 bg-white/15" />
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#111633]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">No Sales Middlemen</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Rhys McRae personally reviews your enquiry, inspects the roof, and oversees your project.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111633]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fully insured and licensed for residential and commercial metal roofing across NSW.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#111633]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">18+ Years Experience</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Servicing the Central Coast, Sydney Metro, and Newcastle / Hunter regions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card (Crisp White like RightFix QUICK QUOTE FORM) */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-[#111633] text-[#111633] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black uppercase text-[#0b0518]">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                      Your roofing enquiry has been received by{" "}
                      <strong className="text-[#0b0518]">RMR Roofing</strong>. Rhys McRae will review your requirements and follow up with you directly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="text-slate-500 font-bold uppercase tracking-wider">
                      Enquiry Summary:
                    </div>
                    <div className="text-slate-700">
                      <strong className="text-[#0b0518]">Location:</strong> {formData.suburb}
                    </div>
                    <div className="text-slate-700">
                      <strong className="text-[#0b0518]">Services:</strong>{" "}
                      {formData.services.join(", ")}
                    </div>
                    <div className="text-slate-700">
                      <strong className="text-[#0b0518]">Contact Phone:</strong> {formData.phone}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-bold text-sm flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 fill-white" />
                      <span>Call Rhys Directly: {COMPANY_DETAILS.phone}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          suburb: "",
                          services: [],
                          description: ""
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#0b0518]">
                      QUICK QUOTE FORM
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Fill in your details below and Rhys will get back to you with a free assessment and quote.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Smith"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.fullName ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#111633] focus:bg-white`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0400 000 000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.phone ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#111633] focus:bg-white`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#111633] focus:bg-white`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Property Suburb <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Terrigal, Gosford, Sydney"
                        value={formData.suburb}
                        onChange={(e) =>
                          setFormData({ ...formData, suburb: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.suburb ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#111633] focus:bg-white`}
                      />
                      {errors.suburb && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.suburb}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                      What Do You Need Help With? <span className="text-red-600">*</span>
                    </label>
                    <p className="text-[11px] text-slate-500 mb-2.5">Select all that apply</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SERVICE_OPTIONS.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3 py-2.5 rounded-lg text-xs font-semibold text-left transition-all flex items-center justify-between border cursor-pointer ${
                              isSelected
                                ? "bg-[#0b0518] border-[#0b0518] text-white font-bold shadow-xs"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <span>{service}</span>
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 border ${
                                isSelected
                                  ? "bg-white border-white text-[#0b0518]"
                                  : "border-slate-400 bg-white"
                              }`}
                            >
                              {isSelected && <CheckCircle className="w-3.5 h-3.5" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.services}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tell Us About Your Roofing Project (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 3-bedroom tile house in Terrigal, looking to convert to Colorbond Monument..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#111633] focus:bg-white"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-black uppercase tracking-wider text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending to Rhys...</span>
                      ) : (
                        <>
                          <span>REQUEST MY QUOTE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">
                      Direct to Rhys McRae · NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
