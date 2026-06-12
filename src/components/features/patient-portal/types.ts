export interface PatientProfile {
  id: string;
  name: string;
  dob: string;
  email: string;
  mobile: string;
  address: string;
  nhsGp: string;
  avatarUrl?: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  status: 'Active' | 'Inactive' | 'Issued';
  frequency: string;
  dateIssued: string;
  action: string;
}

export interface Measurement {
  height: string;
  weight: string;
  bmi: string;
  date: string;
}
