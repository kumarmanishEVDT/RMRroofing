"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield, Star, MapPin, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#071322] text-slate-400 border-t border-[#142944]">
      {/* Upper CTA Banner */}
      <div className="bg-gradient-to-r from-[#066aab]/20 via-[#066aab]/10 to-transparent border-b border-[#066aab]/30 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Ready to Discuss Your Roofing Project?
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              Don't leave your roofing requirements until they become a bigger concern. Deal directly with Rhys.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-[#0d1e34] border border-[#066aab]/40 text-[#38bdf8] hover:text-white hover:border-[#38bdf8] font-bold text-sm flex items-center gap-2 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#38bdf8] fill-[#38bdf8]" />
              <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#066aab] to-[#0a86d6] hover:from-[#05568c] hover:to-[#0873b8] active:scale-95 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-[#066aab]/30 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: About & Logo */}
        <div className="space-y-4">
          <div className="bg-white/95 p-3 rounded-xl inline-block border border-white/20">
            <img 
              src="/rmr_logo.webp" 
              alt="RMR Roofing" 
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Professional metal roofing solutions tailored to your property. With over 18 years of industry experience, Rhys McRae brings hands-on expertise and a personal approach to every project.
          </p>

          <div className="p-3.5 rounded-lg bg-[#0c1a2c] border border-[#163359] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-200">
              <Shield className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span><strong>NSW Licence:</strong> #{COMPANY_DETAILS.licenceNumber}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Clock className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span><strong>Experience:</strong> {COMPANY_DETAILS.experienceYears} Years in Metal Roofing</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span><strong>Direct Access:</strong> Speak directly with Rhys McRae</span>
            </div>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#066aab]"></span>
            Roofing Solutions
          </h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-slate-600 text-xs">›</span>
                  <span>{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Service Areas */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#066aab]"></span>
            Service Coverage
          </h4>
          <p className="text-sm text-slate-400 mb-3">
            Providing expert residential & commercial metal roofing throughout:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Central Coast NSW</strong>
                <p className="text-xs text-slate-400">Gosford, Terrigal, Wamberal, Tuggerah, Erina, The Entrance & surrounding</p>
              </div>
            </li>
            <li className="flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Sydney Metro</strong>
                <p className="text-xs text-slate-400">Northern Beaches, North Shore, Hills District & surrounding</p>
              </div>
            </li>
            <li className="flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Newcastle & Hunter</strong>
                <p className="text-xs text-slate-400">Newcastle CBD, Lake Macquarie & surrounding regions</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Google Reviews */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#066aab]"></span>
            Speak Directly with Rhys
          </h4>

          <div className="p-4 rounded-xl bg-[#0c1a2c] border border-[#163359] space-y-3">
            <div className="text-xs text-slate-400">Direct Roofing Line:</div>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="text-lg font-bold text-white hover:text-[#38bdf8] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#38bdf8] fill-[#38bdf8]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <p className="text-xs text-slate-400">
              Available Monday to Saturday for residential & commercial enquiries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0c1a2c] border border-[#163359]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">5.0 Star Rated</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Read verified customer reviews or leave feedback on Google.
            </p>
            <a
              href={COMPANY_DETAILS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38bdf8] hover:text-[#7dd3fc] underline underline-offset-4"
            >
              <span>View Google Reviews Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#142944] bg-[#050e18] py-6 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} Rhys McRae Roofing Pty Ltd (Trading as RMR Roofing). All rights reserved. NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300">About Rhys</Link>
            <Link href="/services" className="hover:text-slate-300">Services</Link>
            <button type="button" onClick={() => openQuoteModal()} className="hover:text-slate-300 cursor-pointer">Get a Quote</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
