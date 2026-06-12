import { api } from "./api";
import { BaseResponse } from "./authApi";

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
  createdAt?: string;
  _id?: string;
}

export interface TherapistSession {
  _id: string;
  patientId: string;
  messages: Message[];
  status: "active" | "completed";
  createdAt: string;
  updatedAt: string;
}

export const therapistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTherapistSessions: builder.query<BaseResponse<TherapistSession[]>, void>({
      query: () => ({
        url: "/ai-therapist/sessions",
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: "Therapist" as const, id: _id })),
              { type: "Therapist", id: "LIST" },
            ]
          : [{ type: "Therapist", id: "LIST" }],
    }),
    getTherapistSessionDetails: builder.query<BaseResponse<TherapistSession>, string>({
      query: (sessionId) => ({
        url: `/ai-therapist/sessions/${sessionId}`,
        method: "GET",
      }),
      providesTags: (result, error, arg) => [{ type: "Therapist", id: arg }],
    }),
    createTherapistSession: builder.mutation<BaseResponse<TherapistSession>, void>({
      query: () => ({
        url: "/ai-therapist/sessions",
        method: "POST",
      }),
      invalidatesTags: [{ type: "Therapist", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTherapistSessionsQuery,
  useGetTherapistSessionDetailsQuery,
  useCreateTherapistSessionMutation,
} = therapistApi;
