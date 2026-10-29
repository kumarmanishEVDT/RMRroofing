"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  Home,
  Building2,
  RefreshCw,
  Wrench,
  Hammer,
  Palette,
  Layers,
  Droplets,
  Phone,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { SERVICES, COMPANY_DETAILS } from "@/data/roofingData";

const SERVICE_IMAGES: Record<string, string> = {
  "residential-metal-roofing": "/images/rr.webp",
  "commercial-metal-roofing": "/images/pls.webp",
  "metal-roof-replacement": "/images/rfr.webp",
  "roof-repairs": "/images/roofr.webp",
  "new-roof-installations": "/images/gal11.webp",
  "colorbond-roofing": "/images/gal12.webp",
  "architectural-cladding": "/images/lft.webp",
  "fascia-gutters-downpipes": "/images/gal13.webp"
};

const ICON_MAP = {
  Home: Home,
  Building2: Building2,
  RefreshCw: RefreshCw,
  Wrench: Wrench,
  Hammer: Hammer,
  Palette: Palette,
  Layers: Layers,
  Droplets: Droplets
};

export default function ServicesGrid() {
  const { openQuoteModal } = useQuoteModal();
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    SERVICES.forEach((s) => {
      initial[s.id] = true;
    });
    return initial;
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (Like RightFix & SH Pergolas) */}
        <div className="mb-12 sm:mb-16 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#111633]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#111633]">
                One Team. Complete Metal Roofing Solutions.
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.96] tracking-[-0.03em] text-[#0b0518]">
              OUR ROOFING <span className="text-slate-400">SERVICES.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="border-l-2 border-slate-300 pl-5 text-sm sm:text-base leading-relaxed text-slate-600">
              Whether you&apos;re replacing an ageing tile roof, fixing a stubborn leak, or building a new residential or commercial property — every project is overseen directly by Rhys McRae.
            </p>
          </div>
        </div>

        {/* Clean Service Cards Grid (RightFix Style with Collapsible "What's Included:") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s, index) => {
            const IconComp = ICON_MAP[s.iconName as keyof typeof ICON_MAP] || Home;
            const cardImg = SERVICE_IMAGES[s.id] || "/images/rr.webp";
            const isExpanded = expandedCards[s.id] ?? true;

            return (
              <article
                key={s.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#111633]/40 transition-all duration-300 group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#0b0518]">
                    <img
                      src={cardImg}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/80 via-[#0b0518]/20 to-transparent" />

                    {/* Top Number Pill */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0b0518]/85 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        SERVICE · 0{index + 1}
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl bg-white text-[#0b0518] flex items-center justify-center shadow-lg">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-[#0b0518] group-hover:text-[#162044] transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mt-1">
                      {s.shortDesc}
                    </p>

                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {s.fullDesc}
                    </p>

                    {/* RightFix-Style Collapsible "What's Included:" Box */}
                    <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200/90 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleExpand(s.id)}
                        className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0b0518] flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#111633]" />
                          What&apos;s Included:
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                          {isExpanded ? "Hide" : "Show"}
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </span>
                      </button>

                      {isExpanded && (
                        <ul className="px-4 pb-3.5 pt-1 space-y-2 border-t border-slate-200/60">
                          {s.features.map((feat, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#111633] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-6 pb-6 pt-1 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => openQuoteModal(s.title)}
                    className="w-full py-3.5 px-4 rounded-lg bg-[#111633] hover:bg-[#1b244d] active:scale-[0.99] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <span>GET A QUOTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                    <Link
                      href={`/services#${s.id}`}
                      className="font-semibold hover:text-[#0b0518] underline underline-offset-2"
                    >
                      Full specifications
                    </Link>
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="font-bold text-[#111633] hover:underline"
                    >
                      Call {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Dark-Blue Consultation Banner */}
        <div className="mt-14 p-7 sm:p-10 rounded-2xl bg-[#0b0518] border border-white/10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center lg:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400 block mb-1">
              DIRECT EXPERT ADVICE · NO MIDDLEMEN
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Not sure whether to repair or replace your roof?
            </h3>
            <p className="text-slate-300 text-sm mt-1.5 max-w-2xl">
              Speak directly with Rhys McRae. With over 18 years on NSW roofs, Rhys provides honest assessments and practical options tailored to your property.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-[#0b0518] font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 fill-[#0b0518]" />
              <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#162044] hover:bg-[#1f2d5e] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
            >
              <span>REQUEST FREE ASSESSMENT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
