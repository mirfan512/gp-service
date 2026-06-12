"use client";

import { SimpleHero } from "@/src/components/layout/SimpleHero";
import { WeightLossContent } from "@/src/components/features/weight-loss/WeightLossContent";

export default function WeightLossPage() {
  return (
    <div className="bg-bg text-text min-h-screen">
      {/* HERO */}
      <SimpleHero
        title={
          <>
            Weight Loss Injections – Safe, Effective <br className="hidden lg:block" />
            & Prescribed by UK Doctors
          </>
        }
        subtitle={
          <>
            Achieve sustainable weight loss with clinically proven weight loss injections
            <br className="hidden lg:block" />
            in the UK. Our fully online service allows you to complete a secure medical
            <br className="hidden lg:block" />
            form, have it reviewed by a GMC-registered doctor, and receive your
            <br className="hidden lg:block" />
            treatment quickly through a UK-regulated pharmacy.
          </>
        }
        badgeSrc="/icons/online-gp-services-logo.jpg"
        titleClassName="lg:text-[42px] lg:leading-[1.2]"
        subtitleClassName="max-w-[800px] mt-8 lg:mt-10 lg:text-[24px] leading-relaxed text-white/90"
      />

      {/* Unified Content Section */}
      <section className="py-12 lg:py-20 overflow-hidden">
        <WeightLossContent />
      </section>
    </div>
  );
}
