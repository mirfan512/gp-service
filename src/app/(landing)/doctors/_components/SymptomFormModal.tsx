"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Modal } from "@/src/components/ui/Modal";
import { useBookConsultationMutation } from "@/src/store/services/doctorsApi";
import { getErrorMessage } from "@/src/store/services/api";

interface SymptomFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorId: string;
  doctorName: string;
  scheduledAt: string;
  onSuccess: (consultationId: string) => void;
}

export function SymptomFormModal({
  isOpen,
  onClose,
  doctorId,
  doctorName,
  scheduledAt,
  onSuccess,
}: SymptomFormModalProps) {
  const [symptoms, setSymptoms] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const photoInputRef = useRef<HTMLInputElement | null>(null);

  const [bookConsultation, { isLoading }] = useBookConsultationMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleFormSubmit = async () => {
    if (!symptoms.trim()) {
      setSubmitError("Please explain your condition or symptoms.");
      return;
    }

    try {
      setSubmitError(null);

      // Create FormData
      const formData = new FormData();
      formData.append("consultantId", doctorId);
      formData.append("scheduledAt", scheduledAt);
      formData.append("patientHistory", symptoms);

      if (file) {
        formData.append("files", file);
      }
      if (photo) {
        formData.append("photos", photo);
      }

      // Hitting API POST /consultations
      const res = await bookConsultation(formData).unwrap();

      if (res.success && res.data?._id) {
        onSuccess(res.data._id);
      } else {
        setSubmitError("Invalid response from the server. Consultation ID not returned.");
      }
    } catch (err: any) {
      setSubmitError(getErrorMessage(err));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Video Call - Book Now"
      maxWidth="max-w-2xl"
      actionLabel={isLoading ? "Submitting..." : "Continue"}
      onAction={handleFormSubmit}
      isActionDisabled={isLoading}
    >
      <div className="flex flex-col gap-6 text-gray-800">

        {/* Symptom Input Area */}
        <div>
          <h4 className="text-[15px] font-semibold text-gray-800 mb-3 leading-snug">
            Briefly explain your condition or question to the Doctor
          </h4>

          <div className="relative">
            <textarea
              maxLength={300}
              placeholder="Tell the doctor about the symptoms you are experiencing ..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full h-36 p-4 text-[13px] border border-gray-200 rounded-xl bg-gray-50/50 outline-none resize-none focus:border-[var(--c-primary)] focus:bg-white transition-all text-gray-800 placeholder:text-gray-400"
            />
            <div className="text-right text-xs text-gray-400 mt-1 select-none">
              {symptoms.length}/300 Characters
            </div>
          </div>
        </div>

        {/* File Attachments Area */}
        <div className="space-y-4">

          {/* File Input (Optional) */}
          <div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt,image/*"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-dashed border-gray-200 bg-gray-50/30 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 justify-center mb-1 group-hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 group-hover:text-[var(--c-primary-600)] transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12a2.25 2.25 0 0 1 4.5-9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
              </div>
              <span className="text-[13px] font-medium text-gray-700">
                {file ? `Selected: ${file.name}` : "Attach a file (optional)"}
              </span>
              {file && (
                <span className="text-[10px] text-gray-400 mt-1">
                  Click to change attachment
                </span>
              )}
            </button>
          </div>

          {/* Photo Input (Optional) */}
          <div>
            <input
              type="file"
              ref={photoInputRef}
              onChange={handlePhotoChange}
              className="hidden"
              accept="image/*"
              capture="environment"
            />
            <button
              type="button"
              onClick={() => photoInputRef.current?.click()}
              className="w-full flex flex-col items-center justify-center p-5 rounded-xl border border-gray-150 hover:border-gray-300 hover:bg-gray-50 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 justify-center mb-1 group-hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-400 group-hover:text-[var(--c-primary-600)] transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
              <span className="text-[13px] font-medium text-gray-700">
                {photo ? `Photo: ${photo.name}` : "Upload Photo"}
              </span>
              {photo && (
                <span className="text-[10px] text-gray-400 mt-1">
                  Click to replace photo
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Form error display */}
        {submitError && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 text-xs text-red-700 leading-normal whitespace-pre-wrap">
            {submitError}
          </div>
        )}
      </div>
    </Modal>
  );
}
