import React from "react";
import Link from "next/link";
import { UserCheck, Award, ShieldCheck, Building2, Sparkles, Phone, ArrowRight, Check } from "lucide-react";
import { COMPANY_DETAILS, WHY_CHOOSE_US } from "@/data/roofingData";

const ICON_MAP = {
  UserCheck: UserCheck,
  Award: Award,
  ShieldCheck: ShieldCheck,
  CheckCircle: Building2,
  Sparkles: Sparkles
};

export default function WhyChooseRhys() {
  return (
    <section id="why-rmr" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            The RMR Roofing Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Choose <span className="text-amber-500">RMR Roofing?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Choosing a roofing contractor is an important decision. You want to know who's responsible for your project, understand your options and feel confident about the work being undertaken.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = ICON_MAP[item.iconName as keyof typeof ICON_MAP] || Award;
            return (
              <div
                key={idx}
                className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  idx === 0
                    ? "bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/50 shadow-xl shadow-amber-500/5 lg:col-span-2"
                    : "bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {idx === 0 && (
                      <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider">
                        Core Difference
                      </span>
                    )}
                    {idx === 2 && (
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold text-xs">
                        Lic #{COMPANY_DETAILS.licenceNumber}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <Check className="w-4 h-4" />
                  <span>Guaranteed by Rhys McRae</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Licence & Standards Verification Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">
                NSW Fair Trading Contractor Licence #{COMPANY_DETAILS.licenceNumber}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Rhys McRae Roofing Pty Ltd is fully compliant, insured for residential & commercial works, and follows strict Australian Standards (AS 1562 & HB 39).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/quote"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all"
            >
              Verify & Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
