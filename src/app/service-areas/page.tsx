import React from "react";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { SERVICE_AREAS, COMPANY_DETAILS } from "@/data/roofingData";

export const metadata = {
  title: "Service Areas | RMR Roofing | Central Coast, Sydney & Newcastle",
  description: "RMR Roofing services the Central Coast of NSW, Sydney metropolitan, and the Newcastle / Hunter regions. Contact Rhys McRae to confirm your location."
};

export default function ServiceAreasPage() {
  return (
    <div className="py-14 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
            Coverage Across New South Wales
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 tracking-tight">
            Our Roofing Service Areas
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            RMR Roofing identifies the <strong className="text-white">Central Coast of NSW</strong> as its primary service area, while also undertaking residential and commercial metal roofing projects in Sydney and Newcastle.
          </p>
        </div>

        {/* Areas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between ${
                area.isPrimary
                  ? "bg-slate-900 border-amber-500/50 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/20"
                  : "bg-slate-900/70 border-slate-800"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  {area.isPrimary && (
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
                      Primary Base
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  {area.region}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {area.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    Key Suburbs Serviced:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.suburbs.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] text-slate-300"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col gap-2">
                <Link
                  href={`/quote?area=${encodeURIComponent(area.region)}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                >
                  <span>Request Quote for {area.region}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Location Confirmation Banner */}
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white">
            Not sure if your suburb is covered?
          </h3>
          <p className="text-slate-300 text-sm">
            Contact Rhys directly to confirm whether your property location can be serviced. We regularly review unique projects beyond our standard radius.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
            </a>
            <Link
              href="/quote"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm"
            >
              Submit Property Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
