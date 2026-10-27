"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Shield, Star, MapPin, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { COMPANY_DETAILS, SERVICES } from "@/data/roofingData";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Upper CTA Banner */}
      <div className="bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-transparent border-b border-amber-500/20 py-8 px-4 sm:px-6">
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
              className="px-5 py-3 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 hover:text-white hover:border-amber-400 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-black/40"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
            </a>
            <Link
              href="/quote"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: About & Credentials */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black">
              RMR
            </div>
            <div>
              <span className="text-xl font-black text-white">RMR ROOFING</span>
              <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider">
                Rhys McRae Roofing Pty Ltd
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Professional metal roofing solutions tailored to your property. With over 18 years of industry experience, Rhys McRae brings hands-on expertise and a personal approach to every project.
          </p>

          <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-200">
              <Shield className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>NSW Licence:</strong> #{COMPANY_DETAILS.licenceNumber}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Experience:</strong> {COMPANY_DETAILS.experienceYears} Years in Metal Roofing</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span><strong>Direct Access:</strong> Speak directly with Rhys McRae</span>
            </div>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Roofing Solutions
          </h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services#${s.id}`}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
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
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Service Coverage
          </h4>
          <p className="text-sm text-slate-400 mb-3">
            Providing expert residential & commercial metal roofing throughout:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Central Coast NSW</strong>
                <p className="text-xs text-slate-400">Gosford, Terrigal, Wamberal, Tuggerah, Erina, The Entrance & surrounding</p>
              </div>
            </li>
            <li className="flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Sydney Metro</strong>
                <p className="text-xs text-slate-400">Northern Beaches, North Shore, Hills District & surrounding</p>
              </div>
            </li>
            <li className="flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Newcastle & Hunter</strong>
                <p className="text-xs text-slate-400">Newcastle CBD, Lake Macquarie & surrounding regions</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Social Proof */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Speak Directly with Rhys
          </h4>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="text-xs text-slate-400">Direct Roofing Line:</div>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="text-lg font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
            <p className="text-xs text-slate-400">
              Available Monday to Saturday for residential & commercial enquiries.
            </p>
          </div>

          {/* Google Reviews Widget Link */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <span>View Google Reviews Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/90 py-6 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} Rhys McRae Roofing Pty Ltd (Trading as RMR Roofing). All rights reserved. NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300">About Rhys</Link>
            <Link href="/services" className="hover:text-slate-300">Services</Link>
            <Link href="/quote" className="hover:text-slate-300">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
