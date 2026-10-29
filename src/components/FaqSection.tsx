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
    <section id="faqs" className="w-full overflow-hidden py-14 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-extrabold text-[#111633] uppercase tracking-[0.2em] bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-2xs">
            GOT QUESTIONS?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0b0518] mt-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our roofing services, inspections, service areas, and quoting process.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#111633] shrink-0" />
                    <span className="text-base font-bold text-[#0b0518] tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0b0518]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-xs sm:text-sm text-slate-600">
          <span>Still have a question not listed here? </span>
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="text-[#0b0518] hover:underline font-extrabold inline-flex items-center gap-1 ml-1"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call Rhys on {COMPANY_DETAILS.phone}</span>
          </a>
          <span className="mx-2 text-slate-300">or</span>
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="text-[#111633] hover:underline font-extrabold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Request a Free Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
