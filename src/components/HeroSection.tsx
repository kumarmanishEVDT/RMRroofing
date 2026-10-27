import React from "react";
import Link from "next/link";
import { Phone, Shield, ArrowRight, CheckCircle2, Award, Clock, Star, MapPin } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-800">
      {/* Subtle architectural grid pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative gradient glow accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700/80 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Speak directly with Rhys · Residential & commercial roofing · Central Coast NSW
              </span>
            </div>

            {/* Main Headlines */}
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-400 mb-2">
                RMR ROOFING — RHYS MCRAE ROOFING PTY LTD
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Need a Reliable Roofer in <span className="text-amber-500">Sydney, Newcastle</span> or the <span className="text-amber-500">Central Coast?</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl font-bold text-slate-200">
              Get Quality Roofing Solutions With Rhys McRae Roofing Pty Ltd
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Whether you need a new metal roof, a complete roof replacement, roof repairs or commercial roofing services, RMR Roofing delivers professional roofing solutions tailored to your property.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left space-y-2 max-w-2xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                With over <strong className="text-white">18 years of industry experience</strong>, Rhys McRae brings hands-on expertise and a personal approach to every project.
              </p>
              <p className="text-xs sm:text-sm text-amber-300/90 font-medium">
                When you contact RMR Roofing, you deal directly with Rhys — from your initial enquiry through to discussing your roofing requirements.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>CALL RHYS NOW — {COMPANY_DETAILS.phone}</span>
              </a>

              <Link
                href="/quote"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm sm:text-base border border-slate-700 flex items-center justify-center gap-2 transition-all hover:border-slate-500"
              >
                <span>REQUEST A ROOFING QUOTE</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>NSW Lic #{COMPANY_DETAILS.licenceNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>18+ Years Exp</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Deal Direct With Rhys</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>5.0 Star Rated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Trust Card / Fast Quote Form Teaser */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              {/* Highlight ribbon */}
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
                Direct Contact Guarantee
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Rhys McRae</h2>
                  <p className="text-xs text-amber-400 font-semibold">Director & Licensed Master Roofer</p>
                  <p className="text-[11px] text-slate-400">NSW Licence #454185C</p>
                </div>
              </div>

              {/* Service Badges */}
              <div className="space-y-3 mb-6 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Residential Metal Roofing</span>
                  <span className="text-amber-400 font-semibold">Colorbond & Zincalume</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Commercial Roofing</span>
                  <span className="text-amber-400 font-semibold">Warehouses & Industrial</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Full Roof Replacements</span>
                  <span className="text-amber-400 font-semibold">Old Tile to Metal Upgrades</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Fascia & Gutters</span>
                  <span className="text-amber-400 font-semibold">Complete Drainage Systems</span>
                </div>
              </div>

              {/* Fast Quote Quick Link Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center space-y-3">
                <p className="text-xs text-amber-300 font-semibold">
                  Get in touch today to discuss your project and request a quote.
                </p>
                <Link
                  href="/quote"
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Request a Free Quote Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-[11px] text-slate-400 flex items-center justify-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
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
