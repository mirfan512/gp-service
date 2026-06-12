import { FormTextArea, FormRadioGroup, FormSectionHeader } from "../../ui/form";
import { ASSESSMENT_QUESTIONS } from "@/src/lib/constants/assessment";
import { YesNo } from "@/src/lib/hooks/useAssessmentForm";

interface MedicationSectionProps {
  cm1: YesNo;
  onCm1Change: (v: YesNo) => void;
  cm2: YesNo;
  onCm2Change: (v: YesNo) => void;
}

export function MedicationSection({ cm1, onCm1Change, cm2, onCm2Change }: MedicationSectionProps) {
  return (
    <>
      <FormSectionHeader>Current Medication</FormSectionHeader>
      <div className="mt-6 grid gap-6">
        <div className="grid gap-2">
          <div className="text-[16px] text-text-gray">
            {ASSESSMENT_QUESTIONS.MEDICATION.LIST}
          </div>
          <FormTextArea placeholder="" rows={3} />
        </div>

        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">
            {ASSESSMENT_QUESTIONS.MEDICATION.INSULIN}
          </p>
          <FormRadioGroup value={cm1} onChange={onCm1Change} />
        </div>

        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">
            {ASSESSMENT_QUESTIONS.MEDICATION.WEIGHT_LOSS}
          </p>
          <FormRadioGroup value={cm2} onChange={onCm2Change} />
        </div>
      </div>
    </>
  );
}
