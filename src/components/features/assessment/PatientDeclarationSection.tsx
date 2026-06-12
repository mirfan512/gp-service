import { FormInput, FormSectionHeader, FormCheckbox } from "../../ui/form";
import { Button } from "../../ui/Button";

interface PatientDeclarationSectionProps {
  check1: boolean;
  onCheck1Change: (v: boolean) => void;
  check2: boolean;
  onCheck2Change: (v: boolean) => void;
  signature: string;
  onSignatureChange: (v: string) => void;
  date: string;
  onDateChange: (v: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function PatientDeclarationSection({
  check1,
  onCheck1Change,
  check2,
  onCheck2Change,
  signature,
  onSignatureChange,
  date,
  onDateChange,
  onSubmit,
  isSubmitting,
}: PatientDeclarationSectionProps) {
  return (
    <>
      <FormSectionHeader>Patient Declaration</FormSectionHeader>
      <div className="mt-6 space-y-4">
        <FormCheckbox
          checked={check1}
          onChange={(e: any) => onCheck1Change(e.target.checked)}
          label="I confirm the information I have provided is accurate to the best of my knowledge."
        />

        <FormCheckbox
          checked={check2}
          onChange={(e: any) => onCheck2Change(e.target.checked)}
          label="I confirm that I am over 18 years of age."
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <FormInput
          placeholder="Signature"
          value={signature}
          onChange={(e) => onSignatureChange(e.target.value)}
        />
        <FormInput
          placeholder="Date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          variant="submit"
          size="lg"
          className="w-full max-w-[400px] flex items-center justify-center gap-2"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Form"
          )}
        </Button>
      </div>
    </>
  );
}
