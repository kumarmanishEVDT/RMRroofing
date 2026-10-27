import React from "react";
import { Star, ShieldCheck, CheckCircle2, Phone, ExternalLink, ThumbsUp } from "lucide-react";
import { COMPANY_DETAILS, REVIEWS } from "@/data/roofingData";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            Customer Feedback & Reputation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Our Customers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            RMR Roofing's customer feedback highlights Rhys and his team's punctuality, polite service and attention to cleaning up after each day's work.
          </p>
        </div>

        {/* Google Reviews Widget Card */}
        <div className="max-w-4xl mx-auto mb-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Google G Logo Badge */}
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-lg p-2.5">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-white font-bold text-sm mt-0.5">
                Google Verified Reviews
              </p>
              <p className="text-slate-400 text-xs">
                Rhys McRae Roofing Pty Ltd · Central Coast, Sydney & Newcastle
              </p>
            </div>
          </div>

          {/* Action button linking directly to the google link */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={COMPANY_DETAILS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-slate-700" />
            </a>
          </div>
        </div>

        {/* Customer Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
            >
              <div>
                {/* Header with Stars and Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Customer
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  "{review.title}"
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mt-2.5">
                  {review.comment}
                </p>

                {/* Specific highlight tag */}
                <div className="mt-4 p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 flex items-center gap-2 text-xs text-amber-300">
                  <ThumbsUp className="w-3.5 h-3.5 shrink-0" />
                  <span>Highlight: {review.highlight}</span>
                </div>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{review.author}</h4>
                  <p className="text-xs text-slate-400">{review.location}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Callout Box */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-amber-600/20 via-slate-900 to-slate-950 border border-amber-500/30 text-center max-w-3xl mx-auto shadow-2xl">
          <p className="text-lg sm:text-xl font-bold text-white">
            Your roofing project deserves personal attention from the beginning.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>CALL RHYS ON {COMPANY_DETAILS.phone}</span>
            </a>
            <a
              href="#quote"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
            >
              <span>Request a Quote Online</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
