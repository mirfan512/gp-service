import { api } from "./api";
import { BaseResponse } from "./authApi";

export interface UploadFile {
  _id: string;
  mimeType: string;
  originalName: string;
  url: string;
}

export interface Patient {
  id: string;
  _id?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  status?: string;
  gender?: string;
  city?: string;
  passportOrDrivingLicenceId?: string;
  dob?: string;
  address?: string;
  nhsGp?: {
    practiceName?: string;
    address?: string;
    email?: string;
  };
  hasConsent?: boolean;
  allergies?: string[];
  medicalConditions?: string[];
  familyHistory?: string;
  pastMedicalHistory?: string;
  operations?: string;
  currentMedicationText?: string;
  isIdVerified?: boolean;
  uploads?: UploadFile[];
  idCardFront?: UploadFile;
  idCardBack?: UploadFile;
  avatarUrl?: UploadFile;
  subscriptionTier?: string;
  stripeCustomerId?: string;
  createdAt?: string;
  updatedAt?: string;
  medications?: any[];
}

export const patientsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPatientMe: builder.query<BaseResponse<Patient>, void>({
      query: () => "/patients/me",
      providesTags: ["User"],
    }),
    updatePatientMe: builder.mutation<BaseResponse<Patient>, FormData>({
      query: (formData) => ({
        url: "/patients/me",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
    getPatientById: builder.query<BaseResponse<Patient>, string>({
      query: (id) => `/patients/${id}`,
      providesTags: ["User"],
    }),
    uploadPatientRecord: builder.mutation<BaseResponse<any>, FormData>({
      query: (formData) => ({
        url: "/patients/me/uploads",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetPatientMeQuery,
  useUpdatePatientMeMutation,
  useGetPatientByIdQuery,
  useUploadPatientRecordMutation,
} = patientsApi;

