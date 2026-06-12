"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { WEGOVY_PRICING_OPTIONS } from "@/src/lib/constants/wegovy";
import { Modal } from "@/src/components/ui/Modal";

export const PricingCards = () => {
  const [selectedDose, setSelectedDose] = useState("0.25mg");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const handleBuyNow = () => {
    const token = Cookies.get("token");
    if (!token) {
      setIsLoginModalOpen(true);
    } else {
      router.push(`/assessment?treatment=wegovy&dose=${selectedDose}`);
    }
  };

  return (
    <section className="bg-white px-6 font-primary">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Labels Side - Left */}
          <div className="flex flex-col gap-12 lg:pt-4 lg:w-[30%] -mt-17">

            <h3 className="text-2xl lg:text-[32px] font-bold italic text-[var(--c-wegovy-red-3)] drop-shadow-sm whitespace-nowrap lg:text-right">
              Select pen:
            </h3>
            <h3 className="text-2xl lg:text-[32px] font-bold italic text-[var(--c-wegovy-red-3)] drop-shadow-sm whitespace-nowrap lg:mt-1 lg:text-right">
              4 week supply
            </h3>

          </div>

          {/* Options Grid Side - Right */}
          <div className="flex-1 -mt-17">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-1">
              {WEGOVY_PRICING_OPTIONS.map((option) => (
                <div key={option.value} className="flex flex-col items-center gap-12 ">
                  {/* Dose Button */}
                  <button
                    onClick={() => setSelectedDose(option.value)}
                    className={clsx(
                      "flex items-center justify-center rounded-[10px] border border-white text-white font-bold text-lg transition-all duration-300",
                      selectedDose === option.value
                        ? "scale-105 shadow-[0px_6px_8px_rgba(0,0,0,0.3)] bg-[#834143]"
                        : "shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-[#834143] hover:scale-105"
                    )}
                    style={{
                      width: "107px",
                      height: "69px",
                    }}
                  >
                    {option.value}
                  </button>

                  {/* Price Label */}
                  <div className={clsx(
                    "text-[30px] italic font-extralight font-inter leading-none tracking-normal transition-colors duration-300 lg:mt-1",
                    selectedDose === option.value ? "text-wegovy-deep-red" : "text-wegovy-red-3"
                  )}>
                    {option.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-16 flex flex-col items-center">

              {/* Main Centered Wrapper */}
              <div className="w-full flex flex-col items-center lg:items-start lg:w-fit">

                {/* Postage Text */}
                <p className="text-xl lg:text-2xl text-center font-medium text-wegovy-red-2 mb-3 font-secondary w-full lg:w-[628px]">
                  Inc. postage and packaging
                </p>

                {/* Button & Icons Row */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-6">
                  
                  {/* Buy Button */}
                  <button 
                    onClick={handleBuyNow}
                    className="w-full lg:w-[628px] h-[84px] bg-white border border-[#DEDEDE] rounded-[20px] shadow-[inset_0px_4px_20px_rgba(161,51,51,0.87)] flex items-center justify-center transition-all duration-300 hover:scale-[1.01] hover:shadow-[inset_0px_4px_25px_rgba(161,51,51,1)] hover:bg-[#FFF9F9] active:scale-[0.98]"
                  >
                    <span className="text-2xl font-bold text-wegovy-red-2 tracking-wide">
                      Buy Now
                    </span>
                  </button>

                  {/* Payment Icons */}
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <Image
                      src="/icons/mc.svg"
                      alt="Mastercard"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
                    <Image
                      src="/icons/visa.svg"
                      alt="Visa"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
                    <Image
                      src="/icons/applepay.svg"
                      alt="Apple Pay"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
                    <Image
                      src="/icons/gPay.svg"
                      alt="Google Pay"
                      width={40}
                      height={25}
                      className="object-contain"
                    />
                  </div>

                </div>

                {/* Disclaimer */}
                <p className="mt-3 w-full lg:w-[628px] px-2 text-center text-[14px] lg:text-[18px] leading-relaxed text-[#D18B8B] italic opacity-85 font-secondary">
                  Purchasing will take you to an online assessment. Once completed a
                  doctor will review this and authorise your medication electronically
                  if safe to do so.
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Login Required Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Account Required"
        actionLabel="Log In"
        onAction={() => {
          setIsLoginModalOpen(false);
          router.push(`/login?redirect=${encodeURIComponent(`/assessment?treatment=wegovy&dose=${selectedDose}`)}`);
        }}
      >
        <div className="space-y-3 py-2">
          <p className="text-gray-600 font-medium">
            To continue with your purchase, please log in or create an account.
          </p>
          <p className="text-sm text-gray-500">
            Having an account allows us to securely link your medical assessment, order details, and doctor reviews to your profile.
          </p>
        </div>
      </Modal>
    </section>
  );
};
