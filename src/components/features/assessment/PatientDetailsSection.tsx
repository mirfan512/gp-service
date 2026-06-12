import { FormInput, FormSectionHeader } from "../../ui/form";

interface PatientDetailsSectionProps {
  fullName: string;
  onFullNameChange: (v: string) => void;
  dob: string;
  onDobChange: (v: string) => void;
  address: string;
  onAddressChange: (v: string) => void;
  postcode: string;
  onPostcodeChange: (v: string) => void;
  phoneNumber: string;
  onPhoneNumberChange: (v: string) => void;
  email: string;
  onEmailChange: (v: string) => void;
}

export function PatientDetailsSection({
  fullName,
  onFullNameChange,
  dob,
  onDobChange,
  address,
  onAddressChange,
  postcode,
  onPostcodeChange,
  phoneNumber,
  onPhoneNumberChange,
  email,
  onEmailChange,
}: PatientDetailsSectionProps) {
  return (
    <>
      <FormSectionHeader>Patient Details</FormSectionHeader>
      <div className="mt-5 grid gap-5">
        <div className="grid gap-4 lg:grid-cols-3">
          <FormInput
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => onFullNameChange(e.target.value)}
          />
          <FormInput
            placeholder="Date Of Birth (dd/mm/yyyy)"
            value={dob}
            onChange={(e) => onDobChange(e.target.value)}
          />
          <FormInput
            placeholder="Address"
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <FormInput
            placeholder="Postcode"
            value={postcode}
            onChange={(e) => onPostcodeChange(e.target.value)}
          />
          <FormInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => onPhoneNumberChange(e.target.value)}
          />
          <FormInput
            placeholder="Email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
