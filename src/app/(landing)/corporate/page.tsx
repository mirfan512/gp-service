import Image from "next/image";
import { AppDownloadBanner } from "@/src/components/landing/AppDownloadBanner";
import { FigmaHero } from "@/src/components/layout/Hero";

export default function CorporatePage() {
  return (
    <div style={{ background: "var(--c-bg)", color: "var(--c-text)" }}>
      <FigmaHero
        title={
          <>
            A Smarter Healthcare Solution
            <br />
            for Modern Workplaces
          </>
        }
      />

      {/* CONTENT CARD */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div
            className="rounded-[20px] p-8 lg:p-12"
            style={{
              background: "var(--c-surface-2)",
              border: "1px solid var(--c-border)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2
                  className="text-[34px] font-extrabold leading-[1.1] lg:text-[44px]"
                  style={{ color: "var(--c-primary-600)" }}
                >
                  Reduce Sick Leave, Support
                  <br />
                  Staff Wellbeing
                </h2>

                <div
                  className="mt-6 space-y-6 text-[15px] leading-[1.7]"
                  style={{ color: "var(--c-text-muted)" }}
                >
                  <p>
                    Reduce sick leave, support staff wellbeing, and give your organisation a truly valuable benefit
                    with our flexible corporate membership.
                  </p>
                  <p>
                    For £200, each member receives seven GP consultations that they can use anytime over 12 months.
                    Appointments are quick to book, easy to manage, and accessible through our intuitive app on the
                    App Store and Google Play.
                  </p>
                  <p>
                    Our experienced UK GPs provide friendly, reliable advice without long waiting times, helping your
                    team feel supported both in and outside of work. It’s a cost-effective, efficient healthcare
                    solution designed for today’s fast-moving business environment.
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative h-[260px] w-[320px] lg:h-[340px] lg:w-[440px]">
                  <Image
                    src="/images/corporate.svg"
                    alt="Corporate healthcare illustration"
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppDownloadBanner />
    </div>
  );
}
