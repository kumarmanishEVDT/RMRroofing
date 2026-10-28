import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseRhys from "@/components/WhyChooseRhys";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ColorbondVisualizer from "@/components/ColorbondVisualizer";
import ReviewsSection from "@/components/ReviewsSection";
import QuoteForm from "@/components/QuoteForm";
import FaqSection from "@/components/FaqSection";
import QuoteButton from "@/components/QuoteButton";
import Link from "next/link";
import { Phone, ArrowRight, Shield, Award } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesGrid />
      <WhyChooseRhys />
      <BeforeAfterSlider />
      <ColorbondVisualizer />
      <ReviewsSection />
      <QuoteForm />
      <FaqSection />

      {/* Final Call to Action - Blue & White Theme */}
      <section className="py-20 bg-gradient-to-b from-[#05436d] to-[#066aab] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#7dd3fc]" />
            18+ Years Industry Experience
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Discuss Your Roofing Project?
          </h2>

          <p className="text-slate-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Don't leave your roofing requirements until they become a bigger concern. Get in touch with Rhys to discuss your property, explore your options and take the next step.
          </p>

          <div className="pt-2">
            <p className="text-xs uppercase tracking-widest text-slate-200 font-bold mb-4">
              RHYS MCRAE ROOFING PTY LTD · NSW LICENCE #{COMPANY_DETAILS.licenceNumber}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#066aab] font-black text-base flex items-center justify-center gap-2.5 shadow-xl transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 fill-[#066aab] text-[#066aab]" />
                <span>CALL RHYS NOW — {COMPANY_DETAILS.phone}</span>
              </a>

              <QuoteButton
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#043455] hover:bg-[#03243c] text-white font-bold text-base border-2 border-white/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </QuoteButton>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-200">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#7dd3fc]" />
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
