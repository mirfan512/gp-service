import React, { useRef, useEffect } from "react";

interface OtpInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
  length?: number;
}

export function OtpInput({
  value,
  onChange,
  disabled = false,
  length = 6,
}: OtpInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus the first input on mount if it's not disabled
    if (!disabled) {
      inputsRef.current[0]?.focus();
    }
  }, [disabled]);

  const handleChange = (index: number, val: string) => {
    // Only allow single digit numeric values
    const cleanedVal = val.replace(/\D/g, "");
    if (cleanedVal.length <= 1) {
      const newValue = [...value];
      newValue[index] = cleanedVal;
      onChange(newValue);

      // Auto-focus next input if a digit was entered
      if (cleanedVal && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        // Focus previous input and clear it
        inputsRef.current[index - 1]?.focus();
        const newValue = [...value];
        newValue[index - 1] = "";
        onChange(newValue);
      } else if (value[index]) {
        // Clear current input
        const newValue = [...value];
        newValue[index] = "";
        onChange(newValue);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (disabled) return;

    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.slice(0, length).split("");
      const newValue = [...value];
      for (let i = 0; i < length; i++) {
        newValue[i] = digits[i] || "";
      }
      onChange(newValue);

      // Focus the last filled input or the last input
      const focusIndex = Math.min(digits.length, length - 1);
      inputsRef.current[focusIndex]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-14 h-14 text-center text-[24px] font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:border-[#A3B094] focus:ring-2 focus:ring-[#A3B094]/20"
          style={{
            background: "var(--c-surface)",
            border: "1.5px solid var(--c-border)",
            color: "var(--c-text)",
          }}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
