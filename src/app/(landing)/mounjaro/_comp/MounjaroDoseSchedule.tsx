"use client";


import Image from "next/image";

export const MounjaroDoseSchedule = () => {
  return (
    <section className="py-20 px-6 max-w-[1240px] mx-auto font-primary">
      {/* Top Title */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-[42px] font-bold text-wegovy-brown mb-4 tracking-tight">
          Mounjaro® - Tirzepatide
        </h2>

      </div>
    
      {/* Titration Row */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* Left: Box and Pen Mockup */}
        <div className="lg:w-[30%] w-full flex justify-center lg:justify-start">
          <div className="relative w-[300px] h-[350px]">
            {/* Using a generic pen/box icon/image if Mounjaro specific one not found, 
                or placing the pen.svg as a placeholder */}
            <Image
              src="/images/boxpen.svg"
              alt="Mounjaro Product"
              fill
              className="object-contain"
            />
          </div>
        </div>


        <div className="lg:w-[70%] w-full relative h-[300px] lg:h-[450px]">
          <Image
            src="/images/penset.svg"
            alt="Mounjaro Titration Pens"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
