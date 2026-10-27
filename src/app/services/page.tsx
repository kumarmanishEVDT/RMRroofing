import React from "react";
import Link from "next/link";
import { SERVICES, COMPANY_DETAILS } from "@/data/roofingData";
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
  ShieldCheck
} from "lucide-react";

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

export const metadata = {
  title: "Roofing Services | RMR Roofing | Sydney, Newcastle & Central Coast",
  description: "Complete metal roofing services by Rhys McRae Roofing Pty Ltd. Residential, commercial, tile-to-metal replacement, Colorbond, cladding, gutters & repairs."
};

export default function ServicesPage() {
  return (
    <div className="py-12 bg-slate-950">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
          Rhys McRae Roofing Pty Ltd
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 tracking-tight">
          Professional Roofing Services
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From residential metal roofs to commercial facilities, tile replacements, and architectural cladding — every project is managed directly by Rhys McRae with 18+ years of hands-on experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
          </a>
          <Link
            href="/quote"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-white font-bold text-sm flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {SERVICES.map((s, idx) => {
          const IconComp = ICON_MAP[s.iconName as keyof typeof ICON_MAP] || Home;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={s.id}
              id={s.id}
              className={`rounded-2xl border border-slate-800 bg-slate-900/90 p-8 sm:p-10 scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx === 2 ? "border-amber-500/40 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20" : ""
              }`}
            >
              <div className={`lg:col-span-7 space-y-4 ${isEven ? "" : "lg:order-2"}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                      Service 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      {s.title}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-200 text-base leading-relaxed">
                  {s.fullDesc}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  <strong className="text-amber-400">Best Suited For:</strong> {s.recommendedFor}
                </div>

                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Included with this service:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Action Box */}
              <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                <div className="rounded-xl border border-slate-700 bg-slate-950 p-6 space-y-4 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-semibold border border-slate-800">
                    Deal Directly with Rhys McRae
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Need {s.title}?
                  </h3>
                  <p className="text-xs text-slate-400">
                    Rhys provides personalized assessments and upfront quotes for properties in Sydney, Newcastle and the Central Coast.
                  </p>

                  <div className="space-y-2 pt-2">
                    <Link
                      href={`/quote?service=${encodeURIComponent(s.title)}`}
                      className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <span>Get a Quote for This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-800"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
                    </a>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>NSW Licence #{COMPANY_DETAILS.licenceNumber} Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
