import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseRhys from "@/components/WhyChooseRhys";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ColorbondVisualizer from "@/components/ColorbondVisualizer";
import ReviewsSection from "@/components/ReviewsSection";
import QuoteForm from "@/components/QuoteForm";
import FaqSection from "@/components/FaqSection";
import Link from "next/link";
import { Phone, ArrowRight, Shield, Award } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Roofing Solutions Services Grid */}
      <ServicesGrid />

      {/* 3. Why Choose RMR Roofing */}
      <WhyChooseRhys />

      {/* 4. Transform Your Roof - Before & After Interactive Showcase */}
      <BeforeAfterSlider />

      {/* 5. Colorbond Steel Range Explorer */}
      <ColorbondVisualizer />

      {/* 6. Trusted by Our Customers - Google Reviews */}
      <ReviewsSection />

      {/* 7. Get a Quote for Your Roofing Project Form */}
      <QuoteForm />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Final Call to Action Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            18+ Years Industry Experience
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Discuss Your Roofing Project?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Don't leave your roofing requirements until they become a bigger concern. Get in touch with Rhys to discuss your property, explore your options and take the next step.
          </p>

          <div className="pt-2">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-4">
              RHYS MCRAE ROOFING PTY LTD · NSW LICENCE #{COMPANY_DETAILS.licenceNumber}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/25 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>CALL RHYS NOW — {COMPANY_DETAILS.phone}</span>
              </a>

              <Link
                href="/quote"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 flex items-center justify-center gap-2 transition-all hover:border-slate-500"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-amber-400" />
              NSW Contractor Licence #{COMPANY_DETAILS.licenceNumber}
            </span>
            <span>·</span>
            <span>Direct Access to Rhys McRae</span>
            <span>·</span>
            <span>Central Coast · Sydney · Newcastle</span>
          </div>
        </div>
      </section>
    </div>
  );
}
