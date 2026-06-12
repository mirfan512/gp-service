import { FormTextArea, FormRadioGroup, FormSectionHeader } from "../../ui/form";
import { ASSESSMENT_QUESTIONS } from "@/src/lib/constants/assessment";
import { YesNo } from "@/src/lib/hooks/useAssessmentForm";

interface LifestyleSectionProps {
  ls1: YesNo;
  onLs1Change: (v: YesNo) => void;
  ls1Details: string;
  onLs1DetailsChange: (v: string) => void;
  ls2: YesNo;
  onLs2Change: (v: YesNo) => void;
  ls2Details: string;
  onLs2DetailsChange: (v: string) => void;
}

export function LifestyleSection({
  ls1,
  onLs1Change,
  ls1Details,
  onLs1DetailsChange,
  ls2,
  onLs2Change,
  ls2Details,
  onLs2DetailsChange,
}: LifestyleSectionProps) {
  return (
    <>
      <FormSectionHeader>Lifestyle & Previous Weight Management</FormSectionHeader>
      <div className="mt-6 grid gap-6">
        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">
            {ASSESSMENT_QUESTIONS.LIFESTYLE.PROGRAMMES}
          </p>
          <FormRadioGroup value={ls1} onChange={onLs1Change} />
        </div>

        {ls1 === "yes" && (
          <div className="grid gap-2">
            <div className="text-[16px] text-text-gray">If yes, describe:</div>
            <FormTextArea
              placeholder="Please describe details of previous programmes..."
              rows={3}
              value={ls1Details}
              onChange={(e) => onLs1DetailsChange(e.target.value)}
            />
          </div>
        )}

        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">
            {ASSESSMENT_QUESTIONS.LIFESTYLE.DIET_PLAN}
          </p>
          <FormRadioGroup value={ls2} onChange={onLs2Change} />
        </div>

        {ls2 === "yes" && (
          <div className="grid gap-2">
            <div className="text-[16px] text-text-gray">If yes, describe:</div>
            <FormTextArea
              placeholder="Please describe details of your diet and exercise plan..."
              rows={3}
              value={ls2Details}
              onChange={(e) => onLs2DetailsChange(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
}
