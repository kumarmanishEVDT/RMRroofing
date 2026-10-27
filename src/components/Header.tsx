"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield, MapPin, Menu, X, ArrowRight, Clock } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800/80 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <Shield className="w-3.5 h-3.5" />
              NSW Contractor Lic #{COMPANY_DETAILS.licenceNumber}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Over {COMPANY_DETAILS.experienceYears} Years Experience
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Sydney · Newcastle · Central Coast NSW
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden lg:inline">Speak Directly with Rhys:</span>
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white font-semibold hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-shadow ${isScrolled ? "shadow-xl shadow-black/40" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/20 group-hover:scale-105 transition-transform">
              <svg className="w-7 h-7 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 10.5 12 3l9 7.5" />
                <path d="m5 9 7-6 7 6v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z" />
                <path d="M9 21v-7h6v7" />
              </svg>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black tracking-tight text-white">RMR</span>
                <span className="text-2xl font-bold tracking-tight text-amber-500">ROOFING</span>
              </div>
              <p className="text-[11px] font-medium tracking-wider uppercase text-slate-400 -mt-1">
                Rhys McRae Roofing Pty Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
              Before & After
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
              About Rhys
            </Link>
            <Link href="/service-areas" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
              Service Areas
            </Link>
            <Link href="/#reviews" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
              Reviews
            </Link>
            <Link href="/#faqs" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">
              FAQs
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:border-slate-600 text-white text-sm font-medium transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Call Rhys</span>
            </a>

            <Link 
              href="/quote"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 py-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Roofing Services
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Before & After Gallery
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              About Rhys McRae
            </Link>
            <Link 
              href="/service-areas" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Service Areas
            </Link>
            <Link 
              href="/#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Customer Reviews
            </Link>
            <Link 
              href="/#faqs" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            >
              Frequently Asked Questions
            </Link>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a 
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
              </a>
              <Link 
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm"
              >
                <span>Request a Roofing Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
