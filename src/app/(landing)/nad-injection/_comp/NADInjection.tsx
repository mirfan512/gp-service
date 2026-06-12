"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-xl font-bold text-nad-accent hover:opacity-80 transition-opacity"
      >
        <span>{question}</span>
        <ChevronDown className={clsx("w-5 h-5 transition-transform duration-300 text-[#EDB984]", isOpen && "rotate-180")} />
      </button>
      <div className={clsx("overflow-hidden transition-all duration-300", isOpen ? "max-h-[500px] pb-4" : "max-h-0")}>
        <p className="text-gray-600 leading-relaxed font-secondary text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
};

import { useProductSelection } from "../../../../components/features/nad-injection/hooks/useProductSelection";
import { Configurator } from "../../../../components/features/nad-injection/components/Configurator";
import { PriceDisplay } from "../../../../components/features/nad-injection/components/PriceDisplay";
import { NADFAQSection } from "./NADFAQSection";

export const NADInjection = () => {
  const { selection, price, updateSelection } = useProductSelection();

  return (
    <section className="bg-white font-primary overflow-hidden relative z-10">
      {/* Main Content Area — normalized spacing */}
      <div className="max-w-[1950px] mx-auto px-6 lg:pr-12 lg:pl-32 xl:pl-[144px] 2xl:pl-[168px] py-8 lg:py-14 relative flex flex-col gap-12 lg:gap-16">

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 xl:gap-20 items-stretch">

          {/* LEFT: Product Image & Features Card */}
          <div className="bg-white rounded-[20px] border border-[#DEDEDE] p-8 lg:p-12 shadow-[inset_0_4px_20px_#EDB984] flex flex-col items-center w-full lg:w-[694px] h-fit">
            <Image
              src="/images/text.svg"
              alt="Feel more energised. Think more clearly. Support your well being."
              width={900}
              height={300}
              className="mx-auto mb-16 w-full max-w-[900px]"
              priority
            />

            <div className="relative w-full flex justify-center lg:-mt-70">
              <Image
                src="/images/nadInjection.svg"
                alt="NAD+ Kit"
                width={620}
                height={310}
                className="object-contain scale-[1.03]"
                priority
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full lg:-mt-52 justify-items-center">
              {[
                { label: "Increased Energy", id: 1 },
                { label: "Slow Ageing", id: 2 },
                { label: "Reduce Brain Fog", id: 3 },
                { label: "DNA Repair", id: 4 },
                { label: "Boost Metabolism", id: 5 },
                { label: "Improve Sleep", id: 6 },
                { label: "Reduce Inflammation", id: 7 },
                { label: "Muscle Recovery", id: 8 },
              ].map((item) => (
                <div
                  key={item.id}
                  className="box-border w-full max-w-[303px] h-[55px] bg-white border border-[#DEDEDE] rounded-[20px] shadow-[inset_0px_4px_20px_rgba(0,0,0,0.05)] flex items-center px-[18px] gap-[12px]"
                >
                  <Image 
                    src="/icons/check.svg" 
                    alt="Check icon" 
                    width={36} 
                    height={36} 
                    className="flex-shrink-0" 
                  />

                  <span className="flex-1 text-start font-inter font-semibold text-[16px] lg:text-[18px] leading-[22px] text-[#253E96] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Configuration Section */}
          <div className="flex flex-col h-full bg-white rounded-[40px] p-2 lg:p-3">
            <div className="flex-1">
              <Configurator
                selection={selection}
                updateSelection={updateSelection}
              />
            </div>
            <div className="mt-6">
              <PriceDisplay 
                price={price} 
                productType={selection.type}
                packageSize={selection.size}
              />
            </div>
          </div>
        </div>




        {/* Information Grid Sections - Refactored to 2-column stack for tight Figma-like spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Left Column Stack */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* What is NAD+? */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[32px] lg:text-[42px] font-bold text-[#EDB984] leading-tight">
                What is NAD+?
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-secondary text-justify">
                  NAD+ (Nicotinamide Adenine Dinucleotide) is a naturally occurring co-enzyme found in every cell of the body. It plays a key role in:
                </p>
                <ul className="space-y-3 font-secondary text-lg text-gray-600 list-none">
                  {["Cellular energy production", "Metabolic processes", "DNA repair", "Nervous system function"].map((point) => (
                    <li key={point} className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Circular Pen Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden ml-40 ">
                <Image
                  src="/images/nadinjecion2.svg"
                  alt="NAD Treatment administration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* How can NAD+ help me? */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[32px] lg:text-[42px] font-bold text-[#EDB984] leading-tight">
                How can NAD+ injections help me?
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed font-secondary text-justify">
                  Patients commonly seek NAD+ injections to support:
                </p>
                <ul className="space-y-3 font-secondary text-lg text-gray-600 list-disc pl-6 marker:text-gray-600">
                  <li>Persistent fatigue or low energy</li>
                  <li>Brain fog or reduced mental clarity</li>
                  <li>Burnout and stress</li>
                  <li>General wellness and longevity optimisation</li>
                  <li>Recovery following illness or periods of high demand</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Mitochondria Image */}
            <div className="flex justify-center">
              <Image
                src="/images/nad.svg"
                alt="Mitochondria cell representation"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>

            {/* Powerhouse of energy */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[32px] lg:text-[42px] font-bold text-[#EDB984] leading-tight">
                The powerhouse of energy
              </h3>
              <div className="space-y-4 text-gray-600 text-lg lg:text-xl leading-relaxed font-secondary text-justify">
                <p>
                  Mitochondria are present in every cell of the body. They are responsible for providing energy for you to live, survive and function. NAD+ enables taking a food and energy source naturally.
                </p>
                <p>
                  NAD+ levels naturally decline with age and may also be affected by stress, illness, poor sleep and demanding lifestyles.
                </p>
              </div>
            </div>

            {/* Combination with weight loss */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[32px] lg:text-[42px] font-bold text-[#EDB984] leading-tight">
                Can I combine NAD+ with weight loss injections?
              </h3>
              <div className="space-y-4 text-gray-600 text-lg lg:text-xl leading-relaxed font-secondary text-justify">
                <p>
                  NAD+ injections can be safely used alongside weight-loss injections, and together they can offer enhanced results. While weight-loss injections help reduce appetite and support blood sugar control, NAD+ works at a cellular level to boost energy, metabolism, and overall vitality.
                </p>
                <p>
                  Many patients find that combining both treatments helps reduce fatigue, supports metabolic health, and improves adherence to their weight-loss journey. When prescribed and monitored by a clinician, this dual approach can help you feel more energised while achieving sustainable weight-loss results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col items-center justify-center py-12 border-t border-gray-100">
          <p className="space-y-4 text-gray-600 text-lg lg:text-xl leading-relaxed font-secondary">
            Prefer to speak with a GP first? Book a consultation at anytime.
          </p>
          <button className="w-full lg:w-auto px-20 py-5 rounded-xl border border-[#DEDEDE] text-nad-accent font-bold text-xl hover:bg-gray-50 transition-all shadow-sm">
            Book Consultation
          </button>
        </div>

        {/* FAQ Section */}
        <NADFAQSection />

      </div>
    </section>
  );
};