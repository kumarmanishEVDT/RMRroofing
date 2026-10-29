import React from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectsAndProcessSection from "@/components/ProjectsAndProcessSection";

export const metadata = {
  title: "Roofing Projects & Before/After Gallery | RMR Roofing",
  description: "See the difference a quality roofing project can make. Genuine before-and-after transformations by Rhys McRae Roofing Pty Ltd."
};

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <BeforeAfterSlider />
      <ProjectsAndProcessSection />
    </div>
  );
}
