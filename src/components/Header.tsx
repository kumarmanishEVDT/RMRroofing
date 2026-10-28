"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield, MapPin, Menu, X, ArrowRight, Clock } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Bar - Blue & White */}
      <div className="bg-[#05436d] text-white text-xs py-2 px-4 sm:px-6 border-b border-[#043455]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Shield className="w-3.5 h-3.5 text-[#7dd3fc]" />
              NSW Contractor Lic #{COMPANY_DETAILS.licenceNumber}
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="flex items-center gap-1.5 text-slate-100">
              <Clock className="w-3.5 h-3.5 text-[#7dd3fc]" />
              Over {COMPANY_DETAILS.experienceYears} Years Experience
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="flex items-center gap-1.5 text-slate-100">
              <MapPin className="w-3.5 h-3.5 text-[#7dd3fc]" />
              Sydney · Newcastle · Central Coast NSW
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-200 hidden lg:inline">Speak Directly with Rhys:</span>
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white font-bold hover:text-[#7dd3fc] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#7dd3fc] fill-[#7dd3fc]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Crisp White with Blue accents */}
      <div className={`bg-white text-slate-800 border-b border-slate-200 transition-shadow ${isScrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/rmr_logo.webp" 
              alt="RMR Roofing - Rhys McRae Roofing Pty Ltd" 
              className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-[#066aab] transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-semibold text-slate-700 hover:text-[#066aab] transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-sm font-semibold text-slate-700 hover:text-[#066aab] transition-colors">
              Before & After
            </Link>
            <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-[#066aab] transition-colors">
              About Rhys
            </Link>
            <Link href="/service-areas" className="text-sm font-semibold text-slate-700 hover:text-[#066aab] transition-colors">
              Service Areas
            </Link>
            <Link href="/#reviews" className="text-sm font-semibold text-slate-700 hover:text-[#066aab] transition-colors">
              Reviews
            </Link>
            <Link href="/#faqs" className="text-sm font-semibold text-slate-700 hover:text-[#066aab] transition-colors">
              FAQs
            </Link>
          </nav>

          {/* Action CTAs - All Blue with Pop Modal */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#066aab] text-[#066aab] hover:bg-[#066aab] hover:text-white font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Rhys</span>
            </a>

            <button 
              type="button"
              onClick={() => openQuoteModal()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-bold text-sm shadow-md shadow-[#066aab]/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#066aab] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-3">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#066aab]"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#066aab]"
            >
              Roofing Services
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#066aab]"
            >
              Completed Projects
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#066aab]"
            >
              About Rhys McRae
            </Link>
            <Link 
              href="/service-areas" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#066aab]"
            >
              Service Areas
            </Link>
            <Link 
              href="/#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#066aab]"
            >
              Customer Reviews
            </Link>
            <Link 
              href="/#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#066aab]"
            >
              Frequently Asked Questions
            </Link>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a 
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#066aab]" />
                <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
              </a>
              <button 
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#066aab] hover:bg-[#05568c] active:scale-95 text-white font-bold text-sm shadow-md cursor-pointer transition-all"
              >
                <span>Request a Roofing Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
