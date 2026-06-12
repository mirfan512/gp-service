import { FormRadioGroup, FormSectionHeader } from "../../ui/form";
import { ASSESSMENT_QUESTIONS } from "@/src/lib/constants/assessment";
import { YesNo } from "@/src/lib/hooks/useAssessmentForm";

interface SymptomsSectionProps {
  values: YesNo[];
  onChange: (index: number, v: YesNo) => void;
}

export function SymptomsSection({ values, onChange }: SymptomsSectionProps) {
  return (
    <>
      <FormSectionHeader>Symptoms & Red Flags</FormSectionHeader>
      <div className="mt-6 grid gap-5">
        {ASSESSMENT_QUESTIONS.SYMPTOMS.map((q, idx) => (
          <div key={q.id} className="flex items-start gap-6">
            <p className="text-[16px] leading-[1.6] text-text-gray">
              {q.label}
            </p>
            <FormRadioGroup value={values[idx]} onChange={(v) => onChange(idx, v)} />
          </div>
        ))}
      </div>
    </>
  );
}
