// src/lib/constants/wegovy.ts



export const WEGOVY_BENEFITS = [
  {
    title: "Clinically Proven",
    description: "FDA-approved weight loss medication with proven effectiveness",
    icon: "/icons/clinical.svg",
  },
  {
    title: "Easy to Use",
    description: "Simple once-weekly injection with clear instructions",
    icon: "/icons/easy.svg",
  },
  {
    title: "Medical Support",
    description: "Ongoing guidance from qualified healthcare professionals",
    icon: "/icons/support.svg",
  },
  {
    title: "Sustainable Results",
    description: "Long-term weight management with lifestyle integration",
    icon: "/icons/results.svg",
  },
];

export const WEGOVY_STEPS = [
  {
    step: "1",
    title: "Complete Assessment",
    description: "Answer a few simple questions about your health and weight loss goals",
  },
  {
    step: "2",
    title: "GP Consultation",
    description: "Speak with a qualified GP who will review your medical history",
  },
  {
    step: "3",
    title: "Get Prescription",
    description: "Receive your prescription if Wegovy is suitable for you",
  },
  {
    step: "4",
    title: "Start Treatment",
    description: "Begin your weight loss journey with ongoing medical support",
  },
];

export const WEGOVY_ELIGIBILITY = [
  "BMI of 30 or above (or 27 with weight-related conditions)",
  "Age 18 or above",
  "No contraindications to GLP-1 medications",
  "Committed to lifestyle changes alongside treatment",
];

export const WEGOVY_TITRATION_SCHEDULE = [
  {
    weeks: "Weeks 1-4",
    dose: "0.25mg",
    color: "#0b7e73",
    subText: "Starting dose"
  },
  {
    weeks: "Weeks 5-8",
    dose: "0.5mg",
    color: "#d81e5b",
    subText: "Increase dose"
  },
  {
    weeks: "Weeks 9-12",
    dose: "1mg",
    color: "#ef8300",
    subText: "Increase dose"
  },
  {
    weeks: "Weeks 13-16",
    dose: "1.7mg",
    color: "#007cc3",
    subText: "Maintenance dose (some patients will stay at this dose)"
  },
  {
    weeks: "Month 5+",
    dose: "2.4mg",
    color: "#1d4289",
    subText: "Maintenance dose"
  }
];

export const WEGOVY_PRICING_OPTIONS = [
  { value: "0.25mg", price: "£115" },
  { value: "0.5mg", price: "£120" },
  { value: "1mg", price: "£150" },
  { value: "1.7mg", price: "£180" },
  { value: "2.4mg", price: "£210" },
];

export const WEGOVY_DOSAGE_INFO = {
  frequency: "Once weekly",
  method: "Self-administered injection",
  duration: "Gradual dose increases over 16-20 weeks",
  maintenance: "Continued at effective dose",
};
