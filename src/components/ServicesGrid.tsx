"use client";

import React from "react";
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
  CheckCircle2
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
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] border border-[#bae6fd] text-[#0369a1] text-xs font-bold uppercase tracking-wider mb-3">
            <Hammer className="w-3.5 h-3.5 text-[#066aab]" />
            Comprehensive Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Roofing Solutions for Your Property
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you're building, replacing an ageing roof or addressing a roofing problem, RMR Roofing can help you find the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const IconComp = ICON_MAP[s.iconName as keyof typeof ICON_MAP] || Home;
            const cardImg = SERVICE_IMAGES[s.id] || "/images/rr.webp";

            return (
              <div
                key={s.id}
                className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#066aab] hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={cardImg} 
                      alt={s.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#066aab] text-white flex items-center justify-center shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#066aab] transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {s.shortDesc}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                      {s.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#066aab] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <Link
                    href={`/services#${s.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#066aab] hover:text-[#05568c] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Not Sure Banner - Blue & White */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#05436d] to-[#066aab] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Not sure which service you need?
            </h3>
            <p className="text-slate-100 text-sm mt-1 max-w-xl">
              Speak directly with Rhys and explain what you're looking to achieve. We provide honest recommendations based on over 18 years on NSW roofs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#066aab] font-black text-sm flex items-center gap-2 shadow-lg transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-[#066aab]" />
              <span>DISCUSS WITH RHYS {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-5 py-3 rounded-xl bg-[#043455] hover:bg-[#03243c] active:scale-95 text-white font-bold text-sm border border-white/20 transition-all cursor-pointer"
            >
              <span>REQUEST A ROOFING QUOTE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
