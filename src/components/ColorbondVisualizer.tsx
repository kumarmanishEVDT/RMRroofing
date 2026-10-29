"use client";

import React, { useState } from "react";
import { COLORBOND_COLORS, ColorbondColor } from "@/data/roofingData";
import { Check, Info, Sun, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ColorbondVisualizer() {
  const [selectedColor, setSelectedColor] = useState<ColorbondColor>(COLORBOND_COLORS[0]);
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="visualizer" className="py-16 sm:py-24 bg-[#f5f5f2] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#111633]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#111633]">
                Genuine BlueScope Australian Steel
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase leading-[0.98] tracking-[-0.03em] text-[#0b0518]">
              Explore Genuine <span className="text-slate-500">Colorbond® Colours.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="border-l-2 border-[#111633] pl-5 text-sm sm:text-base leading-relaxed text-slate-600">
              Select a genuine Colorbond® shade below to preview its corrugated profile finish, thermal specifications, and architectural character.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-lg">
          {/* Left Swatch Selector */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-[#0b0518] font-black uppercase tracking-tight text-base sm:text-lg">
                Select a Colorbond® Shade
              </h3>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                Thermatech® Solar Rated
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {COLORBOND_COLORS.map((c) => {
                const isSelected = selectedColor.name === c.name;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between h-28 group relative overflow-hidden cursor-pointer ${
                      isSelected
                        ? "border-[#111633] ring-2 ring-[#111633]/20 bg-slate-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-[#111633]/40 hover:bg-slate-50/60"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className="w-8 h-8 rounded-full border border-slate-300 shadow-sm flex items-center justify-center"
                        style={{ backgroundColor: c.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600">
                        {c.category}
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-tight text-[#0b0518]">
                        {c.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#111633] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-[#0b0518] font-bold">Want to see real metal swatches in natural light?</strong>{" "}
                Rhys McRae brings genuine BlueScope Colorbond® steel sample swatches directly to your on-site inspection across the Central Coast, Sydney and Newcastle.
              </p>
            </div>
          </div>

          {/* Right Roof Profile Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200 bg-[#0b0518] text-white p-6 space-y-6 shadow-xl">
              <div
                className="w-full h-52 rounded-xl border border-white/15 shadow-inner p-5 flex flex-col justify-between transition-colors duration-500 relative overflow-hidden"
                style={{ backgroundColor: selectedColor.hex }}
              >
                {/* Corrugated Ribbing Overlay */}
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_14px,rgba(255,255,255,0.28)_14px,rgba(255,255,255,0.28)_16px)]" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/20">
                    Corrugated Profile Preview
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#111633] text-white text-[11px] font-bold border border-white/20 shadow-sm">
                    <Sun className="w-3 h-3" />
                    Thermatech®
                  </span>
                </div>

                <div className="relative z-10 bg-[#0b0518]/85 backdrop-blur-md p-3.5 rounded-lg border border-white/15">
                  <div className="text-xs text-white font-black uppercase tracking-wider flex items-center justify-between">
                    <span>{selectedColor.name}</span>
                    <span className="text-slate-300 text-[10px]">BlueScope Steel</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    {selectedColor.description}
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Australian Standard</span>
                  <span className="text-white font-semibold">AS 1397 / AS 2728 BlueScope</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Thermal Technology</span>
                  <span className="text-white font-semibold">Thermatech® Solar Reflectance</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Bushfire Compliance</span>
                  <span className="text-white font-semibold">Up to BAL-40 Rated</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Available Grades</span>
                  <span className="text-white font-semibold">Standard, Matt &amp; Ultra Coastal</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openQuoteModal(`Colorbond® Roofing - ${selectedColor.name}`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-white hover:bg-slate-100 active:scale-[0.99] text-[#0b0518] font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
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
