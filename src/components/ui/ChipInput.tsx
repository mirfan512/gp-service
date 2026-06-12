"use client";

import React, { useState } from "react";
import { cn } from "@/src/lib/utils";

interface ChipInputProps {
  label: string;
  placeholder?: string;
  value: string[];
  onChange: (tags: string[]) => void;
  className?: string;
  disabled?: boolean;
}

export function ChipInput({
  label,
  placeholder = "Enter name...",
  value = [],
  onChange,
  className,
  disabled = false,
}: ChipInputProps) {
  const [inputValue, setInputValue] = useState("");

  const addTag = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent standard form submission
      addTag();
    }
  };

  const removeTag = (indexToRemove: number) => {
    onChange(value.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={cn("w-full space-y-2.5", className)}>
      <label className="block text-[15px] font-medium" style={{ color: "var(--c-text)" }}>
        {label}
      </label>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="flex h-[50px] w-full rounded-xl border-[1.5px] border-[#DEDEDE] bg-[var(--c-surface)] px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[var(--c-primary)] disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
          style={{ color: "var(--c-text)" }}
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addTag();
          }}
          disabled={disabled || !inputValue.trim()}
          className="h-[50px] px-5 rounded-xl text-white font-semibold transition-all hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none"
          style={{ background: "#A3B094" }}
        >
          Add
        </button>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {value.map((tag, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium text-white transition-all hover:scale-[1.02]"
              style={{ background: "#A3B094" }}
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => removeTag(index)}
                disabled={disabled}
                className="w-4 h-4 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 transition-colors text-white font-bold"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
