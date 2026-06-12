"use client";

import React from "react";
import Image from "next/image";

export const WeightLossSection = () => {
  return (
    <section className="py-20 px-6 max-w-[1240px] mx-auto font-primary">
      {/* 1. How much weight could you lose? */}
      <div className="mb-24">
        <h2 className="text-3xl lg:text-[40px] font-bold text-wegovy-brown mb-6 tracking-tight">
          How much weight could you lose?
        </h2>
        <p className="text-lg lg:text-[22px] leading-relaxed text-[#D18B8B] italic opacity-90 font-secondary max-w-5xl">
          Individual results may vary but on average studies have shown on average 15-17% weight loss from the start of treatment.
          We recommend diet and exercise as part of the weight loss journey. Whilst not approved, Wegovy&reg; has also
          been shown to reduce the size of the waistline, improve blood pressure, reduce cholesterol and improve blood sugar.
        </p>
      </div>

      {/* 2. What does the pen look like? */}
      <div className="mb-32">
        <h2 className="text-3xl lg:text-[40px] font-bold text-wegovy-brown mb-16 tracking-tight">
          What does the pen look like?
        </h2>

        <div className="relative flex flex-col items-center">
          <Image
            src="/icons/penlook.svg"
            alt="Wegovy Pen"
            width={900}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* 3. How do I inject the pen? */}
      <div className="mb-16">
        <h2 className="text-3xl lg:text-[40px] font-bold text-wegovy-brown mb-6 tracking-tight">
          How do I inject the pen?
        </h2>
        <p className="text-lg lg:text-[22px] leading-relaxed text-[#D18B8B] italic opacity-90 font-secondary max-w-5xl mb-16">
          Start by washing your hands and ensuring the pen has not expired by checking the date on the pen. Do not use the pen
          if it has expired, if the pen appears broken. Check that the liquid is clear and colourless. Clean the injection site using an
          alcohol wipe or with soap and water.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Injection Sites Image */}
          <div className="lg:w-1/2 w-full">

            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/icons/injectSite.svg"
                alt="Wegovy Injection Sites"
                fill
                className="object-contain"
              />
            </div>

          </div>

          {/* Injection Text */}
          <div className="lg:w-1/2 w-full space-y-8">
            <p className="text-2xl lg:text-[28px] italic font-light text-[#D18B8B] leading-relaxed font-secondary">
              Inject into your upper leg (front of the thigh), lower stomach (keep 2 inches away from your belly button), or upper arm. Alternate sites weekly.
            </p>

            <div>
              <h4 className="text-2xl font-bold text-wegovy-brown mb-2 tracking-tight">Avoid injection site if:</h4>
              <p className="text-2xl italic font-light text-[#D18B8B] font-secondary">
                Tender, red, hard or bruised.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Detailed Step-by-Step Injection Guide */}
        <div className="mt-32 pt-24 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
            {/* Step A - Pull Cap */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="relative w-[280px] h-[350px] shrink-0">
                <Image
                  src="/images/Clip-path.svg"
                  alt="Pull pen cap"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="text-[20px] lg:text-[23px] italic font-light text-wegovy-red-3 leading-relaxed font-secondary">
                  Pull the pen cap straight off your pen. The needle is hidden inside the cover. Be careful to press against the needle cover to avoid needle stick injuries.
                </p>
              </div>
            </div>

            {/* Step B - Apply Pressure */}
            <div className="flex flex-col md:flex-row items-center gap-12 relative">
              <div className="relative w-[280px] h-[350px] shrink-0">
                <Image
                  src="/images/Clip-path2.svg"
                  alt="Inject dose"
                  fill
                  className="object-contain"
                />
                {/* Tooltip callout */}
             
              </div>
              <div className="flex-1 space-y-6">
                <p className="text-[20px] lg:text-[23px] italic font-light text-wegovy-red-3 leading-relaxed font-secondary">
                  Push the pen firmly against your skin and keep applying pressure.
                </p>
                <p className="text-[20px] lg:text-[23px] italic font-light text-wegovy-red-3 leading-relaxed font-secondary">
                  You'll know your injection has started when the yellow bar starts moving. If you don't see it moving, press the pen more firmly against your skin.
                </p>
              </div>
            </div>
          </div>

          {/* Clicks Guide - Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto items-start pb-12">
            {/* Click 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-40 mb-8 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/Clip-path3.svg"
                  alt="1st Click"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <h5 className="text-xl font-bold text-wegovy-brown mb-2 tracking-tight italic">1st Click</h5>
              <p className="text-lg italic font-light text-wegovy-red-3 font-secondary">Injection starts</p>
            </div>

            {/* Click 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-40 mb-8 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/Clip-path4.svg"
                  alt="2nd Click"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <h5 className="text-xl font-bold text-wegovy-brown mb-2 tracking-tight italic">2nd Click</h5>
              <p className="text-lg italic font-light text-wegovy-red-3 font-secondary leading-tight">
                Injection is ongoing. Hold the injection in position
              </p>
            </div>

            {/* Completed */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-40 mb-8 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/Clip-path5.svg"
                  alt="Injection Completed"
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>
              <h5 className="text-xl font-bold text-wegovy-brown mb-2 tracking-tight italic">Yellow bar has stopped moving.</h5>
              <p className="text-lg italic font-light text-wegovy-red-3 font-secondary">Injection completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
