"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Modal } from "@/src/components/ui/Modal";

interface PriceDisplayProps {
  price: number;
  productType: string;
  packageSize: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, productType, packageSize }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const handleBuyNow = () => {
    const token = Cookies.get("token");
    if (!token) {
      setIsLoginModalOpen(true);
    } else {
      router.push(`/nad-injection/medical-questionnaire?productType=${encodeURIComponent(productType)}&packageSize=${encodeURIComponent(packageSize)}`);
    }
  };

  return (
    <div className="mt-2 flex flex-col items-center lg:items-end">
      {/* Price and Payment Badges */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 mb-4">
        <div className="text-[52px] lg:text-[88px] font-bold text-[#42589E]">
          £{price.toFixed(2)}
        </div>
        <div className="flex flex-col items-center lg:items-end gap-2">
          <div className="flex items-center gap-3">
            <div className="w-14 h-8 relative flex items-center justify-center p-1">
              <Image src="/icons/mc.svg" alt="Mastercard" fill className="object-contain" />
            </div>
            <div className="w-14 h-8 relative flex items-center justify-center p-1">
              <Image src="/icons/visa.svg" alt="Visa" fill className="object-contain" />
            </div>
            <div className="w-14 h-8 relative flex items-center justify-center p-1">
              <Image src="/icons/applepay.svg" alt="Apple Pay" fill className="object-contain" />
            </div>
            <div className="w-14 h-8 relative flex items-center justify-center p-1">
              <Image src="/icons/gPay.svg" alt="Google Pay" fill className="object-contain" />
            </div>
          </div>
          <span className="text-[#42589E] font-medium text-[20px]">Inc. postage and packaging</span>
        </div>
      </div>

      <div className="w-full relative group -mt-10">
        <button 
          onClick={handleBuyNow}
          className="relative w-full py-7 rounded-xl bg-white border border-[#DEDEDE] shadow-[inset_0_4px_20px_0_#EDB984] flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
        >
          <span className="text-[#42589E] font-bold text-2xl lg:text-[28px]">Buy Now</span>
        </button>
      </div>

      <div className="w-full flex justify-center">
        <p className="mt-6 text-[#42589E]/60 text-xs lg:text-[18px] text-left leading-relaxed max-w-125 italic">
          After purchasing you will be redirected to complete an online assessment. Once completed a doctor will review this and authorize your medication electronically if safe to do so.
        </p>
      </div>

      {/* Login Required Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Account Required"
        actionLabel="Log In"
        onAction={() => {
          setIsLoginModalOpen(false);
          const dest = `/nad-injection/medical-questionnaire?productType=${encodeURIComponent(productType)}&packageSize=${encodeURIComponent(packageSize)}`;
          router.push(`/login?redirect=${encodeURIComponent(dest)}`);
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
    </div>
  );
};
