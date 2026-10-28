"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import { FAQS, COMPANY_DETAILS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openQuoteModal } = useQuoteModal();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] border border-[#bae6fd] text-[#0369a1] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#066aab]" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Common questions answered directly by Rhys McRae Roofing Pty Ltd.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#bae6fd]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-slate-200 text-[#066aab] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#e0f2fe] border-[#066aab]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl bg-[#f0f7fc] border border-[#bae6fd]">
          <h3 className="text-base font-bold text-slate-900">
            Have a question not listed here?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Rhys is always happy to answer your questions and walk through your property's roofing requirements.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#066aab] text-white font-bold text-xs hover:bg-[#05568c] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call Rhys: {COMPANY_DETAILS.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#066aab] hover:underline cursor-pointer"
            >
              <span>Submit an enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
