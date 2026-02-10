// src/app/(landing)/wegovy/page.tsx

import { FigmaHero } from "@/src/components/layout/Hero";
import type { Metadata } from "next";
import { DoseSchedule } from "./_comp/DoseSchedule";
import { PricingCards } from "./_comp/PricingCards";

import { ComparisonTable } from "./_comp/ComparisonTable";
import { WegovyFAQ } from "./_comp/WegovyFAQ";
import { WeightLossSection } from "./_comp/WeightLossSection";

export const metadata: Metadata = {
  title: "Wegovy® Weight Loss Treatment | Online GP Services",
  description:
    "Learn about Wegovy (semaglutide) for weight loss. FDA-approved prescription medication with medical support. Complete assessment and speak with a qualified GP online.",
  keywords: [
    "Wegovy",
    "semaglutide",
    "weight loss",
    "GLP-1",
    "prescription weight loss",
    "online doctor",
  ],
};

export default function WegovyPage() {
  return (
    <div className="bg-white">
      <FigmaHero
        title={
          <>
            Wegovy®
          </>
        }
        subtitle="Clinically proven prescription medication for sustainable weight management"
        description="Speak with a qualified GP and get personalized weight loss support with Wegovy (semaglutide). FDA-approved, medically supervised, and delivered to your door."
      />

      <DoseSchedule />

      <PricingCards />

      <WeightLossSection />

      <WegovyFAQ />

      <ComparisonTable />

  
    </div>
  );
}
