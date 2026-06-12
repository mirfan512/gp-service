"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/src/components/ui/Input";
import { useCreateFitNoteMutation } from "@/src/store/services/fitNotesApi";
import { useGetPatientMeQuery } from "@/src/store/services/patientsApi";
import { getErrorMessage } from "@/src/store/services/api";

type FitNoteFormData = {
  patientId: string;
  consultationId: string;
  patientName: string;
  dob: string;
  address: string;
  postcode: string;
  phone: string;
  email: string;
  consultationDate: string;
  diagnosis: string;
  fitnessStatus: "not_fit" | "maybe_fit";
  durationFrom: string;
  durationTo: string;
  adjustments?: string;
  gpName: string;
  gmcNumber: string;
  signature: string;
  issueDate: string;
};

export const FitNoteForm = () => {
  const searchParams = useSearchParams();
  const consultationIdFromUrl = searchParams.get("consultationId") || "";

  const [createFitNote, { isLoading: isSubmitting }] = useCreateFitNoteMutation();
  const { data: patientData, isLoading: isPatientLoading } = useGetPatientMeQuery();

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [createdNote, setCreatedNote] = useState<any>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FitNoteFormData>({
    defaultValues: {
      fitnessStatus: "not_fit",
      consultationId: consultationIdFromUrl,
    },
  });

  const fitnessStatus = watch("fitnessStatus");

  // Dynamically prefill form details once patient profile query succeeds
  useEffect(() => {
    if (patientData?.data) {
      const patient = patientData.data;
      reset({
        patientId: patient.id || "",
        consultationId: consultationIdFromUrl,
        patientName: `${patient.firstName || ""} ${patient.lastName || ""}`.trim() || patient.name || "",
        dob: patient.dob ? new Date(patient.dob).toLocaleDateString("en-GB") : "",
        address: patient.address || "",
        email: patient.email || "",
        fitnessStatus: "not_fit",
      });
    }
  }, [patientData, reset, consultationIdFromUrl]);

  const onSubmit = async (data: FitNoteFormData) => {
    try {
      setSubmitError(null);
      const response = await createFitNote({
        patientId: data.patientId,
        consultationId: data.consultationId,
        diagnosis: data.diagnosis,
        fitnessForWork: data.fitnessStatus,
        startDate: data.durationFrom,
        endDate: data.durationTo,
        adjustments: data.fitnessStatus === "maybe_fit" ? data.adjustments : undefined,
      }).unwrap();

      if (response.success) {
        setCreatedNote(response.data);
      } else {
        setSubmitError(response.message || "Failed to issue Fit Note.");
      }
    } catch (err: any) {
      setSubmitError(getErrorMessage(err));
    }
  };

  const handleResetForm = () => {
    setCreatedNote(null);
    setSubmitError(null);
    reset({
      patientId: patientData?.data?.id || "",
      consultationId: consultationIdFromUrl,
      patientName: patientData?.data
        ? `${patientData.data.firstName || ""} ${patientData.data.lastName || ""}`.trim() || patientData.data.name || ""
        : "",
      dob: patientData?.data?.dob ? new Date(patientData.data.dob).toLocaleDateString("en-GB") : "",
      address: patientData?.data?.address || "",
      email: patientData?.data?.email || "",
      fitnessStatus: "not_fit",
    });
  };

  // If successfully created, display a professional Fit Note receipt/summary card
  if (createdNote) {
    return (
      <div className="bg-white rounded-[20px] shadow-lg p-8 md:p-12 max-w-[800px] mx-auto space-y-8 border-t-8 border-[#A3B094]">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110.1 19.593 3.745 3.745 0 016.7 18.55a3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0113.9 3.007c1.52.048 2.817.83 3.53 1.95a3.745 3.745 0 011.043 3.296 3.745 3.745 0 013.296 1.043A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Fit Note Issued Successfully!</h2>
          <p className="text-sm text-slate-500">The certificate has been recorded and linked to the patient record.</p>
        </div>

        {/* Certificate preview */}
        <div className="bg-[#fcfbf9] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 bg-[#A3B094] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            Official Document
          </div>

          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Document ID</h3>
            <p className="text-sm font-semibold text-slate-700 font-mono">{createdNote._id}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Patient ID</h4>
              <p className="text-sm font-semibold text-slate-700 font-mono">{createdNote.patientId}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Consultation ID</h4>
              <p className="text-sm font-semibold text-slate-700 font-mono">{createdNote.consultationId}</p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Diagnosis</h4>
            <p className="text-base font-semibold text-slate-800 mt-1">{createdNote.diagnosis}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-100 pt-4">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</h4>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mt-1.5 uppercase ${
                createdNote.fitnessForWork === "not_fit" 
                  ? "bg-red-50 text-red-700 border border-red-100" 
                  : "bg-amber-50 text-amber-700 border border-amber-100"
              }`}>
                {createdNote.fitnessForWork === "not_fit" ? "Not Fit For Work" : "Maybe Fit For Work"}
              </span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Valid From</h4>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                {new Date(createdNote.startDate).toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Valid To</h4>
              <p className="text-sm font-semibold text-slate-700 mt-1">
                {new Date(createdNote.endDate).toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>

          {createdNote.adjustments && (
            <div className="border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recommended Adjustments</h4>
              <p className="text-sm text-slate-700 mt-1 bg-white p-3 rounded-xl border border-slate-100 italic">
                "{createdNote.adjustments}"
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={handleResetForm}
            className="bg-[#A3B094] hover:bg-[#8E9C85] text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md transform hover:scale-[1.02] text-sm uppercase tracking-wider"
          >
            Issue Another Fit Note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[20px] shadow-lg p-8 md:p-12 max-w-[1000px] mx-auto space-y-12">
      {/* Status Messages */}
      {submitError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium whitespace-pre-line">
          {submitError}
        </div>
      )}

      {/* System References */}
      <section className="bg-slate-50/60 p-6 rounded-2xl border border-slate-100 space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#A3B094]" />
          <h3 className="text-slate-800 text-lg font-bold">System References</h3>
        </div>
        
        {isPatientLoading && (
          <div className="text-xs text-slate-400 animate-pulse">Loading authenticated patient session...</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Patient ID <span className="text-red-500">*</span></label>
            <Input 
              {...register("patientId", { required: "Patient ID is required" })} 
              placeholder="e.g. 60c72b2f9b1d8b0015f8a001" 
              className={errors.patientId ? "border-red-400 focus:border-red-500" : ""}
            />
            {errors.patientId && <p className="text-xs text-red-500">{errors.patientId.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Consultation ID <span className="text-red-500">*</span></label>
            <Input 
              {...register("consultationId", { required: "Consultation ID is required" })} 
              placeholder="e.g. 60c72b2f9b1d8b0015f8b001" 
              className={errors.consultationId ? "border-red-400 focus:border-red-500" : ""}
            />
            {errors.consultationId && <p className="text-xs text-red-500">{errors.consultationId.message}</p>}
          </div>
        </div>
      </section>

      {/* Patient Details */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">Patient Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input {...register("patientName")} placeholder="Full Name" />
          <Input {...register("dob")} placeholder="Date Of Birth (dd/mm/yyyy)" />
          <Input {...register("address")} placeholder="Address" />
          <Input {...register("postcode")} placeholder="Postcode" />
          <Input {...register("phone")} placeholder="Phone Number" />
          <Input {...register("email")} placeholder="Email" />
        </div>
      </section>

      {/* Consultation Date */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">Consultation Date</h3>
        <div className="md:w-1/3">
          <Input type="date" {...register("consultationDate")} placeholder="Consultation Date" />
        </div>
      </section>

      {/* Diagnosis */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">Diagnosis <span className="text-red-500">*</span></h3>
        <div className="md:w-1/2 space-y-2">
          <Input 
            {...register("diagnosis", { required: "Diagnosis is required" })} 
            placeholder="Diagnosis (e.g. Severe lower back pain)" 
            className={errors.diagnosis ? "border-red-400 focus:border-red-500" : ""}
          />
          {errors.diagnosis && <p className="text-xs text-red-500">{errors.diagnosis.message}</p>}
        </div>
      </section>

      {/* Fitness for Work */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[#A3B094] text-xl font-bold mb-6">Fitness for work</h3>
            <div className="space-y-4 ml-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <span className="text-gray-600 font-medium text-sm">Not fit for work</span>
                <div className="relative flex items-center justify-center shrink-0">
                  <input
                    type="radio"
                    value="not_fit"
                    {...register("fitnessStatus")}
                    className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-[var(--c-primary)] transition-all focus:outline-none"
                  />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--c-primary)] opacity-0 peer-checked:opacity-100 transition-all transform scale-50 peer-checked:scale-100" />
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <span className="text-gray-600 font-medium text-sm">
                  Maybe fit for work <span className="text-xs text-gray-400 font-normal ml-1">(with adjustments)</span>
                </span>
                <div className="relative flex items-center justify-center shrink-0">
                  <input
                    type="radio"
                    value="maybe_fit"
                    {...register("fitnessStatus")}
                    className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-[var(--c-primary)] transition-all focus:outline-none"
                  />
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[var(--c-primary)] opacity-0 peer-checked:opacity-100 transition-all transform scale-50 peer-checked:scale-100" />
                </div>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-[#A3B094] text-xl font-bold mb-6">Duration <span className="text-red-500">*</span></h3>
            <div className="space-y-4 md:w-2/3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium text-sm w-12">From:</span>
                  <Input 
                    type="date" 
                    {...register("durationFrom", { required: "Start date is required" })} 
                    className={errors.durationFrom ? "border-red-400 focus:border-red-500" : ""}
                  />
                </div>
                {errors.durationFrom && <p className="text-xs text-red-500 ml-16">{errors.durationFrom.message}</p>}
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 font-medium text-sm w-12">To:</span>
                  <Input 
                    type="date" 
                    {...register("durationTo", { required: "End date is required" })} 
                    className={errors.durationTo ? "border-red-400 focus:border-red-500" : ""}
                  />
                </div>
                {errors.durationTo && <p className="text-xs text-red-500 ml-16">{errors.durationTo.message}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adjustments */}
      <section>
        <h3 className="text-gray-600 font-bold text-sm mb-3">Adjustments:</h3>
        <textarea
          {...register("adjustments")}
          className="w-full md:w-2/3 border border-gray-200 rounded-lg p-3 h-24 text-sm focus:outline-none focus:border-[#A3B094] resize-none bg-gray-50 disabled:opacity-50"
          disabled={fitnessStatus !== "maybe_fit"}
          placeholder={fitnessStatus !== "maybe_fit" ? "Select 'Maybe fit for work' to enable adjustments" : "Describe recommended adjustments..."}
        />
      </section>

      {/* GP Details */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">GP Details</h3>
        <div className="flex flex-col gap-6 md:w-1/3">
          <Input {...register("gpName")} placeholder="Name" />
          <Input {...register("gmcNumber")} placeholder="GMC Number" />
          <Input {...register("signature")} placeholder="Electronic Signature" />
          <Input type="date" {...register("issueDate")} placeholder="Date" />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center pt-8 gap-4">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-[var(--c-button-submit)] hover:opacity-90 disabled:opacity-50 text-white font-bold py-3.5 px-16 rounded-[10px] shadow-md transition-all hover:scale-105 active:scale-98 uppercase tracking-wider text-xs flex items-center justify-center gap-2"
        >
          {isSubmitting && (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {isSubmitting ? "Issuing..." : "ISSUE FIT NOTE"}
        </button>
      </div>
    </form>
  );
};
