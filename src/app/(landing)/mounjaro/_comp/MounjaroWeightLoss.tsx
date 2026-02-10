"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export const MounjaroWeightLoss = () => {
  return (
    <section className="py-24 bg-[#FCFCFA] px-6 font-primary">
      <div className="max-w-[1100px] mx-auto">

        {/* How much weight */}
        <div className="mb-24">
          <h2 className="text-[32px] lg:text-[38px] font-bold text-wegovy-brown mb-6">
            How much weight could you lose?
          </h2>
          <p className="text-xl lg:text-[23px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
            On average, people taking the maximum dose (15mg once weekly) lost 22.5% of their body weight after 72 weeks of treatment.
          </p>
        </div>

        <div className="mb-32">
          <h2 className="text-[32px] lg:text-[38px] font-bold text-wegovy-brown mb-6">
            What does the pen look like?
          </h2>
          <p className="text-lg lg:text-[20px] italic font-light text-wegovy-brown font-secondary leading-relaxed mb-12 max-w-5xl">
            A removable cap can be seen on the left of the pen to which a needle is attached. The dial is located at the top of the pen.
            Full instructions on how to use the pen can can be seen by clicking <span className="underline cursor-pointer font-bold">here</span>.
            Please note with each order you will receive 5 needles, 5 alcohol wipes and a sharps box for safe disposal.
          </p>
        </div>


        <div className="mb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Image 1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/mclip1.svg"
                alt="Pen diagram part 1"
                width={360}
                height={260}
                className="bgobject-contain"
              />
              <p className="mt-3 text-sm text-wegovy-brown font-secondary italic">
                Needle and cap attachment
              </p>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/mclip2.svg"
                alt="Pen diagram part 2"
                width={360}
                height={260}
                className="object-cover"
              />
              <p className="mt-3 text-sm text-wegovy-brown font-secondary italic">
                Dose dial and cartridge
              </p>
            </div>

            {/* Image 3 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/mclip3.svg"
                alt="Pen diagram part 3"
                width={360}
                height={260}
                className="object-contain"
              />
              <p className="mt-3 text-sm text-wegovy-brown font-secondary italic">
                Injection and push hold
              </p>
            </div>

          </div>
        </div>


        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-20 gap-y-16">
          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">How should I store the pen?</h3>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
              Mounjaro should be stored in the refrigerator between 2°C and 8°C. Once in use, the pen can be kept at room temperature (up to 30°C) for up to 30 days. Protect it from light and do not freeze.
            </p>
          </div>

          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">How should I dispose of the pen?</h3>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
              After each injection, you should dispose of the used needle in a sharps bin. When the pen is empty, dispose of it according to local guidelines.
            </p>
          </div>

          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">Am I eligible for this injection?</h3>
            <ul className="space-y-3">
              {[
                "BMI of 30 or above",
                "BMI of 27 or above with weight-related conditions",
                "Committed to lifestyle changes",
                "Not pregnant or breastfeeding"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg italic text-wegovy-brown font-secondary">
                  <Check className="text-wegovy-brown w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">What are the common side effects?</h3>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
              Common side effects include nausea, diarrhoea, vomiting, and constipation. These usually decrease as your body adjusts to the medication.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
