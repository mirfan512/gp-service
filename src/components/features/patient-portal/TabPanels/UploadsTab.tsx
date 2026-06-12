import { useState } from "react";
import { Patient, useUploadPatientRecordMutation } from "@/src/store/services/patientsApi";
import { FileUpload } from "@/src/components/ui/FileUpload";
import { useToast } from "@/src/components/ui/Toast";

interface UploadsTabProps {
  patient: Patient | undefined;
}

export function UploadsTab({ patient }: UploadsTabProps) {
  const { showToast } = useToast();
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [uploadRecord, { isLoading: isUploading }] = useUploadPatientRecordMutation();

  const handleUploadDocument = async () => {
    if (!fileToUpload) return;
    const formData = new FormData();
    formData.append("file", fileToUpload);

    try {
      await uploadRecord(formData).unwrap();
      setFileToUpload(null);
      showToast("Document uploaded successfully!", "success");
    } catch (err: any) {
      showToast(err?.data?.message || "Failed to upload document. Please try again.", "error");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
      {/* Left: Upload New Document */}
      <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Upload Medical Document
          </h3>
          <p className="text-xs text-gray-400 mb-6 font-semibold">
            Upload supporting documents such as previous clinic notes, blood results, GP letters, or proof of medications.
          </p>

          <FileUpload
            value={fileToUpload}
            onChange={setFileToUpload}
            accept="image/*,application/pdf"
            placeholderText="Choose a file or drag here"
            helperText="Supports PDFs and Images up to 10MB"
          />
        </div>

        <div className="mt-6">
          <button
            onClick={handleUploadDocument}
            disabled={!fileToUpload || isUploading}
            className="w-full bg-[var(--c-button-submit)] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-widest"
          >
            {isUploading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Uploading...
              </>
            ) : (
              "Upload File"
            )}
          </button>
        </div>
      </div>

      {/* Right: Uploaded Files List */}
      <div className="bg-white rounded-[20px] shadow-sm p-6 border border-gray-100 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-[var(--color-primary-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Uploaded Records ({patient?.uploads?.length || 0})
        </h3>
        <p className="text-xs text-gray-400 mb-6 font-semibold">
          Documents uploaded directly to your clinical record.
        </p>

        <div className="space-y-3 flex-1 overflow-y-auto max-h-[360px] pr-1">
          {patient?.uploads && patient.uploads.length > 0 ? (
            patient.uploads.map((upload, idx) => {
              const isPdf = upload.mimeType === "application/pdf";
              return (
                <div key={`${upload._id || 'upload'}-${idx}`} className="flex items-center justify-between p-3.5 bg-gray-50 border border-gray-100 rounded-xl transition-all duration-200 hover:bg-gray-100">
                  <div className="flex items-center gap-3 truncate">
                    <div className={`p-2 rounded-lg shrink-0 ${isPdf ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                      {isPdf ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-gray-700 truncate max-w-[180px] md:max-w-[240px]">
                      {upload.originalName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={upload.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[var(--color-primary-600)] hover:underline px-2 py-1"
                    >
                      View
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-gray-400">
              <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-medium">No documents uploaded yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
