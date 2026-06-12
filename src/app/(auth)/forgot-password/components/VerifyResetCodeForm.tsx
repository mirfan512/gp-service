import React from "react";
import { OtpInput } from "@/src/components/ui/OtpInput";

interface VerifyResetCodeFormProps {
  resetMethod: "phone" | "email";
  phoneNumber: string;
  email: string;
  verificationCode: string[];
  setVerificationCode: (code: string[]) => void;
  resendCountdown: number;
  onVerify: (e: React.FormEvent) => void;
  onResend: () => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function VerifyResetCodeForm({
  resetMethod,
  phoneNumber,
  email,
  verificationCode,
  setVerificationCode,
  resendCountdown,
  onVerify,
  onResend,
  onBack,
  isLoading,
}: VerifyResetCodeFormProps) {
  const targetText =
    resetMethod === "phone" ? `+44${phoneNumber}` : email;

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-[36px] font-semibold mb-2"
          style={{ color: "var(--c-text-muted)" }}
        >
          Verify Code
        </h1>
        <p className="text-[16px]" style={{ color: "var(--c-text-muted)" }}>
          Enter the 6-digit code sent to {targetText}
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={onVerify}>
        {/* Verification Code Input */}
        <div>
          <label
            className="block text-[15px] font-medium mb-4"
            style={{ color: "var(--c-text)" }}
          >
            Verification Code
          </label>
          
          <OtpInput
            value={verificationCode}
            onChange={setVerificationCode}
            disabled={isLoading}
            length={6}
          />

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={onResend}
              disabled={isLoading || resendCountdown > 0}
              className="text-[13px] hover:opacity-70 disabled:opacity-50 transition-all duration-200"
              style={{ color: "var(--c-text-muted)" }}
            >
              Didn&apos;t receive code?{" "}
              <span className="font-semibold" style={{ color: "var(--c-text)" }}>
                {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : "Resend"}
              </span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.01] flex items-center justify-center gap-2"
          style={{
            background: "#A3B094",
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
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
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </button>

        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 text-[15px] font-medium transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--c-text-muted)" }}
          disabled={isLoading}
        >
          Back
        </button>
      </form>
    </>
  );
}
