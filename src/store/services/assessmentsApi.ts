import { api } from "./api";
import { BaseResponse } from "./authApi";

export const assessmentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    submitWeightLossAssessment: builder.mutation<BaseResponse<any>, FormData>({
      query: (formData) => ({
        url: "/assessments/weight-loss",
        method: "POST",
        body: formData,
      }),
    }),
    submitNadAssessment: builder.mutation<BaseResponse<any>, any>({
      query: (body) => ({
        url: "/assessments/nad",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { 
  useSubmitWeightLossAssessmentMutation,
  useSubmitNadAssessmentMutation,
} = assessmentsApi;
