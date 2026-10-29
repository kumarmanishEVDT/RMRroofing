import React from "react";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Request a Roofing Quote | Rhys McRae Roofing Pty Ltd",
  description: "Request a free quote for residential or commercial metal roofing, roof replacement, Colorbond, gutters, or repairs in Sydney, Newcastle & Central Coast NSW."
};

export default function QuotePage() {
  return (
    <div className="bg-[#0b0518]">
      <QuoteForm />
    </div>
  );
}
