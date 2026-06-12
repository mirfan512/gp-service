import { FormInput, FormRadioGroup, FormSectionHeader } from "../../ui/form";
import { ASSESSMENT_QUESTIONS } from "@/src/lib/constants/assessment";
import { YesNo } from "@/src/lib/hooks/useAssessmentForm";

interface MedicalHistorySectionProps {
  height: string;
  onHeightChange: (v: string) => void;
  weight: string;
  onWeightChange: (v: string) => void;
  qObesity: YesNo;
  onObesityChange: (v: YesNo) => void;
  conditionValues: YesNo[];
  onConditionChange: (idx: number, v: YesNo) => void;
}

export function MedicalHistorySection({
  height,
  onHeightChange,
  weight,
  onWeightChange,
  qObesity,
  onObesityChange,
  conditionValues,
  onConditionChange,
}: MedicalHistorySectionProps) {
  return (
    <>
      <FormSectionHeader>Medical History – Eligibility</FormSectionHeader>
      <div className="mt-6 grid gap-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <FormInput
            placeholder="Your height (cm)"
            value={height}
            onChange={(e) => onHeightChange(e.target.value)}
          />
          <FormInput
            placeholder="Your weight (kg)"
            value={weight}
            onChange={(e) => onWeightChange(e.target.value)}
          />
        </div>

        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">{ASSESSMENT_QUESTIONS.ELIGIBILITY.OBESITY}</p>
          <FormRadioGroup value={qObesity} onChange={onObesityChange} />
        </div>

        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">{ASSESSMENT_QUESTIONS.ELIGIBILITY.CONDITIONS}</p>
        </div>

        <div className="space-y-4">
          {ASSESSMENT_QUESTIONS.ELIGIBILITY.CONDITION_LABELS.map((label, idx) => (
            <div key={label} className="flex items-start gap-6">
              <p className="text-[16px] leading-[1.6] text-text-gray">{label}</p>
              <FormRadioGroup value={conditionValues[idx]} onChange={(v) => onConditionChange(idx, v)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
