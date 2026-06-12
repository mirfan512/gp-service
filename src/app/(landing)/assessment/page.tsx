"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { FormDivider } from "@/src/components/ui/form";
import { useAssessmentForm } from "@/src/lib/hooks/useAssessmentForm";
import { PatientDetailsSection } from "@/src/components/features/assessment/PatientDetailsSection";
import { MedicalHistorySection } from "@/src/components/features/assessment/MedicalHistorySection";
import { MentalHealthSection } from "@/src/components/features/assessment/MentalHealthSection";
import { SafetyScreeningSection } from "@/src/components/features/assessment/SafetyScreeningSection";
import { MedicationSection } from "@/src/components/features/assessment/MedicationSection";
import { LifestyleSection } from "@/src/components/features/assessment/LifestyleSection";
import { SymptomsSection } from "@/src/components/features/assessment/SymptomsSection";
import { PhotoUploadSection } from "@/src/components/features/assessment/PhotoUploadSection";
import { PatientDeclarationSection } from "@/src/components/features/assessment/PatientDeclarationSection";
import { SimpleHero } from "@/src/components/layout/SimpleHero";
import { useToast } from "@/src/components/ui/Toast";
import { useGetPatientMeQuery, useUpdatePatientMeMutation } from "@/src/store/services/patientsApi";
import { useSubmitWeightLossAssessmentMutation } from "@/src/store/services/assessmentsApi";
import { useCreateCheckoutSessionMutation } from "@/src/store/services/paymentsApi";
import { getErrorMessage } from "@/src/store/services/api";
import { Modal } from "@/src/components/ui/Modal";

