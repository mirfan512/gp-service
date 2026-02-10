"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { MOUNJARO_PRICING_OPTIONS } from "@/src/lib/constants/mounjaro";

export const MounjaroPricing = () => {
  const [selectedDose, setSelectedDose] = useState("2.5mg");

  return (
    <section className="py-20 bg-white px-6 font-primary">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Labels Side - Left */}
          <div className="flex flex-col gap-12 lg:pt-4">
            <h3 className="text-2xl lg:text-[32px] font-bold italic text-wegovy-red-3 drop-shadow-sm whitespace-nowrap">
              Select pen:
            </h3>
            <h3 className="text-2xl lg:text-[32px] font-bold italic text-wegovy-brown drop-shadow-sm whitespace-nowrap lg:mt-6">
              4 week supply
            </h3>
          </div>

          {/* Options Grid Side - Right */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 lg:gap-6">
              {MOUNJARO_PRICING_OPTIONS.map((option) => (
                <div key={option.value} className="flex flex-col items-center gap-10">
                  {/* Dose Button */}
                  <button
                    onClick={() => setSelectedDose(option.value)}
                    className={clsx(
                      "w-full py-4 rounded-xl text-white font-bold text-lg shadow-md transition-all duration-300",
                      selectedDose === option.value
                        ? "bg-wegovy-red scale-105 ring-4 ring-wegovy-red/20 shadow-xl"
                        : "bg-wegovy-red opacity-60 hover:opacity-100 hover:scale-105"
                    )}
                  >
                    {option.value}
                  </button>

                  {/* Price Label */}
                  <div className={clsx(
                    "text-[28px] italic font-extralight font-inter leading-none tracking-normal transition-colors duration-300",
                    selectedDose === option.value ? "text-wegovy-red" : "text-wegovy-red/60"
                  )}>
                    {option.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-lg font-medium text-wegovy-red-2 mb-8 font-secondary">
            Inc. postage and packaging
          </p>

          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="relative group lg:w-[628px] w-full">
              <button className="relative w-full h-[84px] bg-white border border-[#DEDEDE] rounded-[20px] shadow-[inset_0px_4px_20px_rgba(161,51,51,0.87)] flex items-center justify-center transition-all duration-300 hover:scale-[1.01] hover:shadow-[inset_0px_4px_25px_rgba(161,51,51,1)] hover:bg-[#FFF9F9] active:scale-[0.98]">
                <span className="text-2xl font-bold text-wegovy-red-2 tracking-wide">
                  Buy Now
                </span>
              </button>
            </div>

            {/* Payment Icons */}
            <div className="grid grid-cols-2 gap-2 p-2">
              <Image src="/icons/mc.svg" alt="Mastercard" width={40} height={25} className="object-contain" />
              <Image src="/icons/visa.svg" alt="Visa" width={40} height={25} className="object-contain" />
              <Image src="/icons/applepay.svg" alt="Apple Pay" width={40} height={25} className="object-contain" />
              <Image src="/icons/gPay.svg" alt="Google Pay" width={40} height={25} className="object-contain" />
            </div>
          </div>

          <p className="mt-12 max-w-[850px] text-center text-[15px] lg:text-lg leading-relaxed text-wegovy-red-3 italic opacity-85 font-secondary">
            Purchasing will take you to an online assessment. Once completed a doctor will review this and authorise your medication electronically if safe to do so.
          </p>
        </div>
      </div>
    </section>
  );
};
