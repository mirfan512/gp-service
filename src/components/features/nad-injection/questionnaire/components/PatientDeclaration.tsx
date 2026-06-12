import React from "react";
import { FormCheckbox } from "@/src/components/ui/form";

interface PatientDeclarationProps {
  accurate: boolean;
  onAccurateChange: (v: boolean) => void;
  age: boolean;
  onAgeChange: (v: boolean) => void;
  signature: string;
  onSignatureChange: (v: string) => void;
  date: string;
  onDateChange: (v: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const PatientDeclaration: React.FC<PatientDeclarationProps> = ({
  accurate,
  onAccurateChange,
  age,
  onAgeChange,
  signature,
  onSignatureChange,
  date,
  onDateChange,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <div className="space-y-6 mt-16">
      <h3 className="text-[#a3b094] font-primary font-bold text-2xl text-center mb-8">
        Patient Declaration
      </h3>

      <div className="space-y-4 max-w-2xl mx-auto">
        <FormCheckbox
          label="I confirm the information I have provided is accurate to the best of my knowledge."
          checked={accurate}
          onChange={(e) => onAccurateChange(e.target.checked)}
        />
        <FormCheckbox
          label="I confirm that I am over 18 years of age."
          checked={age}
          onChange={(e) => onAgeChange(e.target.checked)}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        <div className="border-b border-gray-300">
          <input
            type="text"
            placeholder="Signature"
            value={signature}
            onChange={(e) => onSignatureChange(e.target.value)}
            className="w-full h-[40px] px-0 text-sm outline-none bg-transparent font-handwriting rounded-[6px]"
          />
        </div>
        <div className="border-b border-gray-300">
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full h-[40px] px-0 text-sm outline-none bg-transparent rounded-[6px]"
          />
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button 
          onClick={onSubmit}
          disabled={isSubmitting}
          className="bg-[#A3B094] text-white px-16 py-3 rounded-[6px] font-bold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "SUBMIT FORM"}
        </button>
      </div>
    </div>
  );
};