function WeightLossAssessmentContent() {
  const [errorModalMessage, setErrorModalMessage] = useState<string | null>(null);
  const { states, setters } = useAssessmentForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const token = typeof window !== "undefined" ? Cookies.get("token") : undefined;

  const treatment = searchParams.get("treatment") || "wegovy";
  const dose = searchParams.get("dose") || undefined;

  const { data: patientData } = useGetPatientMeQuery(undefined, {
    skip: !token,
  });

  const [updatePatientMe, { isLoading: isUpdatingPatient }] = useUpdatePatientMeMutation();
  const [submitAssessment, { isLoading: isSubmittingAssessment }] = useSubmitWeightLossAssessmentMutation();
  const [createCheckoutSession, { isLoading: isCreatingCheckout }] = useCreateCheckoutSessionMutation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = Cookies.get("token");
      if (!token) {
        showToast("Please log in to complete the medical questionnaire", "error");
        router.push("/login?redirect=/assessment");
      }
    }
  }, [router, showToast]);

  // Pre-populate patient details
  useEffect(() => {
    if (patientData?.data) {
      const patient = patientData.data;
      if (patient.name || (patient.firstName && patient.lastName)) {
        setters.setFullName(patient.name || `${patient.firstName || ""} ${patient.lastName || ""}`.trim());
      }
      if (patient.dob) setters.setDob(patient.dob);
      if (patient.address) setters.setAddress(patient.address);
      if (patient.city) setters.setPostcode(patient.city);
      if (patient.email) setters.setEmail(patient.email);
    }
  }, [patientData, setters]);

  const handleSubmit = async () => {
    // Validation
    if (!states.fullName) return showToast("Full Name is required", "error");
    if (!states.dob) return showToast("Date of birth is required", "error");
    if (!states.address) return showToast("Address is required", "error");
    if (!states.postcode) return showToast("Postcode is required", "error");
    if (!states.phoneNumber) return showToast("Phone number is required", "error");
    if (!states.email) return showToast("Email is required", "error");

    if (!states.height) return showToast("Height is required", "error");
    if (!states.weight) return showToast("Weight is required", "error");
    if (!states.qObesity) return showToast("Eligibility diagnosed obesity question must be answered", "error");

    const conditions = [
      states.cond1,
      states.cond2,
      states.cond3,
      states.cond4,
      states.cond5,
      states.cond6,
    ];
    if (conditions.some((c) => c === "")) {
      return showToast("Please answer all eligibility condition questions", "error");
    }

    if (!states.mh1 || !states.mh2) {
      return showToast("Please answer all mental health screening questions", "error");
    }

    const contraindications = [states.c1, states.c2, states.c3, states.c4, states.c5];
    if (contraindications.some((c) => c === "")) {
      return showToast("Please answer all safety screening questions", "error");
    }

    if (!states.cm1 || !states.cm2) {
      return showToast("Please answer all current medication questions", "error");
    }

    if (!states.ls1 || !states.ls2) {
      return showToast("Please answer all lifestyle questions", "error");
    }
    if (states.ls2 === "yes" && !states.ls2Details) {
      return showToast("Please describe your current diet and exercise plan", "error");
    }

    const redFlags = [states.rf1, states.rf2, states.rf3];
    if (redFlags.some((c) => c === "")) {
      return showToast("Please answer all symptoms (red flags) questions", "error");
    }

    if (!states.frontPhoto) return showToast("Front photo is required", "error");
    if (!states.sidePhoto) return showToast("Side photo is required", "error");
    if (!states.backPhoto) return showToast("Back photo is required", "error");

    if (!states.check1 || !states.check2) {
      return showToast("Please sign all declarations", "error");
    }
    if (!states.signature) return showToast("Signature is required", "error");
    if (!states.date) return showToast("Date is required", "error");

    try {
      // Step A: Save patient personal details
      const patientFormData = new FormData();
      patientFormData.append("name", states.fullName);
      patientFormData.append("dob", states.dob);
      patientFormData.append("address", states.address);
      patientFormData.append("city", states.postcode);
      patientFormData.append("email", states.email);

      await updatePatientMe(patientFormData).unwrap();

      // Step B: Submit assessment
      const assessmentFormData = new FormData();
      assessmentFormData.append("treatment", treatment);

      // Eligibility
      assessmentFormData.append(
        "eligibility",
        JSON.stringify({
          height: Number(states.height),
          weight: Number(states.weight),
          diagnosedObesity: states.qObesity === "yes",
          conditions: {
            type2Diabetes: states.cond1 === "yes",
            hypertension: states.cond2 === "yes",
            highCholesterol: states.cond3 === "yes",
            sleepApnoea: states.cond4 === "yes",
            pcos: states.cond5 === "yes",
            cardiovascularDisease: states.cond6 === "yes",
          },
        })
      );

      // Mental Health
      assessmentFormData.append(
        "mentalHealthScreening",
        JSON.stringify({
          hasMentalHealthConditions: states.mh1 === "yes",
          underTreatment: states.mh2 === "yes",
        })
      );

      // Contraindications
      assessmentFormData.append(
        "contraindications",
        JSON.stringify({
          pregnantOrBreastfeeding: states.c1 === "yes",
          historyOfPancreatitis: states.c2 === "yes",
          familyHistoryOfThyroidCancerOrMEN2: states.c3 === "yes",
          severeGiDisease: states.c4 === "yes",
          glp1Allergy: states.c5 === "yes",
        })
      );

      // Medications
      assessmentFormData.append(
        "currentMedications",
        JSON.stringify({
          takingInsulinOrSulfonylureas: states.cm1 === "yes",
          takingWeightLossMeds: states.cm2 === "yes",
        })
      );

      // Lifestyle
      assessmentFormData.append(
        "lifestyle",
        JSON.stringify({
          previousProgrammes: states.ls1 === "yes",
          currentDietExercise: states.ls2 === "yes",
          dietDetails: states.ls2Details || "",
        })
      );

      // Red flags
      assessmentFormData.append(
        "redFlags",
        JSON.stringify({
          unexplainedAbdominalPain: states.rf1 === "yes",
          persistentVomitingNausea: states.rf2 === "yes",
          unexplainedWeightLoss: states.rf3 === "yes",
        })
      );

      assessmentFormData.append("declarationSigned", "true");

      // Photos
      assessmentFormData.append("front", states.frontPhoto);
      assessmentFormData.append("side", states.sidePhoto);
      assessmentFormData.append("back", states.backPhoto);

      const res = await submitAssessment(assessmentFormData).unwrap();
      if (res.success) {
        showToast("Assessment submitted successfully! Redirecting to checkout...", "success");
        try {
          const assessmentId = res.data?.id || res.data?.assessment?.id || res.data?._id;
          const checkoutRes = await createCheckoutSession({
            type: "one_off",
            doseRequested: dose,
            successUrl: `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: `${window.location.origin}/payment/cancel`,
            assessmentId,
          }).unwrap();
          
          const redirectUrl = checkoutRes.data?.url || checkoutRes.data?.session?.url;
          if (checkoutRes.success && redirectUrl) {
            window.location.href = redirectUrl;
          } else {
            showToast("Failed to initiate payment session", "error");
            router.push("/patient-portal");
          }
        } catch (checkoutErr) {
          showToast(getErrorMessage(checkoutErr), "error");
          router.push("/patient-portal");
        }
      } else {
        const msg = res.message || "Failed to submit assessment";
        setErrorModalMessage(msg);
      }
    } catch (err) {
      setErrorModalMessage(getErrorMessage(err));
    }
  };

  return (
    <div className="bg-bg text-text">
      {/* HERO */}
      <SimpleHero
        title={
          <>
            Weight Loss Injectables <br />
            Medical Questionnaire
          </>
        }
      />

      {/* FORM WRAP */}
      <section className="py-10">
        <div className="mx-auto max-w-[1174px] px-6">
          <div className="bg-white rounded-[20px] border border-border shadow-soft px-8 lg:px-32 py-12">
            <p className="text-center font-inter font-bold text-[32px] leading-[1.4] text-text ">
              For patient completion prior to clinician review.
              <br />
              Please answer all questions accurately.
            </p>

            <FormDivider />

            <PatientDetailsSection
              fullName={states.fullName}
              onFullNameChange={setters.setFullName}
              dob={states.dob}
              onDobChange={setters.setDob}
              address={states.address}
              onAddressChange={setters.setAddress}
              postcode={states.postcode}
              onPostcodeChange={setters.setPostcode}
              phoneNumber={states.phoneNumber}
              onPhoneNumberChange={setters.setPhoneNumber}
              email={states.email}
              onEmailChange={setters.setEmail}
            />
            <FormDivider />

            <MedicalHistorySection
              height={states.height}
              onHeightChange={setters.setHeight}
              weight={states.weight}
              onWeightChange={setters.setWeight}
              qObesity={states.qObesity}
              onObesityChange={setters.setQObesity}
              conditionValues={[
                states.cond1,
                states.cond2,
                states.cond3,
                states.cond4,
                states.cond5,
                states.cond6,
              ]}
              onConditionChange={(idx, v) => {
                const settersList = [
                  setters.setCond1,
                  setters.setCond2,
                  setters.setCond3,
                  setters.setCond4,
                  setters.setCond5,
                  setters.setCond6,
                ];
                settersList[idx](v);
              }}
            />
            <FormDivider />

            <MentalHealthSection
              mh1={states.mh1}
              onMh1Change={setters.setMh1}
              mh2={states.mh2}
              onMh2Change={setters.setMh2}
            />
            <FormDivider />

            <SafetyScreeningSection
              values={[states.c1, states.c2, states.c3, states.c4, states.c5]}
              onChange={(idx, v) => {
                const settersList = [
                  setters.setC1,
                  setters.setC2,
                  setters.setC3,
                  setters.setC4,
                  setters.setC5,
                ];
                settersList[idx](v);
              }}
            />
            <FormDivider />

            <MedicationSection
              cm1={states.cm1}
              onCm1Change={setters.setCm1}
              cm2={states.cm2}
              onCm2Change={setters.setCm2}
            />
            <FormDivider />

            <LifestyleSection
              ls1={states.ls1}
              onLs1Change={setters.setLs1}
              ls1Details={states.ls1Details}
              onLs1DetailsChange={setters.setLs1Details}
              ls2={states.ls2}
              onLs2Change={setters.setLs2}
              ls2Details={states.ls2Details}
              onLs2DetailsChange={setters.setLs2Details}
            />
            <FormDivider />

            <SymptomsSection
              values={[states.rf1, states.rf2, states.rf3]}
              onChange={(idx, v) => {
                const settersList = [setters.setRf1, setters.setRf2, setters.setRf3];
                settersList[idx](v);
              }}
            />
            <FormDivider />

            <PhotoUploadSection
              frontPhoto={states.frontPhoto}
              onFrontPhotoChange={setters.setFrontPhoto}
              sidePhoto={states.sidePhoto}
              onSidePhotoChange={setters.setSidePhoto}
              backPhoto={states.backPhoto}
              onBackPhotoChange={setters.setBackPhoto}
            />
            <FormDivider />

            <PatientDeclarationSection
              check1={states.check1}
              onCheck1Change={setters.setCheck1}
              check2={states.check2}
              onCheck2Change={setters.setCheck2}
              signature={states.signature}
              onSignatureChange={setters.setSignature}
              date={states.date}
              onDateChange={setters.setDate}
              onSubmit={handleSubmit}
              isSubmitting={isUpdatingPatient || isSubmittingAssessment || isCreatingCheckout}
            />

            <div className="h-[24px]" />
          </div>
        </div>
      </section>

      {/* Backend Error Message Modal */}
      <Modal 
        isOpen={!!errorModalMessage} 
        onClose={() => setErrorModalMessage(null)}
        title="Assessment Notice"
      >
        <p className="whitespace-pre-wrap">{errorModalMessage}</p>
      </Modal>
    </div>
  );
}

export default function WeightLossAssessmentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 text-gray-500">
          <svg className="animate-spin h-8 w-8 text-[var(--c-primary)] mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-sm font-semibold">Loading questionnaire...</span>
        </div>
      }
    >
      <WeightLossAssessmentContent />
    </Suspense>
  );
}
