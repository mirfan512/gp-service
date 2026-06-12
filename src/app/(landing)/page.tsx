import { AppDownloadBanner } from "@/src/components/landing/AppDownloadBanner";
import { PrivateAppointments } from "@/src/components/landing/PrivateAppointments";
import { ServicesAndCategories } from "@/src/components/landing/ServicesAndCategories";
import { FigmaHero } from "@/src/components/layout/Hero";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <FigmaHero
        className="!overflow-visible relative z-40"
        title={
          <>
            Speak to a GP
            <br />
            Anytime <br /> Anywhere
          </>
        }
        subtitle={

          <div className="space-y-7 text-white/95 font-inter text-[20px] md:text-[24px] leading-[1.55] text-justify">
            <p>
              Your health and peace of mind come first. With our secure telemedicine
              platform, you can speak to a fully qualified UK GP in minutes — all for just £49.
            </p>

            <p>
              Our doctors are GMC-registered, fully insured and have extensive NHS
              experience, ensuring you receive the same high standard of care as in a
              traditional clinic. Whether you need a prescription, referral letter, or fit
              note, it’s all included in one consultation.
            </p>
          </div>
        }

        subtitleClassName="
          mt-4 lg:mt-6
          w-full max-w-[620px]
          text-[15px] lg:text-[17px]
          leading-[1.7]
          text-white/90
          text-left
        "
      >
        {/* Right Section: Dr Image and Button */}
        <div className="relative w-full flex flex-col items-center lg:items-end gap-2 xl:gap-0 lg:translate-y-19 lg:pr-4 xl:pr-0">
          <div className="relative w-full max-w-[500px] lg:max-w-[440px] xl:max-w-[min(500px,38vw)] 2xl:max-w-[600px] aspect-[508/420] 
                          transition-all duration-500 ease-in-out
                          lg:-translate-x-16 xl:-translate-x-20 2xl:-translate-x-12">

            {/* Logo pasted on the monitor */}
            {/* Nudge the top, left, width, and height percentages to perfectly align with the monitor in the SVG */}
            <div
              className="absolute z-20 pointer-events-none drop-shadow-md rounded-lg overflow-hidden"
              style={{ top: "29%", left: "70%", width: "8%", height: "16%" }}
            >
              <Image
                src="/icons/logo-withoutbg.png"
                alt="Monitor Logo"
                fill
                className="object-contain mix-blend-darken"
                priority
              />
            </div>

            <Image
              src="/images/heroimage.svg"
              alt="Doctor Consultation"
              fill
              className="object-contain drop-shadow-[0px_20px_40px_rgba(0,0,0,0.1)] z-10 relative"
              priority
            />
          </div>

          {/* Book Consultation Button */}
          <div className="w-full max-w-[500px] lg:max-w-[380px] xl:max-w-[440px] 2xl:max-w-[900px] pb-6 lg:pb-0
                          transition-all duration-500 ease-in-out
                          -translate-y-2 lg:-translate-y-10 xl:-translate-y-0
                          lg:-translate-x-16 xl:-translate-x-20 2xl:-translate-x-12
                          relative z-30">
            <button
              className="
                flex items-center justify-center gap-[10px]
                w-full
                h-[64px] lg:h-[72px]
                bg-c
                border border-white/30
                rounded-[12px]
                drop-shadow-[0px_4px_15px_rgba(0,0,0,0.3)]
                text-white font-inter font-semibold
                text-[18px] lg:text-[22px]
                tracking-[0.01em]
                transition-all duration-300
                hover:bg-[#2c4e61] hover:scale-[1.01] hover:drop-shadow-[0px_10px_20px_rgba(0,0,0,0.4)]
                active:scale-[0.98]
                relative z-30 
              "
            >
              Book Consultation
            </button>
          </div>
        </div>
      </FigmaHero>

      <ServicesAndCategories />
      <PrivateAppointments />
      <AppDownloadBanner />

      <section className="w-full pb-20 lg:pb-32 bg-transparent">
        <div className="mx-auto max-w-[1950px] px-6 lg:pr-12 lg:pl-32 xl:pl-[144px] 2xl:pl-[168px] flex flex-col items-center">
            <div className="relative w-[280px] h-[132px] md:w-[320px] md:h-[151px] transition-all duration-300 hover:scale-[1.03]">
              <Image
                src="/images/homebottom.png"
                alt="Regulated by Care Quality Commission"
                fill
                className="object-contain"
              />
            </div>
          
        </div>
      </section>
    </>
  );
}