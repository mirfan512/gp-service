import React from "react";
import { FormInput } from "@/src/components/ui/form";

interface PatientDetailsProps {
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

export const PatientDetails: React.FC<PatientDetailsProps> = ({
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
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-[#a3b094] font-primary font-bold text-2xl text-center mb-8">
        Patient Details
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FormInput 
          placeholder="Full Name" 
          value={fullName}
          onChange={(e) => onFullNameChange(e.target.value)}
          className="bg-[#F8F9FA] border-[#EDB984]" 
        />
        <FormInput 
          placeholder="Date of Birth (dd/mm/yyyy)" 
          value={dob}
          onChange={(e) => onDobChange(e.target.value)}
          className="bg-[#F8F9FA] border-[#EDB984]" 
        />
        <FormInput 
          placeholder="Address" 
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          className="bg-[#F8F9FA] border-[#EDB984]" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FormInput 
          placeholder="Postcode" 
          value={postcode}
          onChange={(e) => onPostcodeChange(e.target.value)}
          className="bg-[#F8F9FA] border-[#EDB984]" 
        />
        <FormInput 
          placeholder="Phone Number" 
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          className="bg-[#F8F9FA] border-[#EDB984]" 
        />
        <FormInput 
          placeholder="Email" 
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="bg-[#F8F9FA] border-[#EDB984]" 
        />
      </div>
    </div>
  );
};
