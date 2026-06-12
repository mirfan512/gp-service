"use client";

import React, { useState, useEffect } from "react";
import { ChipInput } from "@/src/components/ui/ChipInput";
import { useToast } from "@/src/components/ui/Toast";

interface MedicalHistoryStepProps {
  initialData?: any;
  onNext: (formData: FormData) => Promise<void>;
  isLoading: boolean;
  onBack: () => void;
}

export function MedicalHistoryStep({ initialData, onNext, isLoading, onBack }: MedicalHistoryStepProps) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    pastMedicalHistory: "",
    currentMedicationText: "",
    operations: "",
    familyHistory: "",
  });
  const [allergies, setAllergies] = useState<string[]>([]);

  useEffect(() => {
    if (initialData) {
      setFormData({
        pastMedicalHistory: initialData.pastMedicalHistory || "",
        currentMedicationText: initialData.currentMedicationText || "",
        operations: initialData.operations || "",
        familyHistory: initialData.familyHistory || "",
      });
      setAllergies(initialData.allergies || []);
    }
  }, [initialData]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Field validations
    if (!formData.pastMedicalHistory.trim()) return showToast("Past Medical History is required", "error");
    if (!formData.currentMedicationText.trim()) return showToast("Current Medication details are required", "error");
    if (!formData.operations.trim()) return showToast("Operations details are required (type 'none' if none)", "error");
    if (!formData.familyHistory.trim()) return showToast("Family History is required", "error");

    const payload = new FormData();
    payload.append("pastMedicalHistory", formData.pastMedicalHistory.trim());
    payload.append("currentMedicationText", formData.currentMedicationText.trim());
    payload.append("operations", formData.operations.trim());
    payload.append("familyHistory", formData.familyHistory.trim());
    
    // Add allergies individually for Form-Data array parsing
    if (allergies.length > 0) {
      allergies.forEach((allergy) => {
        payload.append("allergies", allergy);
      });
    } else {
      // Send an empty string or standard representation to indicate empty
      payload.append("allergies", "");
    }

    try {
      await onNext(payload);
    } catch (err) {
      // Error is handled by parent orchestrator
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="text-[20px] font-semibold text-center flex-1 pr-10" style={{ color: "#6B8469" }}>
          Past Medical History
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Past Medical History */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Past Medical History
          </label>
          <textarea
            value={formData.pastMedicalHistory}
            onChange={(e) => handleChange("pastMedicalHistory", e.target.value)}
            placeholder="Describe your past medical history"
            className="w-full min-h-[120px] px-4 py-3 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)] resize-none"
            required
            disabled={isLoading}
          />
        </div>

        {/* Allergies tag input */}
        <ChipInput
          label="Allergies"
          placeholder="Enter Allergy Name"
          value={allergies}
          onChange={setAllergies}
          disabled={isLoading}
        />

        {/* Current Medication */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Current Medication
          </label>
          <textarea
            value={formData.currentMedicationText}
            onChange={(e) => handleChange("currentMedicationText", e.target.value)}
            placeholder="Describe your current medications"
            className="w-full min-h-[120px] px-4 py-3 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)] resize-none"
            required
            disabled={isLoading}
          />
        </div>

        {/* Operations */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Operations
          </label>
          <textarea
            value={formData.operations}
            onChange={(e) => handleChange("operations", e.target.value)}
            placeholder="Describe any past operations"
            className="w-full min-h-[120px] px-4 py-3 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)] resize-none"
            required
            disabled={isLoading}
          />
        </div>

        {/* Family History */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Family History
          </label>
          <textarea
            value={formData.familyHistory}
            onChange={(e) => handleChange("familyHistory", e.target.value)}
            placeholder="Describe any family medical history"
            className="w-full min-h-[120px] px-4 py-3 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)] resize-none"
            required
            disabled={isLoading}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-95 active:scale-[0.99] flex items-center justify-center gap-2"
          style={{ background: "#A3B094" }}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Completing...
            </>
          ) : (
            "Next"
          )}
        </button>
      </form>
    </div>
  );
}
