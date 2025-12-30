import { FigmaHero } from "@/src/components/layout/Hero";
import { Button } from "@/src/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function WeightLossPage() {
  return (
    <div style={{ background: "var(--c-bg)", color: "var(--c-text)" }}>
      {/* HERO (same figma hero as corporate) */}
      <FigmaHero
        title="Effective Weight Loss Injections in the UK"
        description="Achieve sustainable weight loss with clinically proven weight loss injections in the UK. Our fully online service allows you to complete a secure medical form, have it reviewed by a GMC-registered doctor, and receive your treatment quickly through a UK-regulated pharmacy."
        badgeSrc="/icons/Greenbackgroundlogo1.svg"
      />

      {/* BODY */}
      <section className="py-10 lg:py-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          {/* Top: what are injections + pen image */}
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-[18px] font-bold lg:text-[20px]" style={{ color: "var(--c-primary-600)" }}>
                What Are Weight Loss Injections?
              </h2>

              <p className="mt-2 max-w-[720px] text-[13px] leading-[1.7]" style={{ color: "var(--c-text-muted)" }}>
                Weight loss injections such as Wegovy, Mounjaro, Ozempic and Saxenda are clinically approved
                medications that help control appetite, support calorie reduction, and improve long-term weight
                management. Our UK doctors carefully assess suitability prior to a prescription being issued.
              </p>

              <h3 className="mt-8 text-[18px] font-bold lg:text-[20px]" style={{ color: "var(--c-primary-600)" }}>
                How it Works
              </h3>

              <ol className="mt-3 space-y-5 text-[13px] leading-[1.7]" style={{ color: "var(--c-text-muted)" }}>
                <li>
                  <div className="font-semibold" style={{ color: "var(--c-text)" }}>
                    1. Complete the Online Assessment
                  </div>
                  <div>Fill out a short medical questionnaire. It takes just a few minutes.</div>
                </li>

                <li>
                  <div className="font-semibold" style={{ color: "var(--c-text)" }}>
                    2. A UK Doctor Reviews Your Answers
                  </div>
                  <div>
                    A GMC-registered GP evaluates your form to ensure weight loss injections are safe and
                    appropriate for you.
                  </div>
                </li>

                <li>
                  <div className="font-semibold" style={{ color: "var(--c-text)" }}>
                    3. Fast Pharmacy Dispensing &amp; Delivery
                  </div>
                  <div>
                    If approved, a UK-regulated pharmacy will dispense your medication and ship directly to your
                    door with discreet delivery.
                  </div>
                </li>
              </ol>
            </div>

            {/* pen image */}
            
              <div className="relative ">
                <Image
                  src="/images/pen.svg"
                  alt="Weight loss injection pen"
                  width={400}
                  height={480}
                  className="object-contain"
                />
              </div>
            </div>
         

          {/* Treatments */}
          <div className="mt-10">
            <h3 className="text-[18px] font-bold lg:text-[20px]" style={{ color: "var(--c-primary-600)" }}>
              UK Weight Loss Injection Treatments We
              <br className="hidden lg:block" />
              Offer
            </h3>

            <ul className="mt-3 space-y-2 text-[13px] leading-[1.7]" style={{ color: "var(--c-text-muted)" }}>
              <li>Wegovy (semaglutide) – weekly injection for weight management</li>
              <li>Mounjaro (tirzepatide) – powerful weekly dual-action treatment</li>
              <li>Ozempic – used off-label in the UK for weight loss (doctor-assessed)</li>
              <li>Saxenda – daily injection for appetite control</li>
            </ul>
          </div>

          {/* Eligibility + Right illustration + Consult chip */}
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-[18px] font-bold lg:text-[20px]" style={{ color: "var(--c-primary-600)" }}>
                Who Is Eligible for Weight Loss Injections in
                <br className="hidden lg:block" />
                the UK?
              </h3>

              <div className="mt-3 text-[13px]" style={{ color: "var(--c-text-muted)" }}>
                You may qualify if:
              </div>

              <ul className="mt-3 space-y-2 text-[13px] leading-[1.7]" style={{ color: "var(--c-text-muted)" }}>
                <li>– Your BMI is 30 or above</li>
                <li>– Or your BMI is 27+ with a weight-related medical condition</li>
                <li>– You are not pregnant or breastfeeding</li>
                <li>– You do not have contraindicated medical conditions</li>
              </ul>
            </div>

            <div className="relative">
              {/* consult chip */}
              <div className="absolute -top-2 left-0 w-full lg:left-auto lg:right-0 lg:w-[320px]">
                <div
                  className="mx-auto w-fit rounded-[10px] px-5 py-3 text-[13px] font-semibold text-white"
                  style={{
                    background: "#2E5F6E",
                    boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
                  }}
                >
                  Optional GP Consultation £49
                </div>
              </div>

              {/* illustration */}

              <div className="relative  ">
                <Image
                  src="/images/homepic1.svg"
                  alt="Doctor with patient illustration"
                  width={620}
                  height={360}
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          {/* Bottom row: desk illustration + why choose + pricing */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* left illustration */}
            
              <div className="relative ">
                <Image
                  src="/images/homepic2.svg"
                  alt="Assessment illustration"
                  width={460}
                  height={280}
                  className="object-contain"
                />
              </div>
            

            {/* right content */}
            <div>
              <h3 className="text-center text-[18px] font-bold lg:text-left lg:text-[20px]" style={{ color: "var(--c-primary-600)" }}>
                Why Patients Choose Us
              </h3>

              <div className="mt-4 grid gap-8 lg:grid-cols-2">
                <ul className="space-y-2 text-[13px] leading-[1.7]" style={{ color: "var(--c-text-muted)" }}>
                  <li>GMC-registered UK doctors</li>
                  <li>Safe online prescribing</li>
                  <li>UK pharmacy dispensing</li>
                  <li>Fast nationwide delivery</li>
                  <li>No appointment required</li>
                  <li>Optional doctor consultation anytime</li>
                </ul>

                <div className="space-y-5 text-[13px] leading-[1.7]" style={{ color: "var(--c-text-muted)" }}>
                  <p>
                    If you’d like to speak directly with a doctor at any point, you can book a consultation
                    instantly.
                  </p>

                  <div>
                    <div className="text-[18px] font-bold" style={{ color: "var(--c-primary-600)" }}>
                      Pricing
                    </div>
                    <p className="mt-2">
                      Medication prices are set by our UK pharmacy partner.
                      <br />
                      Medical review included free.
                      <br />
                      Optional GP consultation: £49.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
                <Link href="/assessment">
                <Button
                  className="w-full max-w-[320px] rounded-[14px] px-8 py-4 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    background: "#2E5F6E",
                    boxShadow: "0 10px 22px rgba(0,0,0,0.20)",
                  }}
                  type="button"
                >
                  Start Assessment
                </Button>
                </Link>

                <p className="max-w-[520px] text-center text-[12px] leading-[1.6] lg:text-left" style={{ color: "var(--c-text-muted)" }}>
                  Begin your online form today and receive a same-day doctor review. Achieve effective and safe
                  weight loss with clinically proven injections available in the UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
