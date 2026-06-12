"use client";

import { Suspense } from "react";
import { FitNoteForm } from "@/src/components/features/fit-note/FitNoteForm";
import { SimpleHero } from "@/src/components/layout/SimpleHero";

export default function FitNotePage() {
  return (
    <div className="bg-[#fcfbf9] text-[#1f1f1f] min-h-screen">
      {/* HERO */}
      <SimpleHero
        title="FIT NOTE"
        badgeSrc="/icons/online-gp-services-logo.jpg"
      />

      {/* FORM WRAP */}
      <section className="relative z-20 mt-20 pb-20 px-6">
        <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#A3B094]"></div>
          </div>
        }>
          <FitNoteForm />
        </Suspense>
      </section>
    </div>
  );
}
