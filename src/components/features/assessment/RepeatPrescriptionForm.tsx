"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/src/components/ui/Input";
import { Select } from "@/src/components/ui/Select";
import { Button } from "@/src/components/ui/Button";

type FormData = {
  fullName: string;
  dob: string;
  address: string;
  postcode: string;
  phone: string;
  email: string;
  medication: "Mounjaro" | "Wegovy";
  currentDose: string;
  requestedDose: string;
  sideEffects: "Yes" | "No";
  sideEffectsDetails?: string;
  hospitalized: "Yes" | "No";
  hospitalizedDetails?: string;
  currentWeight: string;
  weightChange: "Decreased" | "Same" | "Increased";
  usingAsPrescribed: "Yes" | "No";
  prescribedDetails?: string;
  depressed: "Yes" | "No";
  depressedDetails?: string;
  newMeds: "Yes" | "No";
  newMedsDetails?: string;
  pancreatitis: "Yes" | "No";
  pancreatitisDetails?: string;
  painUnderRibs: "Yes" | "No";
  painUnderRibsDetails?: string;
  pregnant: "Yes" | "No";
  photo: FileList;
  sharpsBin: "Yes" | "No";
  declaration1: boolean;
  declaration2: boolean;
  signature: string;
  date: string;
};

const QuestionRow = ({
  label,
  name,
  register,
  options = ["Yes", "No"],
  watchValue,
  triggerValue = "Yes",
  detailsName,
  detailsPlaceholder,
  verticalOptions = false
}: any) => {
  return (
    <div className="border-b border-gray-100 py-6 last:border-0">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <label className="text-gray-900 font-medium text-base md:max-w-[60%] leading-relaxed">
          {label}
        </label>

        <div className="flex flex-col gap-4 md:w-[35%]">
          <div className={`flex ${verticalOptions ? 'flex-col gap-3 items-start md:items-end' : 'flex-row gap-6 items-center md:justify-end'}`}>
            {options.map((opt: string) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                <span className="text-gray-600 font-medium text-sm group-hover:text-gray-900 transition-colors">{opt}</span>
                <div className="relative flex items-center justify-center shrink-0">
                  <input
                    type="radio"
                    value={opt}
                    {...register(name, { required: true })}
                    className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-[var(--c-primary)] transition-all focus:outline-none"
                  />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--c-primary)] opacity-0 peer-checked:opacity-100 transition-all transform scale-50 peer-checked:scale-100" />
                </div>
              </label>
            ))}
          </div>

          {/* Details Input - Conditional */}
          {detailsName && watchValue === triggerValue && (
            <Input
              {...register(detailsName)}
              placeholder={detailsPlaceholder}
              className="w-full"
            />
          )}
        </div>
      </div>
    </div>
  )
};

