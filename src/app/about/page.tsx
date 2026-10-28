import React from "react";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";
import { Phone, Shield, Award, Sparkles, CheckCircle2, Clock, MapPin, UserCheck, ArrowRight } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/roofingData";

export const metadata = {
  title: "About Rhys McRae & RMR Roofing | 18+ Years Experience",
  description: "Learn more about Rhys McRae Roofing Pty Ltd. Over 18 years experience in metal roofing across the Central Coast, Sydney, and Newcastle. Licensed NSW contractor #454185C."
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#066aab] font-bold text-xs uppercase tracking-widest">
            Hands-On Experience & Direct Accountability
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mt-2 tracking-tight">
            About Rhys McRae & RMR Roofing
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Founded and directed by <strong className="text-slate-900">Rhys McRae</strong>, RMR Roofing brings over 18 years of specialized metal roofing experience to residential and commercial properties across Sydney, Newcastle, and the Central Coast of NSW.
          </p>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                The Personal Approach That Sets Us Apart
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When choosing a roofing contractor, you want to know who is genuinely responsible for your project. Many larger companies pass you from high-pressure salespeople to subcontracted crews you have never met.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                <strong className="text-[#066aab]">At RMR Roofing, you deal directly with Rhys McRae.</strong> From the moment you pick up the phone to discuss your property, through to climbing onto the roof to inspect battens, laying genuine Colorbond steel, and conducting final quality checks — Rhys is actively involved every step of the way.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#f0f7fc] p-6 rounded-2xl border-2 border-[#bae6fd] text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#e0f2fe] text-[#066aab] flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-2xl font-black text-slate-900">18+ Years</div>
              <p className="text-xs text-slate-600">
                Industry experience spanning architectural residential homes and commercial developments.
              </p>
              <div className="pt-2 text-xs font-bold text-[#066aab] border-t border-[#bae6fd]">
                NSW Licence #{COMPANY_DETAILS.licenceNumber}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Our Non-Negotiable Standards on Every Job
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <Clock className="w-6 h-6 text-[#066aab] mb-2" />
                <h4 className="text-slate-900 font-bold text-sm">Punctuality & Reliability</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We respect your schedule. If we arrange a site inspection or set a start date, we show up on time and communicate proactively.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <Sparkles className="w-6 h-6 text-[#066aab] mb-2" />
                <h4 className="text-slate-900 font-bold text-sm">Daily Site Clean-Up</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Roofing can generate debris. Rhys and his team perform daily clean-ups and magnetic sweeps for loose screws to protect your family, pets, and tyres.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <Shield className="w-6 h-6 text-[#066aab] mb-2" />
                <h4 className="text-slate-900 font-bold text-sm">Polite, Respectful Crew</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Customer feedback consistently praises our polite, courteous demeanor on site, treating your home and neighbours with total respect.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f0f7fc] border border-[#bae6fd] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-slate-900 font-bold text-base">
                Have a question or want to discuss your roof?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Rhys is ready to discuss your property requirements directly.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="px-5 py-2.5 rounded-xl bg-[#066aab] hover:bg-[#05568c] text-white font-bold text-xs flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
              <QuoteButton
                className="px-5 py-2.5 rounded-xl bg-white border border-[#066aab] text-[#066aab] font-bold text-xs hover:bg-slate-50"
              >
                Get a Quote
              </QuoteButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
