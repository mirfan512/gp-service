"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetPatientMeQuery } from "@/src/store/services/patientsApi";
import { PatientPortalHeader } from "@/src/components/features/patient-portal/Layout/PatientPortalHeader";
import { PatientHeaderCard } from "@/src/components/features/patient-portal/PatientInfo/PatientHeaderCard";
import { PortalTabs } from "@/src/components/features/patient-portal/Tabs/PortalTabs";
import { MOCK_PATIENT_PROFILE, PORTAL_TABS } from "@/src/components/features/patient-portal/constants";

// Modular Tab Panel Components
import { AllergiesTab } from "@/src/components/features/patient-portal/TabPanels/AllergiesTab";
import { MedicationsTab } from "@/src/components/features/patient-portal/TabPanels/MedicationsTab";
import { PrescriptionsTab } from "@/src/components/features/patient-portal/TabPanels/PrescriptionsTab";
import { ConsultationsTab } from "@/src/components/features/patient-portal/TabPanels/ConsultationsTab";
import { DocumentsTab } from "@/src/components/features/patient-portal/TabPanels/DocumentsTab";
import { UploadsTab } from "@/src/components/features/patient-portal/TabPanels/UploadsTab";

export default function PatientPortal() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("My Allergies");

  const { data: patientData, isLoading: isPatientLoading } = useGetPatientMeQuery();

  // Redirect to registration if profile is incomplete
  useEffect(() => {
    if (patientData?.data) {
      const patient = patientData.data;
      if (!patient.pastMedicalHistory || !patient.city) {
        router.replace("/patient-registration");
      }
    }
  }, [patientData, router]);

  if (isPatientLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-portal-bg)]">
        <svg className="animate-spin h-10 w-10 text-[#A3B094]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  }

  const patient = patientData?.data;

  const patientProfile = patient
    ? {
        id: patient.id || patient._id || "1",
        name: patient.name || `${patient.firstName || ""} ${patient.lastName || ""}`.trim() || "Patient",
        dob: patient.dob ? new Date(patient.dob).toLocaleDateString("en-GB") : "Not Provided",
        email: patient.email || "Not Provided",
        mobile: patient.phone || "Not Provided",
        address: patient.address || "Not Provided",
        nhsGp: patient.nhsGp
          ? `${patient.nhsGp.practiceName || ""}\n${patient.nhsGp.address || ""}\n${patient.nhsGp.email || ""}`.trim()
          : "None Registered",
        avatarUrl: patient.avatarUrl?.url || undefined,
      }
    : MOCK_PATIENT_PROFILE;

  const renderTabContent = () => {
    switch (activeTab) {
      case "My Allergies":
        return <AllergiesTab patient={patient} />;
      case "Current Medications":
        return <MedicationsTab patient={patient} />;
      case "My Prescriptions":
        return <PrescriptionsTab patient={patient} />;
      case "Past Consultations":
        return <ConsultationsTab patient={patient} />;
      case "Documents":
        return <DocumentsTab patient={patient} />;
      case "My Uploads":
        return <UploadsTab patient={patient} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-portal-bg)] font-primary pb-20">
      {/* Portal Header */}
      <PatientPortalHeader />

      <main className="max-w-[1240px] mx-auto p-6 md:p-8 space-y-8">
        {/* Patient Info Card */}
        <PatientHeaderCard patient={patientProfile} />

        {/* Navigation Tabs */}
        <PortalTabs
          activeTab={activeTab}
          tabs={PORTAL_TABS}
          onChange={setActiveTab}
        />

        {/* Dynamic Dashboard Tab Panel Content */}
        <div>
          {renderTabContent()}
        </div>

        {/* Book Consultation CTA (Shown when not in consultation tab to reduce redundancy) */}
        {activeTab !== "Past Consultations" && (
          <div className="flex justify-center py-6">
            <button className="bg-[var(--c-portal-book-btn)] hover:opacity-90 text-white font-bold text-lg px-12 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 uppercase tracking-widest w-full md:w-auto">
              Book a Consultation
            </button>
          </div>
        )}
      </main>
    </div>
  );
}


