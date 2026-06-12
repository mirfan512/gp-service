"use client";

import React, { useState } from "react";
import { FileUpload } from "@/src/components/ui/FileUpload";
import { useToast } from "@/src/components/ui/Toast";

interface PatientUploadStepProps {
  initialData?: unknown;
  onNext: (formData: FormData) => Promise<void>;
  isLoading: boolean;
  onBack: () => void;
}

export function PatientUploadStep({ onNext, isLoading, onBack }: PatientUploadStepProps) {
  const { showToast } = useToast();
  const [photo, setPhoto] = useState<File | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  // CardIcon for Upload Photo matching the mockup
  const CardIcon = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
      <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="17" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M7 27C7 24 10 23 14 23C18 23 21 24 21 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="15" x2="31" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="20" x2="31" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="25" x2="31" y2="25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  // AttachIcon for Attach a file (optional) matching the mockup
  const AttachIcon = (
    <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(6, 6) rotate(-10)">
        <rect x="0" y="0" width="20" height="16" rx="2" fill="#E2F2E4" stroke="#48BB78" strokeWidth="1.5" />
        <circle cx="6" cy="5" r="2" fill="#48BB78" />
        <path d="M2 14L8 8L13 13L18 10L20 12" stroke="#48BB78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <path d="M28 26C31.5 26 34 23.5 34 20C34 17.5 32 15.5 29.5 15.5C29.2 15.5 29 15.6 28.7 15.7C27.8 13.5 25.5 12 23 12C19.5 12 16.5 14.5 16 18C13.5 18.5 12 20.5 12 22.5C12 24.5 13.5 26 16 26H28Z" fill="#EDF2F7" stroke="#CBD5E0" strokeWidth="1.5" strokeLinejoin="round" />
      <g transform="translate(36, 8) rotate(15)">
        <rect x="0" y="0" width="14" height="18" rx="2" fill="#FFFFFF" stroke="#4A5568" strokeWidth="1.5" />
        <line x1="3" y1="5" x2="11" y2="5" stroke="#4A5568" strokeWidth="1" />
        <line x1="3" y1="9" x2="11" y2="9" stroke="#4A5568" strokeWidth="1" />
        <line x1="3" y1="13" x2="8" y2="13" stroke="#4A5568" strokeWidth="1" />
      </g>
    </svg>
  );

  const handleAddAttachedFile = (file: File | null) => {
    if (file) {
      setAttachedFiles((prev) => [...prev, file]);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!photo) {
      return showToast("Please upload a photo before registering", "error");
    }

    const payload = new FormData();
    payload.append("avatarUrl", photo);

    attachedFiles.forEach((file) => {
      payload.append("files", file);
    });

    try {
      await onNext(payload);
    } catch {
      // Handled by page orchestrator
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 shadow-sm"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="text-[20px] font-semibold" style={{ color: "#6B8469" }}>
          Patient Uploads
        </h1>
      </div>

      <form onSubmit={handleRegister} className="space-y-6">
        {/* Upload Photo Section */}
        <div>
          <label className="block text-[15px] font-medium mb-2 text-[#4A5568]">
            Upload Photo
          </label>
          <FileUpload
            value={photo}
            onChange={setPhoto}
            accept="image/*"
            icon={CardIcon}
            placeholderText="Upload Photo"
            helperText="Drag and drop or click to upload"
          />
        </div>

        {/* Attach File Section */}
        <div>
          <FileUpload
            onChange={handleAddAttachedFile}
            accept="image/*,application/pdf,.doc,.docx"
            icon={AttachIcon}
            placeholderText="Attach a file (optional)"
            helperText="Upload reports (.pdf, .jpg, .png) or docx files"
          />

          {/* Attached Files List */}
          {attachedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              <div className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider pl-1">
                Attached Files ({attachedFiles.length})
              </div>
              {attachedFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 bg-gray-50 border border-gray-100 rounded-xl transition-all duration-200 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3 truncate">
                    <svg className="w-5 h-5 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700 truncate">{file.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAttachedFiles((prev) => prev.filter((_, i) => i !== idx))}
                    className="text-xs font-semibold text-red-500 hover:text-red-600 px-2 py-1 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit / Register Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-95 active:scale-[0.99] flex items-center justify-center gap-2 mt-8 shadow-sm"
          style={{ background: "#A3B094" }}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Registering...
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}
