import React from "react";
import { FormRadioGroup } from "@/src/components/ui/form";

import { NadConditions, YesNo } from "@/src/lib/hooks/useNadAssessmentForm";

interface MedicalHistoryProps {
  values: NadConditions;
  onChange: (key: keyof NadConditions, value: YesNo) => void;
}

export const MedicalHistory: React.FC<MedicalHistoryProps> = ({
  values,
  onChange,
}) => {
  const conditions: { label: string; key: keyof NadConditions }[] = [
    { label: "Heart disease (including arrhythmias)", key: "heartDisease" },
    { label: "High Blood pressure (uncontrolled)", key: "highBloodPressure" },
    { label: "Diabetes (Type 1 or Type 2)", key: "diabetes" },
    { label: "Liver disease", key: "liverDisease" },
    { label: "Kidney disease", key: "kidneyDisease" },
    { label: "Autoimmune disease", key: "autoimmuneDisease" },
    { label: "Neurological condition (e.g. epilepsy, MS)", key: "neurological" },
    { label: "Cancer (current or past)", key: "cancer" },
    { label: "Psychiatric illness (psychosis or schizophrenia)", key: "psychiatric" },
    { label: "Gout or high uric acid levels", key: "gout" },
    { label: "Mitochondrial disorders", key: "mitochondrial" }
  ];

  return (
    <div className="space-y-6 mt-12">
      <p className="font-bold text-gray-800 text-sm mb-6">
        Have you ever been diagnosed with any of the following conditions? (Please tick Yes or No for each):
      </p>

      <div className="space-y-4">
        {conditions.map((item) => (
          <div key={item.key} className="flex justify-between items-center gap-4 border-b border-gray-50 pb-2">
            <span className="text-sm text-gray-600 flex-1">{item.label}</span>
            <FormRadioGroup
              value={values[item.key]}
              onChange={(v) => onChange(item.key, v)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
