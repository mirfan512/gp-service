"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [resetMethod, setResetMethod] = useState<"phone" | "email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"request" | "verify" | "reset">("request");
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleVerificationCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="w-full">
      {/* Step 1: Request Reset */}
      {step === "request" && (
        <>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[36px] font-semibold mb-2" style={{ color: "var(--c-text-muted)" }}>
              Forgot Password?
            </h1>
            <p className="text-[16px]" style={{ color: "var(--c-text-muted)" }}>
              Enter your {resetMethod} to receive a reset code
            </p>
          </div>

          {/* Reset Method Toggle */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setResetMethod("phone")}
              className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
              style={{
                background: resetMethod === "phone" ? "#A3B094" : "transparent",
                color: resetMethod === "phone" ? "#ffffff" : "var(--c-text-muted)",
                border: resetMethod === "phone" ? "none" : "1.5px solid var(--c-border)",
              }}
            >
              Phone
            </button>
            <button
              onClick={() => setResetMethod("email")}
              className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
              style={{
                background: resetMethod === "email" ? "#A3B094" : "transparent",
                color: resetMethod === "email" ? "#ffffff" : "var(--c-text-muted)",
                border: resetMethod === "email" ? "none" : "1.5px solid var(--c-border)",
              }}
            >
              Email
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep("verify"); }}>
            {/* Phone Number / Email Input */}
            {resetMethod === "phone" ? (
              <div>
                <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="text-[20px]">🇬🇧</span>
                    <span className="text-[15px]" style={{ color: "var(--c-text)" }}>+44</span>
                    <span style={{ color: "var(--c-border)" }}>|</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-28 pr-4 py-3 text-[15px] rounded-xl transition-all duration-200"
                    style={{
                      background: "var(--c-surface)",
                      border: "1.5px solid var(--c-border)",
                      color: "var(--c-text)",
                    }}
                    placeholder=""
                    required
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-[15px] rounded-xl transition-all duration-200"
                  style={{
                    background: "var(--c-surface)",
                    border: "1.5px solid var(--c-border)",
                    color: "var(--c-text)",
                  }}
                  placeholder="your@email.com"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
              style={{
                background: "#A3B094",
              }}
            >
              Send Reset Code
            </button>

            {/* Back to Login */}
            <p className="text-center text-[14px]" style={{ color: "var(--c-text-muted)" }}>
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
      )}

      {/* Step 2: Verify Code */}
      {step === "verify" && (
        <>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[36px] font-semibold mb-2" style={{ color: "var(--c-text-muted)" }}>
              Verify Code
            </h1>
            <p className="text-[16px]" style={{ color: "var(--c-text-muted)" }}>
              Enter the 6-digit code sent to {resetMethod === "phone" ? `+44${phoneNumber}` : email}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep("reset"); }}>
            {/* Verification Code Input */}
            <div>
              <label className="block text-[15px] font-medium mb-4" style={{ color: "var(--c-text)" }}>
                Verification Code
              </label>
              <div className="flex gap-3 justify-center">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-14 text-center text-[24px] font-semibold rounded-xl transition-all duration-200"
                    style={{
                      background: "var(--c-surface)",
                      border: "1.5px solid var(--c-border)",
                      color: "var(--c-text)",
                    }}
                  />
                ))}
              </div>
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="text-[13px] hover:opacity-70 transition-opacity duration-200"
                  style={{ color: "var(--c-text-muted)" }}
                >
                  Didn&apos;t receive code? <span className="font-semibold" style={{ color: "var(--c-text)" }}>Resend</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
              style={{
                background: "#A3B094",
              }}
            >
              Verify Code
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => setStep("request")}
              className="w-full py-3 text-[15px] font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: "var(--c-text-muted)" }}
            >
              Back
            </button>
          </form>
        </>
      )}

      {/* Step 3: Reset Password */}
      {step === "reset" && (
        <>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[36px] font-semibold mb-2" style={{ color: "var(--c-text-muted)" }}>
              Reset Password
            </h1>
            <p className="text-[16px]" style={{ color: "var(--c-text-muted)" }}>
              Enter your new password
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); /* Handle reset */ }}>
            {/* New Password */}
            <div>
              <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 text-[15px] rounded-xl transition-all duration-200"
                  style={{
                    background: "var(--c-surface)",
                    border: "1.5px solid var(--c-border)",
                    color: "var(--c-text)",
                  }}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 hover:opacity-70"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "var(--c-text-muted)" }}>
                    {showNewPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 text-[15px] rounded-xl transition-all duration-200"
                  style={{
                    background: "var(--c-surface)",
                    border: "1.5px solid var(--c-border)",
                    color: "var(--c-text)",
                  }}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 hover:opacity-70"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "var(--c-text-muted)" }}>
                    {showConfirmPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
              style={{
                background: "#A3B094",
              }}
            >
              Reset Password
            </button>
          </form>
        </>
      )}
    </div>
  );
}