import React from "react";
import Image from "next/image";
import { FigmaHero } from "@/src/components/layout/Hero";
import { AppDownloadBanner } from "@/src/components/landing/AppDownloadBanner";
import { SimpleHero } from "@/src/components/layout/SimpleHero";

export const DietAndExercise = () => {
  return (
    <section className="bg-white font-primary overflow-hidden">
      <SimpleHero
        title={
          <span className="block w-[800px] max-w-[100vw]">
            Diet and Exercise
          </span>
        }



      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 lg:py-0">

        {/* New Journey Section */}
        <div className="relative pt-12 lg:pt-24 grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12 items-start mb-2 lg:mb-2">

          <div className="absolute right-10 lg:right-30 -top-12 lg:-top-40 z-30 pointer-events-none w-[240px] lg:w-[380px]">
            <Image
              src="/images/boy.svg"
              alt="Exercise illustration"
              width={580}
              height={580}
              className="object-contain w-full h-auto"
              priority
            />
          </div>

          <div className="relative z-10 pt-6 lg:pt-0">
            <h2 className="text-[32px] lg:text-[42px] font-bold text-mounjaro-light mb-2">
              New Journey. New You.
            </h2>
            <p className="text-xl lg:text-[23px] text-gray-700 leading-relaxed font-secondary">
              The weight loss journey requires a shift in mindset which includes
              improving diet and introducing regular exercise into your weekly routine.
              This shift will continue with you long after you discontinue medication
              and help you to maintain a healthy weight. We have made
              recommendations below to help, alongside the use of your weight loss
              injectable treatment.
            </p>
          </div>
          <div className="hidden md:block">{/* Spacer for grid */}</div>
        </div>

        {/* Healthy Weight Loss Section */}
        <div className="mb-24">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#A3B094] mb-2 lg:mb-6 mt-12">
            Healthy Weight Loss
          </h2>
          <p className="text-xl lg:text-[23px] text-gray-700 leading-relaxed font-secondary">
            Losing weight safely works best when diet, physical activity, and behaviour change are combined. We
            recommend gradual, steady weight loss by creating small, realistic changes that you can maintain long-
            term. Medicines such as Mounjaro (tirzepatide) and Wegovy (semaglutide) can help reduce appetite, but
            they work best alongside healthy habits rather than replacing them.
          </p>
        </div>

        {/* Eating Well Section */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start mb-12">
          <div className="flex-1">
            <h2 className="text-[32px] lg:text-[40px] font-bold text-[#A3B094] mb-4 lg:mb-6">
              Eating Well for Weight Loss
            </h2>
            <p className="text-xl lg:text-[23px] text-gray-700 leading-relaxed font-secondary">
              Aim for regular meals and avoid skipping breakfast. Focus on
              high-protein foods (eggs, fish, chicken, beans, yoghurt) to help
              you feel full for longer. Fill half your plate with vegetables or
              salad, choose wholegrains where possible, and reduce foods
              high in sugar, fat, and ultra-processing. Drink plenty of water and
              limit alcohol. When using Mounjaro or Wegovy, eating smaller
              portions slowly can reduce nausea and bloating.
            </p>
          </div>
          <div className="w-full md:w-[400px] shrink-0 bg-white rounded-[40px] shadow-[0_4px_30px_rgb(0,0,0,0.05)] p-6 flex flex-col items-center">
            <Image
              src="/images/food.svg"
              alt="Protein Food Chart"
              width={400}
              height={450}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Physical Activity Section */}
        <div className="mb-12">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#A3B094] mb-8">
            Physical Activity That Counts
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-center">

            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/girl.svg"
                alt="Cycling illustration"
                width={280}
                height={280}
                className="object-contain"
              />
            </div>

            {/* Content */}
            <div className="max-w-[720px]">
              <p className="text-xl lg:text-[23px] text-gray-700 leading-[1.8] font-secondary">
                NICE recommends at least 150 minutes of moderate activity per week,
                such as brisk walking, cycling, or swimming. Start gently if you are
                new to exercise. Everyday movement matters too—taking the stairs,
                short walks, or standing more often all help. Add strength exercises
                twice weekly (such as resistance bands or body-weight exercises)
                to protect muscle while losing weight.
              </p>
            </div>

          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-24">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#A3B094] mb-6">
            Tips for Patients on Mounjaro or Wegovy
          </h2>
          <p className="text-xl lg:text-[23px] text-gray-700 leading-relaxed font-secondary mb-12">
            These medicines reduce appetite, so it's important to prioritise nutrition. Don't skip meals completely. Eat
            protein first, chew slowly, and stop when comfortably full. Common side effects include nausea or
            constipation—these usually improve. Staying hydrated aiming for 2-3 litres daily, increasing fibre gradually,
            and gentle activity can help. Always follow your clinician's dosing advice and book a consultation with a
            doctor if required.
          </p>

          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#A3B094] mb-6">
            Staying on Track
          </h2>
          <div className="space-y-6 text-lg lg:text-[23px] text-gray-700 leading-relaxed font-secondary">
            <p>
              Weight loss is not always linear. Plateaus are normal. With the help of injectables,
              a well-balanced diet and exercise plan weight loss is achievable. Track progress
              using non-scale victories like improved energy, fitness, or clothing fit but also
              document your weight in your account on the measurements section. Remember to
              sleep well, manage stress, and seek support if motivation drops. Our platform is
              set up so that you can contact a doctor at anytime whether it is regarding weight
              loss or a different medical issue altogether. Our remote General Practitioners are
              available to help you whenever required.
            </p>
            <p>
              Sustainable change is about consistency, not perfection.
            </p>
          </div>
        </div>
      </div>
      <AppDownloadBanner />
    </section>
  );
};
