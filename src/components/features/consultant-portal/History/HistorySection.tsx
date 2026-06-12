import { ConsultationHistoryItem } from "../types";

interface HistoryProps {
  previousConsultations: ConsultationHistoryItem[];
}

export const HistorySection = ({ previousConsultations }: HistoryProps) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {/* Previous Consultations */}
        <div>
          <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-4">Previous Consultations</h3>
          <ul className="space-y-2 lg:space-y-3">
            {previousConsultations.map((item) => (
              <li key={item.id} className="text-sm lg:text-base xl:text-lg text-gray-600 flex items-center gap-2">
                <span className="font-medium text-gray-800">{item.doctorName}</span>
                <span className="text-gray-400">-</span>
                <span>{item.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Patient Questions / Notes */}
        <div>
          <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-4">Patient Questions / Notes</h3>
          <p className="text-sm lg:text-base xl:text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 lg:p-6 rounded-lg border border-gray-100">
            Dr. Maha Ahmad, Consultant Family Medicine and Geriatric Medicine - Director of Family Medicine and Primary Care Services, holds a Master's degree in Rheumatology from Manchester, a Diploma in Geriatric Medicine from London, UK, and a University Degree in Palliative Medicine from Teesside University, England, in addition to being a member of the Royal College of Surgeons.
          </p>
        </div>
      </div>

      {/* Action Buttons for Consultation State */}
      <div className="flex justify-end gap-3 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-100">
        <button className="bg-[var(--color-portal-action-primary)] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-xl text-sm lg:text-base xl:text-lg font-semibold hover:opacity-90">
          Start Consultation
        </button>
        <button className="bg-[var(--color-portal-tab-inactive-bg)] hover:opacity-80 text-white px-8 lg:px-10 py-2.5 lg:py-3 rounded-xl text-sm lg:text-base xl:text-lg font-bold transition-all shadow-sm">
          End Consultation
        </button>
      </div>
    </div>
  );
};
