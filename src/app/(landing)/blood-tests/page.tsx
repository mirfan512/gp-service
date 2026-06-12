"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { AppDownloadBanner } from "@/src/components/landing/AppDownloadBanner";
import { SimpleHero } from "@/src/components/layout/SimpleHero";
import { Modal } from "@/src/components/ui/Modal";
import { useCreateCheckoutSessionMutation } from "@/src/store/services/paymentsApi";
import { useToast } from "@/src/components/ui/Toast";
import { getErrorMessage } from "@/src/store/services/api";

export default function BloodTestsPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();
  const { showToast } = useToast();
  const [createCheckoutSession, { isLoading }] = useCreateCheckoutSessionMutation();

  const handleBuyNow = async () => {
    const token = Cookies.get("token");
    if (!token) {
      setIsLoginModalOpen(true);
      return;
    }

    try {
      showToast("Redirecting to checkout...", "info");
      const res = await createCheckoutSession({
        type: "one_off",
        successUrl: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
      }).unwrap();

      const redirectUrl = res.data?.url || res.data?.session?.url;
      if (res.success && redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        showToast(res.message || "Failed to initiate payment session", "error");
      }
    } catch (err) {
      showToast(getErrorMessage(err), "error");
    }
  };

  return (
    <>
      <SimpleHero
        className="lg:h-[180px]"  
        title={
          <>
            Home Blood Test
          </>
        }
        titleStyle={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        textColumnClassName="lg:w-full lg:max-w-[1050px]"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 items-start lg:items-stretch">

            {/* LEFT SECTION: Detailed Information */}
            <div className="flex flex-col gap-10 text-gray-700 font-krub text-[#555555]">
              <p className="text-[18px] lg:text-[20px] leading-[152%] font-krub">
                We offer a comprehensive health assessment which includes a number of markers
                tested through a blood sample. This is a convenient and quick way to discover
                and understand how your general health is.
              </p>

              <div>
                <h3 className="font-bold text-[20px] lg:text-[22px] text-[#8E8E8E] mb-4">
                  Our home test kit assesses:
                </h3>
                <p className="text-[18px] lg:text-[18px] text-gray-700 leading-[152%] font-medium font-krub">
                  Kidney health, Liver health, Cholesterol Status, Diabetes, Vitamin D levels,
                  Calcium levels and much more.
                </p>
              </div>

              <p className="text-[18px] lg:text-[18px] text-gray-700 leading-[152%] font-krub">
                Once the order is placed a test kit will be sent out to you by post. Simply
                follow the instructions and return the test kit in the post using the label
                provided.
              </p>

              <p className="text-[18px] lg:text-[18px] text-gray-700 leading-[152%] font-krub">
                Results will be emailed to you directly with a short explanation for each test
                completed. Following this we recommend booking in for a consultation with one
                of our GPs to discuss the report further.
              </p>

              <div>
                <h3 className="font-bold text-[20px] lg:text-[22px] text-[#8E8E8E] mb-4">
                  Full list of tests included in the test kit are:
                </h3>
                <p className="text-[18px] lg:text-[18px] text-gray-700 leading-[152%] font-krub">
                  Alanine Aminotransferase (ALT), Albumin, Alkaline Phosphatase (ALP),
                  Aspartate Aminotransferase (AST), Creatinine, eGFR, Gamma GT, Globulin,
                  HbA1c, HDL, HDL Ratio, LDL, Non HDL Cholesterol, Sodium, Total Cholesterol,
                  Total Protein, Triglycerides, Urea and Vitamin D (25 OH), Haemoglobin,
                  Red Blood Cell Count (RBC), White Blood Cell Count (WBC), Corrected Calcium
                </p>
              </div>
            </div>

            {/* RIGHT SECTION: Product Visuals */}
            <div className="flex flex-col items-center mt-12 lg:mt-0 w-full h-full lg:justify-start lg:gap-4">

              {/* Product Image Container */}
              <div className="w-full relative flex  lg:mb-0 lg:min-h-130 overflow-hidden">
                <Image
                  src="/images/bloodkit.svg"
                  alt="Blood test kit"
                  fill
                  className="object-cover object-center lg:scale-110"
                  priority
                />
              </div>

              {/* Pricing & CTA */}
              <div className="w-full max-w-130 flex flex-col gap-1 lg:mt-7">

                {/* Price and Payment Row */}
                <div className="w-full flex items-center justify-between gap-4">
                  <div className="text-[34px] lg:text-[44px] font-medium text-[#253E96] leading-none">
                    £160.00
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {/* Payment Icons */}
                    <div className="flex items-center gap-2">
                      <Image src="/icons/mc.svg" alt="Mastercard" width={40} height={25} />
                      <Image src="/icons/visa.svg" alt="Visa" width={40} height={25} />
                      <Image src="/icons/applepay.svg" alt="Apple Pay" width={40} height={25} />
                      <Image src="/icons/gPay.svg" alt="Google Pay" width={40} height={25} />
                    </div>
                    {/* Postage Text */}
                    <span className="text-[18px] font-semibold text-[#253E96]">
                      Inc. postage and packaging
                    </span>
                  </div>
                </div>

                {/* CTA BUTTON */}
                <button
                  onClick={handleBuyNow}
                  disabled={isLoading}
                  className="w-full h-[64px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F9FA_100%)] border border-[#253E96] rounded-[8px] flex items-center justify-center transition-all duration-300 hover:brightness-95 active:scale-[0.98] disabled:opacity-50"
                  style={{
                    boxShadow: 'inset 0px 2px 8px #263E86',
                  }}
                >
                  <span className="text-[#253E96] font-semibold text-[18px]">
                    {isLoading ? "Processing..." : "Buy Now"}
                  </span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      <AppDownloadBanner />

      {/* Login Required Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Account Required"
        actionLabel="Log In"
        onAction={() => {
          setIsLoginModalOpen(false);
          router.push(`/login?redirect=${encodeURIComponent("/blood-tests")}`);
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
    </>
  );
}


