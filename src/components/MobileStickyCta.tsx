"use client";

import React from "react";
import { Phone, FileText } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function MobileStickyCta() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0b0518]/95 backdrop-blur-md border-t border-white/15 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-[#162044] border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call Rhys</span>
        </a>

        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-white text-[#0b0518] font-black text-xs uppercase tracking-wider shadow-md cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Free Quote</span>
        </button>
      </div>
    </div>
  );
}
