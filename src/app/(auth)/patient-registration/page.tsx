"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetMeQuery } from "@/src/store/services/authApi";
import { useUpdatePatientMeMutation, Patient } from "@/src/store/services/patientsApi";
import { PersonalInfoStep } from "./components/PersonalInfoStep";
import { NhsDetailsStep } from "./components/NhsDetailsStep";
import { MedicalHistoryStep } from "./components/MedicalHistoryStep";
import { PatientUploadStep } from "./components/PatientUploadStep";
import { useToast } from "@/src/components/ui/Toast";
import { getErrorMessage } from "@/src/store/services/api";
import Cookies from "js-cookie";

export default function PatientRegistrationPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);

  // Authenticated user query
  const { data: userData, isLoading: isUserLoading, error: userError } = useGetMeQuery(undefined, {
    // Only run on client and if token exists
    skip: typeof window === "undefined" || !Cookies.get("token"),
  });

  const [updatePatientMe, { isLoading: isUpdating }] = useUpdatePatientMeMutation();

  // Redirect to login if unauthenticated
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = Cookies.get("token");
      if (!token || userError) {
        showToast("Please log in to complete your registration", "error");
        router.push("/login?redirect=/patient-registration");
      }
    }
  }, [userError, router, showToast]);

  const [hasInitializedStep, setHasInitializedStep] = useState(false);

  // Auto-determine step based on missing fields, and redirect to portal if registration completed
  useEffect(() => {
    if (userData?.data?.user && !hasInitializedStep) {
      const user = userData.data.user as Patient;
      
      const hasStep1 = !!(
        user.city &&
        user.address &&
        user.dob &&
        user.gender &&
        user.passportOrDrivingLicenceId
      );

      const hasStep2 = !!(
        user.nhsGp?.practiceName &&
        user.nhsGp?.address &&
        user.nhsGp?.email
      );

      const hasStep3 = !!(
        user.pastMedicalHistory &&
        user.currentMedicationText &&
        user.operations &&
        user.familyHistory
      );

      const isWizardCompleted = typeof window !== "undefined" && localStorage.getItem("registration_completed") === "true";

      if (hasStep1 && hasStep2 && hasStep3 && isWizardCompleted) {
        router.replace("/patient-portal");
        return;
      }

      if (!hasStep1) {
        setTimeout(() => setStep(1), 0);
      } else if (!hasStep2) {
        setTimeout(() => setStep(2), 0);
      } else if (!hasStep3) {
        setTimeout(() => setStep(3), 0);
      } else {
        setTimeout(() => setStep(4), 0);
      }
      setTimeout(() => setHasInitializedStep(true), 0);
    }
  }, [userData, router, hasInitializedStep]);

  const handleNextStep = async (formData: FormData) => {
    try {
      const response = await updatePatientMe(formData).unwrap();
      if (response.success) {
        showToast("Progress saved successfully", "success");
        if (step < 4) {
          setStep((prev) => prev + 1);
        } else {
          showToast("Registration completed successfully!", "success");
          if (typeof window !== "undefined") {
            localStorage.setItem("registration_completed", "true");
          }
          router.push("/");
        }
      } else {
        showToast(response.message || "Failed to save details", "error");
      }
    } catch (err) {
      showToast(getErrorMessage(err), "error");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      router.push("/login");
    }
  };

  const getCompletedSteps = () => {
    const user = (userData?.data?.user || {}) as Patient;
    const hasStep1 = !!(
      user.city &&
      user.address &&
      user.dob &&
      user.gender &&
      user.passportOrDrivingLicenceId
    );
    const hasStep2 = !!(
      user.nhsGp?.practiceName &&
      user.nhsGp?.address &&
      user.nhsGp?.email
    );
    const hasStep3 = !!(
      user.pastMedicalHistory &&
      user.currentMedicationText &&
      user.operations &&
      user.familyHistory
    );
    return { hasStep1, hasStep2, hasStep3 };
  };

  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <svg className="animate-spin h-8 w-8 text-[#A3B094]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  }

  const patientInitialData = userData?.data?.user || {};

  return (
    <div className="w-full max-w-[500px] mx-auto py-4">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8 px-2">
        {[1, 2, 3, 4].map((num) => {
          const { hasStep1, hasStep2, hasStep3 } = getCompletedSteps();
          
          let isAccessible = false;
          if (num === 1) {
            isAccessible = true;
          } else if (num === 2) {
            isAccessible = step >= 2 || hasStep1;
          } else if (num === 3) {
            isAccessible = step >= 3 || (hasStep1 && hasStep2);
          } else if (num === 4) {
            isAccessible = step >= 4 || (hasStep1 && hasStep2 && hasStep3);
          }

          return (
            <div key={num} className="flex items-center flex-1 last:flex-initial">
              <button
                type="button"
                disabled={!isAccessible}
                onClick={() => setStep(num)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] font-bold transition-all duration-300 ${
                  isAccessible ? "cursor-pointer hover:scale-105 active:scale-95" : "cursor-not-allowed"
                }`}
                style={{
                  background: step >= num ? "#A3B094" : "var(--c-surface)",
                  color: step >= num ? "#ffffff" : "var(--c-text-secondary)",
                  border: step >= num ? "none" : "1.5px solid var(--c-border)",
                }}
              >
                {num}
              </button>
              {num < 4 && (
                <div
                  className="flex-1 h-[2px] mx-2 transition-all duration-300"
                  style={{
                    background: step > num ? "#A3B094" : "var(--c-border)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Steps Switcher */}
      <div className="transition-all duration-300">
        {step === 1 && (
          <PersonalInfoStep
            initialData={patientInitialData}
            onNext={handleNextStep}
            isLoading={isUpdating}
            onBack={handleBack}
          />
        )}
        {step === 2 && (
          <NhsDetailsStep
            initialData={patientInitialData}
            onNext={handleNextStep}
            isLoading={isUpdating}
            onBack={handleBack}
          />
        )}
        {step === 3 && (
          <MedicalHistoryStep
            initialData={patientInitialData}
            onNext={handleNextStep}
            isLoading={isUpdating}
            onBack={handleBack}
          />
        )}
        {step === 4 && (
          <PatientUploadStep
            initialData={patientInitialData}
            onNext={handleNextStep}
            isLoading={isUpdating}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}
