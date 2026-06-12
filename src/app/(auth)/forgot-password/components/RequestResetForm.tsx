import React from "react";
import Link from "next/link";

interface RequestResetFormProps {
  resetMethod: "phone" | "email";
  setResetMethod: (method: "phone" | "email") => void;
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export default function RequestResetForm({
  resetMethod,
  setResetMethod,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  onSubmit,
  isLoading,
}: RequestResetFormProps) {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-[36px] font-semibold mb-2"
          style={{ color: "var(--c-text-muted)" }}
        >
          Forgot Password?
        </h1>
        <p className="text-[16px]" style={{ color: "var(--c-text-muted)" }}>
          Enter your {resetMethod} to receive a reset code
        </p>
      </div>

      {/* Reset Method Toggle */}
      <div className="flex gap-3 mb-8">
        <button
          type="button"
          onClick={() => setResetMethod("phone")}
          className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
          style={{
            background: resetMethod === "phone" ? "#A3B094" : "transparent",
            color: resetMethod === "phone" ? "#ffffff" : "var(--c-text-muted)",
            border:
              resetMethod === "phone" ? "none" : "1.5px solid var(--c-border)",
          }}
          disabled={isLoading}
        >
          Phone
        </button>
        <button
          type="button"
          onClick={() => setResetMethod("email")}
          className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
          style={{
            background: resetMethod === "email" ? "#A3B094" : "transparent",
            color: resetMethod === "email" ? "#ffffff" : "var(--c-text-muted)",
            border:
              resetMethod === "email" ? "none" : "1.5px solid var(--c-border)",
          }}
          disabled={isLoading}
        >
          Email
        </button>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={onSubmit}>
        {/* Phone Number / Email Input */}
        {resetMethod === "phone" ? (
          <div>
            <label
              className="block text-[15px] font-medium mb-2"
              style={{ color: "var(--c-text)" }}
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-[20px]">🇬🇧</span>
                <span className="text-[15px]" style={{ color: "var(--c-text)" }}>
                  +44
                </span>
                <span style={{ color: "var(--c-border)" }}>|</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full pl-28 pr-4 py-3 text-[15px] rounded-xl transition-all duration-200 focus:outline-none focus:border-[#A3B094]"
                style={{
                  background: "var(--c-surface)",
                  border: "1.5px solid var(--c-border)",
                  color: "var(--c-text)",
                }}
                placeholder="7123456789"
                disabled={isLoading}
                required
              />
            </div>
          </div>
        ) : (
          <div>
            <label
              className="block text-[15px] font-medium mb-2"
              style={{ color: "var(--c-text)" }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-[15px] rounded-xl transition-all duration-200 focus:outline-none focus:border-[#A3B094]"
              style={{
                background: "var(--c-surface)",
                border: "1.5px solid var(--c-border)",
                color: "var(--c-text)",
              }}
              placeholder="your@email.com"
              disabled={isLoading}
              required
            />
          </div>
        )}

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
              Sending...
            </>
          ) : (
            "Send Reset Code"
          )}
        </button>

        {/* Back to Login */}
        <p
          className="text-center text-[14px]"
          style={{ color: "var(--c-text-muted)" }}
        >
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-semibold hover:opacity-70 transition-opacity duration-200"
            style={{ color: "var(--c-text)" }}
          >
            Login
          </Link>
        </p>
      </form>
    </>
  );
}
