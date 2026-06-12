"use client";

import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { MOUNJARO_PRICING_OPTIONS } from "@/src/lib/constants/mounjaro";
import { Modal } from "@/src/components/ui/Modal";

export const MounjaroPricing = () => {
  const [selectedDose, setSelectedDose] = useState("2.5mg");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const handleBuyNow = () => {
    const token = Cookies.get("token");
    if (!token) {
      setIsLoginModalOpen(true);
    } else {
      router.push(`/assessment?treatment=mounjaro&dose=${selectedDose}`);
    }
  };

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 pt-0 pb-10 sm:pb-12 font-primary">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Left label column */}
          <div className="w-full lg:w-[30%] flex flex-col justify-start lg:pt-1">
            <div className="flex flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-start gap-4 lg:gap-8">
              <h3 className="text-[22px] sm:text-[24px] lg:text-[30px] font-bold italic text-[#834143] whitespace-nowrap">
                Select pen:
              </h3>
              <h3 className="text-[22px] sm:text-[24px] lg:text-[30px] font-bold italic text-[#834143] whitespace-nowrap">
                4 week supply
              </h3>
            </div>
          </div>

          {/* Right content column */}
          <div className="w-full lg:w-[70%]">
            {/* Dose buttons + prices */}
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 sm:gap-x-4 md:gap-x-2 lg:gap-x-0 gap-y-5 sm:gap-y-6 items-start">
                {MOUNJARO_PRICING_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className="flex flex-col items-center justify-start"
                  >
                    <button
                      onClick={() => setSelectedDose(option.value)}
                      className={clsx(
                        "min-w-[78px] sm:min-w-[84px] lg:min-w-[87px] h-[42px] sm:h-[46px] lg:h-[48px] px-4 rounded-[10px] text-white font-bold text-[14px] sm:text-[15px] lg:text-[16px] shadow-md transition-all duration-300",
                        selectedDose === option.value
                          ? "bg-[#834143] scale-[1.03] ring-2 ring-[#834143]/20"
                          : "bg-[#9A5A5C] hover:scale-[1.02]"
                      )}
                    >
                      {option.value}
                    </button>

                    <div
                      className={clsx(
                        "mt-3 text-[22px] sm:text-[24px] lg:text-[28px] italic font-extralight leading-none text-[#A45958] transition-opacity duration-300",
                        selectedDose === option.value ? "opacity-100" : "opacity-80"
                      )}
                    >
                      {option.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom area */}
            <div className="mt-16 lg:mt-24 flex flex-col items-center">
              {/* Main Centered Wrapper */}
              <div className="w-full flex flex-col items-center lg:items-start lg:w-fit">

                {/* Postage Text */}
                <p className="text-xl lg:text-2xl text-center font-medium text-wegovy-red-2 mb-3 font-secondary w-full lg:w-[628px]">
                  Inc. postage and packaging
                </p>

                {/* Button & Icons Row */}
                <div className="w-full flex flex-col lg:flex-row items-center gap-6">
                  
                  {/* Buy Button */}
                  <div className="w-full lg:w-[628px]">
                    <button 
                      onClick={handleBuyNow}
                      className="w-full h-[64px] sm:h-[72px] lg:h-[84px] bg-white border border-[#DEDEDE] rounded-[18px] lg:rounded-[22px] shadow-[inset_0px_4px_20px_rgba(161,51,51,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-[1.01] hover:bg-[#FFF9F9] active:scale-[0.99]"
                    >
                      <span className="text-[22px] sm:text-[24px] lg:text-[26px] font-medium text-[#834143]">
                        Buy Now
                      </span>
                    </button>
                  </div>

                  {/* Payment Icons */}
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="flex items-center justify-center w-[42px] h-[28px]">
                      <Image
                        src="/icons/mc.svg"
                        alt="Mastercard"
                        width={30}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center w-[42px] h-[28px]">
                      <Image
                        src="/icons/visa.svg"
                        alt="Visa"
                        width={30}
                        height={18}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center w-[42px] h-[28px]">
                      <Image
                        src="/icons/applepay.svg"
                        alt="Apple Pay"
                        width={28}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center w-[42px] h-[28px]">
                      <Image
                        src="/icons/gPay.svg"
                        alt="Google Pay"
                        width={28}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="mt-3 w-full lg:w-[628px] px-2 text-center text-[13px] sm:text-[15px] lg:text-[18px] font-light leading-snug text-[#D18B8B] italic">
                  Purchasing will take you to an online assessment. Once completed
                  a doctor will review this and authorise your medication
                  electronically if safe to do so.
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
          router.push(`/login?redirect=${encodeURIComponent(`/assessment?treatment=mounjaro&dose=${selectedDose}`)}`);
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