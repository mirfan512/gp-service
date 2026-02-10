"use client";

import React from "react";
import Image from "next/image";

export const DoseSchedule = () => {
  return (
    <section className="py-16 px-6 max-w-[1240px] mx-auto font-primary">
      {/* Top Title - Left Aligned */}
      <h2 className="text-3xl lg:text-[42px] font-bold text-wegovy-brown mb-4 tracking-tight">
        Wegovy&reg; - Semaglutide
      </h2>

      <div className="flex flex-col lg:flex-row items-end gap-x-4">
        {/* Left Side: Angled Pen */}
        <div className="lg:w-[35%] w-full flex justify-center lg:justify-start -ml-4">
          <Image
            src="/images/pen.svg"
            alt="Wegovy Pen"
            width={450}
            height={550}
            className="object-contain"
            priority
          />
        </div>

        {/* Right Side: Price Subtitle + Chart */}
        <div className="lg:w-[65%] w-full flex flex-col items-center">
          <div className="mb-6">
            <p className="text-2xl lg:text-[28px] italic font-light text-[#D18B8B] font-secondary">
              Starting from £115 per month
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/images/chart.svg"
              alt="Titration Chart"
              width={900}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <div className="h-[2px] bg-gray-200 w-full relative">
          <div className="absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-[#5b7553]"></div>
          <div className="absolute top-[-4px] right-0 w-2 h-2 rounded-full bg-[#5b7553]"></div>
        </div>
      </div>
    </section>
  );
};
