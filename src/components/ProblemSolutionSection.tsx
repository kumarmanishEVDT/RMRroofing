"use client";

import React from "react";
import { Phone, CheckCircle2, Star, ArrowUpRight, MessageSquare } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

const NUMBERED_BENEFITS = [
  {
    num: "01",
    title: "Weatherproof Your Home With Confidence",
    desc: "Stop worrying about sudden coastal storms, driving rain, or high winds. Every roof replacement and repair is engineered for 100% watertight protection."
  },
  {
    num: "02",
    title: "Upgrade From Heavy, Crumbling Tiles",
    desc: "Replacing old concrete or terracotta tiles with genuine BlueScope Colorbond® steel reduces structural roof weight by up to 80% and eliminates cracked-tile maintenance forever."
  },
  {
    num: "03",
    title: "Boost Street Appeal & Property Value",
    desc: "Choose an architectural metal profile and Colorbond® shade that complements your home's facade while giving you crisp, modern roofline geometry."
  },
  {
    num: "04",
    title: "Superior Thermal & Coastal Performance",
    desc: "Integrated Anticon™ thermal blanket insulation and Thermatech® solar reflectance keep your home cooler in summer and quieter during heavy downpours."
  },
  {
    num: "05",
    title: "Tailored Around Your Property & Budget",
    desc: "Whether it's a targeted leak repair, a residential re-roof, architectural wall cladding, or a large commercial facility — Rhys scopes the right solution without pushy upselling."
  }
];

export default function ProblemSolutionSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* 1. Split "Roofing Problems Don't Fix Themselves" Section (Like RightFix & SH Pergolas) */}
      <section className="relative w-full bg-white text-slate-900 border-b border-slate-200 overflow-hidden">
        <div className="max-w-full mx-auto min-h-[580px] grid grid-cols-1 lg:grid-cols-12 relative">
          {/* Left Image Column with Floating Review */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[580px]">
            <img
              src="/images/rfr.webp"
              alt="Metal Roof Replacement and Inspection by Rhys McRae"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white lg:hidden pointer-events-none" />

            {/* Floating Review Card */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 lg:left-14 right-4 sm:right-6 lg:right-8 p-5 sm:p-6 bg-[#0b0518]/92 backdrop-blur-md border border-white/15 border-l-4 border-l-white rounded-r-xl text-white max-w-xl shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Honest Diagnostics
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                “After two roofers tried to charge me for a full re-roof for a simple leak, Rhys inspected it and showed me the exact broken valley flashing causing the issue. Repaired it quickly at a very fair price. 10/10 recommended.”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1b244d] border border-white/20 flex items-center justify-center font-bold text-white text-xs">
                  DC
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block leading-tight">
                    David Collins
                  </span>
                  <span className="text-[11px] text-slate-400">Gosford, Central Coast NSW</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-6 px-6 sm:px-10 lg:px-14 py-12 lg:py-16 flex flex-col justify-center bg-white z-10">
            <span className="text-[#111633] text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#111633]" />
              PROTECT YOUR BIGGEST ASSET
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b0518] uppercase tracking-tight leading-[1.06] mb-4">
              ROOFING PROBLEMS DON&apos;T FIX THEMSELVES.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              A small roof issue can quickly become a costly internal problem if left untreated. Whether you&apos;re dealing with an active roof leak, cracked tiles, rusted corrugated sheets, or overflowing gutters —{" "}
              <strong className="text-[#0b0518]">Rhys McRae Roofing Pty Ltd</strong> assesses the problem properly and delivers a lasting solution.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#111633] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0b0518] leading-tight">
                    Active roof leaks, water stains or storm damage?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Thorough leak detection, custom flashing fabrication, and valley repairs before water damages ceilings or timber framing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#111633] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0b0518] leading-tight">
                    Ageing concrete tiles or rusted metal sheets?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Complete tile-to-Colorbond® roof conversions and metal re-roofing engineered for coastal NSW durability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#111633] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0b0518] leading-tight">
                    Sagging gutters, fascia or commercial roof wear?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    High-capacity Colorbond® gutters, downpipes, architectural cladding, and commercial metal roofing packages.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#111633] hover:bg-[#1b244d] text-white font-extrabold py-3.5 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#0b0518] font-extrabold py-3.5 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all border border-slate-300 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#111633]" />
                <span>LET&apos;S TALK ABOUT YOUR ROOF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Numbered Benefits Section (01-05 Rows like SH Pergolas) */}
      <section className="relative overflow-hidden bg-[#f5f5f2] text-slate-900 border-b border-slate-200">
        {/* Faded Right Background Visual */}
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[58%] lg:block">
          <img
            src="/images/gal11.webp"
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f5f2] via-[#f5f5f2]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f5f5f2] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#111633]" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#111633]">
                  Stronger Protection. Cleaner Lines. Zero Fuss.
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.98] tracking-[-0.03em] text-[#0b0518]">
                Engineered For Australian{" "}
                <span className="text-slate-500 block sm:inline">Conditions.</span>
              </h2>
            </div>

            <div className="relative flex items-end lg:col-span-5">
              <p className="border-l-2 border-[#111633] pl-4 sm:pl-6 text-sm leading-relaxed text-slate-700 sm:text-base">
                Every property has a different roofline, pitch, and exposure to coastal elements. Here is how a tailored RMR Roofing solution upgrades your property for decades to come.
              </p>
            </div>
          </div>

          {/* 01 - 05 Interactive Editorial Rows */}
          <div className="relative mt-10 sm:mt-14 space-y-3 sm:space-y-0 sm:border-t sm:border-slate-300">
            {NUMBERED_BENEFITS.map((item) => (
              <div
                key={item.num}
                onClick={() => openQuoteModal(item.title)}
                className="group cursor-pointer rounded-xl sm:rounded-none border sm:border-0 border-slate-200 sm:border-b sm:border-slate-300 bg-white/80 sm:bg-transparent p-5 sm:py-7 sm:px-3 transition-all duration-300 hover:bg-white sm:grid sm:grid-cols-[70px_1fr_60px] sm:items-center sm:gap-6 lg:grid-cols-[90px_1.15fr_1.45fr_60px] lg:py-8 shadow-xs sm:shadow-none"
              >
                <div className="flex items-center gap-3 sm:block mb-2 sm:mb-0">
                  <span className="text-xs sm:text-sm font-black tracking-[0.15em] text-[#111633] bg-slate-200/80 sm:bg-transparent px-2 py-0.5 sm:p-0 rounded">
                    {item.num}
                  </span>
                  <h3 className="sm:hidden text-base font-black uppercase tracking-tight text-[#0b0518]">
                    {item.title}
                  </h3>
                </div>

                <div className="hidden sm:block">
                  <h3 className="max-w-md text-lg sm:text-xl font-black uppercase leading-tight tracking-[-0.02em] text-[#0b0518] group-hover:text-[#162044] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="max-w-xl">
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 sm:text-slate-800">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden justify-end sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center border border-slate-300 text-[#0b0518] transition-all duration-300 group-hover:border-[#111633] group-hover:bg-[#111633] group-hover:text-white rounded-lg">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              Residential &amp; Commercial Metal Roofing · NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}
            </p>
            <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.15em] text-[#0b0518]">
              <span className="h-2 w-2 bg-[#111633]" />
              Central Coast · Sydney · Newcastle
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
