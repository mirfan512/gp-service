// src/lib/constants/navigation.ts

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "GP Consultations" },
  { href: "/ai-therapist", label: "AI Therapist" },
  { href: "/blood-tests", label: "Blood Tests" },
  { href: "/corporate", label: "Corporate" },
  { href: "/weight-loss", label: "Weight Loss Injections" },
  { href: "/contact", label: "Contact" },
  {href: "/faq", label: "FAQ"}
];

export const SERVICE_LINKS: NavLink[] = [
  { href: "/weight-loss", label: "Weight Loss" },
  { href: "/assessment", label: "Assessment" },
  { href: "/fit-note", label: "Fit Note" },
  { href: "/consultation-diary", label: "Consultation Diary" },
  { href: "/ai-therapist", label: "AI Therapist" },

];


export const WeightLossLinks: NavLink[] = [
  { href: "/weight-loss", label: "Weight Loss Injections" },
  { href: "/wegovy", label: "Wegovy" },
  { href: "/mounjaro", label: "Mounjaro" },
  { href: "/diet-exercise", label: "Diet and Exercise" },
  { href: "/short-assessment", label: "Weight Loss Injectable Medical Questionnaire" },
  // { href: "/prescription", label: "Weight Loss Injectable Prescription" },


];

export const NadInjectionLinks: NavLink[] = [
  { href: "/nad-injection", label: "NAD+ Injections" },
  { href: "/nad-injection/medical-questionnaire", label: "Medical Questionnaire" },
];
