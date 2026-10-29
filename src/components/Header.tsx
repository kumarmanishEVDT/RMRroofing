"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield, MapPin, Menu, X, FileText, Clock, ChevronRight } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Before & After", href: "/#transformations" },
  { label: "Why Choose Us", href: "/#why-rmr" },
  { label: "Our Process", href: "/#process" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "FAQs", href: "/#faqs" }
];

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
    <header className="sticky top-0 z-40 w-full max-w-full transition-all duration-300">
      {/* Top Credential Bar - Exact Logo Dark Blue (#0b0518) */}
      <div className="bg-[#0b0518] text-slate-300 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 font-semibold text-white whitespace-nowrap">
              <Shield className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              <span>NSW Lic #{COMPANY_DETAILS.licenceNumber}</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-slate-300 shrink-0 hidden xs:inline" />
              <span>{COMPANY_DETAILS.experienceYears} Yrs Exp</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              <span>Central Coast · Sydney · Newcastle</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-slate-400 hidden lg:inline">Speak Directly with Rhys:</span>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="flex items-center gap-1 text-white font-bold hover:text-slate-200 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Clean Architectural White */}
      <div
        className={`relative bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/90 transition-all ${
          isScrolled ? "shadow-md py-2.5" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-3">
          {/* Official RMR Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="relative flex items-center shrink-0 py-0.5 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            aria-label="RMR Roofing Home"
          >
            <img
              src="/rmr_logo.webp"
              alt="RMR Roofing - Rhys McRae Roofing Pty Ltd"
              className="h-8 sm:h-10 xl:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links (Visible on lg 1024px+ without wrapping) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#0b0518] transition-colors whitespace-nowrap py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-1.5 bg-[#111633] hover:bg-[#1b244d] text-white font-bold py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg text-xs sm:text-sm tracking-wide transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
              <span className="hidden xl:inline">Call</span>
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="hidden sm:inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-[#0b0518] border-2 border-[#111633] font-extrabold py-2 px-3.5 xl:px-4 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-[#111633] shrink-0" />
              <span>FREE QUOTE</span>
            </button>

            {/* Mobile/Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Floating Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 px-4 py-5 shadow-2xl max-h-[calc(100vh-96px)] overflow-y-auto z-50">
            <nav className="flex flex-col divide-y divide-slate-100">
              {[
                { label: "Home", href: "/#home" },
                { label: "Our Roofing Services", href: "/#services" },
                { label: "Before & After Transformations", href: "/#transformations" },
                { label: "Colorbond® Colour Visualizer", href: "/#visualizer" },
                { label: "Why Choose RMR Roofing", href: "/#why-rmr" },
                { label: "Completed Projects Gallery", href: "/#gallery" },
                { label: "Our Simple Process", href: "/#process" },
                { label: "Service Areas", href: "/#service-areas" },
                { label: "Customer Reviews", href: "/#reviews" },
                { label: "Frequently Asked Questions", href: "/#faqs" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-2 flex items-center justify-between text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800 hover:text-[#0b0518] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-4 mt-3 border-t border-slate-200 flex flex-col gap-2.5">
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
          </div>
        )}
      </div>
    </header>
  );
}
