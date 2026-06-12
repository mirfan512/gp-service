"use client";

import { FigmaHero } from "@/src/components/layout/Hero";
import { PrescriptionForm } from "@/src/components/features/prescription/PrescriptionForm";
import { SimpleHero } from "@/src/components/layout/SimpleHero";

export default function PrescriptionPage() {
  return (
    <div className="bg-[#fcfbf9] text-[#1f1f1f] min-h-screen">
      {/* HERO */}
      <SimpleHero
        title="Prescription"
        badgeSrc="/icons/online-gp-services-logo.jpg"
      />

      {/* FORM WRAP */}
      <section className="relative z-20 mt-20 pb-20 px-6">
        <PrescriptionForm />
      </section>
    </div>
  );
}
