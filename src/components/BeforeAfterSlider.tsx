"use client";

import React, { useState } from "react";
import { ArrowLeftRight, CheckCircle, ShieldAlert, Sparkles, Building, Home, Layers } from "lucide-react";

interface ProjectDemo {
  id: string;
  name: string;
  location: string;
  type: string;
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
    beforeLabel: "Ageing 30-Year Concrete Tiles",
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

  return (
    <section id="transformations" className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Transform Your Roof with RMR Roofing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            From an Ageing Roof to a <span className="text-amber-500">Quality Roofing Finish</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            An old, damaged or deteriorating roof can affect the appearance and protection of your property. At <strong className="text-white">Rhys McRae Roofing Pty Ltd</strong>, we help homeowners and businesses upgrade their roofs with professional roofing solutions tailored to their needs.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            With over 18 years of industry experience, Rhys can discuss your project, understand your requirements and help you find the right roofing solution for your property.
          </p>
        </div>

        {/* Project Type Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedProject.id === p.id
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/80 rounded-2xl border border-slate-800 p-4 sm:p-8 shadow-2xl">
          {/* Visual Interactive Slider Area */}
          <div className="lg:col-span-7 select-none">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900 group">
              {/* "After" Visual (Background full) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-between p-6">
                {/* Modern Roof Graphic */}
                <div className="h-full flex flex-col justify-center items-center text-center relative z-10">
                  <div className="w-full max-w-md p-6 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 shadow-2xl">
                    {/* Architectural roof illustration */}
                    <div className="relative h-40 w-full bg-slate-950 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center">
                      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,#32353B,#32353B_10px,#1e293b_10px,#1e293b_20px)]" />
                      <div className="relative z-10 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
                          After RMR Installation
                        </span>
                        <p className="text-white font-black text-lg">Colorbond® Monument Profile</p>
                        <p className="text-xs text-slate-300">Clean, crisp, weather-sealed & modern</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-end relative z-10 text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    AFTER: Quality Finish
                  </span>
                </div>
              </div>

              {/* "Before" Visual (Clipped layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-stone-900 via-amber-950/40 to-stone-950 border-r-2 border-amber-500 transition-none"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="absolute inset-0 w-full h-full min-w-[320px] flex flex-col justify-between p-6">
                  {/* Weathered roof graphic */}
                  <div className="h-full flex flex-col justify-center items-center text-center relative z-10">
                    <div className="w-full max-w-md p-6 rounded-xl bg-stone-900/90 border border-stone-700/80 shadow-2xl">
                      <div className="relative h-40 w-full bg-stone-950 rounded-lg overflow-hidden border border-stone-800 flex items-center justify-center">
                        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:12px_12px]" />
                        <div className="relative z-10 text-center">
                          <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-bold text-xs uppercase tracking-wider mb-1">
                            Before RMR Project
                          </span>
                          <p className="text-stone-300 font-bold text-lg">Ageing, Leaking & Cracked</p>
                          <p className="text-xs text-stone-400">Degraded tiles, water seepage, faded</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end relative z-10 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 font-bold border border-red-500/30 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      BEFORE: Deteriorating
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Handle Divider */}
              <div
                className="absolute top-0 bottom-0 pointer-events-none -ml-4 flex items-center justify-center z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg shadow-black/80 ring-4 ring-slate-950">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              {/* Range input overlay for smooth touch and drag */}
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

            {/* Slider control helper */}
            <div className="flex items-center justify-between text-xs text-slate-400 mt-3 px-1">
              <span>← Slide Left for AFTER</span>
              <span className="font-semibold text-amber-400">Drag Slider to Compare</span>
              <span>Slide Right for BEFORE →</span>
            </div>
          </div>

          {/* Project Details & Value Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                {selectedProject.type}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedProject.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <span>📍 {selectedProject.location}</span>
              </p>
            </div>

            {/* Before state breakdown */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                {selectedProject.beforeLabel}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.beforeDesc}
              </p>
            </div>

            {/* After state breakdown */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                <CheckCircle className="w-3.5 h-3.5" />
                {selectedProject.afterLabel}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.afterDesc}
              </p>
            </div>

            {/* Feature bullets */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Key Project Highlights:
              </div>
              {selectedProject.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href="#quote"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Request a Quote for Your Transformation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
