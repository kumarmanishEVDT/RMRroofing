"use client";

import React from "react";
import { Phone, Star, MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ProblemSolutionSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
      {/* Subtle Background Image (Rhys & RMR Roofing Truck) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/rhys-truck-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
            <div className="p-4 sm:p-5 rounded-xl bg-white/90 backdrop-blur-xs border border-slate-200 border-l-4 border-l-[#111633] mb-6 shadow-xs">
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

          {/* Right Column: Descriptive Roofing Inspection & Replacement Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-[#0b0518]">
              <img
                src="/images/rhys-truck-bg.jpg"
                alt="Rhys McRae - RMR Roofing Services Inspection & Roof Repairs"
                className="w-full h-[340px] sm:h-[440px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/90 via-[#0b0518]/20 to-transparent" />

              {/* Bottom Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#0b0518]/90 backdrop-blur-md border border-white/15 rounded-xl p-4 text-white">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-1">
                  <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                  <span>Direct On-Site Roof Assessment · Lic #{COMPANY_DETAILS.licenceNumber}</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  Deal directly with Rhys McRae for honest roof leak diagnostics, storm repairs &amp; full Colorbond® replacements.
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-3 text-[11px] text-slate-300 font-semibold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Leak Repairs
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Tile-to-Colorbond®
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" /> Gutters &amp; Fascia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
