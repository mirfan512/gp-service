"use client";

import React from "react";
import Image from "next/image";

export const DoseSchedule = () => {
  return (
    <section className="py-16 px-6 lg:px-12 max-w-[1440px] mx-auto font-primary">
      {/* Top Title - Left Aligned */}
      <h2 className="text-3xl lg:text-[42px] font-bold text-wegovy-brown mb-8 tracking-tight">
        Wegovy<sup>®</sup> - Semaglutide
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-x-8">
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
        <div className="lg:w-[65%] w-full flex flex-col">
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
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};