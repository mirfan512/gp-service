"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { PatientDetails } from "./components/PatientDetails";
import { TreatmentReason } from "./components/TreatmentReason";
import { MedicalHistory } from "./components/MedicalHistory";
import { PatientDeclaration } from "./components/PatientDeclaration";
import { SimpleHero } from "@/src/components/layout/SimpleHero";
import { useNadAssessmentForm, NadConditions, YesNo } from "@/src/lib/hooks/useNadAssessmentForm";
import { useToast } from "@/src/components/ui/Toast";
import { useGetPatientMeQuery, useUpdatePatientMeMutation } from "@/src/store/services/patientsApi";
import { useSubmitNadAssessmentMutation } from "@/src/store/services/assessmentsApi";
import { useCreateCheckoutSessionMutation } from "@/src/store/services/paymentsApi";
import { getErrorMessage } from "@/src/store/services/api";
import { Modal } from "@/src/components/ui/Modal";

const NADQuestionnaireContent = () => {
  const { states, setters } = useNadAssessmentForm();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();
  const [errorModalMessage, setErrorModalMessage] = useState<string | null>(null);

  const token = typeof window !== "undefined" ? Cookies.get("token") : undefined;

  const { data: patientData } = useGetPatientMeQuery(undefined, {
    skip: !token,
  });

  const [updatePatientMe, { isLoading: isUpdatingPatient }] = useUpdatePatientMeMutation();
  const [submitNadAssessment, { isLoading: isSubmittingAssessment }] = useSubmitNadAssessmentMutation();
  const [createCheckoutSession, { isLoading: isCreatingCheckout }] = useCreateCheckoutSessionMutation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = Cookies.get("token");
      if (!token) {
        showToast("Please log in to complete the medical questionnaire", "error");
        const redirectUrl = window.location.pathname + window.location.search;
        router.push(`/login?redirect=${encodeURIComponent(redirectUrl)}`);
      }
    }
  }, [router, showToast]);

  // Set package selection from query parameters
  useEffect(() => {
    const productType = searchParams.get("productType");
    const packageSize = searchParams.get("packageSize");
    if (productType) setters.setProductType(productType);
    if (packageSize) setters.setPackageSize(packageSize);
  }, [searchParams, setters]);

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

    if (states.reasons.length === 0 && !states.otherReason.trim()) {
      return showToast("Please select at least one reason for treatment", "error");
    }

    // Ensure all conditions are answered yes or no
    const unansweredConditions = Object.entries(states.conditions).filter(
      ([_, val]) => val === ""
    );
    if (unansweredConditions.length > 0) {
      return showToast("Please answer all medical history questions", "error");
    }

    if (!states.accurate || !states.age) {
      return showToast("Please sign all declarations", "error");
    }
    if (!states.signature.trim()) return showToast("Signature is required", "error");
    if (!states.date.trim()) return showToast("Date is required", "error");

    try {
      // Step A: Update patient details
      const patientFormData = new FormData();
      patientFormData.append("name", states.fullName);
      patientFormData.append("dob", states.dob);
      patientFormData.append("address", states.address);
      patientFormData.append("city", states.postcode);
      patientFormData.append("email", states.email);

      await updatePatientMe(patientFormData).unwrap();

      // Step B: Submit assessment
      const conditionsPayload: Record<string, boolean> = {};
      Object.entries(states.conditions).forEach(([key, val]) => {
        conditionsPayload[key] = val === "yes";
      });

      const payload = {
        nadDetails: {
          reasons: states.reasons,
          otherReason: states.otherReason,
          productType: states.productType,
          packageSize: states.packageSize,
          conditions: conditionsPayload,
        },
        declarationSigned: true,
      };

      const res = await submitNadAssessment(payload).unwrap();
      if (res.success) {
        showToast("Assessment submitted successfully! Redirecting to checkout...", "success");
        try {
          const assessmentId = res.data?.id || res.data?.assessment?.id || res.data?._id;
          const checkoutRes = await createCheckoutSession({
            type: "one_off",
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
    <section className="bg-white min-h-screen pb-24 font-primary">
      <div className="relative overflow-visible">
        <SimpleHero
          title={
            <>
              NAD+ Injections <br /> Medical Questionnaire
            </>
          }
          titleClassName="text-hero-bold text-center lg:text-left"
          subtitle={null}
        />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 mt-16 relative z-20">
        <div className="bg-white rounded-[20px] shadow-lg p-8 lg:p-16 border border-gray-100">
          <h2 className="text-center font-bold text-2xl mb-12">
            Please answer all questions accurately.
          </h2>

          <PatientDetails 
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
          <TreatmentReason 
            selectedReasons={states.reasons}
            onReasonsChange={setters.setReasons}
            otherReason={states.otherReason}
            onOtherReasonChange={setters.setOtherReason}
          />
          <MedicalHistory 
            values={states.conditions}
            onChange={(key, val) => {
              setters.setConditions(prev => ({
                ...prev,
                [key]: val
              }));
            }}
          />
          <PatientDeclaration 
            accurate={states.accurate}
            onAccurateChange={setters.setAccurate}
            age={states.age}
            onAgeChange={setters.setAge}
            signature={states.signature}
            onSignatureChange={setters.setSignature}
            date={states.date}
            onDateChange={setters.setDate}
            onSubmit={handleSubmit}
            isSubmitting={isUpdatingPatient || isSubmittingAssessment || isCreatingCheckout}
          />
        </div>
      </div>

      {/* Backend Error Message Modal */}
      <Modal 
        isOpen={!!errorModalMessage} 
        onClose={() => setErrorModalMessage(null)}
        title="Assessment Notice"
      >
        <p className="whitespace-pre-wrap">{errorModalMessage}</p>
      </Modal>
    </section>
  );
};

export const NADQuestionnaire = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <NADQuestionnaireContent />
    </Suspense>
  );
};
