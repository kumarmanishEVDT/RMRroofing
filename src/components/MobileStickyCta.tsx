"use client";

import React from "react";
import { Phone, FileText } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function MobileStickyCta() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs active:bg-slate-200 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-[#066aab]" />
          <span>Call Rhys</span>
        </a>

        <button
          type="button"
          onClick={() => openQuoteModal()}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#066aab] active:scale-95 text-white font-bold text-xs shadow-md shadow-[#066aab]/30 active:bg-[#05568c] cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Request Quote</span>
        </button>
      </div>
    </div>
  );
}
