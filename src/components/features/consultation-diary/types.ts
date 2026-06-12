export type Appointment = {
  id: string;
  time: string;
  patientName: string;
  type: "Consultation" | "Review";
  patientId?: string; // If linking to patient portal
};

export type DaySchedule = {
  date: string; // YYYY-MM-DD
  slots: {
    period: string; // e.g., "0900-1300"
    booked: number;
    total: number;
    appointments: Appointment[];
  }[];
};

export type InjectionRequest = {
  id: string;
  name: string;
  dose: string;
  date: string;
  status: "ISSUED" | "REQUESTED";
};
