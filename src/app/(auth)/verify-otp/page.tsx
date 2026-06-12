"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  useVerifyOtpMutation,
  useRequestOtpMutation,
} from "@/src/store/services/authApi";
import { useAppDispatch } from "@/src/store/hooks";
import { setCredentials } from "@/src/store/slices/authSlice";
import { useToast } from "@/src/components/ui/Toast";
import { getErrorMessage } from "@/src/store/services/api";

import RequestOtpStep from "./components/RequestOtpStep";
import VerifyOtpStep from "./components/VerifyOtpStep";

function VerifyOtpContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const method = searchParams.get("method") as "email" | "phone" | null;
  const identifier = searchParams.get("identifier") || "";

  const [verifyOtp, { isLoading: isVerifyLoading }] = useVerifyOtpMutation();
  const [requestOtp, { isLoading: isRequestLoading }] = useRequestOtpMutation();

  const [step, setStep] = useState<"request" | "verify">("request");
  const [verificationCode, setVerificationCode] = useState<string[]>(["", "", "", ""]);
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  if (!method || !identifier) {
    return (
      <div className="text-center py-8">
        <h1
          className="text-[28px] font-semibold mb-4"
          style={{ color: "var(--c-text-muted)" }}
        >
          Invalid Session
        </h1>
        <p className="text-[16px] mb-6" style={{ color: "var(--c-text-muted)" }}>
          Verification parameters are missing. Please log in again to receive a code.
        </p>
        <Link
          href="/login"
          className="inline-block px-6 py-3 font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90"
          style={{ background: "#A3B094" }}
        >
          Back to Login
        </Link>
      </div>
    );
  }

  const handleRequestOtp = async () => {
    try {
      const response = await requestOtp({
        email: method === "email" ? identifier.trim() : undefined,
        phone: method === "phone" ? identifier.trim() : undefined,
      }).unwrap();

      if (response.success) {
        showToast(response.message || "Verification code sent!", "success");
        setResendCountdown(60);
        setStep("verify");

        if (response.data && response.data.code) {
          const digits = String(response.data.code).split("").slice(0, 4);
          const newCode = ["", "", "", ""];
          for (let i = 0; i < 4; i++) {
            newCode[i] = digits[i] || "";
          }
          setVerificationCode(newCode);
        }
      } else {
        showToast(response.message || "Failed to send verification code.", "error");
      }
    } catch (err: any) {
      showToast(getErrorMessage(err), "error");
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join("");
    if (code.length < 4) {
      showToast("Please enter the complete 4-digit code", "error");
      return;
    }

    try {
      const response = await verifyOtp({
        email: method === "email" ? identifier.trim() : undefined,
        phone: method === "phone" ? identifier.trim() : undefined,
        code,
      }).unwrap();

      if (response.success && response.data) {
        showToast("Account verified successfully! Logging you in...", "success");
        dispatch(
          setCredentials({
            token: response.data.token,
            user: response.data.user,
          })
        );
        router.push("/patient-registration");
      } else {
        showToast(response.message || "Verification failed.", "error");
      }
    } catch (err: any) {
      showToast(getErrorMessage(err), "error");
    }
  };

  const isLoading = isVerifyLoading || isRequestLoading;

  return (
    <div className="w-full">
      {step === "request" && (
        <RequestOtpStep
          method={method}
          identifier={identifier}
          onRequest={handleRequestOtp}
          isLoading={isLoading}
        />
      )}

      {step === "verify" && (
        <VerifyOtpStep
          method={method}
          identifier={identifier}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          resendCountdown={resendCountdown}
          onVerify={handleVerifyOtp}
          onResend={handleRequestOtp}
          onBack={() => setStep("request")}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-8">
          <svg
            className="animate-spin h-8 w-8 text-[#A3B094]"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      }
    >
      <VerifyOtpContent />
    </Suspense>
  );
}
