"use client";

import React, { useState } from "react";
import { ArrowLeftRight, CheckCircle, ShieldAlert, Sparkles, Building, Home, Layers } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ProjectDemo {
  id: string;
  name: string;
  location: string;
  type: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  beforeDesc: string;
  afterLabel: string;
  afterDesc: string;
  stats: string[];
}

const PROJECTS: ProjectDemo[] = [
  {
    id: "tile-to-colorbond",
    name: "Tile-to-Colorbond Transformation",
    location: "Terrigal · Central Coast NSW",
    type: "Residential Roof Replacement",
    beforeImg: "/images/rfr.webp",
    afterImg: "/images/rr.webp",
    beforeLabel: "Ageing 30-Year Tiles & Leaking Valleys",
    beforeDesc: "Persistent ceiling leaks, cracked mortar pointing, moss accumulation, and structural weight fatigue on timber rafters.",
    afterLabel: "Modern Colorbond® Monument Finish",
    afterDesc: "Lightweight high-tensile steel, Anticon thermal blanket, custom ridge capping, and 100% watertight coastal security.",
    stats: ["Up to 80% lighter than tile", "Zero cracked tile maintenance", "Thermatech solar reflective technology"]
  },
  {
    id: "commercial-reroof",
    name: "Commercial Depot Re-Roof",
    location: "Newcastle Region",
    type: "Commercial Metal Roofing",
    beforeImg: "/images/roofr.webp",
    afterImg: "/images/pls.webp",
    beforeLabel: "Rusted Corrugated Iron & Failing Valleys",
    beforeDesc: "Severe rust perforation, leaking fastener washers, and risk of internal inventory water damage.",
    afterLabel: "Heavy-Duty Commercial Zincalume Profile",
    afterDesc: "Long-length sheets with custom box gutters, safety mesh underlay, and full NSW compliance sign-off.",
    stats: ["Commercial profile installation", "Engineered stormwater drainage", "Minimal facility downtime"]
  },
  {
    id: "cladding-gutters",
    name: "Architectural Cladding & Gutters",
    location: "Sydney Northern Suburbs",
    type: "Architectural Upgrade",
    beforeImg: "/images/gal13.webp",
    afterImg: "/images/lft.webp",
    beforeLabel: "Rotting Timber Fascia & Sagging Gutters",
    beforeDesc: "Overflowing rainwater into eaves, rusted downpipes, and peeling exterior paint.",
    afterLabel: "Standing Seam Cladding & Half-Round Gutters",
    afterDesc: "Sharp modern lines, concealed fixing clips, Colorbond Surfmist cladding, and high-capacity drainage.",
    stats: ["Concealed fixing fasteners", "High-capacity water flow", "Modern street appeal increase"]
  }
];

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [selectedProject, setSelectedProject] = useState<ProjectDemo>(PROJECTS[0]);
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="transformations" className="py-20 bg-[#091524] border-y border-[#183153] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#066aab]/15 border border-[#066aab]/30 text-[#38bdf8] text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Transform Your Roof with RMR Roofing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            From an Ageing Roof to a <span className="text-[#38bdf8]">Quality Roofing Finish</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            An old, damaged or deteriorating roof can affect the appearance and protection of your property. At <strong className="text-white">Rhys McRae Roofing Pty Ltd</strong>, we help homeowners and businesses upgrade their roofs with professional roofing solutions tailored to their needs.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            With over 18 years of industry experience, Rhys can discuss your project, understand your requirements and help you find the right roofing solution for your property.
          </p>
        </div>

        {/* Project Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedProject.id === p.id
                  ? "bg-[#066aab] text-white shadow-lg shadow-[#066aab]/30 scale-105"
                  : "bg-[#0f233d] text-slate-300 hover:bg-[#153256] hover:text-white border border-[#1b3d6a]"
              }`}
            >
              {p.id === "tile-to-colorbond" && <Home className="w-4 h-4" />}
              {p.id === "commercial-reroof" && <Building className="w-4 h-4" />}
              {p.id === "cladding-gutters" && <Layers className="w-4 h-4" />}
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d1e34] rounded-2xl border border-[#1a375e] p-4 sm:p-8 shadow-2xl">
          {/* Visual Interactive Slider Area */}
          <div className="lg:col-span-7 select-none">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-[#22487b] shadow-xl bg-black group">
              {/* "After" Visual (Background full) */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={selectedProject.afterImg} 
                  alt={selectedProject.afterLabel} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-4 right-4 z-10 text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-[#066aab]/90 text-white font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                    <CheckCircle className="w-3.5 h-3.5 text-[#38bdf8]" />
                    AFTER: {selectedProject.afterLabel}
                  </span>
                </div>
              </div>

              {/* "Before" Visual (Clipped layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-[#38bdf8] transition-none"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="absolute inset-0 w-full h-full min-w-[320px]">
                  <img 
                    src={selectedProject.beforeImg} 
                    alt={selectedProject.beforeLabel} 
                    className="w-full h-full object-cover filter contrast-110 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 z-10 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-red-600/90 text-white font-bold border border-white/20 flex items-center gap-1.5 shadow-md">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      BEFORE: {selectedProject.beforeLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Handle Divider */}
              <div
                className="absolute top-0 bottom-0 pointer-events-none -ml-4 flex items-center justify-center z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-[#066aab] text-white flex items-center justify-center shadow-lg shadow-black/80 ring-4 ring-[#0d1e34]">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Range input overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Drag before and after comparison slider"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 mt-3 px-1">
              <span>← Slide Left for AFTER</span>
              <span className="font-semibold text-[#38bdf8]">Drag Slider to Compare Real Project</span>
              <span>Slide Right for BEFORE →</span>
            </div>
          </div>

          {/* Project Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                {selectedProject.type}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedProject.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <span>📍 {selectedProject.location}</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/40">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                {selectedProject.beforeLabel}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.beforeDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#066aab]/15 border border-[#066aab]/40">
              <div className="text-xs font-bold text-[#38bdf8] uppercase tracking-wide flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-3.5 h-3.5" />
                {selectedProject.afterLabel}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.afterDesc}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Project Highlights:
              </div>
              {selectedProject.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openQuoteModal(selectedProject.name)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-[#066aab] to-[#0a86d6] hover:from-[#05568c] hover:to-[#0873b8] active:scale-95 text-white font-bold text-sm shadow-lg shadow-[#066aab]/30 transition-all cursor-pointer"
              >
                <span>Request a Quote for Your Transformation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
