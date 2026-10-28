import React from "react";
import QuoteForm from "@/components/QuoteForm";
import { Phone, Clock, FileCheck, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export const metadata = {
  title: "Request a Roofing Quote | Rhys McRae Roofing Pty Ltd",
  description: "Request a free quote for residential or commercial metal roofing, roof replacement, Colorbond, gutters, or repairs in Sydney, Newcastle & Central Coast NSW."
};

export default function QuotePage() {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-[#066aab] font-bold text-xs uppercase tracking-widest">
          No Sales Middlemen · Speak Directly with Rhys
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2 tracking-tight">
          Request Your Roofing Quote
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
          Tell Rhys a little about your roofing requirements, and the team can follow up to discuss your project and the next steps. Start with a straightforward conversation.
        </p>
      </div>

      <QuoteForm />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            What Happens After You Submit?
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Our straightforward, honest 4-step quoting and project delivery process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#066aab] font-black flex items-center justify-center text-sm border border-[#bae6fd]">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Direct Enquiry Review</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rhys McRae reviews your property details, location, and specific roofing requirements personally.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#066aab] font-black flex items-center justify-center text-sm border border-[#bae6fd]">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">On-Site Consultation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Rhys inspects your existing roof pitch, batten condition, gutters, and brings genuine Colorbond steel samples.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#066aab] font-black flex items-center justify-center text-sm border border-[#bae6fd]">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Clear Itemized Quote</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive a comprehensive quote with transparent material specifications, warranty terms, and no hidden surprises.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#066aab] font-black flex items-center justify-center text-sm border border-[#bae6fd]">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900">Execution & Daily Clean</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Punctual delivery, licensed craftsmanship (NSW #454185C), and daily magnetic nail sweeps to leave your grounds pristine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
