// src/app/(landing)/wegovy/page.tsx

import type { Metadata } from "next";
import { DoseSchedule } from "./_comp/DoseSchedule";
import { PricingCards } from "./_comp/PricingCards";

import { ComparisonTable } from "./_comp/ComparisonTable";
import { WegovyFAQ } from "./_comp/WegovyFAQ";
import { WeightLossSection } from "./_comp/WeightLossSection";
import { SimpleHero } from "@/src/components/layout/SimpleHero";

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
      <SimpleHero
        title={
          <>
            Wegovy<sup>®</sup>
          </>
        }
        titleClassName="text-hero-bold"
        subtitle={
          <>
            Wegovy<sup>®</sup> is a weight loss injection that is taken once
            weekly. It works by activating GLP-1 receptors in the brain. This
            causes a reduction in appetite, leading to eating less calories and
            consequently weight loss when combined with a healthier diet and
            exercise.
          </>
        }
        subtitleClassName="max-w-[800px] mt-8 lg:mt-10 lg:text-[23px] leading-relaxed text-white/90"
      />

      <DoseSchedule />

      <PricingCards />

      <WeightLossSection />

      <WegovyFAQ />

      <ComparisonTable />


    </div>
  );
}
