"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield, MapPin, Menu, X, FileText, Clock } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Credential Bar - Exact Logo Dark Blue (#0b0518) */}
      <div className="bg-[#0b0518] text-slate-300 text-[11px] sm:text-xs py-2 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Shield className="w-3.5 h-3.5 text-slate-300" />
              NSW Contractor Lic #{COMPANY_DETAILS.licenceNumber}
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-300" />
              {COMPANY_DETAILS.experienceYears} Years Experience
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-300" />
              Central Coast · Sydney · Newcastle
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-slate-400">Deal Directly with Rhys McRae:</span>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-bold hover:text-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Clean Architectural White */}
      <div
        className={`bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/90 transition-all ${
          isScrolled ? "shadow-md py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Official RMR Logo */}
          <Link
            href="/"
            className="relative flex items-center shrink-0 py-1 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            aria-label="RMR Roofing Home"
          >
            <img
              src="/rmr_logo.webp"
              alt="RMR Roofing - Rhys McRae Roofing Pty Ltd"
              className="h-10 sm:h-12 lg:h-13 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links (Clean like RightFix & SH Pergolas) */}
          <nav className="hidden xl:flex items-center gap-7">
            <Link
              href="/#home"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#transformations"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              Before &amp; After
            </Link>
            <Link
              href="/#why-rmr"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="/#process"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              Our Process
            </Link>
            <Link
              href="/#service-areas"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/#reviews"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/#faqs"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors"
            >
              FAQs
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#111633] hover:bg-[#1b244d] text-white font-bold py-2.5 px-3.5 sm:px-5 rounded-lg text-xs sm:text-sm tracking-wide transition-all shadow-sm shrink-0"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
              <span className="hidden md:inline">Call Rhys</span>
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="hidden sm:inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0b0518] border-2 border-[#111633] font-extrabold py-2 px-4 lg:px-5 rounded-lg text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shrink-0"
            >
              <FileText className="w-4 h-4 text-[#111633]" />
              <span>GET A FREE QUOTE</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", href: "/#home" },
              { label: "Our Roofing Services", href: "/#services" },
              { label: "Before & After Transformations", href: "/#transformations" },
              { label: "Colorbond® Colour Visualizer", href: "/#visualizer" },
              { label: "Why Choose RMR Roofing", href: "/#why-rmr" },
              { label: "Completed Projects Gallery", href: "/#gallery" },
              { label: "Our Simple Process", href: "/#process" },
              { label: "Service Areas (Central Coast, Sydney, Newcastle)", href: "/#service-areas" },
              { label: "Customer Reviews", href: "/#reviews" },
              { label: "Frequently Asked Questions", href: "/#faqs" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide text-slate-800 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#111633] text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-slate-100 border-2 border-[#111633] text-[#0b0518] font-extrabold text-sm uppercase tracking-wider cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>GET A FREE QUOTE</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
