"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

interface FileUploadProps {
  label?: string;
  value?: File | string | null;
  onChange: (file: File | null) => void;
  className?: string;
  accept?: string;
  icon?: React.ReactNode;
  placeholderText?: string;
  helperText?: string;
}

export function FileUpload({
  label,
  value,
  onChange,
  className,
  accept,
  icon,
  placeholderText = "Upload Photo",
  helperText = "Drag and drop or click to upload",
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Determine preview URL
  let previewUrl = "";
  let fileName = "";
  if (value) {
    if (value instanceof File) {
      previewUrl = URL.createObjectURL(value);
      fileName = value.name;
    } else if (typeof value === "string") {
      previewUrl = value;
      fileName = value.substring(value.lastIndexOf("/") + 1);
    }
  }

  const isImage = value
    ? (value instanceof File
        ? value.type.startsWith("image/")
        : /\.(jpeg|jpg|gif|png|webp|svg)$/i.test(value))
    : false;

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label className="block text-[15px] font-medium" style={{ color: "var(--c-text)" }}>
          {label}
        </label>
      )}
      
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
        className={cn(
          "relative flex flex-col items-center justify-center w-full min-h-[160px] border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300 group p-4",
          isDragActive
            ? "border-[var(--c-primary)] bg-[var(--c-primary)]/5"
            : "border-gray-300 bg-[var(--c-surface)] hover:border-[var(--c-primary)]"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept || "image/*,application/pdf"}
          className="hidden"
          onChange={handleFileChange}
        />

        {previewUrl ? (
          <div className="flex flex-col items-center gap-2 w-full">
            {/* Image Preview if it's an image */}
            {isImage ? (
              <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={previewUrl}
                  alt="Upload Preview"
                  fill
                  sizes="96px"
                  className="object-cover"
                  unoptimized={previewUrl.startsWith("blob:")}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg">
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            
            <span className="text-[13px] text-center font-medium max-w-[250px] truncate" style={{ color: "var(--c-text)" }}>
              {fileName}
            </span>

            <button
              type="button"
              onClick={handleClear}
              className="px-3 py-1.5 text-[12px] font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 text-center">
            {/* Upload Icon - Matching the mockup */}
            <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-105 transition-transform duration-200">
              {icon ? (
                icon
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                  <path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h11a2 2 0 012 2v1m4 4h-8m8 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 10a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            
            <div className="space-y-1">
              <p className="text-[14px] font-semibold text-gray-500 group-hover:text-[var(--c-primary)] transition-colors">
                {placeholderText}
              </p>
              <p className="text-[11px] text-gray-400">
                {helperText}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
