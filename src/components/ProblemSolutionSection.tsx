"use client";

import React from "react";
import { Phone, CheckCircle2, Star, MessageSquare, AlertTriangle, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ProblemSolutionSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Description, Review & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#111633] text-xs font-extrabold uppercase tracking-[0.18em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#111633]" />
              PROTECT YOUR BIGGEST ASSET
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0b0518] uppercase tracking-tight leading-[1.06] mb-4">
              ROOFING PROBLEMS DON&apos;T FIX THEMSELVES.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              A small roof issue can quickly become a costly internal problem if left untreated. Whether you&apos;re dealing with an active roof leak, cracked tiles, rusted corrugated sheets, or overflowing gutters —{" "}
              <strong className="text-[#0b0518]">Rhys McRae Roofing Pty Ltd</strong> assesses the problem properly and delivers a lasting solution.
            </p>

            {/* Verified Customer Quote Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#111633] mb-6">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-slate-500">David Collins · Gosford NSW</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                “After two roofers tried to charge me for a full re-roof for a simple leak, Rhys inspected it and showed me the exact broken valley flashing causing the issue. Repaired it quickly at a very fair price.”
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#111633] hover:bg-[#1b244d] text-white font-extrabold py-3.5 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-current shrink-0" />
                <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0b0518] font-extrabold py-3.5 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all border border-slate-300 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#111633] shrink-0" />
                <span>LET&apos;S TALK ABOUT YOUR ROOF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Descriptive Roofing Problem-to-Solution Image Showcase */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Split Visual: Damaged / Leaking Roof vs Repaired Colorbond Roof */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#0b0518] h-56 sm:h-64">
                <img
                  src="/img/before.jpeg"
                  alt="Damaged, rusted and leaking roof needing urgent repair"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/90 via-[#0b0518]/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-red-600/95 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Before: Ageing Roof</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-snug">
                    Weathered sheets, worn flashings &amp; coastal exposure.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-[#0b0518] h-56 sm:h-64">
                <img
                  src="/img/After.jpeg"
                  alt="New watertight Colorbond metal roof and flashing installation by RMR Roofing"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/90 via-[#0b0518]/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#111633] border border-white/20 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                  <ShieldCheck className="w-3 h-3" />
                  <span>After: RMR Roofing</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-bold leading-snug">
                    Watertight Colorbond® steel, custom valley flashings &amp; lasting protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Wide Descriptive Roofing Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-[#0b0518] p-5 sm:p-6 text-white shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-300 block mb-1">
                    HONEST DIAGNOSTICS · NO MIDDLEMEN
                  </span>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white">
                    We Fix Active Leaks, Ageing Tiles &amp; Rusted Metal Roofs
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  Lic #{COMPANY_DETAILS.licenceNumber}
                </span>
              </div>

              <div className="mt-4 pt-3.5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Leak &amp; Flashing Repairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Tile-to-Colorbond®</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Gutters &amp; Downpipes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
