"use client";

import React from "react";
import Image from "next/image";
import { AppDownloadBanner } from "@/src/components/landing/AppDownloadBanner";
import { SimpleHero } from "@/src/components/layout/SimpleHero";

export const ContactUs = () => {
  return (
    <section className="bg-white font-primary overflow-hidden">
      <SimpleHero
        className="h-[290px]"
        title={
          <>
            Need to speak <br></br> with someone?
          </>
        }
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-12 lg:pb-24 pt-4 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-16 items-start">

          {/* Left Content */}
          <div className="space-y-6 text-gray-700 font-secondary mt-8 lg:mt-16">
            <p className="text-xl lg:text-[20px] leading-relaxed">
              Whether you&apos;re unsure which appointment type to choose, having trouble completing an online form, or just need reassurance about the process, our team is trained to help in a calm, supportive, and confidential manner.
            </p>

            <p className="text-xl lg:text-[20px] text-gray-700 leading-relaxed">
              For clinical concerns, our clinicians will always be happy to help during your consultation. For everything else, please don&apos;t hesitate to contact our support team. We are committed to providing accessible, reliable, and patient-centred support—whenever you need us.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div className="relative z-10 flex flex-col justify-end h-full">
            <div className="flex justify-center lg:justify-end pr-0 lg:pr-7 lg:-mt-[210px]">
              <Image
                src="/images/contacDr.svg"
                alt="Support Agent Illustration"
                width={400}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>

        {/* Contact Cards Section */}
        <div className="-mt-17">
          {/* Section Header */}
          <div className="text-center mb-12 max-w-[600px] mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 font-primary leading-tight">
              Need help?
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">

            {/* Card 1: Email */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-pink-border transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(212,83,126,0.08)]">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-pink-soft border border-brand-pink-border mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/Email.svg"
                  alt="Email"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <h4 className="text-[17px] font-bold text-gray-900 mb-2 font-primary">Email us</h4>
              <p className="text-gray-500 text-sm font-secondary leading-relaxed flex-1 mb-6">
                Send us an email and our support team will reply within 24 hours.
              </p>

              <div className="border-t border-gray-100 pt-5 w-full">
                <a
                  href="mailto:admin@onlinegpservice.co.uk"
                  className="text-brand-pink font-semibold text-[15px] font-secondary hover:underline underline-offset-4 transition-all break-all block leading-snug"
                >
                  admin@onlinegpservice.co.uk
                </a>
              </div>
            </div>

            {/* Card 2: Call */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-pink-border transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(212,83,126,0.08)]">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-pink-soft border border-brand-pink-border mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/icons/Telephone.svg"
                  alt="Telephone"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <h4 className="text-[17px] font-bold text-gray-900 mb-2 font-primary">Call us</h4>
              <p className="text-gray-500 text-sm font-secondary leading-relaxed flex-1 mb-6">
                Speak directly with our team for general or booking support.
              </p>

              <div className="border-t border-gray-100 pt-5 w-full">
                <a
                  href="tel:08002289041"
                  className="text-brand-pink font-bold text-[22px] font-primary hover:underline underline-offset-4 transition-all block leading-tight"
                >
                  0800 228 90 41
                </a>
              </div>
            </div>

            {/* Card 3: FAQs */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-brand-pink-border transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(212,83,126,0.08)]">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-pink-soft border border-brand-pink-border mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7 text-brand-pink"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </div>

              <h4 className="text-[17px] font-bold text-gray-900 mb-2 font-primary">FAQs</h4>
              <p className="text-gray-500 text-sm font-secondary leading-relaxed flex-1 mb-6">
                Browse our help center to find quick answers to common questions.
              </p>

              <div className="border-t border-gray-100 pt-5 w-full">
                <a
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 text-brand-pink font-semibold text-[15px] font-secondary hover:underline underline-offset-4 transition-all"
                >
                  Find answers in FAQs
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppDownloadBanner />
    </section>
  );
};
