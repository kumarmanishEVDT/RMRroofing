"use client";

import React from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface QuoteButtonProps {
  children?: React.ReactNode;
  service?: string;
  className?: string;
}

export default function QuoteButton({
  children = "Request Quote",
  service,
  className = ""
}: QuoteButtonProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <button
      type="button"
      onClick={() => openQuoteModal(service)}
      className={`cursor-pointer transition-all active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
