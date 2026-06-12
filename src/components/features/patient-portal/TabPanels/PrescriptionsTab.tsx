import { Patient } from "@/src/store/services/patientsApi";

interface PrescriptionsTabProps {
  patient: Patient | undefined;
}

export function PrescriptionsTab({ patient }: PrescriptionsTabProps) {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100 animate-fadeIn">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Prescription History
      </h3>

      {patient?.medications && patient.medications.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wider pb-4">
                <th className="py-3 px-4">Date Issued</th>
                <th className="py-3 px-4">Prescription</th>
                <th className="py-3 px-4">Dosage</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Directions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {patient.medications.map((med: any, idx: number) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-500">{new Date(med.createdAt || Date.now()).toLocaleDateString("en-GB")}</td>
                  <td className="py-4 px-4 font-bold text-gray-800">{med.name || "Medication"}</td>
                  <td className="py-4 px-4 font-medium text-gray-600">{med.dosage || "-"}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${med.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                      {med.status || "Issued"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">{med.frequency || "As directed"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
            <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-500 font-medium mb-1">No Prescriptions Found</p>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">You do not have any digital prescriptions on record. Once our GPs issue a prescription, it will appear here.</p>
        </div>
      )}
    </div>
  );
}
