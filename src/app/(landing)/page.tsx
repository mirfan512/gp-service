import { AppDownloadBanner } from "@/src/components/landing/AppDownloadBanner";
import { PrivateAppointments } from "@/src/components/landing/PrivateAppointments";
import { ServicesAndCategories } from "@/src/components/landing/ServicesAndCategories";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
     
      <section className="relative hero-gradient hero-diagonal">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 hero-inner">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[560px] pt-[72px] pb-[56px] lg:min-h-[600px] lg:pt-[88px] lg:pb-[64px]">
            
            {/* Left Content */}
            <div className="text-left space-y-6 max-w-[580px]">
              <h1
                className="text-[44px] lg:text-[52px] leading-[1.15] font-bold text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                Speak to a Trusted GP
                <br />
                Anytime, Anywhere
              </h1>

              <p className="text-[17px] leading-[1.65] text-white/95 max-w-[520px]">
                Your health and peace of mind come first. With our secure telemedicine platform,
                you can speak to a fully qualified UK GP in minutes — all for just £49.
              </p>

              <p className="text-[15px] leading-[1.65] text-white/90 max-w-[520px]">
                Our doctors are GMC-registered, fully insured and have extensive NHS experience,
                ensuring you receive the same high standard of care as in a traditional clinic.
                Whether you need a prescription, referral letter, or fit note, it&apos;s all included
                in one consultation.
              </p>

              {/* Mobile CTA */}
              <div className="pt-4 lg:hidden">
                <button
                  className="w-full sm:w-auto px-8 py-4 text-[16px] font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{
                    background: "var(--c-cta-btn)",
                    borderRadius: "16px",
                    boxShadow:
                      "0px 6px 10px 4px rgba(0, 0, 0, 0.10), 0px 2px 3px rgba(0, 0, 0, 0.16)",
                  }}
                >
                  Book Your GP Consultation
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px]">
                <div className="relative aspect-[4/3] w-full flex items-end justify-center">
                  <Image
                    src="/images/heroimage.svg"
                    alt="Doctor Consultation Illustration"
                    width={520}
                    height={390}
                    className="object-contain"
                    priority
                  />

                  {/* ✅ Badge (correct placement) */}
                  <div className="absolute -top-10 -right-5 lg:-top-18 lg:-right-63">
                    <Image
                      src="/icons/Greenbackgroundlogo1.svg"
                      alt="Online GP Services Badge"
                      width={90}
                      height={90}
                      className="drop-shadow-lg"
                    />
                  </div>

                  {/* Desktop CTA */}
                  <div className="hidden lg:block absolute -bottom-[62px] left-1/2 -translate-x-1/2 w-full max-w-[420px] px-4">
                    <button
                      className="w-full px-8 py-4 text-[16px] font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                      style={{
                        background: "var(--c-cta-btn)",
                        borderRadius: "16px",
                        boxShadow:
                          "0px 6px 10px 4px rgba(0, 0, 0, 0.10), 0px 2px 3px rgba(0, 0, 0, 0.16)",
                      }}
                    >
                      Book Your GP Consultation
                    </button>
                  </div>
                </div>

                {/* Decorative blur elements */}
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-25 blur-3xl pointer-events-none"
                  style={{ background: "rgba(255, 255, 255, 0.14)" }}
                />
                <div
                  className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ background: "rgba(255, 255, 255, 0.12)" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServicesAndCategories />
      <PrivateAppointments />
      <AppDownloadBanner />
    </>
  );
}
