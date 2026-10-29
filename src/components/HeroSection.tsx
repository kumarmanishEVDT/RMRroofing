"use client";

import React from "react";
import { Phone, Shield, CheckCircle2, Award, Star, MapPin, FileText, UserCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <>
      {/* Full-Bleed Hero Section (Styled after SH Pergolas & RightFix with Exact Logo Dark Blue #0b0518) */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-105px)] flex items-center bg-[#0b0518] text-white overflow-hidden"
      >
        {/* Background Roofing Image & Directional Logo-Dark-Blue Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/rr.webp"
            alt="RMR Roofing Colorbond Metal Roof Installation"
            className="w-full h-full object-cover object-center md:object-right brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0518]/95 via-[#0b0518]/80 via-55% to-[#0b0518]/25" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0518] to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="max-w-2xl drop-shadow-md">
            {/* Top Google Rating & Licence Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium mb-5 text-slate-200 bg-[#111633]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              <span className="font-black text-white bg-white/15 w-5 h-5 rounded-full inline-flex items-center justify-center text-xs">
                G
              </span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star Rated</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-200">Central Coast, Sydney &amp; Newcastle</span>
            </div>

            {/* Bold Uppercase Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.06] mb-4 drop-shadow-lg">
              <span className="text-slate-300 block text-xl sm:text-2xl lg:text-3xl mb-1.5 tracking-normal">
                Roof Problems or Planning an Upgrade?
              </span>
              METAL ROOFING, RE-ROOFING &amp; REPAIRS DONE RIGHT.
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 mb-3 leading-snug">
              Quality Residential &amp; Commercial Metal Roofing With Rhys McRae Roofing Pty Ltd
            </p>

            <p className="text-sm sm:text-base text-slate-300 mb-7 leading-relaxed">
              From leaking roofs and tile-to-Colorbond® replacements to new builds, architectural cladding and guttering — deal directly with{" "}
              <strong className="text-white">Rhys McRae</strong> (18+ years experience, NSW Lic #{COMPANY_DETAILS.licenceNumber}) from your first phone call through to project handover.
            </p>

            {/* Primary Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="flex cursor-pointer items-center justify-center gap-2.5 bg-white hover:bg-slate-100 text-[#0b0518] font-black py-4 px-7 rounded-lg text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl"
              >
                <FileText className="w-5 h-5 text-[#111633]" />
                <span>GET A FREE QUOTE</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 bg-[#162044] hover:bg-[#1f2d5e] text-white border border-white/25 font-bold py-4 px-7 rounded-lg text-sm sm:text-base transition-all shadow-lg"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            {/* Checkmark Proof Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-5 border-t border-white/15 mb-7">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="font-medium">NSW Lic #{COMPANY_DETAILS.licenceNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="font-medium">18+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="font-medium">Deal Direct With Rhys</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="font-medium">Genuine Colorbond® Steel</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="font-medium">Daily Site Clean-Up</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span className="font-medium">Clear Itemised Quotes</span>
              </div>
            </div>

            {/* Embedded Verified Homeowner Review Box (Like SH Pergolas Hero) */}
            <div className="relative p-5 sm:p-6 bg-[#0b0518]/85 backdrop-blur-md border border-white/15 border-l-4 border-l-white rounded-r-xl text-white max-w-xl shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Verified Google Review
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                “Rhys was fantastic from start to finish. We replaced our 35-year-old crumbling concrete tiles with Colorbond Monument. Dealing directly with Rhys gave us so much confidence — punctual, polite, and left the yard spotless every single afternoon.”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1b244d] border border-white/20 flex items-center justify-center font-bold text-white text-xs">
                  MS
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-white block leading-tight">
                    Mark &amp; Sarah Henderson
                  </span>
                  <span className="text-[11px] text-slate-400">Terrigal, Central Coast NSW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Column Credentials Strip Below Hero (Like SH Pergolas) */}
      <div className="bg-[#0b0518] border-y border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 border-white/10 lg:border-r last:border-r-0 lg:pr-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white text-[#0b0518] font-bold">
                <Star className="w-5 h-5 fill-[#0b0518]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight leading-tight">
                  5.0 Google Rating
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                  Verified NSW Clients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-white/10 lg:border-r last:border-r-0 lg:pr-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight leading-tight">
                  NSW Lic: {COMPANY_DETAILS.licenceNumber}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                  Fully Licensed &amp; Insured
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-white/10 lg:border-r last:border-r-0 lg:pr-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight leading-tight">
                  18+ Years Experience
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                  Specialist Metal Roofer
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-white/10 lg:border-r last:border-r-0 lg:pr-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight leading-tight">
                  Direct With Rhys
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                  No Sales Middlemen
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-white/10 lg:border-r last:border-r-0 lg:pr-6 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#162044] text-white border border-white/15">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight leading-tight">
                  3 Core Regions
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-snug">
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
