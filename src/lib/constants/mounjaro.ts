// src/lib/constants/mounjaro.ts

export const MOUNJARO_TITRATION_SCHEDULE = [
  {
    weeks: "Weeks 1-4",
    dose: "2.5mg",
    color: "#2D2D2D",
    subText: "Starting dose"
  },
  {
    weeks: "Weeks 5-8",
    dose: "5mg",
    color: "#4A2E76",
    subText: "Increase dose"
  },
  {
    weeks: "Weeks 9-12",
    dose: "7.5mg",
    color: "#007A5E",
    subText: "Increase dose"
  },
  {
    weeks: "Weeks 13-16",
    dose: "10mg",
    color: "#B4005E",
    subText: "Increase dose"
  },
  {
    weeks: "Weeks 17-20",
    dose: "12.5mg",
    color: "#005EB8",
    subText: "Increase dose"
  },
  {
    weeks: "Month 6+",
    dose: "15mg",
    color: "#E20000",
    subText: "Maintenance dose"
  }
];

export const MOUNJARO_PRICING_OPTIONS = [
  { value: "2.5mg", price: "£180" },
  { value: "5mg", price: "£210" },
  { value: "7.5mg", price: "£270" },
  { value: "10mg", price: "£295" },
  { value: "12.5mg", price: "£325" },
  { value: "15mg", price: "£345" },
];

export const MOUNJARO_BENEFITS = [
  {
    title: "Dual Action",
    description: "Targets GLP-1 and GIP receptors for effective weight loss",
    icon: "/icons/dual.svg",
  },
  {
    title: "Once Weekly",
    description: "Simple weekly injection routine",
    icon: "/icons/easy.svg",
  },
  {
    title: "Visible Results",
    description: "Clinically proven to help achieve weight loss goals",
    icon: "/icons/results.svg",
  },
  {
    title: "GP Supervised",
    description: "Receive ongoing medical assessment and support",
    icon: "/icons/support.svg",
  },
];
