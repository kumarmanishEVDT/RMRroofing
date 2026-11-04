"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, ArrowLeft, ShieldCheck, Clock, UserCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";
import type { QuoteSubmissionData } from "@/utils/sendEmail";

export default function ThankYouPage() {
  const [enquiry, setEnquiry] = useState<QuoteSubmissionData | null>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("rmr_last_enquiry");
      if (saved) {
        setEnquiry(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  return (
    <section className="min-h-[75vh] py-16 sm:py-24 bg-[#f5f5f2] text-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-2xl text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-[#111633] text-[#111633] flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111633] text-white text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Enquiry Received
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0b0518] pt-1">
            Thank You{enquiry?.fullName ? `, ${enquiry.fullName}` : ""}!
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Your roofing enquiry has been sent to{" "}
            <strong className="text-[#0b0518]">Rhys McRae Roofing Pty Ltd</strong>. Rhys will review your requirements and contact you directly.
          </p>
        </div>

        {enquiry && (
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-2.5">
            <div className="text-slate-500 font-extrabold uppercase tracking-wider text-xs border-b border-slate-200 pb-2">
              Your Enquiry Summary
            </div>
            <div className="text-slate-700">
              <strong className="text-[#0b0518]">Name:</strong> {enquiry.fullName}
            </div>
            <div className="text-slate-700">
              <strong className="text-[#0b0518]">Location:</strong> {enquiry.suburb}
            </div>
            <div className="text-slate-700">
              <strong className="text-[#0b0518]">Services Requested:</strong>{" "}
              {enquiry.services?.join(", ")}
            </div>
            <div className="text-slate-700">
              <strong className="text-[#0b0518]">Contact Phone:</strong> {enquiry.phone}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-lg mx-auto pt-1">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <UserCheck className="w-4 h-4 text-[#111633] shrink-0" />
            <span className="text-xs font-bold text-[#0b0518]">Direct With Rhys</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#111633] shrink-0" />
            <span className="text-xs font-bold text-[#0b0518]">Lic #{COMPANY_DETAILS.licenceNumber}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#111633] shrink-0" />
            <span className="text-xs font-bold text-[#0b0518]">18+ Yrs Experience</span>
          </div>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="w-full sm:w-auto px-7 py-4 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-black uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Rhys Now: {COMPANY_DETAILS.phone}</span>
          </a>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0b0518] border border-slate-300 font-extrabold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
