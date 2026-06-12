export const ASSESSMENT_QUESTIONS = {
  ELIGIBILITY: {
    OBESITY: "Have you been diagnosed with obesity (BMI ≥ 30), or BMI ≥ 27 with comorbidities?",
    CONDITIONS: "Do you have any of the following conditions? (Tick all that apply)",
    CONDITION_LABELS: [
      "Type 2 Diabetes",
      "Hypertension",
      "High Cholesterol",
      "Sleep Apnoea",
      "Polycystic Ovary Syndrome (PCOS)",
      "Cardiovascular Disease",
    ]
  },
  MENTAL_HEALTH: {
    DIAGNOSIS: "Have you ever been diagnosed with any mental health condition (e.g. depression, anxiety, eating disorder)?",
    TREATMENT: "Are you currently receiving treatment or taking medication for any mental health condition?",
  },
  CONTRAINDICATIONS: [
    { id: "pregnancy", label: "Are you pregnant, planning pregnancy, or breastfeeding?" },
    { id: "pancreatitis", label: "Do you have a history of pancreatitis?" },
    { id: "thyroid", label: "Do you have thyroid cancer or MEN2 syndrome in your family?" },
    { id: "gi_disease", label: "Do you have severe gastrointestinal disease?" },
    { id: "allergy", label: "Have you ever had an allergic reaction to GLP-1 medications (e.g. Wegovy, Saxenda, Mounjaro)?" },
  ],
  MEDICATION: {
    LIST: "Please list all medications you are currently taking",
    INSULIN: "Are you taking insulin or sulfonylureas?",
    WEIGHT_LOSS: "Are you taking any weight-loss medications currently?",
  },
  LIFESTYLE: {
    PROGRAMMES: "Have you previously attempted structured weight-loss programmes?",
    DIET_PLAN: "Are you currently following any diet or exercise plan?",
  },
  SYMPTOMS: [
    { id: "abdominal_pain", label: "Do you experience unexplained abdominal pain?" },
    { id: "nausea", label: "Do you have persistent vomiting or nausea?" },
    { id: "weight_loss", label: "Any recent unexplained weight loss?" },
  ]
};

export const PATIENT_PHOTO_REQUIREMENTS = [
  "Front view – minimally dressed (sports bra/shorts or boxers/shorts). Abdomen and legs visible. Face optional.",
  "Side view – same clothing guidance.",
  "Back view – same clothing guidance.",
  "Photos must be recent (taken within the last 7 days)."
];
