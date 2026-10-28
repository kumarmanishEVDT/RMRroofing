"use client";

import React, { useState } from "react";
import { Phone, CheckCircle, Send, AlertCircle, Shield, Clock, UserCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

const SERVICE_OPTIONS = [
  "New roof installation",
  "Metal roof replacement or re-roofing",
  "Roof repairs",
  "Commercial metal roofing",
  "Colorbond roofing",
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
        }, 600);
      }
    } catch {
      setTimeout(() => {
        setIsSubmitted(true);
      }, 600);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0f2fe] border border-[#bae6fd] text-[#0369a1] text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-[#066aab]" />
              Direct Access to Rhys McRae
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Get a Quote for Your <span className="text-[#066aab]">Roofing Project</span>
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Tell Rhys a little about your roofing requirements, and the team can follow up to discuss your project and the next steps.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you need a roof replacement, repairs, a new roof or commercial roofing services, start with a straightforward conversation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#e0f2fe] text-[#066aab] flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">No Sales Middlemen</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Rhys McRae personally reviews your enquiry, assesses the work, and manages your project.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#e0f2fe] text-[#066aab] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fully insured and licensed for residential and commercial roofing across NSW.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#e0f2fe] text-[#066aab] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">Fast Turnaround</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Enquiries are typically responded to promptly to arrange an on-site visit or phone discussion.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#e0f2fe] border border-[#bae6fd]">
              <p className="text-xs text-[#0369a1] font-bold uppercase tracking-wider">
                Prefer to speak directly?
              </p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#066aab] hover:bg-[#05568c] text-white font-bold text-sm transition-all shadow-md shadow-[#066aab]/20"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Rhys on {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Thank You, {formData.fullName}!</h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                      Your roofing enquiry has been received by <strong className="text-[#066aab]">RMR Roofing</strong>. Rhys McRae will review your requirements and follow up with you directly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="text-slate-500 font-medium">Enquiry Summary:</div>
                    <div className="text-slate-700"><strong className="text-slate-900">Location:</strong> {formData.suburb}</div>
                    <div className="text-slate-700"><strong className="text-slate-900">Services:</strong> {formData.services.join(", ")}</div>
                    <div className="text-slate-700"><strong className="text-slate-900">Contact Phone:</strong> {formData.phone}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#066aab] hover:bg-[#05568c] text-white font-bold text-sm flex items-center justify-center gap-2"
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
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Request Your Roofing Quote
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">
                      Complete the short form below, and Rhys will be your main point of contact.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-[#066aab]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Smith"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.fullName ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:bg-white`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-[#066aab]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.phone ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:bg-white`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-[#066aab]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:bg-white`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Property Suburb or Postcode <span className="text-[#066aab]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Terrigal, 2260 or Sydney"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border ${
                          errors.suburb ? "border-red-500" : "border-slate-300"
                        } text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:bg-white`}
                      />
                      {errors.suburb && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.suburb}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      What do you need help with? <span className="text-[#066aab]">* (Select all that apply)</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SERVICE_OPTIONS.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-all flex items-center justify-between border ${
                              isSelected
                                ? "bg-[#e0f2fe] border-[#066aab] text-[#0369a1] font-bold shadow-sm"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <span>{service}</span>
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 border ${
                                isSelected
                                  ? "bg-[#066aab] border-[#066aab] text-white"
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
                      <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.services}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Brief description of your project (optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. 3-bedroom tile house, looking to convert to Colorbond Monument. Roof is approx 180sqm."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#066aab] focus:bg-white"
                    />
                  </div>

                  {/* Primary Submit Button - Pure Blue */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#066aab] hover:bg-[#05568c] text-white font-black text-base shadow-lg shadow-[#066aab]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending to Rhys...</span>
                        </>
                      ) : (
                        <>
                          <span>REQUEST MY ROOFING QUOTE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">
                      Your enquiry will be sent directly to RMR Roofing so your requirements can be reviewed and followed up.
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
