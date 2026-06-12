import { PatientProfile } from "../types";

interface PatientHeaderCardProps {
  patient: PatientProfile;
}

export const PatientHeaderCard = ({ patient }: PatientHeaderCardProps) => {
  return (
    <div className="bg-white rounded-[20px] shadow-sm p-6 mb-8 flex items-center gap-6">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 relative shadow-inner bg-gray-50">
          <img
            src={patient.avatarUrl || "/images/dr4.svg"}
            alt={patient.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-xs text-gray-400 mt-2 font-medium">Patient</p>
      </div>

      <div className="flex-1">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">{patient.name}</h2>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{patient.address}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 text-sm">
          <div>
            <span className="font-semibold text-gray-700 block">{patient.dob}</span>
            <span className="block text-xs text-gray-400 mb-1">D.O.B</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 block">{patient.email}</span>
            <span className="block text-xs text-gray-400 mb-1">Email Address</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 block">{patient.mobile}</span>
            <span className="block text-xs text-gray-400 mb-1">Mobile Number</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700 block">24/11/2026 - 13:30</span>
            <span className="block text-xs text-gray-400 mb-1">Last Consultation</span>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-gray-700 leading-tight">
              {patient.nhsGp.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </div>
            <span className="block text-xs text-gray-400 mt-1">NHS GP Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

