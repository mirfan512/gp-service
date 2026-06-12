import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { clearCredentials } from "../slices/authSlice";

// Custom type for API error responses
export interface ApiErrorResponse {
  success: boolean;
  requestId?: string;
  error?: {
    code?: string;
    message: string;
    meta?: {
      fields?: Array<{
        field: string;
        message: string;
      }>;
    };
    stack?: string;
  };
}

// Utility to parse error messages from the backend
export function getErrorMessage(error: any): string {
  if (!error) return "An unexpected error occurred.";

  // RTK Query FetchBaseQueryError
  if (error.data) {
    const data = error.data as ApiErrorResponse;
    if (data.error?.message) {
      let msg = data.error.message;
      if (data.error.meta?.fields && data.error.meta.fields.length > 0) {
        msg += "\n\nDetails:\n" + data.error.meta.fields.map(f => `• ${f.field}: ${f.message}`).join("\n");
      }
      return msg;
    }
    if (typeof data === "string") {
      return data;
    }
    if ((data as any).message) {
      return (data as any).message;
    }
  }

  if (error.status === "FETCH_ERROR") {
    return "Unable to connect to the server. Please check your connection and try again.";
  }

  // SerializedError or standard JavaScript error
  if (error.message) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return JSON.stringify(error);
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  prepareHeaders: (headers) => {
    const token = Cookies.get("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Invalidate session on 401 Unauthorized
    api.dispatch(clearCredentials());
    if (typeof window !== "undefined") {
      // Force page reload / redirect to login page
      const currentPath = window.location.pathname;
      if (
        currentPath !== "/login" &&
        currentPath !== "/register" &&
        currentPath !== "/forgot-password"
      ) {
        window.location.href = `/login?redirect=${encodeURIComponent(currentPath)}`;
      }
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Therapist", "Faq", "FitNote"],
  endpoints: () => ({}),
});
