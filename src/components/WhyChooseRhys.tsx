"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, Award, ShieldCheck, Building2, Sparkles, Phone, ArrowRight, Check } from "lucide-react";
import { COMPANY_DETAILS, WHY_CHOOSE_US } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

const ICON_MAP = {
  UserCheck: UserCheck,
  Award: Award,
  ShieldCheck: ShieldCheck,
  CheckCircle: Building2,
  Sparkles: Sparkles
};

export default function WhyChooseRhys() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section id="why-rmr" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] border border-[#bae6fd] text-[#0369a1] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#066aab]" />
            The RMR Roofing Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Choose <span className="text-[#066aab]">RMR Roofing?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choosing a roofing contractor is an important decision. You want to know who's responsible for your project, understand your options and feel confident about the work being undertaken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName as keyof typeof ICON_MAP] || Award;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  idx === 0
                    ? "bg-white border-[#066aab] shadow-lg lg:col-span-2"
                    : "bg-white border-slate-100 hover:border-[#bae6fd] hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#066aab] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {idx === 0 && (
                      <span className="px-3 py-1 rounded-full bg-[#066aab] text-white font-bold text-xs uppercase tracking-wider">
                        Core Difference
                      </span>
                    )}
                    {idx === 2 && (
                      <span className="px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd] font-bold text-xs">
                        Lic #{COMPANY_DETAILS.licenceNumber}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#066aab]">
                  <Check className="w-4 h-4" />
                  <span>Guaranteed by Rhys McRae</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#e0f2fe] text-[#066aab] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-base">
                NSW Fair Trading Contractor Licence #{COMPANY_DETAILS.licenceNumber}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                Rhys McRae Roofing Pty Ltd is fully compliant, insured for residential & commercial works, and follows strict Australian Standards (AS 1562 & HB 39).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-bold text-sm transition-all shadow-md shadow-[#066aab]/20 cursor-pointer"
            >
              Verify & Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
