"use client";

import React, { useState } from "react";
import { COLORBOND_COLORS, ColorbondColor } from "@/data/roofingData";
import { Check, Info, Sparkles, Sun } from "lucide-react";

export default function ColorbondVisualizer() {
  const [selectedColor, setSelectedColor] = useState<ColorbondColor>(COLORBOND_COLORS[0]);

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Colorbond® Steel Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Explore Colorbond Roofing Colours
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Explore genuine BlueScope Colorbond metal roofing options to suit the appearance and thermal needs of your property in Sydney, Newcastle or the Central Coast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {/* Swatch Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">Select a Colorbond® Shade</h3>
              <span className="text-xs text-slate-400">Manufactured for Australian Sun</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {COLORBOND_COLORS.map((c) => {
                const isSelected = selectedColor.name === c.name;
                return (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-28 group relative overflow-hidden ${
                      isSelected
                        ? "border-amber-500 ring-2 ring-amber-500/30 bg-slate-800 shadow-lg"
                        : "border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-800/50"
                    }`}
                  >
                    {/* Color Swatch Circle */}
                    <div className="flex items-center justify-between w-full">
                      <div
                        className="w-8 h-8 rounded-full border border-white/20 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: c.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                      </div>
                      <span className="text-[10px] font-semibold uppercase text-slate-500 group-hover:text-slate-400">
                        {c.category}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                        {c.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Need a physical swatch sample?</strong> Rhys McRae can bring genuine BlueScope Colorbond metal sample swatches directly to your on-site quote inspection on the Central Coast, Sydney or Newcastle.
              </p>
            </div>
          </div>

          {/* Live Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-6 space-y-6 shadow-xl">
              {/* Visual Simulated Roof Pitch */}
              <div
                className="w-full h-48 rounded-xl border border-slate-600/50 shadow-inner p-6 flex flex-col justify-between transition-colors duration-500 relative overflow-hidden"
                style={{ backgroundColor: selectedColor.hex }}
              >
                {/* Corrugated Texture Lines Overlay */}
                <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_14px,rgba(255,255,255,0.15)_14px,rgba(255,255,255,0.15)_16px)]" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                    Roof Pitch Preview
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-bold">
                    <Sun className="w-3 h-3" />
                    Thermatech®
                  </span>
                </div>

                <div className="relative z-10 bg-black/70 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    {selectedColor.name}
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {selectedColor.description}
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Material Standard</span>
                  <span className="text-white font-semibold">AS 1397 / AS 2728 BlueScope</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Thermal Technology</span>
                  <span className="text-white font-semibold">Thermatech® Solar Reflectance</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Recommended For</span>
                  <span className="text-white font-semibold">Central Coast & Coastal NSW</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Available Grades</span>
                  <span className="text-white font-semibold">Standard & Ultra (Coastal)</span>
                </div>
              </div>

              <a
                href="#quote"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs border border-slate-700 hover:border-amber-500/50 transition-all"
              >
                <span>Request Quote for {selectedColor.name}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
