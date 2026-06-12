import { Consultation } from "../types";

type FormState = Omit<Consultation, "id" | "date" | "doctorName">;

interface FormProps {
  formData: FormState;
  onChange: (field: keyof FormState, value: string) => void;
}

const TextAreaField = ({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) => (
  <div className="mb-6 lg:mb-8">
    <label className="block text-sm lg:text-base xl:text-lg font-semibold text-gray-700 mb-2 lg:mb-3">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full h-32 lg:h-40 p-4 lg:p-5 rounded-xl border border-gray-200 bg-gray-50 text-sm lg:text-base xl:text-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-portal-action-primary)] focus:border-transparent resize-y"
    />
  </div>
);

export const ConsultationForm = ({ formData, onChange }: FormProps) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8">
      <TextAreaField
        label="Diagnosis"
        value={formData.diagnosis}
        onChange={(v) => onChange("diagnosis", v)}
        placeholder="Enter diagnosis..."
      />

      <TextAreaField
        label="Patient History / Complaint"
        value={formData.history}
        onChange={(v) => onChange("history", v)}
        placeholder="Enter patient history..."
      />

      <TextAreaField
        label="Plan"
        value={formData.plan}
        onChange={(v) => onChange("plan", v)}
        placeholder="Enter treatment plan..."
      />

      <TextAreaField
        label="Private Notes ▾"
        value={formData.privateNotes}
        onChange={(v) => onChange("privateNotes", v)}
        placeholder="Notes visible only to you..."
      />
    </div>
  );
};
