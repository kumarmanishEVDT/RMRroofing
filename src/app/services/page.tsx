import React from "react";
import QuoteButton from "@/components/QuoteButton";
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

export const metadata = {
  title: "Roofing Services | RMR Roofing | Sydney, Newcastle & Central Coast",
  description: "Complete metal roofing services by Rhys McRae Roofing Pty Ltd. Residential, commercial, tile-to-metal replacement, Colorbond, cladding, gutters & repairs."
};

export default function ServicesPage() {
  return (
    <div className="py-14 bg-[#f5f5f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center">
        <span className="text-[#111633] font-extrabold text-xs uppercase tracking-[0.2em]">
          Rhys McRae Roofing Pty Ltd
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-[#0b0518] mt-2 tracking-tight">
          Professional Roofing Services
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From residential metal roofs to commercial facilities, tile replacements, and architectural cladding — every project is managed directly by Rhys McRae with 18+ years of hands-on experience.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="px-6 py-3.5 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 shadow-md"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
          </a>
          <QuoteButton className="px-6 py-3.5 rounded-lg bg-white border-2 border-[#111633] text-[#0b0518] font-extrabold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 shadow-xs hover:bg-slate-100">
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </QuoteButton>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {SERVICES.map((s, idx) => {
          const IconComp = ICON_MAP[s.iconName as keyof typeof ICON_MAP] || Home;
          const cardImg = SERVICE_IMAGES[s.id] || "/images/rr.webp";
          const isEven = idx % 2 === 0;

          return (
            <div
              key={s.id}
              id={s.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm hover:border-[#111633]/40 transition-all"
            >
              <div className={`lg:col-span-7 space-y-4 ${isEven ? "" : "lg:order-2"}`}>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0518] text-white flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#111633] uppercase tracking-wider">
                      Service 0{idx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0b0518]">
                      {s.title}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed">
                  {s.fullDesc}
                </p>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <strong className="text-[#0b0518]">Best Suited For:</strong> {s.recommendedFor}
                </div>

                <div className="pt-2">
                  <div className="text-xs font-extrabold text-[#0b0518] uppercase tracking-wider mb-2.5">
                    What&apos;s Included:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#111633] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xs">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={cardImg}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-white text-[#0b0518] text-xs font-bold border border-slate-200">
                      Deal Directly with Rhys McRae
                    </span>
                    <h3 className="text-lg font-black uppercase text-[#0b0518]">
                      Need {s.title}?
                    </h3>
                    <p className="text-xs text-slate-600">
                      Rhys provides personalized assessments and upfront quotes across the Central Coast, Sydney and Newcastle.
                    </p>

                    <div className="space-y-2 pt-2">
                      <QuoteButton
                        service={s.title}
                        className="w-full py-3.5 px-4 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <span>Get a Quote for This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </QuoteButton>
                      <a
                        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                        className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-slate-100 text-[#0b0518] font-bold text-xs flex items-center justify-center gap-2 border border-slate-300"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#111633]" />
                        <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
                      </a>
                    </div>

                    <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#111633]" />
                      <span>NSW Licence #{COMPANY_DETAILS.licenceNumber} Guaranteed</span>
                    </div>
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
