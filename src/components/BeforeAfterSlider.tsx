"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeftRight, CheckCircle2, Home, Layers, ArrowRight } from "lucide-react";
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
    id: "killarney-vale",
    name: "Killarney Vale · Tile-to-Colorbond®",
    location: "Killarney Vale · Central Coast NSW",
    type: "Residential Roof Replacement",
    beforeImg: "/images/before-after/Killany vale Before.JPG",
    afterImg: "/images/before-after/Killarny vale After.JPG",
    beforeLabel: "BEFORE: AGEING TILES",
    beforeDesc: "Weathered concrete tiles, worn pointing, and heavy structural load on timber rafters.",
    afterLabel: "AFTER: COLORBOND® MONUMENT",
    afterDesc: "Lightweight high-tensile steel, Anticon™ thermal blanket, custom flashings, and 100% watertight coastal security.",
    stats: ["Up to 80% lighter than tile", "Zero cracked tile maintenance", "Thermatech® solar reflective steel"]
  },
  {
    id: "woy-woy-bay",
    name: "Woy Woy Bay · Metal Re-Roof",
    location: "Woy Woy Bay · Central Coast NSW",
    type: "Full Metal Roof & Veranda Upgrade",
    beforeImg: "/images/before-after/Woy Woy Bay Before.JPG",
    afterImg: "/images/before-after/Woy Woy Bay After.JPG",
    beforeLabel: "BEFORE: WEATHERED & LEAKING IRON",
    beforeDesc: "Severe corrosion, emergency tarp coverings, and water ingress across the main roof and bullnose veranda.",
    afterLabel: "AFTER: COLORBOND® SURFMIST",
    afterDesc: "Crisp new Colorbond® corrugated sheets, curved bullnose veranda roofing, custom ridge capping, and watertight flashings.",
    stats: ["Coastal-grade corrosion resistance", "Curved bullnose veranda precision", "Complete storm & leak protection"]
  }
];

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { openQuoteModal } = useQuoteModal();

  const selectedProject = PROJECTS[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      id="transformations"
      className="py-14 sm:py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row + Project Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[2px] w-8 bg-[#111633]" />
              <span className="text-xs font-extrabold text-[#111633] uppercase tracking-[0.2em]">
                REAL NSW ROOF MAKEOVERS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0b0518] leading-[1.06] uppercase">
              From An Ageing Roof... <br className="hidden sm:inline" />
              <span className="text-slate-500">To Architectural Perfection.</span>
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Drag the interactive slider below to see how Rhys McRae Roofing turns weathered, leaking roofs into durable, high-value metal roofing systems.
            </p>
          </div>

          {/* Project Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {PROJECTS.map((p, idx) => {
              const isSelected = selectedProject.id === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-[#111633] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {p.id === "killarney-vale" && <Home className="w-3.5 h-3.5 shrink-0" />}
                  {p.id === "woy-woy-bay" && <Layers className="w-3.5 h-3.5 shrink-0" />}
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-Width Interactive Slider Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-2xl bg-[#0b0518] select-none w-full">
          <div className="relative h-[260px] xs:h-[320px] sm:h-[440px] md:h-[520px] w-full cursor-ew-resize overflow-hidden">
            {/* AFTER Image (Full Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={selectedProject.afterImg}
                alt={selectedProject.afterLabel}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/65 via-transparent to-black/20" />
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-[#111633] text-white border border-white/25 font-extrabold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs tracking-wider uppercase shadow-lg z-10">
                {selectedProject.afterLabel}
              </div>
            </div>

            {/* BEFORE Image (Clipped Polygon Layer) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
              }}
            >
              <img
                src={selectedProject.beforeImg}
                alt={selectedProject.beforeLabel}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/65 via-transparent to-black/20" />
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-black/85 text-slate-200 border border-white/20 font-extrabold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs tracking-wider uppercase shadow-lg z-10">
                {selectedProject.beforeLabel}
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#111633] border-2 border-white text-white shadow-2xl flex items-center justify-center font-bold">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Invisible Range Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full m-0 opacity-0 cursor-ew-resize z-30"
              aria-label="Drag before and after comparison slider"
            />
          </div>

          {/* Bottom Bar Inside Slider Frame */}
          <div className="bg-[#0b0518] py-3 px-4 sm:px-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left text-xs text-slate-300">
            <span className="font-bold text-white">
              {selectedProject.name} — <span className="text-slate-400 font-normal">{selectedProject.location}</span>
            </span>
            <span className="text-[11px] uppercase tracking-widest text-slate-300 font-bold">
              ◄ Drag slider left &amp; right to compare ►
            </span>
          </div>
        </div>

        {/* Dark-Blue Outcome Callout Box Below Slider */}
        <div className="mt-8 sm:mt-10 bg-[#0b0518] border border-white/10 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-lg sm:text-2xl font-black uppercase text-white tracking-tight">
                Imagine stepping outside and having a roof that gives you:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {[
                  "Complete peace of mind during heavy coastal storms",
                  "Crisp, modern architectural street appeal",
                  "Zero cracked concrete tiles or crumbling mortar",
                  "Cooler summer interiors with Thermatech® steel",
                  "High-capacity gutters that never overflow into eaves",
                  "Manufacturer-backed BlueScope steel warranties"
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 sm:bg-transparent p-2.5 sm:p-0 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs sm:text-sm pt-1">
                Your roof doesn&apos;t need to stay weathered or leaking. Deal directly with Rhys McRae to upgrade it properly.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                type="button"
                onClick={() => openQuoteModal(selectedProject.name)}
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-slate-100 text-[#0b0518] font-black uppercase tracking-wider rounded-lg text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>START MY ROOF PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 mt-2 text-center">
                Free on-site inspection &amp; itemised quote from Rhys
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
