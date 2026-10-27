import React from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
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
    details: "Replaced 35-year-old crumbling terracotta tiles with Colorbond Monument corrugated steel, upgraded Anticon 60mm insulation, and installed high-capacity half-round gutters.",
    features: ["Colorbond Monument®", "Anticon 60mm insulation", "Custom ridge flashings"]
  },
  {
    title: "Newcastle Commercial Facility Re-Roof",
    location: "Newcastle Region",
    service: "Commercial Metal Roofing",
    details: "Large-scale replacement of degraded corrugated iron sheeting with heavy-duty commercial profile metal roofing, custom steel box gutters, and roof safety anchors.",
    features: ["Commercial grade Zincalume", "High-capacity box gutters", "Zero business downtime"]
  },
  {
    title: "Wamberal Coastal Architectural Cladding",
    location: "Wamberal · Central Coast NSW",
    service: "Architectural Standing Seam Cladding",
    details: "Contemporary facade renovation featuring concealed-fix standing seam Colorbond Surfmist panels, providing maximum coastal corrosion protection and sleek architectural aesthetic.",
    features: ["Standing Seam 25mm", "Colorbond Surfmist®", "Concealed fixings"]
  },
  {
    title: "Hills District Roof Leak Diagnostic & Repair",
    location: "Hills District · Sydney",
    service: "Roof Repairs & Flashing Replacement",
    details: "Identified and resolved persistent multi-year roof leak around a complex valley and box gutter intersection. Installed custom zinc flashings and replaced corroded fasteners.",
    features: ["Leak permanently solved", "Custom fabricated flashings", "Fast on-site resolution"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="py-12 bg-slate-950">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
          Proven Craftsmanship Across NSW
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 tracking-tight">
          Roofing Transformations & Gallery
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          See the difference a quality roofing project can make. An old, damaged or deteriorating roof can affect the appearance and protection of your property.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-amber-500 font-bold uppercase tracking-wider">
                    {item.service}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mt-3">
                  {item.details}
                </p>

                <div className="mt-5 space-y-1.5 pt-4 border-t border-slate-800">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Directly overseen by Rhys</span>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Request Similar Project</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Genuine Photos */}
        <div className="mt-12 p-5 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <p>
            <em>Photo Note:</em> In production, placeholders are substituted with genuine on-site high-resolution before-and-after project photography from RMR Roofing projects.
          </p>
        </div>
      </div>
    </div>
  );
}
