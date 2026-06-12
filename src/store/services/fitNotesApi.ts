import { api } from "./api";
import { BaseResponse } from "./authApi";

export interface FitNoteRequest {
  patientId: string;
  consultationId: string;
  diagnosis: string;
  fitnessForWork: "not_fit" | "maybe_fit";
  startDate: string;
  endDate: string;
  adjustments?: string;
}

export interface FitNote {
  _id: string;
  patientId: string;
  consultationId: string;
  diagnosis: string;
  fitnessForWork: "not_fit" | "maybe_fit";
  startDate: string;
  endDate: string;
  adjustments?: string;
  createdAt: string;
  updatedAt: string;
}

function toUrlEncoded(obj: Record<string, any>): URLSearchParams {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== "") {
      params.append(key, String(val));
    }
  });
  return params;
}

export const fitNotesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createFitNote: builder.mutation<BaseResponse<FitNote>, FitNoteRequest>({
      query: (body) => ({
        url: "/fit-notes",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
      invalidatesTags: ["FitNote"],
    }),
  }),
});

export const { useCreateFitNoteMutation } = fitNotesApi;
