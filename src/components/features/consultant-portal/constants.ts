import { TabKey } from "./types";

export const CONSULTATION_TABS: TabKey[] = [
  "Current Consultation",
  "Allergies",
  "Medical Conditions",
  "Current Medications",
  "Past Medications",
  "Operations",
  "Patient Uploads",
  "Documents",
  "Family History",
];

export const MOCK_PATIENT: any = { 
  id: "p1",
  name: "Payal Singh",
  address: "21 Princes Street, Roby, L36 9DA",
  dob: "20-08-1989",
  email: "inf@gmail.com",
  mobile: "+92-3040532318",
  avatarUrl: "/images/patient-demo.png", // Assuming existence or placeholder
  isIdVerified: true,
  hasConsent: true,
  nhsGpDetails: {
    surgery: "The Lipton Surgery",
    doctor: "Dr. Maha Ahmad",
    address: "22 Liverpool Road, L32 50R",
    email: "surgery@nhs.net",
    phone: "0113 273 4225",
  },
};

export const PREVIOUS_CONSULTATIONS = [
  { id: "c1", doctorName: "Dr Gurjeet", date: "November 11, 2025" },
  { id: "c2", doctorName: "Dr John", date: "September 20, 2025" },
  { id: "c3", doctorName: "Dr Ali", date: "June 20, 2025" },
];

export const ACTION_BUTTONS = [
  "Issue Fit Note",
  "Share Notes with Patient",
  "Share Notes with GP",
  "Issue Prescription",
  "Generate Open Referral",
  "Patient Support Letter",
];
