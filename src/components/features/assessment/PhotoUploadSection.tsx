import React from "react";
import { FormSectionHeader } from "../../ui/form";
import { PATIENT_PHOTO_REQUIREMENTS } from "@/src/lib/constants/assessment";
import Image from "next/image";

interface PhotoUploadSectionProps {
  frontPhoto: File | null;
  onFrontPhotoChange: (file: File | null) => void;
  sidePhoto: File | null;
  onSidePhotoChange: (file: File | null) => void;
  backPhoto: File | null;
  onBackPhotoChange: (file: File | null) => void;
}

export function PhotoUploadSection({
  frontPhoto,
  onFrontPhotoChange,
  sidePhoto,
  onSidePhotoChange,
  backPhoto,
  onBackPhotoChange,
}: PhotoUploadSectionProps) {
  return (
    <>
      <FormSectionHeader>Patient Photo Upload Requirements</FormSectionHeader>
      <div className="mt-6 text-[16px] leading-[1.7] text-text-gray">
        <p>As part of clinical verification, please upload the following photos:</p>
        <p className="mt-2">
          {PATIENT_PHOTO_REQUIREMENTS.map((req, idx) => (
            <span key={idx}>
              {req}
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2 text-text-muted ">
        <UploadBox label="Upload Front Photo" file={frontPhoto} onChange={onFrontPhotoChange} />
        <UploadBox label="Upload Side Photo" file={sidePhoto} onChange={onSidePhotoChange} />
        <UploadBox label="Upload Back Photo" file={backPhoto} onChange={onBackPhotoChange} />
      </div>
    </>
  );
}

function UploadBox({
  label,
  file,
  onChange,
}: {
  label: string;
  file: File | null;
  onChange: (f: File | null) => void;
}) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="flex h-[70px] cursor-pointer items-center justify-center rounded-[8px] border border-dashed border-border-glass bg-surface-glass transition-colors hover:bg-white/50 px-4"
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => {
          const f = e.target.files?.[0] || null;
          onChange(f);
        }}
      />
      <div className="flex items-center gap-3 text-[14px] truncate w-full justify-center">
        <Image src="/icons/card.svg" alt="Card icon" width={34} height={34} />
        <span className="truncate">{file ? file.name : label}</span>
      </div>
    </div>
  );
}
