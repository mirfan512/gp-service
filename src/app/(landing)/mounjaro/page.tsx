// src/app/(landing)/mounjaro/page.tsx

import type { Metadata } from "next";
import { MounjaroDoseSchedule } from "./_comp/MounjaroDoseSchedule";
import { MounjaroPricing } from "./_comp/MounjaroPricing";
import { MounjaroWeightLoss } from "./_comp/MounjaroWeightLoss";
import { MounjaroFAQ } from "./_comp/MounjaroFAQ";
import { ComparisonTable } from "../wegovy/_comp/ComparisonTable"; // Reusing the shared component
import { SimpleHero } from "@/src/components/layout/SimpleHero";

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
      <SimpleHero
        title={<>Mounjaro<sup>®</sup></>}
        titleClassName="text-hero-bold ml-4 lg:ml-9"
        subtitle="Mounjaro® is another once weekly injection for weight loss. It directly activates GIP and GLP-1 pathways to help regulate blood sugar. This means feeling fuller longer, reducing appetite and improved insulin regulation. 
        Studies have shown up to 22.5% weight loss on average. Adults using Mounjaro® lost up to 11kg."
        subtitleClassName="ml-4 lg:ml-9 max-w-[800px] mt-8 lg:mt-10 lg:text-[23px] leading-relaxed text-white/90"
      />

      <MounjaroDoseSchedule />
      <MounjaroPricing />
      <MounjaroWeightLoss />
      <ComparisonTable />
      <MounjaroFAQ />


    </div>
  );
}