export const RepeatPrescriptionForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form Submitted!");
  };

  const sideEffects = watch("sideEffects");
  const hospitalized = watch("hospitalized");
  const usingAsPrescribed = watch("usingAsPrescribed");
  const newMeds = watch("newMeds");
  const depressed = watch("depressed");
  const pancreatitis = watch("pancreatitis");
  const painUnderRibs = watch("painUnderRibs");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[20px] shadow-lg p-8 md:p-12 max-w-[1000px] mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 font-inter">Repeat Prescription Form</h2>
        <p className="text-2xl font-bold text-gray-800 font-inter">Please answer all questions accurately.</p>
      </div>

      {/* Patient Details */}
      <section>
        <h3 className="text-[var(--c-primary)] text-xl font-semibold mb-6 text-center">Patient Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input {...register("fullName")} placeholder="Full Name" />
          <Input {...register("dob")} placeholder="Date of Birth (dd/mm/yyyy)" />
          <Input {...register("address")} placeholder="Address" />
          <Input {...register("postcode")} placeholder="Postcode" />
          <Input {...register("phone")} placeholder="Phone Number" />
          <Input {...register("email")} placeholder="Email" />
        </div>
      </section>

      {/* Medication Requested */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-6">
          <h3 className="text-[var(--c-primary)] text-xl font-semibold">Medication Requested</h3>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center shrink-0">
                <input
                  type="radio"
                  value="Mounjaro"
                  {...register("medication")}
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-[var(--c-primary)] transition-all focus:outline-none"
                />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--c-primary)] opacity-0 peer-checked:opacity-100 transition-all transform scale-50 peer-checked:scale-100" />
              </div>
              <span className="font-medium text-gray-700">Mounjaro</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center shrink-0">
                <input
                  type="radio"
                  value="Wegovy"
                  {...register("medication")}
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-[var(--c-primary)] transition-all focus:outline-none"
                />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--c-primary)] opacity-0 peer-checked:opacity-100 transition-all transform scale-50 peer-checked:scale-100" />
              </div>
              <span className="font-medium text-gray-700">Wegovy</span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select {...register("currentDose")}>
            <option value="">Current Dosage</option>
            <option value="2.5mg">2.5mg</option>
            <option value="5mg">5mg</option>
            <option value="7.5mg">7.5mg</option>
            <option value="10mg">10mg</option>
            <option value="12.5mg">12.5mg</option>
            <option value="15mg">15mg</option>
          </Select>
          <Select {...register("requestedDose")}>
            <option value="">Dose Requested</option>
            <option value="2.5mg">2.5mg</option>
            <option value="5mg">5mg</option>
            <option value="7.5mg">7.5mg</option>
            <option value="10mg">10mg</option>
            <option value="12.5mg">12.5mg</option>
            <option value="15mg">15mg</option>
          </Select>
        </div>
      </section>

      {/* Treatment Progress */}
      <section className="space-y-6">
        <h3 className="text-[var(--c-primary)] text-xl font-semibold">Treatment Progress</h3>

        <QuestionRow
          label="Have you experienced any side effects since your last pen?"
          name="sideEffects"
          register={register}
          watchValue={sideEffects}
          detailsName="sideEffectsDetails"
          detailsPlaceholder="If yes, please describe"
        />

        <QuestionRow
          label="Have you been hospitalized or seen a doctor since your last order?"
          name="hospitalized"
          register={register}
          watchValue={hospitalized}
          detailsName="hospitalizedDetails"
          detailsPlaceholder="If yes, please describe"
        />

        <div className="border-b border-gray-100 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <label className="text-gray-900 font-medium text-base md:w-3/5">Your current weight (kg):</label>
            <div className="md:w-2/5">
              <Input type="number" {...register("currentWeight")} placeholder="Weight in kg" className="" />
            </div>
          </div>
        </div>

        <QuestionRow
          label="Has this changed since your last order?"
          name="weightChange"
          register={register}
          options={["Decreased", "Same", "Increased"]}
          verticalOptions={true}
        />

        <QuestionRow
          label="Are you using the medication exactly as prescribed?"
          name="usingAsPrescribed"
          register={register}
          watchValue={usingAsPrescribed}
          triggerValue="No"
          detailsName="prescribedDetails"
          detailsPlaceholder="If not, please explain"
        />
      </section>

      {/* Safety Questions */}
      <section className="space-y-6">
        <h3 className="text-[var(--c-primary)] text-xl font-semibold">Safety Questions</h3>

        <QuestionRow
          label="Have you been diagnosed with any new medical conditions?"
          name="depressed"
          register={register}
          watchValue={depressed}
          detailsName="depressedDetails"
          detailsPlaceholder="If yes, please describe"
        />

        <QuestionRow
          label="Have you started any new medications?"
          name="newMeds"
          register={register}
          watchValue={newMeds}
          detailsName="newMedsDetails"
          detailsPlaceholder="If yes, please describe"
        />

        <QuestionRow
          label="Have you experienced any signs of acute pancreatitis? (Severe abdominal pain, vomiting, low blood pressure, swelling)"
          name="pancreatitis"
          register={register}
          watchValue={pancreatitis}
          detailsName="pancreatitisDetails"
          detailsPlaceholder="If yes, please describe"
        />

        <QuestionRow
          label="Have you experienced any pain under the ribs on the right side? or yellowing of the skin/eyes?"
          name="painUnderRibs"
          register={register}
          watchValue={painUnderRibs}
          detailsName="painUnderRibsDetails"
          detailsPlaceholder="If yes, please describe"
        />

        <QuestionRow
          label="Are you pregnant, planning pregnancy, or breastfeeding?"
          name="pregnant"
          register={register}
        />
      </section>

      {/* Photo Upload */}
      <section className="flex flex-col md:flex-row items-center gap-8 border-t border-gray-100 pt-8">
        <div className="flex-1">
          <h4 className="text-sm font-bold text-gray-800 mb-2">Please upload a photo of your current pen.</h4>
        </div>
        <div className="w-full md:w-64">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-4">
              <Image src="/icons/card.svg" alt="camera" width={50} height={50} />
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
            </div>
            <input type="file" className="hidden" accept="image/*" {...register("photo")} />
          </label>
        </div>
      </section>

      {/* Sharps Bin */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-8">
        <p className="text-sm font-bold text-gray-800">Do you require a sharps bin with this order?</p>
        <div className="flex gap-6">
          {["Yes", "No"].map(opt => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center shrink-0">
                <input
                  type="radio"
                  value={opt}
                  {...register("sharpsBin")}
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-[var(--c-primary)] transition-all focus:outline-none"
                />
                <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--c-primary)] opacity-0 peer-checked:opacity-100 transition-all transform scale-50 peer-checked:scale-100" />
              </div>
              <span className="font-medium text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-gray-400 w-full md:w-auto text-right mt-2 md:mt-0">*Please only order if one is absolutely required, save the planet.</p>
      </section>

      {/* Declaration */}
      <section className="text-center space-y-6 pt-8">
        <h3 className="text-[var(--c-primary)] text-xl font-semibold mb-4">Patient Declaration</h3>
        <div className="space-y-4 text-left max-w-lg mx-auto">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input
                type="checkbox"
                {...register("declaration1", { required: true })}
                className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded bg-white checked:bg-[var(--c-primary)] checked:border-[var(--c-primary)] focus:outline-none transition-all"
              />
              <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-sm text-gray-700 select-none">I confirm the information I have provided is accurate to the best of my knowledge.</span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center mt-0.5 shrink-0">
              <input
                type="checkbox"
                {...register("declaration2", { required: true })}
                className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded bg-white checked:bg-[var(--c-primary)] checked:border-[var(--c-primary)] focus:outline-none transition-all"
              />
              <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-sm text-gray-700 select-none">I confirm that I am over 18 years of age.</span>
          </label>
        </div>
      </section>

      {/* Signature */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">

        <Input {...register("signature")} placeholder="Signature" />

        <Input type="date" {...register("date")} placeholder="Date" />

      </div>

      <div className="flex justify-center pt-8">
        <Button type="submit" variant="submit" size="lg" className="px-12">
          Submit Form
        </Button>
      </div>

    </form>
  );
};