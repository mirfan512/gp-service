import React from "react";
import { FormCheckbox } from "@/src/components/ui/form";

interface TreatmentReasonProps {
  selectedReasons: string[];
  onReasonsChange: (reasons: string[]) => void;
  otherReason: string;
  onOtherReasonChange: (v: string) => void;
}

export const TreatmentReason: React.FC<TreatmentReasonProps> = ({
  selectedReasons,
  onReasonsChange,
  otherReason,
  onOtherReasonChange,
}) => {
  const reasons = [
    "Fatigue / low energy",
    "Brain fog / poor concentration",
    "Anti-ageing / longevity support",
    "Metabolic health support",
    "Weight management support",
    "Recovery from burnout or stress",
    "Athletic performance / recovery"
  ];

  const handleToggle = (reason: string) => {
    onReasonsChange(
      selectedReasons.includes(reason)
        ? selectedReasons.filter(r => r !== reason)
        : [...selectedReasons, reason]
    );
  };

  return (
    <div className="space-y-6 mt-12">
      <h3 className="text-[#a3b094] font-primary font-bold text-2xl text-left">
        Reason for Treatment
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        Please select the main reason you are seeking NAD+ injections (you may select more than one):
      </p>

      <div className="space-y-3 pl-4">
        {reasons.map((reason) => (
          <FormCheckbox
            key={reason}
            label={reason}
            checked={selectedReasons.includes(reason)}
            onChange={() => handleToggle(reason)}
          />
        ))}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Other (Please list)"
            value={otherReason}
            onChange={(e) => onOtherReasonChange(e.target.value)}
            className="w-full max-w-md h-[40px] rounded-[6px] px-3 text-[12px] outline-none border border-gray-200 bg-[#F8F9FA]"
          />
        </div>
      </div>
    </div>
  );
};
