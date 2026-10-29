"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  SearchCheck,
  FileText,
  Hammer
} from "lucide-react";
import { COMPANY_DETAILS, SERVICE_AREAS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

const GALLERY_PROJECTS = [
  {
    id: 1,
    title: "Terrigal Coastal Tile-to-Colorbond® Conversion",
    location: "Terrigal, Central Coast",
    category: "Re-Roofing",
    specs: "Colorbond® Monument · Anticon 60mm · Half-Round Gutters",
    img: "/images/rr.webp"
  },
  {
    id: 2,
    title: "Commercial Industrial Warehouse Re-Roof",
    location: "Newcastle Region, NSW",
    category: "Commercial",
    specs: "Heavy-Duty Zincalume® · High-Capacity Box Gutters",
    img: "/images/pls.webp"
  },
  {
    id: 3,
    title: "Wamberal Architectural Standing Seam Cladding",
    location: "Wamberal, Central Coast",
    category: "Cladding",
    specs: "Standing Seam 25mm · Colorbond® Surfmist · Concealed Fix",
    img: "/images/lft.webp"
  },
  {
    id: 4,
    title: "Valley Flashing & Storm Leak Restoration",
    location: "Hills District, Sydney",
    category: "Repairs",
    specs: "Custom Valley Irons · Fastener Upgrade · Watertight Seal",
    img: "/images/roofr.webp"
  },
  {
    id: 5,
    title: "Architectural New Build Metal Roof System",
    location: "Erina, Central Coast",
    category: "New Roofs",
    specs: "Colorbond® Basalt · Custom Ridge Capping & Downpipes",
    img: "/images/gal11.webp"
  },
  {
    id: 6,
    title: "Full Coastal Roof Replacement & Fascia Upgrade",
    location: "Gosford, Central Coast",
    category: "Re-Roofing",
    specs: "Colorbond® Ultra Grade · Quad Gutters & Metal Fascia",
    img: "/images/gal12.webp"
  }
];

const CATEGORIES = ["All", "Re-Roofing", "Commercial", "Cladding", "Repairs", "New Roofs"];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Contact Rhys",
    desc: `Call Rhys directly on ${COMPANY_DETAILS.phone} or complete our quick online quote form.`,
    icon: Phone
  },
  {
    num: "02",
    title: "Tell Us About Your Roof",
    desc: "Let us know what roof issue you're experiencing or what new roofing project you require.",
    icon: MessageSquare
  },
  {
    num: "03",
    title: "We Assess The Work",
    desc: "Rhys inspects your roof, discusses suitable options, and brings genuine Colorbond® swatches.",
    icon: SearchCheck
  },
  {
    num: "04",
    title: "Receive Your Quote",
    desc: "You receive a clear, itemised quote outlining the recommended scope of work with no hidden fees.",
    icon: FileText
  },
  {
    num: "05",
    title: "Get Your Roof Fixed",
    desc: "Once approved, Rhys and his licensed team complete the work with daily site clean-ups.",
    icon: Hammer
  }
];

const AREA_IMAGES = ["/images/rr.webp", "/images/gal11.webp", "/images/pls.webp"];

