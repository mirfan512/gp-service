"use client";

import { useState } from "react";
import { Consultation, TabKey } from "@/src/components/features/consultant-portal/types";
import { CONSULTATION_TABS, MOCK_PATIENT } from "@/src/components/features/consultant-portal/constants";

type FormState = Omit<Consultation, "id" | "date" | "doctorName">;

export const useConsultation = () => {
  const [patient, setPatient] = useState(MOCK_PATIENT);
  const [activeTab, setActiveTab] = useState<TabKey>("Current Consultation");

  const [formData, setFormData] = useState<FormState>({
    diagnosis: "",
    history: "",
    plan: "",
    privateNotes: "",
    outcome: "",
  });

  const handleTabChange = (tab: TabKey) => setActiveTab(tab);

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleIdCheck = () => {
    setPatient((prev: any) => ({ ...prev, isIdVerified: !prev.isIdVerified }));
  };

  const toggleConsent = () => {
    setPatient((prev: any) => ({ ...prev, hasConsent: !prev.hasConsent }));
  };

  const handleSave = () => {
    // Logic to save consultation
    console.log("Saving consultation:", formData);
    alert("Consultation Saved!");
  };

  return {
    patient,
    activeTab,
    formData,
    handleTabChange,
    handleInputChange,
    toggleIdCheck,
    toggleConsent,
    handleSave,
    tabs: CONSULTATION_TABS,
  };
};
