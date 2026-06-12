import { Patient } from "@/src/store/services/patientsApi";

interface DocumentsTabProps {
  patient: Patient | undefined;
}

export function DocumentsTab({ patient }: DocumentsTabProps) {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Verification Banner */}
      <div className={`p-5 rounded-2xl border flex items-start gap-4 shadow-sm ${patient?.isIdVerified ? 'bg-green-50 border-green-200 text-green-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
        <span className={`p-2.5 rounded-xl shrink-0 ${patient?.isIdVerified ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
          {patient?.isIdVerified ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
        </span>
        <div>
          <h4 className="font-bold text-lg mb-1">
            {patient?.isIdVerified ? 'Identity Verified Successfully' : 'Verification Under Review'}
          </h4>
          <p className="text-sm font-semibold opacity-90 leading-relaxed">
            {patient?.isIdVerified 
              ? 'Your identity documents have been checked and verified against standard UK healthcare requirements. You can access all GP services.'
              : 'Our clinical compliance team is currently verifying your ID. Your consultation approvals are dependent on document verification.'}
          </p>
        </div>
      </div>

      {/* Passport and ID Card Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-3-3z" />
            </svg>
            Passport or Driving License Info
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Document ID Number</label>
              <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700">
                {patient?.passportOrDrivingLicenceId || "Not Provided"}
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Consent Status</label>
              <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-green-600 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                Has Consent Form Approved
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100 space-y-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Uploaded ID Images
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-bold text-gray-400 block mb-2 text-center uppercase tracking-wider">ID Card Front</span>
              {patient?.idCardFront?.url ? (
                <a href={patient.idCardFront.url} target="_blank" rel="noreferrer" className="block border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--color-primary)] transition-all">
                  <img src={patient.idCardFront.url} alt="ID Card Front" className="w-full h-32 object-cover" />
                </a>
              ) : (
                <div className="border border-dashed border-gray-300 rounded-xl h-32 flex flex-col items-center justify-center bg-gray-50 text-gray-400 text-xs font-semibold">
                  Not Uploaded
                </div>
              )}
            </div>

            <div>
              <span className="text-xs font-bold text-gray-400 block mb-2 text-center uppercase tracking-wider">ID Card Back</span>
              {patient?.idCardBack?.url ? (
                <a href={patient.idCardBack.url} target="_blank" rel="noreferrer" className="block border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--color-primary)] transition-all">
                  <img src={patient.idCardBack.url} alt="ID Card Back" className="w-full h-32 object-cover" />
                </a>
              ) : (
                <div className="border border-dashed border-gray-300 rounded-xl h-32 flex flex-col items-center justify-center bg-gray-50 text-gray-400 text-xs font-semibold">
                  Not Uploaded
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
