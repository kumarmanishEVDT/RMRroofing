"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import QuoteModal from "@/components/QuoteModal";

interface QuoteModalContextType {
  isOpen: boolean;
  preselectedService?: string;
  openQuoteModal: (service?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const openQuoteModal = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setPreselectedService(undefined);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        preselectedService,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
      <QuoteModal />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
