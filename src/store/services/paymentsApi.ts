import { api } from "./api";
import { BaseResponse } from "./authApi";

export interface CheckoutRequest {
  type: string; // "one_off"
  doseRequested?: string;
  successUrl: string;
  cancelUrl: string;
  assessmentId?: string;
  consultationId?: string;
  packageId?: string;
}

export interface CheckoutResponseData {
  sessionId?: string;
  url?: string;
  priceId?: string;
  session?: {
    id: string;
    url: string;
  };
}

export interface Package {
  _id: string;
  name: string;
  description: string;
  priceAmount: number;
  stripePriceId: string;
  type: string;
  isActive: boolean;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
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

export const paymentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createCheckoutSession: builder.mutation<BaseResponse<CheckoutResponseData>, CheckoutRequest>({
      query: (body) => ({
        url: "/payments/checkout",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    getPackages: builder.query<BaseResponse<Package[]>, void>({
      query: () => ({
        url: "/payments/packages",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCheckoutSessionMutation,
  useGetPackagesQuery,
} = paymentsApi;
