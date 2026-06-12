import React from "react";
import Link from "next/link";

interface RequestOtpStepProps {
  method: "email" | "phone";
  identifier: string;
  onRequest: () => void;
  isLoading: boolean;
}

export default function RequestOtpStep({
  method,
  identifier,
  onRequest,
  isLoading,
}: RequestOtpStepProps) {
  const displayIdentifier =
    method === "phone"
      ? `+44 ${identifier.replace(/^\+44/, "")}`
      : identifier;

  return (
    <>
      <div className="mb-8">
        <h1
          className="text-[36px] font-semibold mb-2"
          style={{ color: "var(--c-text-muted)" }}
        >
          Verify Your Account
        </h1>
        <p className="text-[16px] mb-4" style={{ color: "var(--c-text-muted)" }}>
          Your account has not been verified yet. Please request a verification OTP to activate it.
        </p>
        <div
          className="p-4 rounded-xl text-center font-medium border text-[15px]"
          style={{
            background: "var(--c-surface)",
            borderColor: "var(--c-border)",
            color: "var(--c-text)",
          }}
        >
          Sending to: <span className="font-semibold">{displayIdentifier}</span>
        </div>
      </div>

      <div className="space-y-6">
        <button
          type="button"
          onClick={onRequest}
          className="w-full py-3.5 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.01] flex items-center justify-center gap-2"
          style={{ background: "#A3B094" }}
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
              Requesting OTP...
            </>
          ) : (
            "Request Verification OTP"
          )}
        </button>

        <Link
          href="/login"
          className="block text-center text-[15px] font-medium transition-opacity duration-200 hover:opacity-70"
          style={{ color: "var(--c-text-muted)" }}
        >
          Back to Login
        </Link>
      </div>
    </>
  );
}
