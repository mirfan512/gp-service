import { Patient } from "@/src/store/services/patientsApi";

interface ConsultationsTabProps {
  patient: Patient | undefined;
}

export function ConsultationsTab({ patient }: ConsultationsTabProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Consultation History
          </h3>
          <button className="bg-[var(--c-portal-book-btn)] hover:opacity-90 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm uppercase tracking-wider">
            Book Appointment
          </button>
        </div>

        {/* Consultation list */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm shrink-0">
                <svg className="w-6 h-6 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-base">Video Consultation with NHS GP</div>
                <div className="text-xs font-semibold text-gray-400 mt-0.5">GP: {patient?.nhsGp?.practiceName || "Dr. Andrew Smith"}</div>
                <div className="text-sm font-medium text-gray-600 mt-2">
                  Review weight management goals. Patient is doing well on Wegovy 2.5mg. Discussed side effects, recommended continued hydration.
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between shrink-0 gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                Completed
              </span>
              <div className="text-xs text-gray-400 font-bold">
                12/06/2026 - 11:30
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm shrink-0">
                <svg className="w-6 h-6 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-base">Initial Digital Assessment Intake</div>
                <div className="text-xs font-semibold text-gray-400 mt-0.5">Clinical Coordinator</div>
                <div className="text-sm font-medium text-gray-600 mt-2">
                  Consent forms signed. ID documents uploaded. Medical questionnaire successfully matched criteria for Wegovy Weight Management program.
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between shrink-0 gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                Completed
              </span>
              <div className="text-xs text-gray-400 font-bold">
                01/06/2026 - 12:25
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
