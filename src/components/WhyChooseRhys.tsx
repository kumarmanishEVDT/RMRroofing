"use client";

import React from "react";
import { UserCheck, Award, ShieldCheck, Building2, Sparkles, FileCheck, ArrowRight } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

const WHY_CARDS = [
  {
    num: "01",
    title: "Direct Access to Rhys McRae",
    desc: "No salespeople or middlemen. Deal directly with Rhys, the director of RMR Roofing, from your initial phone call through quote calculation, on-site works, and final sign-off.",
    icon: UserCheck,
    dark: false
  },
  {
    num: "02",
    title: "18+ Years Industry Experience",
    desc: "Benefit from nearly two decades of specialised hands-on expertise across residential homes, tile-to-metal conversions, commercial buildings, and architectural cladding.",
    icon: Award,
    dark: false
  },
  {
    num: "03",
    title: "Licensed & Insured (#454185C)",
    desc: "RMR Roofing operates under NSW Contractor Licence #454185C, giving you total peace of mind that your roofing investment complies with AS 1562 & HB 39 standards.",
    icon: ShieldCheck,
    dark: false
  },
  {
    num: "04",
    title: "Central Coast, Sydney & Newcastle",
    desc: "Based on the Central Coast and servicing residential and commercial properties right across metropolitan Sydney, Newcastle, and the Hunter region.",
    icon: Building2,
    dark: false
  },
  {
    num: "05",
    title: "Clear Upfront Quotes",
    desc: "Receive clear, transparent information about the recommended roofing work, genuine BlueScope Colorbond® materials, and honest pricing with zero hidden surprises.",
    icon: FileCheck,
    dark: true
  },
  {
    num: "06",
    title: "Tidy Daily Site Clean-Up",
    desc: "Rhys and his crew are celebrated for being punctual, polite, respectful of your gardens, and performing a thorough clean and magnetic nail sweep every single afternoon.",
    icon: Sparkles,
    dark: false
  }
];

export default function WhyChooseRhys() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section
      id="why-rmr"
      className="relative overflow-hidden bg-[#f5f4f0] text-[#0b0518] border-b border-slate-200 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        {/* Top Editorial Header + Polygon Image */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          <div className="relative z-30 lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#111633]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#111633]">
                Why Choose RMR Roofing?
              </span>
            </div>

            <h2 className="max-w-[760px] text-3xl sm:text-5xl lg:text-[58px] font-black uppercase leading-[0.98] tracking-[-0.03em] text-[#0b0518]">
              Built With Quality.
              <br />
              <span className="text-slate-500">Overseen Directly</span>
              <br />
              <span className="text-[#111633]">By Rhys.</span>
            </h2>

            <div className="mt-5 max-w-[540px]">
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Choosing the right roofing contractor matters. Your roof protects everything beneath it, so you want an experienced tradesman who stands behind every sheet, flashing, and fastener installed.
              </p>
            </div>
          </div>

          {/* Right Architectural Polygon Image Frame */}
          <div className="relative lg:col-span-5">
            <div
              className="relative h-[280px] sm:h-[340px] lg:h-[360px] w-full overflow-hidden shadow-2xl bg-[#0b0518] rounded-2xl lg:rounded-none"
              style={{
                clipPath: "polygon(8% 0%, 100% 0%, 100% 86%, 92% 100%, 0% 100%, 0% 14%)"
              }}
            >
              <img
                src="/images/lft.webp"
                alt="Rhys McRae Roofing Quality Workmanship"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-300 block">
                  NSW CONTRACTOR LIC #{COMPANY_DETAILS.licenceNumber}
                </span>
                <span className="text-base sm:text-lg font-black uppercase tracking-tight">
                  18+ Years Hands-On Roofing Mastery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Cell Architectural Bordered Grid */}
        <div className="relative z-30 mt-12 sm:mt-16 border-t border-[#c9c9c3]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CARDS.map((card, idx) => {
              const IconComp = card.icon;
              const isRightEdgeLg = (idx + 1) % 3 === 0;
              const isRightEdgeMd = (idx + 1) % 2 === 0;

              return (
                <article
                  key={card.num}
                  className={`relative min-h-[250px] sm:min-h-[280px] border-b border-[#c9c9c3] px-5 sm:px-7 py-7 sm:py-8 lg:px-8 lg:py-9 flex flex-col justify-between transition-colors ${
                    !isRightEdgeLg ? "lg:border-r" : ""
                  } ${!isRightEdgeMd ? "md:border-r lg:border-r-0" : ""} ${
                    !isRightEdgeLg ? "lg:border-r" : ""
                  } ${
                    card.dark
                      ? "bg-[#0b0518] text-white"
                      : "bg-transparent hover:bg-white/60"
                  }`}
                >
                  <div>
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center">
                        <span
                          className={`text-base font-black tracking-[0.08em] ${
                            card.dark ? "text-slate-300" : "text-[#111633]"
                          }`}
                        >
                          {card.num}
                        </span>
                        <span
                          className={`ml-3 h-px w-12 ${
                            card.dark ? "bg-white/25" : "bg-[#bdbdb8]"
                          }`}
                        />
                      </div>

                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          card.dark
                            ? "bg-[#162044] text-white border border-white/15"
                            : "bg-white text-[#111633] border border-slate-200 shadow-xs"
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-8">
                      <h3
                        className={`text-lg sm:text-xl font-black uppercase leading-tight tracking-[-0.02em] ${
                          card.dark ? "text-white" : "text-[#0b0518]"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`mt-3 text-xs sm:text-sm leading-relaxed ${
                          card.dark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {card.dark ? (
                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => openQuoteModal()}
                        className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white hover:text-slate-200 cursor-pointer"
                      >
                        <span>Request Your Free Quote</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  ) : (
                    <span className="mt-6 block h-[2px] w-12 bg-[#111633]" />
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Architectural Caption Row */}
        <div className="flex flex-col gap-3 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#111633]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Quality / Experience / Direct Accountability
            </span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0b0518]">
            Rhys McRae Roofing Pty Ltd · Lic #{COMPANY_DETAILS.licenceNumber}
          </span>
        </div>
      </div>
    </section>
  );
}
