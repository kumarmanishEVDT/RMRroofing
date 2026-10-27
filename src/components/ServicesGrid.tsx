import React from "react";
import Link from "next/link";
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
  return (
    <section id="services" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Hammer className="w-3.5 h-3.5" />
            Comprehensive Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Roofing Solutions for Your Property
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether you're building, replacing an ageing roof or addressing a roofing problem, RMR Roofing can help you find the right solution.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const IconComp = ICON_MAP[s.iconName as keyof typeof ICON_MAP] || Home;
            return (
              <div
                key={s.id}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 hover:bg-slate-950 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 text-amber-400 flex items-center justify-center transition-all mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {s.shortDesc}
                  </p>

                  <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-800/80">
                    {s.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <Link
                    href={`/services#${s.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Not Sure Banner Callout */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Not sure which service you need?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Speak directly with Rhys and explain what you're looking to achieve. We provide honest recommendations based on over 18 years on NSW roofs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>DISCUSS YOUR ROOFING PROJECT WITH RHYS {COMPANY_DETAILS.phone}</span>
            </a>
            <Link
              href="/quote"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
            >
              <span>REQUEST A ROOFING QUOTE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
