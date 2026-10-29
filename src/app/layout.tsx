import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import { QuoteModalProvider } from "@/context/QuoteModalContext";

export const metadata: Metadata = {
  title: "RMR Roofing | Rhys McRae Roofing Pty Ltd | Central Coast, Sydney & Newcastle",
  description: "Need a reliable roofer in Sydney, Newcastle or the Central Coast? Over 18 years industry experience. Speak directly with Rhys McRae for metal roofing, roof replacement, repairs & Colorbond solutions. NSW Lic #454185C.",
  keywords: [
    "RMR Roofing",
    "Rhys McRae Roofing Pty Ltd",
    "Central Coast roofer",
    "Sydney metal roofing",
    "Newcastle roof replacement",
    "Colorbond roofing Central Coast",
    "tile to metal roof conversion",
    "commercial metal roofing NSW",
    "roof repairs 0432 589 939"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 min-h-screen flex flex-col selection:bg-[#111633] selection:text-white pb-16 sm:pb-0 font-sans antialiased">
        <QuoteModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyCta />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
