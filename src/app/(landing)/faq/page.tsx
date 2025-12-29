import { FaqAccordion } from "@/src/components/landing/FaqAccordion";
import Image from "next/image";


export default function FAQPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-gradient hero-diagonal">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 hero-inner">
          <div className="relative min-h-[240px] pt-[72px] pb-[56px] lg:min-h-[260px]">
            <h1 className="max-w-[980px] text-white font-extrabold leading-[1.05] text-[44px] lg:text-[56px]">
              Online GP Services – Frequently
              <br />
              Asked Questions (FAQ)
            </h1>

            <div className="absolute right-6 top-[84px] lg:right-12 lg:top-[84px]">
              <Image
                src="/icons/Greenbackgroundlogo1.svg"
                alt="Online GP Services"
                width={110}
                height={110}
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CONTENT */}
      <main className="bg-[var(--c-bg)]">
        <div className="mx-auto max-w-[980px] px-6 py-12 lg:py-14">
          {/* Section: About Our Service */}
          <SectionTitle>About Our Service</SectionTitle>
          <FaqAccordion
            items={[
              {
                q: "What services do you offer?",
                defaultOpen: true,
                a: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Online GP consultations (£49 per appointment)</li>
                    <li>Electronic prescriptions (private &amp; NHS)</li>
                    <li>Weight-loss injections (Wegovy, Ozempic, Mounjaro, Saxenda)</li>
                    <li>Repeat prescriptions (with evidence)</li>
                    <li>FIT notes</li>
                    <li>Open referral letters to specialists</li>
                  </ul>
                ),
              },
            ]}
          />

          <div className="h-10" />

          {/* Section: Weight-Loss Injections */}
          <SectionTitle>Weight-Loss Injections</SectionTitle>
          <FaqAccordion
            items={[
              {
                q: "How does the weight-loss injection service work?",
                defaultOpen: true,
                a: (
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Register on our platform</li>
                    <li>Complete the medical questionnaire</li>
                    <li>Pay for your injectable</li>
                    <li>A GP reviews your form</li>
                    <li>If suitable, a prescription is issued</li>
                    <li>If not safe or unsuitable, you will be refunded</li>
                  </ol>
                ),
              },
              {
                q: "Which weight-loss medications do you offer?",
                a: <p>We offer: Wegovy, Ozempic, Mounjaro, Saxenda.</p>,
              },
              {
                q: "What are the common side effects of weight-loss injections?",
                defaultOpen: true,
                a: (
                  <>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Nausea or vomiting</li>
                      <li>Diarrhoea or constipation</li>
                      <li>Headache</li>
                      <li>Reduced appetite</li>
                      <li>Indigestion</li>
                      <li>Injection-site reactions</li>
                    </ul>
                    <p className="mt-3">
                      Seek urgent help for severe abdominal pain or ongoing vomiting.
                    </p>
                  </>
                ),
              },
            ]}
          />

          <div className="h-10" />

          {/* Section: Prescriptions & Delivery */}
          <SectionTitle>Prescriptions &amp; Delivery</SectionTitle>
          <FaqAccordion
            items={[
              {
                q: "How fast will my medication arrive?",
                a: (
                  <p>
                    Our UK pharmacy partner offers next-day delivery nationwide and same-day
                    delivery in London for early orders.
                  </p>
                ),
              },
              {
                q: "Can you issue NHS prescriptions?",
                defaultOpen: true,
                a: <p>Yes, where clinically appropriate.</p>,
              },
              {
                q: "How do electronic prescriptions work?",
                defaultOpen: true,
                a: (
                  <p>
                    We send an electronic prescription instantly to your email. You can use it at
                    any pharmacy in the UK.
                  </p>
                ),
              },
              {
                q: "Can I request repeat medications?",
                a: (
                  <p>
                    Yes, but you must upload a photo of your current prescription or medication as
                    evidence.
                  </p>
                ),
              },
              {
                q: "Are there medications you cannot prescribe?",
                defaultOpen: true,
                a: (
                  <p>
                    We cannot issue controlled drugs such as morphine, oxycodone, fentanyl,
                    gabapentin, pregabalin and similar medications.
                  </p>
                ),
              },
            ]}
          />

          <div className="h-10" />

          {/* Section: Appointments & Consultations */}
          <SectionTitle>Appointments &amp; Consultations</SectionTitle>
          <FaqAccordion
            items={[
              {
                q: "Do I need to speak to a GP to get weight-loss injections?",
                defaultOpen: true,
                a: (
                  <p>
                    Not always. The medical questionnaire may be enough unless a GP needs
                    clarification.
                  </p>
                ),
              },
              {
                q: "Does paying for an appointment guarantee a prescription?",
                a: <p>No. The GP will only prescribe if clinically appropriate.</p>,
              },
              {
                q: "What happens if I miss my appointment?",
                defaultOpen: true,
                a: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>We will call you 1 minute after your appointment if you haven&apos;t joined.</li>
                    <li>Did-not-attend appointments are non-refundable.</li>
                    <li>Cancellations within 1 hour are non-refundable.</li>
                  </ul>
                ),
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-center font-semibold text-[16px] lg:text-[18px] mb-6"
      style={{ color: "var(--c-text)" }}
    >
      {children}
    </h2>
  );
}
