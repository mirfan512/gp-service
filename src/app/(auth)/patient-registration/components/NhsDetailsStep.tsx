"use client";

import React, { useState, useEffect } from "react";
import { useToast } from "@/src/components/ui/Toast";

interface NhsDetailsStepProps {
  initialData?: any;
  onNext: (formData: FormData) => Promise<void>;
  isLoading: boolean;
  onBack: () => void;
}

export function NhsDetailsStep({ initialData, onNext, isLoading, onBack }: NhsDetailsStepProps) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    practiceName: "",
    gpAddress: "",
    gpEmail: "",
    hasConsent: true,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        practiceName: initialData.nhsGp?.practiceName || "",
        gpAddress: initialData.nhsGp?.address || "",
        gpEmail: initialData.nhsGp?.email || "",
        hasConsent: initialData.hasConsent !== undefined ? initialData.hasConsent : true,
      });
    }
  }, [initialData]);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.practiceName.trim()) return showToast("GP Practice Name is required", "error");
    if (!formData.gpAddress.trim()) return showToast("GP Practice Address is required", "error");
    if (!formData.gpEmail.trim()) return showToast("GP Practice Email is required", "error");

    const payload = new FormData();
    payload.append("nhsGp[practiceName]", formData.practiceName.trim());
    payload.append("nhsGp[address]", formData.gpAddress.trim());
    payload.append("nhsGp[email]", formData.gpEmail.trim());
    payload.append("hasConsent", String(formData.hasConsent));

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
          NHS
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Practice Name */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Practice Name
          </label>
          <input
            type="text"
            value={formData.practiceName}
            onChange={(e) => handleChange("practiceName", e.target.value)}
            placeholder="Enter Practice Name"
            className="w-full px-4 py-3.5 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)]"
            required
            disabled={isLoading}
          />
        </div>

        {/* GP Address */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Address
          </label>
          <input
            type="text"
            value={formData.gpAddress}
            onChange={(e) => handleChange("gpAddress", e.target.value)}
            placeholder="Address"
            className="w-full px-4 py-3.5 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)]"
            required
            disabled={isLoading}
          />
        </div>

        {/* GP Email */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Email
          </label>
          <input
            type="email"
            value={formData.gpEmail}
            onChange={(e) => handleChange("gpEmail", e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-3.5 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)]"
            required
            disabled={isLoading}
          />
        </div>

        {/* Consent to share */}
        <div className="space-y-3 pt-2">
          <span className="block text-[14px] font-semibold text-gray-500">
            Consent for note share with GP
          </span>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2.5 cursor-pointer text-[15px]" style={{ color: "var(--c-text-secondary)" }}>
              <input
                type="radio"
                name="hasConsent"
                checked={formData.hasConsent === true}
                onChange={() => handleChange("hasConsent", true)}
                className="w-5 h-5 rounded-full accent-[#A3B094]"
                disabled={isLoading}
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer text-[15px]" style={{ color: "var(--c-text-secondary)" }}>
              <input
                type="radio"
                name="hasConsent"
                checked={formData.hasConsent === false}
                onChange={() => handleChange("hasConsent", false)}
                className="w-5 h-5 rounded-full accent-[#A3B094]"
                disabled={isLoading}
              />
              <span>No</span>
            </label>
          </div>
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
              Saving...
            </>
          ) : (
            "Next"
          )}
        </button>
      </form>
    </div>
  );
}
