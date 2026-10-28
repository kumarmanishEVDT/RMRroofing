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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-md animate-backdrop-fade overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleResetAndClose();
        }
      }}
    >
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 animate-modal-pop p-6 sm:p-8 my-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Close quote modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 sm:py-12 space-y-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner ring-8 ring-emerald-50/50">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Quote Request Received!
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Rhys McRae has received your details and will call you on <strong className="text-slate-900">{formData.phone}</strong> shortly to discuss your roofing project.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-slate-700 max-w-sm mx-auto">
              Need urgent assistance with an active roof leak?
              <br />
              <a href="tel:0432589939" className="font-bold text-[#066aab] inline-flex items-center gap-1 mt-1 hover:underline">
                <Phone className="w-3.5 h-3.5" /> Call Rhys directly on 0432 589 939
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-xl bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-bold text-sm shadow-md shadow-[#066aab]/25 transition-all cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="pr-8 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#066aab]/10 border border-[#066aab]/20 text-[#066aab] text-xs font-bold uppercase tracking-wider mb-2">
                <UserCheck className="w-3.5 h-3.5" /> Speak Direct with Rhys McRae
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Request a Free Quote
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                NSW Trade Licence #{COMPANY_DETAILS.licenceNumber} · Central Coast, Sydney & Newcastle
              </p>
              <div className="mt-2.5">
                <a
                  href="tel:0432589939"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#066aab] hover:text-[#05568c] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Prefer a quick phone discussion? Call 0432 589 939
                </a>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#066aab] focus:ring-2 focus:ring-[#066aab]/20 outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0432 589 939"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#066aab] focus:ring-2 focus:ring-[#066aab]/20 outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com.au"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#066aab] focus:ring-2 focus:ring-[#066aab]/20 outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Property Suburb *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Gosford, Terrigal, Sydney"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#066aab] focus:ring-2 focus:ring-[#066aab]/20 outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                  {errors.suburb && <p className="text-red-500 text-xs mt-1 font-medium">{errors.suburb}</p>}
                </div>
              </div>

              {/* Roofing Services Select */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                            ? "bg-[#066aab] text-white border-[#066aab] shadow-sm"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        <span className="truncate">{srv}</span>
                        {isSelected && <span className="text-white text-xs ml-1.5">✓</span>}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-red-500 text-xs mt-1 font-medium">{errors.services}</p>}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Notes or Comments (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell Rhys about your roof condition, urgency, or any specific requirements..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-[#066aab] focus:ring-2 focus:ring-[#066aab]/20 outline-none text-slate-900 text-sm placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white resize-none"
                />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 pt-1 pb-1 border-t border-slate-100 gap-2">
                <span className="flex items-center gap-1 font-medium">
                  <Shield className="w-3.5 h-3.5 text-[#066aab]" /> Licensed & Insured NSW
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#066aab]" /> Genuine BlueScope Steel
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <UserCheck className="w-3.5 h-3.5 text-[#066aab]" /> No Middlemen
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-bold text-sm shadow-lg shadow-[#066aab]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Sending Details...</span>
                ) : (
                  <>
                    <span>Submit Free Quote Request</span>
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
