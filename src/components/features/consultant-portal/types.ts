export interface Patient {
  id: string;
  name: string;
  address: string;
  dob: string;
  email: string;
  mobile: string;
  avatarUrl: string;
  isIdVerified: boolean;
  hasConsent: boolean;
  nhsGpDetails: {
    surgery: string;
    doctor: string;
    address: string;
    email: string;
    phone: string;
  };
}

export interface Consultation {
  id: string;
  date: string;
  doctorName: string;
  diagnosis: string;
  history: string;
  plan: string;
  privateNotes: string;
  outcome: string;
}

export interface ConsultationHistoryItem {
  id: string;
  doctorName: string;
  date: string;
}

export type TabKey =
  | "Current Consultation"
  | "Allergies"
  | "Medical Conditions"
  | "Current Medications"
  | "Past Medications"
  | "Operations"
  | "Patient Uploads"
  | "Documents"
  | "Family History";
