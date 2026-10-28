"use client";

import React from "react";
import Link from "next/link";
import { Phone, Shield, ArrowRight, CheckCircle2, Award, Clock, Star, MapPin } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative bg-gradient-to-b from-[#f0f7fc] via-white to-slate-50 py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge - Blue & White */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e0f2fe] border border-[#bae6fd] shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#066aab] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#0369a1]">
                Speak directly with Rhys · Residential & commercial roofing · Central Coast NSW
              </span>
            </div>

            {/* Main Headlines */}
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#066aab] mb-2">
                RMR ROOFING — RHYS MCRAE ROOFING PTY LTD
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Need a Reliable Roofer in <span className="text-[#066aab]">Sydney, Newcastle</span> or the <span className="text-[#066aab]">Central Coast?</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl font-bold text-slate-700">
              Get Quality Roofing Solutions With Rhys McRae Roofing Pty Ltd
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Whether you need a new metal roof, a complete roof replacement, roof repairs or commercial roofing services, RMR Roofing delivers professional roofing solutions tailored to your property.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#bae6fd] text-left space-y-2 max-w-2xl mx-auto lg:mx-0 shadow-sm">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                With over <strong className="text-[#066aab]">18 years of industry experience</strong>, Rhys McRae brings hands-on expertise and a personal approach to every project.
              </p>
              <p className="text-xs sm:text-sm text-[#0369a1] font-semibold">
                When you contact RMR Roofing, you deal directly with Rhys — from your initial enquiry through to discussing your roofing requirements.
              </p>
            </div>

            {/* Primary Action Buttons - All Blue Theme with Pop Effect */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#066aab]/30 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 fill-white text-white" />
                <span>CALL RHYS NOW — {COMPANY_DETAILS.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-[#f0f7fc] active:scale-95 text-[#066aab] font-bold text-sm sm:text-base border-2 border-[#066aab] flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <span>REQUEST A ROOFING QUOTE</span>
                <ArrowRight className="w-4 h-4 text-[#066aab]" />
              </button>
            </div>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#066aab] shrink-0" />
                <span>NSW Lic #{COMPANY_DETAILS.licenceNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Award className="w-4 h-4 text-[#066aab] shrink-0" />
                <span>18+ Years Exp</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-[#066aab] shrink-0" />
                <span>Direct Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Shield className="w-4 h-4 text-[#066aab] shrink-0" />
                <span>Fully Insured</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card with Real Image */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              {/* Actual Project Image */}
              <div className="relative h-64 rounded-xl overflow-hidden border border-slate-200 shadow-inner group">
                <img 
                  src="/images/rr.webp" 
                  alt="Colorbond Metal Roofing Project by Rhys McRae" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-xs font-bold text-[#7dd3fc]">Completed Project</span>
                  <span className="text-sm font-bold">Terrigal Coastal Roof Replacement</span>
                </div>
              </div>

              {/* Direct with Rhys Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-[#066aab] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  RM
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">Rhys McRae — Director & Licensed Roofer</h4>
                  <p className="text-[11px] text-slate-500">NSW Licence #454185C</p>
                </div>
              </div>

              {/* Fast Quote Quick Link Box */}
              <div className="p-4 rounded-xl bg-[#f0f7fc] border border-[#bae6fd] text-center space-y-3">
                <p className="text-xs text-[#0369a1] font-semibold">
                  Get in touch today to discuss your project and request a quote.
                </p>
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="w-full py-3 px-4 rounded-xl bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <span>Request a Free Quote Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-slate-500 flex items-center justify-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#066aab]" />
                  <span>Prompt response directly from Rhys</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
