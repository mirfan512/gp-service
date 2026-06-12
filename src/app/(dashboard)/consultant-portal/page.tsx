"use client";

import { useConsultation } from "@/src/hooks/useConsultation";
import { ConsultantPortalHeader } from "@/src/components/features/consultant-portal/Layout/ConsultantPortalHeader";
import { PatientCard } from "@/src/components/features/consultant-portal/PatientCard/PatientCard";
import { HistorySection } from "@/src/components/features/consultant-portal/History/HistorySection";
import { ConsultationForm } from "@/src/components/features/consultant-portal/Form/ConsultationForm";
import { ActionButtons } from "@/src/components/features/consultant-portal/Actions/ActionButtons";
import { PREVIOUS_CONSULTATIONS } from "@/src/components/features/consultant-portal/constants";
import { ConsultantTabBar } from "@/src/components/features/consultant-portal/Tabs/tabBar";
import { useState } from "react";

export default function ConsultantPortal() {
  const {
    patient,
    activeTab,
    formData,
    handleTabChange,
    handleInputChange,
    toggleIdCheck,
    toggleConsent,
    handleSave,
    tabs,
  } = useConsultation();

  const [portalTab, setPortalTab] = useState("Pending Prescriptions");

  return (
    <div className="min-h-screen bg-[var(--color-portal-bg)] font-primary">
      {/* Header */}
      <ConsultantPortalHeader />

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto p-8 space-y-8">

        <ConsultantTabBar activeTab={portalTab} onTabChange={setPortalTab} />

        {/* Patient Card Section */}
        <div className="bg-transparent">
          <PatientCard
            patient={patient}
            onToggleId={toggleIdCheck}
            onToggleConsent={toggleConsent}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            tabs={tabs}
          />
        </div>

        {/* Dynamic Content based on tabs - for now showing main view as per design */}
        <div className="space-y-8">
          {activeTab === "Current Consultation" && (
            <>
              <HistorySection previousConsultations={PREVIOUS_CONSULTATIONS} />

              <ConsultationForm
                formData={formData}
                onChange={handleInputChange}
              />

              <ActionButtons
                onSave={handleSave}
                onOutcomeChange={(v) => handleInputChange("outcome", v)}
              />
            </>
          )}

          {activeTab !== "Current Consultation" && (
            <div className="text-center py-20 text-gray-500">
              Content for {activeTab} section would go here.
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
