"use client";

import React, { useState } from "react";
import { COLORBOND_COLORS, ColorbondColor } from "@/data/roofingData";
import { Check, Info, Sparkles, Sun, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ColorbondVisualizer() {
  const [selectedColor, setSelectedColor] = useState<ColorbondColor>(COLORBOND_COLORS[0]);
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#066aab]/10 border border-[#066aab]/20 text-[#066aab] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Colorbond® Steel Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Explore Genuine Colorbond® Roofing Colours
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Explore genuine BlueScope Colorbond metal roofing options to suit the appearance and thermal needs of your property across Sydney, Newcastle and the Central Coast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-900 font-bold text-lg">Select a Colorbond® Shade</h3>
              <span className="text-xs text-slate-500 font-medium">Manufactured for Australian Sun</span>
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
                        ? "border-[#066aab] ring-2 ring-[#066aab]/20 bg-blue-50/60 shadow-md"
                        : "border-slate-200 bg-white hover:border-[#066aab]/40 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className="w-8 h-8 rounded-full border border-slate-300 shadow-sm flex items-center justify-center"
                        style={{ backgroundColor: c.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                      </div>
                      <span className="text-[10px] font-semibold uppercase text-slate-500 group-hover:text-slate-700">
                        {c.category}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-[#066aab] transition-colors">
                        {c.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#066aab] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-950 font-bold">Need a physical swatch sample?</strong> Rhys McRae brings genuine BlueScope Colorbond metal sample swatches directly to your on-site quote inspection on the Central Coast, Sydney or Newcastle.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-6 shadow-md">
              <div
                className="w-full h-48 rounded-xl border border-slate-300 shadow-inner p-6 flex flex-col justify-between transition-colors duration-500 relative overflow-hidden"
                style={{ backgroundColor: selectedColor.hex }}
              >
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_14px,rgba(255,255,255,0.25)_14px,rgba(255,255,255,0.25)_16px)]" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                    Roof Pitch Preview
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#066aab] text-white text-[11px] font-bold shadow-sm">
                    <Sun className="w-3 h-3" />
                    Thermatech®
                  </span>
                </div>

                <div className="relative z-10 bg-black/75 backdrop-blur-md p-3 rounded-lg border border-white/10">
                  <div className="text-xs text-white font-bold uppercase tracking-wider flex items-center justify-between">
                    <span>{selectedColor.name}</span>
                    <span className="text-[#38bdf8] text-[10px]">Genuine Colorbond</span>
                  </div>
                  <div className="text-[11px] text-slate-200 mt-0.5">
                    {selectedColor.description}
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-600">Material Standard</span>
                  <span className="text-slate-900 font-semibold">AS 1397 / AS 2728 BlueScope</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-600">Thermal Technology</span>
                  <span className="text-slate-900 font-semibold">Thermatech® Solar Reflectance</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-600">Recommended For</span>
                  <span className="text-slate-900 font-semibold">Central Coast & Coastal NSW</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200">
                  <span className="text-slate-600">Available Grades</span>
                  <span className="text-slate-900 font-semibold">Standard & Ultra (Coastal)</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openQuoteModal(`Colorbond® Roofing - ${selectedColor.name}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <span>Request Quote for {selectedColor.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
