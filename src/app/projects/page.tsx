import React from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { Sparkles, MapPin, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export const metadata = {
  title: "Roofing Projects & Before/After Gallery | RMR Roofing",
  description: "See the difference a quality roofing project can make. Genuine before-and-after transformations by Rhys McRae Roofing Pty Ltd."
};

const GALLERY_ITEMS = [
  {
    title: "Terrigal Coastal Roof Replacement",
    location: "Terrigal · Central Coast NSW",
    service: "Tile-to-Colorbond Conversion",
    img: "/images/rr.webp",
    details: "Replaced 35-year-old crumbling terracotta tiles with Colorbond Monument corrugated steel, upgraded Anticon 60mm insulation, and installed high-capacity half-round gutters.",
    features: ["Colorbond Monument®", "Anticon 60mm insulation", "Custom ridge flashings"]
  },
  {
    title: "Newcastle Commercial Facility Re-Roof",
    location: "Newcastle Region",
    service: "Commercial Metal Roofing",
    img: "/images/pls.webp",
    details: "Large-scale replacement of degraded corrugated iron sheeting with heavy-duty commercial profile metal roofing, custom steel box gutters, and roof safety anchors.",
    features: ["Commercial grade Zincalume", "High-capacity box gutters", "Zero business downtime"]
  },
  {
    title: "Wamberal Coastal Architectural Cladding",
    location: "Wamberal · Central Coast NSW",
    service: "Architectural Standing Seam Cladding",
    img: "/images/lft.webp",
    details: "Contemporary facade renovation featuring concealed-fix standing seam Colorbond Surfmist panels, providing maximum coastal corrosion protection and sleek architectural aesthetic.",
    features: ["Standing Seam 25mm", "Colorbond Surfmist®", "Concealed fixings"]
  },
  {
    title: "Hills District Roof Leak Diagnostic & Repair",
    location: "Hills District · Sydney",
    service: "Roof Repairs & Flashing Replacement",
    img: "/images/roofr.webp",
    details: "Identified and resolved persistent multi-year roof leak around a complex valley and box gutter intersection. Installed custom zinc flashings and replaced corroded fasteners.",
    features: ["Leak permanently solved", "Custom fabricated flashings", "Fast on-site resolution"]
  },
  {
    title: "Central Coast Custom Residential Roof",
    location: "Erina · Central Coast NSW",
    service: "New Roof Installation",
    img: "/images/gal11.webp",
    details: "Architectural custom new build metal roofing installation featuring sharp angles, clean shadow lines, and integrated rainwater harvesting downpipes.",
    features: ["Precision pitched valleys", "Colorbond Basalt®", "100% Watertight guarantee"]
  },
  {
    title: "Colorbond Re-Roof & Facade Detail",
    location: "Gosford · Central Coast NSW",
    service: "Colorbond Roofing & Gutters",
    img: "/images/gal12.webp",
    details: "Comprehensive re-roofing including removal of degraded material, installation of high-capacity gutters, and modern fascia wraps.",
    features: ["High-flow quad gutters", "Colorbond Night Sky®", "Thermal batten upgrade"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-12 bg-[#091524]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <span className="text-[#38bdf8] font-bold text-xs uppercase tracking-widest">
          Proven Craftsmanship Across NSW
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 tracking-tight">
          Roofing Transformations & Gallery
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          See the difference a quality roofing project can make. Genuine on-site photography from RMR Roofing projects across Sydney, Newcastle and the Central Coast.
        </p>
      </div>

      {/* Interactive Before & After Slider */}
      <BeforeAfterSlider />

      {/* Case Studies / Recent Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Recent Projects by Rhys McRae Roofing
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            A small selection of residential and commercial projects delivered across the Central Coast, Newcastle, and Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-[#0c1c2e] border border-[#1a375e] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#066aab] transition-all shadow-xl group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c2e] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold bg-[#066aab] text-white px-2.5 py-1 rounded-md shadow">
                    {item.service}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-xs text-slate-400 mb-2 gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                    {item.details}
                  </p>

                  <div className="mt-4 space-y-1.5 pt-3 border-t border-[#163359]">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#163359]/60 mt-4">
                <span className="text-xs text-slate-400">Overseen by Rhys</span>
                <QuoteButton
                  service={item.title}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#38bdf8] hover:text-white"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3 h-3" />
                </QuoteButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
