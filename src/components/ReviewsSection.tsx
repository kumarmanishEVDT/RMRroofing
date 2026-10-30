"use client";

import React from "react";
import { Star, ShieldCheck, Phone, ExternalLink, ThumbsUp } from "lucide-react";
import { COMPANY_DETAILS, REVIEWS } from "@/data/roofingData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ReviewsSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="reviews" className="w-full overflow-hidden py-14 sm:py-24 bg-[#f5f5f2] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#111633] mb-2">
            VERIFIED CUSTOMER REVIEWS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b0518] tracking-tight uppercase">
            WHAT HOMEOWNERS ARE <span className="text-slate-500">SAYING.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            RMR Roofing&apos;s customer feedback consistently highlights Rhys and his team&apos;s punctuality, polite service, and thorough daily site clean-ups.
          </p>
        </div>

        {/* Google 5.0 Verified Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 p-2.5">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[#0b0518]">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-[#0b0518] font-bold text-sm mt-0.5">
                Google Verified Reviews
              </p>
              <p className="text-slate-500 text-xs">
                Rhys McRae Roofing Pty Ltd · Central Coast, Sydney &amp; Newcastle
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={COMPANY_DETAILS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#111633] hover:bg-[#1b244d] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Featured Real Google Review Screenshot */}
        <div className="max-w-4xl mx-auto mb-12 bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-5 shadow-md overflow-hidden">
          <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-100">
            <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#111633]">
              <ShieldCheck className="w-4 h-4 text-[#111633]" />
              Featured Google Review &amp; Project Photos
            </span>
            <a
              href={COMPANY_DETAILS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-500 hover:text-[#111633] flex items-center gap-1 transition-colors"
            >
              <span>See on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <a
            href={COMPANY_DETAILS.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden"
          >
            <img
              src="/images/review.png"
              alt="Verified 5-Star Google Review for RMR Roofing Services"
              className="w-full h-auto object-contain rounded-xl"
            />
          </a>
        </div>

        {/* Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#111633] hover:shadow-xl transition-all shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-[#0b0518] bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#111633]" />
                    Verified Client
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-[#0b0518]">
                  &ldquo;{review.title}&rdquo;
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  {review.comment}
                </p>

                <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-800 font-medium">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#111633] shrink-0" />
                  <span>{review.highlight}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#111633] text-white font-bold text-xs flex items-center justify-center">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b0518]">{review.author}</h4>
                    <p className="text-xs text-slate-500">{review.location}</p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
