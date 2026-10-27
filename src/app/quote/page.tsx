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
    <div className="py-12 bg-slate-950">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
          No Sales Middlemen · Speak Directly with Rhys
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 tracking-tight">
          Request Your Roofing Quote
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
          Tell Rhys a little about your roofing requirements, and the team can follow up to discuss your project and the next steps. Start with a straightforward conversation.
        </p>
      </div>

      {/* Main Quote Form Section */}
      <QuoteForm />

      {/* What Happens Next Process Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            What Happens After You Submit?
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Our straightforward, honest 4-step quoting and project delivery process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 font-black flex items-center justify-center text-sm border border-amber-500/20">
              01
            </div>
            <h3 className="text-base font-bold text-white">Direct Enquiry Review</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rhys McRae reviews your property details, location, and specific roofing requirements personally.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 font-black flex items-center justify-center text-sm border border-amber-500/20">
              02
            </div>
            <h3 className="text-base font-bold text-white">On-Site Consultation</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rhys inspects your existing roof pitch, batten condition, gutters, and brings genuine Colorbond steel samples.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 font-black flex items-center justify-center text-sm border border-amber-500/20">
              03
            </div>
            <h3 className="text-base font-bold text-white">Clear Itemized Quote</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Receive a comprehensive quote with transparent material specifications, warranty terms, and no hidden surprises.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 font-black flex items-center justify-center text-sm border border-amber-500/20">
              04
            </div>
            <h3 className="text-base font-bold text-white">Execution & Daily Clean</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Punctual delivery, licensed craftsmanship (NSW #454185C), and daily magnetic nail sweeps to leave your grounds pristine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
