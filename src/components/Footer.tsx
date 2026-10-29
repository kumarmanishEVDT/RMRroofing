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
    <footer className="w-full overflow-hidden bg-[#080312] text-slate-400 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Credentials */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-2.5 inline-flex items-center justify-center shadow-sm">
              <img
                src="/rmr_logo.webp"
                alt="RMR Roofing - Rhys McRae Roofing Pty Ltd"
                className="h-11 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Specialist residential and commercial metal roofing contractor across the Central Coast, Sydney, and Newcastle. Directed personally by Rhys McRae.
            </p>

            <div className="space-y-2 pt-2 text-slate-300 text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-white shrink-0" />
                <span>NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <span>{COMPANY_DETAILS.experienceYears} Years Metal Roofing Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Genuine BlueScope Colorbond® Steel</span>
              </div>
            </div>
          </div>

          {/* Col 2: Roofing Solutions */}
          <div>
            <h4 className="text-xs font-extrabold text-white tracking-[0.18em] uppercase mb-4">
              Roofing Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="hover:text-white transition-colors text-slate-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h4 className="text-xs font-extrabold text-white tracking-[0.18em] uppercase mb-4">
              Service Areas
            </h4>
            <p className="text-slate-400 mb-3 text-sm">
              Serving residential &amp; commercial properties across NSW:
            </p>
            <ul className="space-y-2.5 text-slate-400 text-xs leading-relaxed">
              <li>
                <strong className="text-white block">Central Coast NSW (Primary Base)</strong>
                Gosford, Terrigal, Wamberal, Erina, Avoca Beach, Tuggerah, The Entrance, Wyong
              </li>
              <li>
                <strong className="text-white block">Sydney Metropolitan</strong>
                Northern Beaches, North Shore, Hills District, Hornsby, Ryde &amp; Greater Sydney
              </li>
              <li>
                <strong className="text-white block">Newcastle &amp; Hunter</strong>
                Newcastle CBD, Merewether, Lake Macquarie, Charlestown, Maitland
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 className="text-xs font-extrabold text-white tracking-[0.18em] uppercase mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111633] border border-white/10 hover:border-white/25 transition-colors"
              >
                <Phone className="w-5 h-5 text-white fill-white shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-white text-base">{COMPANY_DETAILS.phone}</div>
                  <div className="text-[11px] text-slate-400">Speak Directly With Rhys McRae</div>
                </div>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>Central Coast, Sydney &amp; Newcastle NSW</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">5.0 Google Rated</span>
                </div>
                <a
                  href={COMPANY_DETAILS.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-300 hover:text-white underline underline-offset-4"
                >
                  <span>Read Verified Reviews</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-[#0b0518] font-black uppercase tracking-wider rounded-lg text-xs transition-all cursor-pointer text-center shadow-md"
              >
                Request Free Assessment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Rhys McRae Roofing Pty Ltd (Trading as RMR Roofing). All rights reserved. NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About Rhys
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
