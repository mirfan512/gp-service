"use client";

import React, { useState, useEffect } from "react";
import { FileUpload } from "@/src/components/ui/FileUpload";
import { useToast } from "@/src/components/ui/Toast";

interface PersonalInfoStepProps {
  initialData?: any;
  onNext: (formData: FormData) => Promise<void>;
  isLoading: boolean;
  onBack: () => void;
}

export function PersonalInfoStep({ initialData, onNext, isLoading, onBack }: PersonalInfoStepProps) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    dob: "",
    gender: "",
    passportOrDrivingLicenceId: "",
    city: "",
    address: "",
  });

  const [idCardFront, setIdCardFront] = useState<File | string | null>(null);
  const [idCardBack, setIdCardBack] = useState<File | string | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        email: initialData.email || "",
        dob: initialData.dob || "",
        gender: initialData.gender || "",
        passportOrDrivingLicenceId: initialData.passportOrDrivingLicenceId || "",
        city: initialData.city || "",
        address: initialData.address || "",
      });
      if (initialData.idCardFrontUrl) setIdCardFront(initialData.idCardFrontUrl);
      if (initialData.idCardBackUrl) setIdCardBack(initialData.idCardBackUrl);
    }
  }, [initialData]);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) return showToast("Email is required", "error");
    if (!formData.dob) return showToast("Date of Birth is required", "error");
    if (!formData.gender) return showToast("Gender is required", "error");
    if (!formData.passportOrDrivingLicenceId) return showToast("Passport ID / Driving Licence is required", "error");
    if (!formData.city) return showToast("City is required", "error");
    if (!formData.address) return showToast("Address is required", "error");
    if (!idCardFront) return showToast("Identification Front Side is required", "error");
    if (!idCardBack) return showToast("Identification Back Side is required", "error");

    const payload = new FormData();
    payload.append("email", formData.email);
    payload.append("dob", formData.dob);
    payload.append("gender", formData.gender);
    payload.append("passportOrDrivingLicenceId", formData.passportOrDrivingLicenceId);
    payload.append("city", formData.city);
    payload.append("address", formData.address);

    if (idCardFront instanceof File) {
      payload.append("idCardFront", idCardFront);
    }
    if (idCardBack instanceof File) {
      payload.append("idCardBack", idCardBack);
    }

    try {
      await onNext(payload);
    } catch (err) {
      // Error handling is managed by page orchestrator
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
          Register
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter Email .."
            className="w-full px-4 py-3.5 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)]"
            required
            disabled={isLoading}
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>Date Of Birth</label>
          <input
            type="date"
            value={formData.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className="w-full px-4 py-3.5 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)]"
            required
            disabled={isLoading}
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>Gender</label>
          <div className="relative">
            <select
              value={formData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="w-full px-4 py-3.5 pr-10 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] appearance-none focus:outline-none focus:border-[var(--c-primary)]"
              required
              disabled={isLoading}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Passport / DL */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>Passport ID / Driving Licence</label>
          <input
            type="text"
            value={formData.passportOrDrivingLicenceId}
            onChange={(e) => handleChange("passportOrDrivingLicenceId", e.target.value)}
            placeholder="Passport / Driving Licence"
            className="w-full px-4 py-3.5 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)]"
            required
            disabled={isLoading}
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>City</label>
          <div className="relative">
            <select
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full px-4 py-3.5 pr-10 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] appearance-none focus:outline-none focus:border-[var(--c-primary)]"
              required
              disabled={isLoading}
            >
              <option value="">Select City</option>
              <option value="London">London</option>
              <option value="Birmingham">Birmingham</option>
              <option value="Manchester">Manchester</option>
              <option value="Glasgow">Glasgow</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Leeds">Leeds</option>
              <option value="Bristol">Bristol</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Address .."
            className="w-full px-4 py-3.5 text-[15px] rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] focus:outline-none focus:border-[var(--c-primary)]"
            required
            disabled={isLoading}
          />
        </div>

        {/* Uploads */}
        <div className="space-y-4">
          <FileUpload
            label="Identification Front Side"
            value={idCardFront}
            onChange={setIdCardFront}
          />
          <FileUpload
            label="Identification Back Side"
            value={idCardBack}
            onChange={setIdCardBack}
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
