import React from "react";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { MapPin, Phone, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { SERVICE_AREAS, COMPANY_DETAILS } from "@/data/roofingData";

export const metadata = {
  title: "Service Areas | RMR Roofing | Central Coast, Sydney & Newcastle",
  description: "RMR Roofing services the Central Coast of NSW, Sydney metropolitan, and the Newcastle / Hunter regions. Contact Rhys McRae to confirm your location."
};

export default function ServiceAreasPage() {
  return (
    <div className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#066aab] font-bold text-xs uppercase tracking-widest">
            Coverage Across New South Wales
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2 tracking-tight">
            Our Roofing Service Areas
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            RMR Roofing identifies the <strong className="text-[#066aab]">Central Coast of NSW</strong> as its primary service area, while also undertaking residential and commercial metal roofing projects in Sydney and Newcastle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border-2 p-6 sm:p-8 flex flex-col justify-between bg-white ${
                area.isPrimary
                  ? "border-[#066aab] shadow-lg ring-1 ring-[#066aab]/20"
                  : "border-slate-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#066aab] flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  {area.isPrimary && (
                    <span className="px-3 py-1 rounded-full bg-[#066aab] text-white text-xs font-bold uppercase tracking-wider">
                      Primary Base
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {area.region}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {area.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
                    Key Suburbs Serviced:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.suburbs.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] text-slate-700 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <QuoteButton
                  service={`Service Area: ${area.region}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#066aab] hover:bg-[#05568c] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-center shadow-md shadow-[#066aab]/20"
                >
                  <span>Request Quote for {area.region}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </QuoteButton>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-white border-2 border-slate-200 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            Not sure if your suburb is covered?
          </h3>
          <p className="text-slate-600 text-sm">
            Contact Rhys directly to confirm whether your property location can be serviced. We regularly review unique projects beyond our standard radius.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#066aab] font-bold text-sm border-2 border-[#066aab] flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#066aab]" />
              <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
            </a>
            <QuoteButton
              className="px-6 py-3 rounded-xl bg-[#066aab] hover:bg-[#05568c] text-white font-bold text-sm shadow-md"
            >
              Submit Property Details
            </QuoteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
