// src/app/(landing)/mounjaro/page.tsx

import { FigmaHero } from "@/src/components/layout/Hero";
import type { Metadata } from "next";
import { MounjaroDoseSchedule } from "./_comp/MounjaroDoseSchedule";
import { MounjaroPricing } from "./_comp/MounjaroPricing";
import { MounjaroWeightLoss } from "./_comp/MounjaroWeightLoss";
import { MounjaroFAQ } from "./_comp/MounjaroFAQ";
import { ComparisonTable } from "../wegovy/_comp/ComparisonTable"; // Reusing the shared component

export const metadata: Metadata = {
  title: "Mounjaro® Weight Loss Treatment | Online GP Services",
  description:
    "Learn about Mounjaro (tirzepatide) for weight loss. Targeting GLP-1 and GIP receptors. Complete assessment and speak with a qualified GP online.",
  keywords: [
    "Mounjaro",
    "tirzepatide",
    "weight loss",
    "GLP-1",
    "GIP",
    "prescription weight loss",
    "online doctor",
  ],
};

export default function MounjaroPage() {
  return (
    <div className="bg-white">
      <FigmaHero
        className="hero-mounjaro"
        title={<>Mounjaro®</>}
        subtitle="Dual-action prescription medication for significant weight loss results"
        description="Mounjaro (tirzepatide) works by targeting two hormones (GLP-1 and GIP) to reduce appetite and food intake. Achieve sustainable weight loss with expert medical guidance."
        badgeSrc="/icons/Greenbackgroundlogo1.svg"
      />

      <MounjaroDoseSchedule />

      <MounjaroPricing />

      <MounjaroWeightLoss />

      <MounjaroFAQ />

      <ComparisonTable />
    </div>
  );
}
