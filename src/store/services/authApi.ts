import { api } from "./api";
import { AuthUser } from "../slices/authSlice";

// Response Types
export interface BaseResponse<T = any> {
  success: boolean;
  data: T;
  requestId?: string;
  message?: string;
}

export interface RegisterResponseData {
  user: AuthUser;
  token?: string;
}

export interface LoginResponseData {
  token: string;
  user: AuthUser;
}

export interface OtpResponseData {
  message: string;
  code?: string;
}

export interface OtpVerifyResponseData {
  token: string;
  user: AuthUser;
}

export interface ForgotPasswordResponseData {
  message: string;
}

export interface ForgotPasswordVerifyResponseData {
  token: string; // The reset password token
}

export interface ResetPasswordResponseData {
  message: string;
}

// Request Body Interfaces
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  password?: string;
}

export interface LoginRequest {
  email?: string;
  phone?: string;
  password?: string;
}

export interface OtpRequest {
  email?: string;
  phone?: string;
}

export interface OtpVerifyRequest {
  email?: string;
  phone?: string;
  code: string;
}

export interface ForgotPasswordRequest {
  email?: string;
  phone?: string;
}

export interface ForgotPasswordVerifyRequest {
  email?: string;
  phone?: string;
  code: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword?: string;
}

// Helper to convert an object to URLSearchParams (x-www-form-urlencoded)
function toUrlEncoded(obj: Record<string, any>): URLSearchParams {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, val]) => {
    if (val !== undefined && val !== null) {
      params.append(key, String(val));
    }
  });
  return params;
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<BaseResponse<RegisterResponseData>, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),

    login: builder.mutation<BaseResponse<LoginResponseData>, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
      invalidatesTags: ["User"],
    }),

    requestOtp: builder.mutation<BaseResponse<OtpResponseData>, OtpRequest>({
      query: (body) => ({
        url: "/auth/otp/request",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),

    verifyOtp: builder.mutation<BaseResponse<OtpVerifyResponseData>, OtpVerifyRequest>({
      query: (body) => ({
        url: "/auth/otp/verify",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
      invalidatesTags: ["User"],
    }),

    getMe: builder.query<BaseResponse<{ user: AuthUser }>, void>({
      query: () => "/auth/me",
      providesTags: ["User"],
    }),

    forgotPassword: builder.mutation<BaseResponse<ForgotPasswordResponseData>, ForgotPasswordRequest>({
      query: (body) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),

    verifyForgotPassword: builder.mutation<BaseResponse<ForgotPasswordVerifyResponseData>, ForgotPasswordVerifyRequest>({
      query: (body) => ({
        url: "/auth/forgot-password/verify",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),

    resetPassword: builder.mutation<BaseResponse<ResetPasswordResponseData>, ResetPasswordRequest>({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: toUrlEncoded(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),

    logout: builder.mutation<BaseResponse<any>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useRequestOtpMutation,
  useVerifyOtpMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
  useForgotPasswordMutation,
  useVerifyForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
} = authApi;
