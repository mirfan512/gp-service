import { Patient } from "@/src/store/services/patientsApi";

interface AllergiesTabProps {
  patient: Patient | undefined;
}

export function AllergiesTab({ patient }: AllergiesTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
      {/* Left: Allergies & Conditions */}
      <div className="space-y-8">
        {/* Allergies Card */}
        <div className="bg-white rounded-[20px] shadow-sm p-6 border border-red-100/50">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="p-2 rounded-lg bg-red-50 text-red-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </span>
            Known Allergies
          </h3>
          {patient?.allergies && patient.allergies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {patient.allergies.map((allergy, idx) => (
                <span key={idx} className="bg-red-50 text-red-700 border border-red-200 rounded-xl px-4 py-2 font-bold text-sm">
                  {allergy}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No known drug or environmental allergies recorded.</p>
          )}
        </div>

        {/* Medical Conditions Card */}
        <div className="bg-white rounded-[20px] shadow-sm p-6 border border-blue-100/50">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="p-2 rounded-lg bg-blue-50 text-blue-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            Medical Conditions
          </h3>
          {patient?.medicalConditions && patient.medicalConditions.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {patient.medicalConditions.map((condition, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-700 border border-blue-200 rounded-xl px-4 py-2 font-bold text-sm">
                  {condition}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">No active medical conditions recorded.</p>
          )}
        </div>
      </div>

      {/* Right: Clinical History & Details */}
      <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-4">
          <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Clinical History
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Past Medical History</h4>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-700 min-h-[60px]">
              {patient?.pastMedicalHistory || "No past medical history recorded."}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Recent Operations & Procedures</h4>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-700 min-h-[60px]">
              {patient?.operations || "No recent operations or surgical procedures recorded."}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Family Medical History</h4>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-sm font-semibold text-gray-700 min-h-[60px]">
              {patient?.familyHistory || "No significant family medical history recorded."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
