"use client";

import React from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export default function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_DETAILS.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-slate-900 border border-slate-700 text-white font-bold text-xs active:bg-slate-800 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Call Rhys Now</span>
        </a>

        <Link
          href="/quote"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 active:from-amber-600 active:to-amber-700"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Request Quote</span>
        </Link>
      </div>
    </div>
  );
}
