import { api } from "./api";
import { BaseResponse } from "./authApi";

export interface Doctor {
  _id: string;
  name: string;
  email: string;
  availability: {
    morning?: string[];
    afternoon?: string[];
    evening?: string[];
  };
  bio?: string;
  qualifications?: string[];
  specialty: string;
  averageRating: number;
  reviewCount: number;
}

export interface Review {
  _id: string;
  patientName: string;
  ratingDoctor: number;
  ratingApp: number;
  bookingEase: number;
  recommendationScore: number;
  comments: string;
  createdAt: string;
}

// Helper to convert an object to URLSearchParams (x-www-form-urlencoded)
function toUrlEncoded(obj: Record<string, any>): URLSearchParams {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== "") {
      params.append(key, String(val));
    }
  });
  return params;
}

export const doctorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query<BaseResponse<Doctor[]>, void>({
      query: () => ({
        url: "/doctors",
        method: "GET",
      }),
    }),
    getDoctorReviews: builder.query<BaseResponse<Review[]>, string>({
      query: (doctorId) => ({
        url: `/doctors/${doctorId}/reviews`,
        method: "GET",
      }),
    }),
    bookConsultation: builder.mutation<BaseResponse<any>, FormData>({
      query: (formData) => ({
        url: "/consultations",
        method: "POST",
        body: formData,
      }),
    }),
    getAvailableSlots: builder.query<BaseResponse<string[]>, { consultantId: string; date: string }>({
      query: ({ consultantId, date }) => ({
        url: "/consultations/available-slots",
        method: "GET",
        params: { consultantId, date },
      }),
    }),
    submitFeedback: builder.mutation<
      BaseResponse<any>,
      {
        id: string;
        ratingDoctor: number;
        ratingApp: number;
        bookingEase: number;
        recommendationScore: number;
        comments: string;
      }
    >({
      query: ({ id, ...body }) => ({
        url: `/consultations/${id}/feedback`,
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    joinConsultation: builder.query<BaseResponse<{ serverUrl: string; accessToken: string }>, string>({
      query: (consultationId) => ({
        url: `/consultations/${consultationId}/join`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorReviewsQuery,
  useBookConsultationMutation,
  useGetAvailableSlotsQuery,
  useSubmitFeedbackMutation,
  useJoinConsultationQuery,
} = doctorsApi;
