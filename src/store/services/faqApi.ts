import { api } from "./api";
import { BaseResponse } from "./authApi";

export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export const faqApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFaqs: builder.query<BaseResponse<FaqItem[]>, void>({
      query: () => ({
        url: "/faqs",
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: "Faq" as const, id: _id })),
              { type: "Faq", id: "LIST" },
            ]
          : [{ type: "Faq", id: "LIST" }],
    }),
  }),
});

export const { useGetFaqsQuery } = faqApi;
