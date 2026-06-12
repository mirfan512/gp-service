"use client";

import React from "react";
import { MoveRight } from "lucide-react";

/**
 * Data based on the provided Figma screenshot
 */
const wegovyToMounjaro = [
  { from: "0.25mg", to: "2.5mg" },
  { from: "0.5mg", to: "2.5mg" },
  { from: "1mg", to: "2.5mg" },
  { from: "1.7mg", to: "5mg" },
  { from: "2.4mg", to: "5mg" },
];

const mounjaroToWegovy = [
  { from: "2.5mg", to: "0.25mg" },
  { from: "5mg", to: "0.5mg" },
  { from: "7.5mg", to: "2.5mg" },
  { from: "10mg", to: "1mg" },
  { from: "12mg", to: "1mg" },
  { from: "12mg", to: "1mg" },
];

export const ComparisonTable = () => {
  return (
    <section className="py-24 px-6 bg-white font-primary">
      <div className="max-w-[1100px] mx-auto">
        {/* Title & Description */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-[38px] font-bold text-wegovy-brown mb-6 tracking-tight">
            Can I switch between Wegovy and Mounjaro?
          </h2>
          <p className="text-lg lg:text-[21px] leading-relaxed text-wegovy-red-3 italic opacity-90 font-secondary max-w-5xl">
            It is possible to switch between the two. We recommend a gap of one week (7 days) between the last dose.
            See our charts below outlining the possible switches. You can request the new pen via the platform.
            Simply login to your account to do this. If you are new to us you can register on our platform.
            If you wish to speak with a GP at any point, please book a consultation online.
          </p>
        </div>

        {/* Conversion Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Wegovy to Mounjaro Card */}
          <div className="bg-[#DBC8C8] rounded-[48px] p-10 lg:p-14 shadow-sm flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-12 px-2">
              <h3 className="text-2xl lg:text-[32px] font-bold text-black">Wegovy</h3>
              <span className="text-2xl lg:text-[32px] font-medium text-black/70">to</span>
              <h3 className="text-2xl lg:text-[32px] font-bold text-black">Mounjaro</h3>
            </div>

            <div className="w-full space-y-6 mb-12">
              {wegovyToMounjaro.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  {/* From Dose */}
                  <div className="w-[120px] lg:w-[150px] bg-wegovy-deep-red text-white py-4 rounded-2xl text-center text-xl font-bold shadow-md">
                    {item.from}
                  </div>

                  {/* Arrow */}
                  <MoveRight className="text-black w-8 h-8" strokeWidth={2.5} />

                  {/* To Dose */}
                  <div className="w-[120px] lg:w-[150px] bg-wegovy-deep-red text-white py-4 rounded-2xl text-center text-xl font-bold shadow-md">
                    {item.to}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-between items-center mb-12 px-4 text-sm lg:text-base font-secondary italic text-black/50">
              <span className="text-wegovy-red-3">Current Dose</span>
              <span className="text-wegovy-red-3">Starting Dose</span>
            </div>

            <h4 className="text-2xl lg:text-[34px] font-bold text-black tracking-tight mt-21">
              Conversion Chart
            </h4>
          </div>

          {/* Mounjaro to Wegovy Card */}
          <div className="bg-[#A06C6C5E] rounded-[48px] p-10 lg:p-14 shadow-sm flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-12 px-2">
              <h3 className="text-2xl lg:text-[32px] font-bold text-black">Mounjaro</h3>
              <span className="text-2xl lg:text-[32px] font-medium text-black/70">to</span>
              <h3 className="text-2xl lg:text-[32px] font-bold text-black">Wegovy</h3>
            </div>

            <div className="w-full space-y-6 mb-12">
              {mounjaroToWegovy.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4">
                  {/* From Dose */}
                  <div className="w-[120px] lg:w-[150px] bg-wegovy-deep-red text-white py-4 rounded-2xl text-center text-xl font-bold shadow-md">
                    {item.from}
                  </div>

                  {/* Arrow */}
                  <MoveRight className="text-black w-8 h-8" strokeWidth={2.5} />

                  {/* To Dose */}
                  <div className={item.to === "1mg" && idx === 3 ? "relative" : ""}>
                    <div className="w-[120px] lg:w-[150px] bg-wegovy-deep-red text-white py-4 rounded-2xl text-center text-xl font-bold shadow-md">
                      {item.to}
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <div className="w-full flex justify-between items-center mb-12 px-4 text-sm lg:text-base font-secondary italic text-black/50">
              <span className="text-wegovy-red-3">Current Dose</span>
              <span className="text-wegovy-red-3">Starting Dose</span>
            </div>

            <h4 className="text-2xl lg:text-[34px] font-bold text-black tracking-tight">
              Conversion Chart
            </h4>
          </div>

        </div>
      </div>
    </section>
  );
};
