"use client";

import Image from "next/image";

export const MounjaroDoseSchedule = () => {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-0 pb-2 font-primary -mt-2 sm:-mt-4 lg:-mt-10 xl:-mt-14">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row items-end gap-4 sm:gap-6 lg:gap-6">
          {/* Left side */}
          <div className="w-full lg:w-[30%] flex flex-col justify-end lg:pb-6">
            <h2 className="text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[34px] font-bold text-[#A45958] tracking-tight leading-tight text-center lg:text-left mb-2 sm:mb-3 lg:mb-30">
              Mounjaro<sup>®</sup> - Tirzepatide
            </h2>

            <div className="relative w-full max-w-[170px] sm:max-w-[190px] lg:max-w-[420px] mx-auto lg:mx-0 aspect-[4/5]">
              <Image
                src="/images/boxpen.svg"
                alt="Mounjaro Product"
                fill
                className="object-contain object-left-top"
                priority
              />
            </div>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-[70%] flex items-end justify-center lg:justify-start">
            <div className="w-full max-w-[900px] lg:-mt-14 xl:-mt-5">
              <Image
                src="/images/penset.svg"
                alt="Mounjaro Titration Pens"
                width={900}
                height={500}
                className="w-full h-auto object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};