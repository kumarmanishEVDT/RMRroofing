"use client";

import React, { useState, useEffect } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { X, Phone, CheckCircle, Send, UserCheck, Shield, Sparkles, MapPin, Mail, User } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

const SERVICE_OPTIONS = [
  "New roof installation",
  "Metal roof replacement",
  "Roof repairs & leak diagnosis",
  "Commercial metal roofing",
  "Colorbond® roofing",
  "Gutters, fascia & downpipes",
  "Architectural wall cladding"
];

export default function QuoteModal() {
  const { isOpen, preselectedService, closeQuoteModal } = useQuoteModal();

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

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(preselectedService)
          ? prev.services
          : [preselectedService, ...prev.services]
      }));
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

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
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      suburb: "",
      services: [],
      description: ""
    });
    setErrors({});
    closeQuoteModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#0b0518]/80 backdrop-blur-md animate-backdrop-fade overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleResetAndClose();
        }
      }}
    >
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 animate-modal-pop p-6 sm:p-8 my-auto">
        <button
          onClick={handleResetAndClose}
          aria-label="Close quote modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 sm:py-10 space-y-5">
            <div className="w-16 h-16 bg-slate-100 text-[#111633] border-2 border-[#111633] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0b0518] tracking-tight">
                Quote Request Received!
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0b0518]">{formData.fullName}</strong>. Rhys McRae has received your details and will call you on{" "}
                <strong className="text-[#0b0518]">{formData.phone}</strong> shortly to discuss your roofing project.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-sm mx-auto">
              Need urgent assistance with an active roof leak?
              <br />
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="font-bold text-[#0b0518] inline-flex items-center gap-1 mt-1 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" /> Call Rhys directly on {COMPANY_DETAILS.phone}
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Done &amp; Close
            </button>
          </div>
        ) : (
          <div>
            <div className="pr-8 mb-6 border-b border-slate-200 pb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0b0518] text-[11px] font-extrabold uppercase tracking-wider mb-2">
                <UserCheck className="w-3.5 h-3.5 text-[#111633]" /> Speak Direct with Rhys McRae
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0b0518] tracking-tight">
                Request a Free Quote
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber} · Central Coast, Sydney &amp; Newcastle
              </p>
              <div className="mt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#111633] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" /> Prefer a phone discussion? Call {COMPANY_DETAILS.phone}
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#111633] focus:ring-2 focus:ring-[#111633]/20 outline-none text-slate-900 text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                  {errors.fullName && <p className="text-red-600 text-xs mt-1 font-medium">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0432 589 939"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#111633] focus:ring-2 focus:ring-[#111633]/20 outline-none text-slate-900 text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                  {errors.phone && <p className="text-red-600 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com.au"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#111633] focus:ring-2 focus:ring-[#111633]/20 outline-none text-slate-900 text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                  {errors.email && <p className="text-red-600 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                    Property Suburb *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Gosford, Terrigal, Sydney"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#111633] focus:ring-2 focus:ring-[#111633]/20 outline-none text-slate-900 text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                  {errors.suburb && <p className="text-red-600 text-xs mt-1 font-medium">{errors.suburb}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Required Services *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((srv) => {
                    const isSelected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`text-left px-3 py-2 rounded-lg border text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#0b0518] text-white border-[#0b0518] shadow-xs"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        <span className="truncate">{srv}</span>
                        {isSelected && <span className="text-white text-xs ml-1.5">✓</span>}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-red-600 text-xs mt-1 font-medium">{errors.services}</p>}
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell Rhys about your roof condition, urgency, or any specific requirements..."
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-[#111633] focus:ring-2 focus:ring-[#111633]/20 outline-none text-slate-900 text-sm bg-slate-50 focus:bg-white resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1 pb-1 border-t border-slate-100 gap-2">
                <span className="flex items-center gap-1 font-semibold">
                  <Shield className="w-3.5 h-3.5 text-[#111633]" /> NSW Lic #{COMPANY_DETAILS.licenceNumber}
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#111633]" /> Genuine BlueScope Steel
                </span>
                <span className="flex items-center gap-1 font-semibold">
                  <UserCheck className="w-3.5 h-3.5 text-[#111633]" /> Direct With Rhys
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-black uppercase tracking-wider text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Sending Details...</span>
                ) : (
                  <>
                    <span>SUBMIT FREE QUOTE REQUEST</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