export default function ProjectsAndProcessSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRegionIdx, setActiveRegionIdx] = useState(0);
  const { openQuoteModal } = useQuoteModal();

  const filteredProjects =
    activeCategory === "All"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  const currentArea = SERVICE_AREAS[activeRegionIdx] || SERVICE_AREAS[0];

  return (
    <>
      {/* 1. Completed Projects Gallery Section */}
      <section
        id="gallery"
        className="py-14 sm:py-20 lg:py-24 bg-[#0b0518] text-white border-b border-white/10 w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="text-xs font-extrabold text-slate-300 uppercase tracking-[0.2em] flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-white" />
                REAL PROJECTS. REAL HOMES. REAL RESULTS.
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-2.5 leading-tight">
                Take A Look At What We&apos;ve Built
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Browse completed residential and commercial roofing installations across the Central Coast, Sydney, and Newcastle.
            </p>
          </div>

          {/* Filter Pills (Wrapped cleanly, zero scrollbar) */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 sm:px-4 sm:py-2 text-xs font-extrabold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-white text-[#0b0518] shadow-md"
                      : "bg-[#111633] text-slate-300 hover:text-white border border-white/15"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openQuoteModal(project.title)}
                className="bg-[#111633]/70 border border-white/10 rounded-xl overflow-hidden group hover:border-white/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#0b0518]">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-[#0b0518]/90 backdrop-blur-sm px-3 py-1 rounded-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-slate-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 pt-1">{project.specs}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Gallery CTA Bar */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-[#111633] border border-white/15 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white">
                Have A Roofing Project Like This In Mind?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Rhys will inspect your roofline, assess your options, and provide a clear, itemised quote.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0b0518] font-black uppercase tracking-wider rounded-lg text-xs sm:text-sm transition-all whitespace-nowrap shadow-lg cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <span>GET MY FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Our Simple 5-Step Process Section */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#f5f5f2] py-14 sm:py-20 lg:py-24 text-[#0b0518] border-b border-slate-200 w-full"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end mb-10 sm:mb-14">
            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#111633]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#111633]">
                  Simple. Clear. Personal.
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-[0.98] tracking-[-0.03em] text-[#0b0518]">
                OUR SIMPLE <span className="text-slate-500">PROCESS.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="border-l-2 border-[#111633] pl-5 text-sm sm:text-base leading-relaxed text-slate-600">
                Upgrading or repairing your roof should be straightforward and stress-free. Here is how Rhys McRae takes your project from initial enquiry to finished roof.
              </p>
            </div>
          </div>

          {/* 5 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {PROCESS_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#111633] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0b0518] text-white font-black text-xs tracking-wider">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-slate-100 text-[#111633] flex items-center justify-center group-hover:bg-[#111633] group-hover:text-white transition-colors">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0b0518] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#111633]">
                    <span>Step {step.num}</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Servicing Central Coast, Sydney & Newcastle Section */}
      <section
        id="service-areas"
        className="py-14 sm:py-20 lg:py-24 bg-white text-[#0b0518] border-b border-slate-200 w-full overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#111633] mb-2">
              <MapPin className="w-4 h-4" />
              NEW SOUTH WALES COVERAGE
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0b0518]">
              SERVICING CENTRAL COAST, SYDNEY &amp; NEWCASTLE
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base">
              RMR Roofing provides licensed residential and commercial metal roofing solutions across three core NSW regions:
            </p>
          </div>

          {/* Region Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
            {SERVICE_AREAS.map((area, idx) => {
              const isSelected = activeRegionIdx === idx;
              return (
                <button
                  key={area.region}
                  type="button"
                  onClick={() => setActiveRegionIdx(idx)}
                  className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#0b0518] text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{area.region}</span>
                  {area.isPrimary && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full hidden xs:inline ${
                        isSelected ? "bg-white/20 text-white" : "bg-[#111633] text-white"
                      }`}
                    >
                      Primary Base
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Split Showcase Card for Selected Region */}
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[360px] bg-[#0b0518]">
              <img
                src={AREA_IMAGES[activeRegionIdx] || "/images/rr.webp"}
                alt={currentArea.region}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0518]/90 via-[#0b0518]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300 block">
                  RMR ROOFING SERVICE REGION
                </span>
                <p className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-0.5">
                  {currentArea.region}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0b0518]">
                    {currentArea.region}
                  </h3>
                  {currentArea.isPrimary && (
                    <span className="px-3 py-1 rounded-full bg-[#111633] text-white text-[11px] font-bold uppercase tracking-wider">
                      Home Base
                    </span>
                  )}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {currentArea.desc}
                </p>

                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                  Key Suburbs &amp; Surrounds:
                </div>

                <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
                  {currentArea.suburbs.map((suburb) => (
                    <li
                      key={suburb}
                      className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#111633] shrink-0" />
                      <span className="truncate">{suburb}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-semibold text-slate-500 text-center sm:text-left">
                  Not sure if we service your suburb? Give Rhys a quick call.
                </span>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-extrabold text-xs uppercase tracking-wider transition-all shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call Now: {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
