/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import * as React from "react";

type YesNo = "yes" | "no" | "";

function YesNoRow({
  value,
  onChange,
}: {
  value: YesNo;
  onChange: (v: YesNo) => void;
}) {
  return (
    <div className="ml-auto flex items-center gap-8">
      <label className="flex items-center gap-2 text-[12px]" style={{ color: "var(--c-text-black)" }}>
        <span>Yes</span>
        <input
          type="radio"
          checked={value === "yes"}
          onChange={() => onChange("yes")}
          className="h-[14px] w-[14px]"
        />
      </label>

      <label className="flex items-center gap-2 text-[12px]" style={{ color: "var(--c-text-black)" }}>
        <span>No</span>
        <input
          type="radio"
          checked={value === "no"}
          onChange={() => onChange("no")}
          className="h-[14px] w-[14px]"
        />
      </label>
    </div>
  );
}

function Field({
  placeholder,
  className = "",
}: {
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      placeholder={placeholder}
      className={[
        "h-[34px] w-full rounded-[6px] px-3 text-[12px] outline-none",
        className,
      ].join(" ")}
      style={{
        background: "transparent",
        border: "1px solid rgba(0,0,0,0.18)",
      }}
    />
  );
}

function TextArea({
  placeholder,
  rows = 3,
}: {
  placeholder: string;
  rows?: number;
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-[6px] px-3 py-2 text-[12px] outline-none"
      style={{
        background: "transparent",
        border: "1px solid rgba(0,0,0,0.18)",
      }}
    />
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center text-[14px] font-semibold" style={{ color: "var(--c-primary-600)" }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-[18px]" />;
}

export default function WeightLossAssessmentPage() {
  const [qObesity, setQObesity] = React.useState<YesNo>("");
  const [mh1, setMh1] = React.useState<YesNo>("");
  const [mh2, setMh2] = React.useState<YesNo>("");
  const [c1, setC1] = React.useState<YesNo>("");
  const [c2, setC2] = React.useState<YesNo>("");
  const [c3, setC3] = React.useState<YesNo>("");
  const [c4, setC4] = React.useState<YesNo>("");
  const [c5, setC5] = React.useState<YesNo>("");
  const [cm1, setCm1] = React.useState<YesNo>("");
  const [cm2, setCm2] = React.useState<YesNo>("");
  const [ls1, setLs1] = React.useState<YesNo>("");
  const [ls2, setLs2] = React.useState<YesNo>("");
  const [rf1, setRf1] = React.useState<YesNo>("");
  const [rf2, setRf2] = React.useState<YesNo>("");
  const [rf3, setRf3] = React.useState<YesNo>("");

  const [check1, setCheck1] = React.useState(true);
  const [check2, setCheck2] = React.useState(true);

  return (
    <div style={{ background: "var(--c-bg)", color: "var(--c-text)" }}>
      {/* HERO */}
      <section className="hero-gradient hero-figma">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="relative flex min-h-[190px] items-center py-10 lg:min-h-[220px]">
            <h1 className="text-[34px] font-extrabold leading-[1.06] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[52px]">
              Weight Loss Injectables
              <br />
              Medical Questionnaire
            </h1>

            {/* Badge */}
            <div className="absolute right-0 top-10 hidden lg:block">
              <Image
                src="/icons/Greenbackgroundlogo1.svg"
                alt="Online GP Services"
                width={130}
                height={130}
                className="drop-shadow-[0_14px_28px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORM WRAP */}
      <section className="py-10">
        <div className="mx-auto max-w-[820px] px-6">
          <p className="text-center text-[13px] font-semibold leading-[1.6]" style={{ color: "var(--c-text)" }}>
            For patient completion prior to clinician review.
            <br />
            Please answer all questions accurately.
          </p>

          <Divider />

          {/* Patient Details */}
          <SectionTitle>Patient Details</SectionTitle>
          <div className="mt-6 grid gap-5">
            <div className="grid gap-4 lg:grid-cols-3">
              <Field placeholder="Full Name" />
              <Field placeholder="Date Of Birth (dd/mm/yyyy)" />
              <Field placeholder="Address" />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <Field placeholder="Postcode" />
              <Field placeholder="Phone Number" />
              <Field placeholder="Email" />
            </div>
          </div>

          <Divider />

          {/* Medical History */}
          <SectionTitle>Medical History – Eligibility</SectionTitle>
          <div className="mt-6 grid gap-6">
            <div className="grid gap-4 lg:grid-cols-2">
              <Field placeholder="Your height (cm)" />
              <Field placeholder="Your weight (kg)" />
            </div>

            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Have you been diagnosed with obesity (BMI ≥ 30), or BMI ≥ 27 with
                comorbidities?
              </p>
              <YesNoRow value={qObesity} onChange={setQObesity} />
            </div>

            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Do you have any of the following conditions? (Tick all that apply)
              </p>
              <div className="ml-auto w-[120px]" />
            </div>

            {/* tick list + Yes/No columns (matches figma vibe) */}
            <div className="space-y-3">
              {[
                "Type 2 Diabetes",
                "Hypertension",
                "High Cholesterol",
                "Sleep Apnoea",
                "Polycystic Ovary Syndrome (PCOS)",
                "Cardiovascular Disease",
              ].map((label) => (
                <div key={label} className="flex items-center gap-4">
                  <label className="flex items-center gap-3 text-[12px]" style={{ color: "var(--c-text-black)" }}>
                    <input type="checkbox" className="h-[14px] w-[14px]" />
                    {label}
                  </label>
                  <div className="ml-auto flex items-center gap-8">
                    <span className="text-[12px]" style={{ color: "var(--c-text-black)" }}>
                      Yes
                    </span>
                    <span className="text-[12px]" style={{ color: "var(--c-text-black)" }}>
                      No
                    </span>
                    <span className="w-[14px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* Mental health */}
          <SectionTitle>Mental Health Screening</SectionTitle>
          <div className="mt-6 grid gap-6">
            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Have you ever been diagnosed with any mental health condition
                (e.g. depression, anxiety, eating disorder)?
              </p>
              <YesNoRow value={mh1} onChange={setMh1} />
            </div>

            <div className="grid gap-2">
              <div className="text-[12px]" style={{ color: "var(--c-text-black)" }}>
                If yes, please provide details
              </div>
              <TextArea placeholder="" rows={3} />
            </div>

            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Are you currently receiving treatment or taking medication for any
                mental health condition?
              </p>
              <YesNoRow value={mh2} onChange={setMh2} />
            </div>

            <div className="grid gap-2">
              <div className="text-[12px]" style={{ color: "var(--c-text-black)" }}>
                If yes, please specify
              </div>
              <TextArea placeholder="" rows={3} />
            </div>
          </div>

          <Divider />

          {/* Contraindications */}
          <SectionTitle>Contraindications &amp; Safety Screening</SectionTitle>
          <div className="mt-6 grid gap-5">
            {[
              ["Are you pregnant, planning pregnancy, or breastfeeding?", c1, setC1],
              ["Do you have a history of pancreatitis?", c2, setC2],
              ["Do you have thyroid cancer or MEN2 syndrome in your family?", c3, setC3],
              ["Do you have severe gastrointestinal disease?", c4, setC4],
              [
                "Have you ever had an allergic reaction to GLP-1 medications (e.g. Wegovy, Saxenda, Mounjaro)?",
                c5,
                setC5,
              ],
            ].map(([label, value, setter]) => (
              <div key={label as string} className="flex items-start gap-6">
                <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                  {label as string}
                </p>
                <YesNoRow value={value as YesNo} onChange={setter as any} />
              </div>
            ))}
          </div>

          <Divider />

          {/* Current medication */}
          <SectionTitle>Current Medication</SectionTitle>
          <div className="mt-6 grid gap-6">
            <div className="grid gap-2">
              <div className="text-[12px]" style={{ color: "var(--c-text-black)" }}>
                Please list all medications you are currently taking
              </div>
              <TextArea placeholder="" rows={3} />
            </div>

            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Are you taking insulin or sulfonylureas?
              </p>
              <YesNoRow value={cm1} onChange={setCm1} />
            </div>

            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Are you taking any weight-loss medications currently?
              </p>
              <YesNoRow value={cm2} onChange={setCm2} />
            </div>
          </div>

          <Divider />

          {/* Lifestyle */}
          <SectionTitle>Lifestyle &amp; Previous Weight Management</SectionTitle>
          <div className="mt-6 grid gap-6">
            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Have you previously attempted structured weight-loss programmes?
              </p>
              <YesNoRow value={ls1} onChange={setLs1} />
            </div>

            <div className="grid gap-2">
              <div className="text-[12px]" style={{ color: "var(--c-text-black)" }}>
                If yes, describe:
              </div>
              <TextArea placeholder="" rows={3} />
            </div>

            <div className="flex items-start gap-6">
              <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                Are you currently following any diet or exercise plan?
              </p>
              <YesNoRow value={ls2} onChange={setLs2} />
            </div>

            <div className="grid gap-2">
              <div className="text-[12px]" style={{ color: "var(--c-text-black)" }}>
                If yes, describe:
              </div>
              <TextArea placeholder="" rows={3} />
            </div>
          </div>

          <Divider />

          {/* Red flags */}
          <SectionTitle>Symptoms &amp; Red Flags</SectionTitle>
          <div className="mt-6 grid gap-5">
            {[
              ["Do you experience unexplained abdominal pain?", rf1, setRf1],
              ["Do you have persistent vomiting or nausea?", rf2, setRf2],
              ["Any recent unexplained weight loss?", rf3, setRf3],
            ].map(([label, value, setter]) => (
              <div key={label as string} className="flex items-start gap-6">
                <p className="text-[12px] leading-[1.6]" style={{ color: "var(--c-text-black)" }}>
                  {label as string}
                </p>
                <YesNoRow value={value as YesNo} onChange={setter as any} />
              </div>
            ))}
          </div>

          <Divider />

          {/* Photo upload */}
          <SectionTitle>Patient Photo Upload Requirements</SectionTitle>
          <div className="mt-6 text-[12px] leading-[1.7]" style={{ color: "var(--c-text-black)" }}>
            <p>
              As part of clinical verification, please upload the following photos:
            </p>
            <p className="mt-2">
              Front view – minimally dressed (sports bra/shorts or boxers/shorts). Abdomen and legs visible. Face optional.
              <br />
              Side view – same clothing guidance.
              <br />
              Back view – same clothing guidance.
              <br />
              Photos must be recent (taken within the last 7 days).
            </p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <UploadBox label="Upload Front Photo" />
            <UploadBox label="Upload Side Photo" />
            <UploadBox label="Upload Back Photo" />
          </div>

          <Divider />

          {/* Declaration */}
          <SectionTitle>Patient Declaration</SectionTitle>
          <div className="mt-6 space-y-3">
            <label className="flex items-start gap-3 text-[12px]" style={{ color: "var(--c-text-black)" }}>
              <input
                type="checkbox"
                checked={check1}
                onChange={(e) => setCheck1(e.target.checked)}
                className="mt-[2px] h-[14px] w-[14px]"
              />
              I confirm the information I have provided is accurate to the best of my knowledge.
            </label>

            <label className="flex items-start gap-3 text-[12px]" style={{ color: "var(--c-text-black)" }}>
              <input
                type="checkbox"
                checked={check2}
                onChange={(e) => setCheck2(e.target.checked)}
                className="mt-[2px] h-[14px] w-[14px]"
              />
              I confirm that I am over 18 years of age.
            </label>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Field placeholder="Signature" />
            <Field placeholder="Date" />
          </div>

          <div className="h-[24px]" />
        </div>
      </section>
    </div>
  );
}

function UploadBox({ label }: { label: string }) {
  return (
    <div
      className="flex h-[70px] items-center justify-center rounded-[8px] border border-dashed"
      style={{
        borderColor: "rgba(0,0,0,0.25)",
        background: "rgba(255,255,255,0.35)",
      }}
    >
      <div className="flex items-center gap-3 text-[12px]" style={{ color: "var(--c-text-black)" }}>
        <span
          className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-[4px]"
          style={{ border: "1px solid rgba(0,0,0,0.22)" }}
        >
          ⎘
        </span>
        {label}
      </div>
    </div>
  );
}
