import React from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ColorbondVisualizer from "@/components/ColorbondVisualizer";
import WhyChooseRhys from "@/components/WhyChooseRhys";
import ProjectsAndProcessSection from "@/components/ProjectsAndProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import QuoteForm from "@/components/QuoteForm";
import FaqSection from "@/components/FaqSection";
import QuoteButton from "@/components/QuoteButton";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesGrid />
      <BeforeAfterSlider />
      <ColorbondVisualizer />
      <WhyChooseRhys />
      <ProjectsAndProcessSection />
      <ReviewsSection />
      <QuoteForm />
      <FaqSection />

      {/* Final Full-Bleed CTA Section (Styled after SH Pergolas Final CTA with Exact Logo Dark Blue) */}
      <section
        className="relative overflow-hidden border-b border-white/10 bg-[#0b0518] py-20 text-white sm:py-24"
        style={{
          backgroundImage: "url('/images/rr.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center 55%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0518]/95 via-[#0b0518]/85 to-[#0b0518]/60" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/25 bg-[#111633]/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-sm">
              YOUR ROOFING SOLUTION IS ONE CALL AWAY.
            </div>

            <h2 className="text-3xl font-black uppercase leading-[1.04] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s Build A Roof
              <br className="hidden sm:block" />
              <span className="text-slate-300">You Can Rely On For Decades.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Whether you need an urgent roof repair, a tile-to-Colorbond® roof replacement, architectural cladding, or commercial metal roofing — deal directly with{" "}
              <strong className="text-white">Rhys McRae</strong> today.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <QuoteButton className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-[#0b0518] shadow-xl transition-all duration-300 hover:bg-slate-100 sm:w-auto">
                <span>START MY ROOF PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </QuoteButton>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-[#111633]/90 px-7 py-4 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0b0518] sm:w-auto"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>OR CALL {COMPANY_DETAILS.phone}</span>
              </a>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <div className="text-sm font-bold tracking-wide text-white">
                Rhys McRae Roofing Pty Ltd
                <span className="mx-2 text-white/30">·</span>
                Central Coast, Sydney &amp; Newcastle NSW
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-left text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <ShieldCheck className="w-4 h-4" />
                  <span>NSW Lic #{COMPANY_DETAILS.licenceNumber}</span>
                </span>
                <span className="hidden text-white/30 sm:inline">·</span>
                <span>18+ Years Industry Experience</span>
                <span className="hidden text-white/30 sm:inline">·</span>
                <span>Genuine BlueScope Colorbond®</span>
                <span className="hidden text-white/30 sm:inline">·</span>
                <span>Direct Access to Rhys McRae</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
