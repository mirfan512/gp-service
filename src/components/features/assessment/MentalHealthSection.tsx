import { FormTextArea, FormRadioGroup, FormSectionHeader } from "../../ui/form";
import { ASSESSMENT_QUESTIONS } from "@/src/lib/constants/assessment";
import { YesNo } from "@/src/lib/hooks/useAssessmentForm";

interface MentalHealthSectionProps {
  mh1: YesNo;
  onMh1Change: (v: YesNo) => void;
  mh2: YesNo;
  onMh2Change: (v: YesNo) => void;
}

export function MentalHealthSection({ mh1, onMh1Change, mh2, onMh2Change }: MentalHealthSectionProps) {
  return (
    <>
      <FormSectionHeader>Mental Health Screening</FormSectionHeader>
      <div className="mt-6 grid gap-6">
        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">
            {ASSESSMENT_QUESTIONS.MENTAL_HEALTH.DIAGNOSIS}
          </p>
          <FormRadioGroup value={mh1} onChange={onMh1Change} />
        </div>

        <div className="grid gap-2">
          <div className="text-[16px] text-text-gray">If yes, please provide details</div>
          <FormTextArea placeholder="" rows={3} />
        </div>

        <div className="flex items-start gap-6">
          <p className="text-[16px] leading-[1.6] text-text-gray">
            {ASSESSMENT_QUESTIONS.MENTAL_HEALTH.TREATMENT}
          </p>
          <FormRadioGroup value={mh2} onChange={onMh2Change} />
        </div>

        <div className="grid gap-2">
          <div className="text-[16px] text-text-gray">If yes, please specify</div>
          <FormTextArea placeholder="" rows={3} />
        </div>
      </div>
    </>
  );
}
