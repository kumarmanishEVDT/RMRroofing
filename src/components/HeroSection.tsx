"use client";

import React from "react";
import { Phone, Shield, CheckCircle2, Award, Star, MapPin, FileText, UserCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* Full-Bleed Hero Section (Exact Logo Dark Blue #0b0518) */}
      <section
        id="home"
        className="relative min-h-[560px] lg:min-h-[calc(100vh-100px)] flex items-center bg-[#0b0518] text-white overflow-hidden w-full"
      >
        {/* Subtle Ambient Background & Directional Logo-Dark-Blue Gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/image.webp"
            alt=""
            className="w-full h-full object-cover object-center opacity-15 blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0518] via-[#0b0518]/95 to-[#0b0518]/85" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0518] to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Headline, CTAs, Proof & Review */}
            <div className="lg:col-span-7 drop-shadow-md">
              {/* Top Google Rating & Licence Pill */}
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium mb-4 sm:mb-5 text-slate-200 bg-[#111633]/90 backdrop-blur-md px-3 py-1.5 rounded-xl sm:rounded-full border border-white/15">
                <span className="font-black text-white bg-white/15 w-4 h-4 sm:w-5 sm:h-5 rounded-full inline-flex items-center justify-center text-[10px] sm:text-xs shrink-0">
                  G
                </span>
                <div className="flex text-amber-400 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 Star Rated</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-200">Central Coast, Sydney &amp; Newcastle</span>
              </div>

              {/* Bold Uppercase Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-black uppercase tracking-tight text-white leading-[1.08] mb-4 drop-shadow-lg">
                <span className="text-slate-300 block text-base sm:text-xl lg:text-2xl mb-1.5 tracking-normal font-extrabold">
                  Roof Problems or Planning an Upgrade?
                </span>
                METAL ROOFING, RE-ROOFING &amp; REPAIRS DONE RIGHT.
              </h1>

              <p className="text-sm sm:text-lg font-semibold text-slate-100 mb-2.5 leading-snug">
                Quality Residential &amp; Commercial Metal Roofing With Rhys McRae Roofing Pty Ltd
              </p>

              <p className="text-xs sm:text-base text-slate-300 mb-6 leading-relaxed">
                From leaking roofs and tile-to-Colorbond® replacements to new builds, architectural cladding and guttering — deal directly with{" "}
                <strong className="text-white">Rhys McRae</strong> (18+ years experience, NSW Lic #{COMPANY_DETAILS.licenceNumber}) from your first phone call through to project handover.
              </p>

              {/* Primary Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-7">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="flex cursor-pointer items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0b0518] font-black py-3.5 px-6 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl"
                >
                  <FileText className="w-4 h-4 text-[#111633] shrink-0" />
                  <span>GET A FREE QUOTE</span>
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#162044] hover:bg-[#1f2d5e] text-white border border-white/25 font-bold py-3.5 px-6 rounded-lg text-xs sm:text-sm transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4 fill-current shrink-0" />
                  <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
                </a>
              </div>

              {/* Checkmark Proof Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-white/15 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="font-medium">NSW Lic #{COMPANY_DETAILS.licenceNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="font-medium">18+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="font-medium">Deal Direct With Rhys</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="font-medium">Genuine Colorbond® Steel</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="font-medium">Daily Site Clean-Up</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                  <span className="font-medium">Clear Itemised Quotes</span>
                </div>
              </div>

              {/* Embedded Verified Homeowner Review Box */}
              <div className="relative p-4 sm:p-5 bg-[#111633]/80 backdrop-blur-md border border-white/15 border-l-4 border-l-white rounded-r-xl text-white shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Verified Google Review
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-3">
                  “Rhys was fantastic from start to finish. We replaced our 35-year-old crumbling concrete tiles with Colorbond Monument. Dealing directly with Rhys gave us so much confidence — punctual, polite, and left the yard spotless every single afternoon.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1b244d] border border-white/20 flex items-center justify-center font-bold text-white text-xs shrink-0">
                    MS
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block leading-tight">
                      Mark &amp; Sarah Henderson
                    </span>
                    <span className="text-[11px] text-slate-400">Terrigal, Central Coast NSW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Photo (/images/image.webp - Rhys McRae & RMR Truck) */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/4] sm:aspect-[16/14] lg:aspect-[4/4] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#111633]">
                <img
                  src="/images/image.webp"
                  alt="Rhys McRae - Director of RMR Roofing Services (0432 589 939, Lic No. 454185C)"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b0518]/90 via-[#0b0518]/40 to-transparent pointer-events-none" />

                {/* Bottom Caption Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#0b0518]/90 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white shadow-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#162044] border border-white/20 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-black uppercase tracking-tight text-white truncate">
                        Rhys McRae — Director &amp; Roofer
                      </div>
                      <div className="text-[11px] text-slate-300 truncate">
                        NSW Lic #{COMPANY_DETAILS.licenceNumber} · 18+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Column Credentials Strip Below Hero */}
      <div className="bg-[#0b0518] border-y border-white/10 py-5 sm:py-6 px-4 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="flex items-center gap-3 border-white/10 lg:border-r lg:pr-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 bg-white text-[#0b0518] font-bold">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#0b0518]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                  5.0 Google Rating
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Verified NSW Clients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-white/10 lg:border-r lg:pr-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                  NSW Lic: {COMPANY_DETAILS.licenceNumber}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Fully Licensed &amp; Insured
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-white/10 lg:border-r lg:pr-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                  18+ Years Experience
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Specialist Metal Roofer
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-white/10 lg:border-r lg:pr-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                  Direct With Rhys
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  No Sales Middlemen
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 xs:col-span-2 md:col-span-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                  3 Core Regions
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Central Coast · Sydney · Newcastle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
