import { Appointment, DaySchedule, InjectionRequest } from "./types";

export const MOCK_SCHEDULE: DaySchedule[] = [
  {
    date: "2026-01-05",
    slots: [
      {
        period: "0900-1300",
        booked: 10,
        total: 20,
        appointments: [
          { id: "1", time: "0900-0912", patientName: "John Smith", type: "Consultation", patientId: "john-smith" },
          { id: "2", time: "0912-0924", patientName: "Gurpal Singh", type: "Consultation", patientId: "gurpal-singh" },
          { id: "3", time: "0924-0936", patientName: "Rupert Anthony", type: "Consultation", patientId: "rupert-anthony" },
          { id: "4", time: "0936-1000", patientName: "Review Weight Loss Injections", type: "Review" }, // Non-clickable maybe?
        ],
      },
    ],
  },
];

export const MOCK_INJECTIONS: InjectionRequest[] = [
  { id: "1", name: "WEGOVY", dose: "2.5MG", date: "01/12/2025", status: "ISSUED" },
  { id: "2", name: "WEGOVY", dose: "5MG", date: "31/12/2025", status: "REQUESTED" },
];
