"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Star,
  ShieldCheck,
  ExternalLink,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  Quote,
  Camera
} from "lucide-react";
import { COMPANY_DETAILS, REVIEWS } from "@/data/roofingData";

interface SliderItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  highlight: string;
  reviewImage?: string;
}

const SLIDER_REVIEWS: SliderItem[] = [
  {
    id: "featured-google-image",
    author: "Jerry Li",
    location: "Local Guide · Central Coast NSW",
    rating: 5,
    date: "Verified Google Review · With Project Photos",
    title: "Asbestos Removal & High-Quality Colorbond® Roof Installation",
    comment:
      "Fantastic experience with RMR Roofing Services! They managed a complex project for us—removing our old asbestos roof and installing a high-quality Colorbond roof. Rhys was extremely knowledgeable, honest, and gave genuine advice every step of the way.",
    highlight: "Complex asbestos-to-Colorbond® upgrade with 4 project photos attached.",
    reviewImage: "/images/review.png"
  },
  ...REVIEWS
];

const AUTO_SLIDE_MS = 5000;

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const totalSlides = SLIDER_REVIEWS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_MS);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentIndex]);

  return (
    <section
      id="reviews"
      className="w-full overflow-hidden py-14 sm:py-24 bg-[#f5f5f2] border-b border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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
        <div className="max-w-4xl mx-auto mb-8 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 p-2.5">
              <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 24 24">
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

        {/* Dynamic Automatic Review Slider (Includes Review Image + All Customer Reviews) */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {SLIDER_REVIEWS.map((review) => (
                <div
                  key={review.id}
                  className="w-full shrink-0 p-5 sm:p-8 md:p-10 flex flex-col justify-between"
                >
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-extrabold text-[#0b0518]">5.0 / 5.0</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {review.reviewImage && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-white bg-[#111633] px-2.5 py-1 rounded-full">
                          <Camera className="w-3 h-3" />
                          Photo Review
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#0b0518] bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#111633]" />
                        Verified Client
                      </span>
                    </div>
                  </div>

                  {/* Slide Content: Either Featured Review Image Card or Text Review Card */}
                  {review.reviewImage ? (
                    <div className="space-y-4">
                      <a
                        href={COMPANY_DETAILS.googleReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl overflow-hidden border border-slate-200/80 bg-white hover:opacity-95 transition-opacity"
                      >
                        <img
                          src={review.reviewImage}
                          alt={`Google Review by ${review.author}`}
                          className="w-full h-auto max-h-[420px] object-contain mx-auto rounded-xl"
                        />
                      </a>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 text-xs text-slate-800 font-medium">
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4 text-[#111633] shrink-0" />
                          <span>{review.highlight}</span>
                        </div>
                        <a
                          href={COMPANY_DETAILS.googleReviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#111633] font-extrabold hover:underline shrink-0 flex items-center gap-1"
                        >
                          <span>See on Google</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="py-2 sm:py-4">
                      <div className="flex items-start gap-3">
                        <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#111633]/15 shrink-0 -mt-1" />
                        <div>
                          <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-[#0b0518]">
                            &ldquo;{review.title}&rdquo;
                          </h3>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                            {review.comment}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <ThumbsUp className="w-4 h-4 text-[#111633] shrink-0" />
                        <span>{review.highlight}</span>
                      </div>
                    </div>
                  )}

                  {/* Reviewer Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#111633] text-white font-bold text-sm flex items-center justify-center">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0b0518]">
                          {review.author}
                        </h4>
                        <p className="text-xs text-slate-500">{review.location}</p>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                      {review.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation Controls (Prev / Dots / Next) */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous review"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-300 hover:border-[#111633] hover:bg-[#111633] hover:text-white text-[#0b0518] flex items-center justify-center shadow-sm transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Pills */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {SLIDER_REVIEWS.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to review by ${item.author}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "w-8 bg-[#111633]"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next review"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-300 hover:border-[#111633] hover:bg-[#111633] hover:text-white text-[#0b0518] flex items-center justify-center shadow-sm transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
