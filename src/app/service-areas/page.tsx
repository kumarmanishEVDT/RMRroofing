import React from "react";
import QuoteButton from "@/components/QuoteButton";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SERVICE_AREAS, COMPANY_DETAILS } from "@/data/roofingData";

export const metadata = {
  title: "Service Areas | RMR Roofing | Central Coast, Sydney & Newcastle",
  description: "RMR Roofing services the Central Coast of NSW, Sydney metropolitan, and the Newcastle / Hunter regions. Contact Rhys McRae to confirm your location."
};

export default function ServiceAreasPage() {
  return (
    <div className="py-14 bg-[#f5f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#111633] font-extrabold text-xs uppercase tracking-[0.2em]">
            Coverage Across New South Wales
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase text-[#0b0518] mt-2 tracking-tight">
            Our Roofing Service Areas
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            RMR Roofing identifies the <strong className="text-[#0b0518]">Central Coast of NSW</strong> as its primary service area, while also undertaking residential and commercial metal roofing projects in Sydney and Newcastle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between bg-white ${
                area.isPrimary
                  ? "border-[#111633] shadow-xl ring-1 ring-[#111633]/20"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0518] text-white flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  {area.isPrimary && (
                    <span className="px-3 py-1 rounded-full bg-[#111633] text-white text-xs font-bold uppercase tracking-wider">
                      Primary Base
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-black uppercase text-[#0b0518] mb-2">
                  {area.region}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {area.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                    Key Suburbs Serviced:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {area.suburbs.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] text-slate-800 font-semibold"
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
                  className="w-full py-3 px-4 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 transition-all text-center shadow-md"
                >
                  <span>Request Quote for {area.region}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </QuoteButton>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-[#0b0518] text-white border border-white/10 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-xl font-black uppercase text-white">
            Not sure if your suburb is covered?
          </h3>
          <p className="text-slate-300 text-sm">
            Contact Rhys directly to confirm whether your property location can be serviced.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-[#0b0518] font-extrabold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
            </a>
            <QuoteButton className="px-6 py-3 rounded-lg bg-[#162044] hover:bg-[#1f2d5e] border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider">
              Submit Property Details
            </QuoteButton>
          </div>
        </div>
      </div>
    </div>
  );
}
