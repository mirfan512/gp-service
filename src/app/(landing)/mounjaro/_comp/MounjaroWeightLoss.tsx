"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export const MounjaroWeightLoss = () => {
  return (
    <section className="py-2 px-6 font-primary">
      <div className="max-w-[1100px] mx-auto">

        {/* How much weight */}
        <div className="mb-24">
          <h2 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-6">
            How much weight could you lose?
          </h2>
          <p className="text-xl lg:text-[23px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
            Individual results may vary but on average studies have shown 15-22.5% weight loss up to 72 weeks after starting treatment. We recommend diet and exercise as part of the weight loss journey.
          </p>
        </div>

        <div className="mb-8 relative z-10">
          <h2 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-6">
            What does the pen look like?
          </h2>
          <p className="text-lg lg:text-[20px] italic font-light text-wegovy-brown font-secondary leading-relaxed mb-6 max-w-5xl">
            A removable cap can be seen on the left of the pen to which a needle is attached. The dial is located at the top of the pen. Full instructions on how to use the pen can can be seen by clicking <span className="underline cursor-pointer font-bold">here</span>. Please note with each order you will receive 5 needles, 5 alcohol wipes and a sharps box for safe disposal.
          </p>
        </div>

        <div className="w-full flex justify-center -mt-8 lg:-mt-20 -mb-8 lg:-mb-16 relative z-0">
          <Image
          src={"/images/injectionpart.png"}
          alt="Mounjaro pen"
          width={1100}
          height={600}
          className="object-contain pointer-events-none"
          priority
          />
        </div>
   


        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-x-20 gap-y-16 relative z-10">
          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">How should I store the pen?</h3>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
              Keep Mounjaro<sup>®</sup> in the original packaging to protect from sunlight. Store it in the refrigerator from 2 °C to 8 °C. You can take the pen out of the refrigerator to let it reach room temperature before using it.* Leave the cap on until you’re ready to inject. Do not freeze. Throw away pen if Mounjaro<sup>®</sup> has been frozen,
            </p>
          </div>

          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">How should I dispose of the pen?</h3>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
              A sharps box is included as part of your order. Place the used pen into the sharps disposal box and return to any nearest pharmacy once full. Do not throw away into household refuse bins.
            </p>
          </div>

          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">Am I eligible for this injection?</h3>
            <ul className="space-y-3">
              <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
                You may be eligible for this injection if you have:
              </p>
              {[
                "BMI of 30 or above",
                "BMI of 27 or above with weight-related conditions",
                "Committed to lifestyle changes",
                "Not pregnant or breastfeeding"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg lg:text-[21px] italic text-wegovy-brown font-secondary pt-2 pl-6">
                  <Check className="text-wegovy-brown w-5 h-5 flex-shrink-0" /> {item}
                </li>
              ))}
              <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed">
                You will be asked to fill in a medical form which is reviewed by a doctor before a prescription is issued.
              </p>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl lg:text-[30px] font-bold text-wegovy-brown mb-4">What are the side effects of Mounjaro?</h3>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed mb-6">
              You may experience side effects initially when commencing treatment or when increasing the dose. If you experience any unwanted side effects that you are concerned about please contact a doctor. Drinking water, having lighter meals and giving time to get used to the medication may help. In some cases the dose may need to be reduced.
            </p>
            <h4 className="text-xl lg:text-[26px] font-bold text-wegovy-brown ">Common or very common</h4>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed mb-6">
              Alopecia (hair loss); appetite decreased; asthenia; burping; constipation; diarrhoea; dizziness; gastrointestinal discomfort; gastrointestinal disorders; hypersensitivity; hypotension; lethargy; malaise; nausea; vomiting
            </p>
            <h4 className="text-xl lg:text-[26px] font-bold text-wegovy-brown ">Uncommon</h4>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed mb-6">
              Gallbladder disorders; pancreatitis acute; taste altered
            </p>
            <h4 className="text-xl lg:text-[26px] font-bold text-wegovy-brown ">Rare or very rare</h4>
            <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed mb-6">
              Angioedema
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
