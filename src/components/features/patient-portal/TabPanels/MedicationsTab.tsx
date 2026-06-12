import { Patient } from "@/src/store/services/patientsApi";
import { MedicationList } from "../Medications/MedicationList";
import { MeasurementsForm } from "../Measurements/MeasurementsForm";
import { ChartsSection } from "../Charts/ChartsSection";

interface MedicationsTabProps {
  patient: Patient | undefined;
}

export function MedicationsTab({ patient }: MedicationsTabProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Medications List */}
      <MedicationList />

      {/* Self-reported current medication notes */}
      {patient?.currentMedicationText && (
        <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Your Medication Notes (Self-Reported)
          </h3>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-600 italic">
            "{patient.currentMedicationText}"
          </div>
        </div>
      )}

      {/* Measurements Section */}
      <MeasurementsForm />

      {/* Charts Section */}
      <ChartsSection />
    </div>
  );
}
