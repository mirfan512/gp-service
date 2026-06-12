import { PatientProfile } from "./types";

export const MOCK_PATIENT_PROFILE: PatientProfile = {
  id: "1",
  name: "Mahmoud Alnatour",
  dob: "28-08-1999",
  email: "mahmoud.alnatour@example.com",
  mobile: "+20 109 035 2595",
  address: "10 Downing Street, London, UK",
  nhsGp: "Dr. Andrew Smith\nWarwick Road Surgery\nLiverpool\nL21 0SD\nthesurgery@nhs.net\n0114 237 9112",
  avatarUrl: "/images/avatar1.svg",
};

export const PORTAL_TABS = [
  "My Allergies",
  "Current Medications",
  "My Prescriptions",
  "Past Consultations",
  "Documents",
  "My Uploads",
];
