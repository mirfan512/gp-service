"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [registerMethod, setRegisterMethod] = useState<"phone" | "email">("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-[36px] font-semibold mb-2" style={{ color: "var(--c-text-muted)" }}>
          Create Account
        </h1>
        <p className="text-[16px]" style={{ color: "var(--c-text-muted)" }}>
          Sign up to get started
        </p>
      </div>

      {/* Register Method Toggle */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setRegisterMethod("phone")}
          className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
          style={{
            background: registerMethod === "phone" ? "#A3B094" : "transparent",
            color: registerMethod === "phone" ? "#ffffff" : "var(--c-text-muted)",
            border: registerMethod === "phone" ? "none" : "1.5px solid var(--c-border)",
          }}
        >
          Phone
        </button>
        <button
          onClick={() => setRegisterMethod("email")}
          className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
          style={{
            background: registerMethod === "email" ? "#A3B094" : "transparent",
            color: registerMethod === "email" ? "#ffffff" : "var(--c-text-muted)",
            border: registerMethod === "email" ? "none" : "1.5px solid var(--c-border)",
          }}
        >
          Email
        </button>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full px-4 py-3 text-[15px] rounded-xl transition-all duration-200"
            style={{
              background: "var(--c-surface)",
              border: "1.5px solid var(--c-border)",
              color: "var(--c-text)",
            }}
            placeholder="John Doe"
          />
        </div>

        {/* Phone Number / Email */}
        {registerMethod === "phone" ? (
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
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
                className="w-full pl-28 pr-4 py-3 text-[15px] rounded-xl transition-all duration-200"
                style={{
                  background: "var(--c-surface)",
                  border: "1.5px solid var(--c-border)",
                  color: "var(--c-text)",
                }}
                placeholder=""
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
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-3 text-[15px] rounded-xl transition-all duration-200"
              style={{
                background: "var(--c-surface)",
                border: "1.5px solid var(--c-border)",
                color: "var(--c-text)",
              }}
              placeholder="your@email.com"
            />
          </div>
        )}

        {/* Password */}
        <div>
          <label className="block text-[15px] font-medium mb-2" style={{ color: "var(--c-text)" }}>
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full px-4 py-3 pr-12 text-[15px] rounded-xl transition-all duration-200"
              style={{
                background: "var(--c-surface)",
                border: "1.5px solid var(--c-border)",
                color: "var(--c-text)",
              }}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 transition-opacity duration-200 hover:opacity-70"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: "var(--c-text-muted)" }}>
                {showPassword ? (
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
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="w-full px-4 py-3 pr-12 text-[15px] rounded-xl transition-all duration-200"
              style={{
                background: "var(--c-surface)",
                border: "1.5px solid var(--c-border)",
                color: "var(--c-text)",
              }}
              placeholder="••••••••"
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

        {/* Terms & Conditions */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 w-4 h-4 rounded accent-[#A3B094]"
          />
          <label htmlFor="terms" className="text-[13px]" style={{ color: "var(--c-text-muted)" }}>
            I agree to the{" "}
            <Link href="/terms" className="font-semibold hover:opacity-70" style={{ color: "var(--c-text)" }}>
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-semibold hover:opacity-70" style={{ color: "var(--c-text)" }}>
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3.5 text-[16px] font-semibold text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
          style={{
            background: "#A3B094",
          }}
        >
          Create Account
        </button>

        {/* Login Link */}
        <p className="text-center text-[14px]" style={{ color: "var(--c-text-muted)" }}>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold hover:opacity-70 transition-opacity duration-200"
            style={{ color: "var(--c-text)" }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}