"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoginMutation } from "@/src/store/services/authApi";
import { useAppDispatch } from "@/src/store/hooks";
import { setCredentials } from "@/src/store/slices/authSlice";
import { useToast } from "@/src/components/ui/Toast";
import { getErrorMessage } from "@/src/store/services/api";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getSanitizedPhone = () => {
    let rawPhone = phoneNumber.trim();
    if (rawPhone.startsWith("+")) {
      return rawPhone;
    } else if (rawPhone.startsWith("44")) {
      return `+${rawPhone}`;
    } else {
      if (rawPhone.startsWith("0")) {
        rawPhone = rawPhone.substring(1);
      }
      return `+44${rawPhone}`;
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loginMethod === "email" && !email.trim()) {
      showToast("Please enter your email", "error");
      return;
    }
    if (loginMethod === "phone" && !phoneNumber.trim()) {
      showToast("Please enter your phone number", "error");
      return;
    }
    if (!password.trim()) {
      showToast("Please enter your password", "error");
      return;
    }

    const redirectPath = searchParams.get("redirect") || "/patient-registration";

    try {
      const response = await login({
        email: loginMethod === "email" ? email.trim() : undefined,
        phone: loginMethod === "phone" ? getSanitizedPhone() : undefined,
        password: password.trim(),
      }).unwrap();

      if (response.success && response.data) {
        dispatch(
          setCredentials({
            user: response.data.user,
            token: response.data.token,
          })
        );
        showToast(`Welcome back, ${response.data.user.firstName || "User"}!`, "success");
        router.push(redirectPath);
      } else {
        showToast(response.message || "Login failed.", "error");
      }
    } catch (err: any) {
      const backendMsg = getErrorMessage(err);
      
      if (err?.data?.error?.code === "FORBIDDEN" || backendMsg.toLowerCase().includes("verify")) {
        showToast("Please verify your account to continue.", "error");
        const identifier = loginMethod === "email" ? email.trim() : getSanitizedPhone();
        router.push(`/verify-otp?method=${loginMethod}&identifier=${encodeURIComponent(identifier)}`);
        return;
      }

      showToast(backendMsg, "error");
    }
  };

  const isLoading = isLoginLoading;

  return (
    <>
      {/* Login Method Toggle */}
      <div className="flex gap-3 mb-8">
        <button
          type="button"
          onClick={() => setLoginMethod("phone")}
          className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
          style={{
            background: loginMethod === "phone" ? "#A3B094" : "transparent",
            color: loginMethod === "phone" ? "#ffffff" : "var(--c-text-muted)",
            border: loginMethod === "phone" ? "none" : "1.5px solid var(--c-border)",
          }}
        >
          Phone
        </button>
        <button
          type="button"
          onClick={() => setLoginMethod("email")}
          className="flex-1 py-3 text-[15px] font-semibold transition-all duration-200 rounded-xl"
          style={{
            background: loginMethod === "email" ? "#A3B094" : "transparent",
            color: loginMethod === "email" ? "#ffffff" : "var(--c-text-muted)",
            border: loginMethod === "email" ? "none" : "1.5px solid var(--c-border)",
          }}
        >
          Email
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
      {/* Phone Number / Email Input */}
      {loginMethod === "phone" ? (
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
              placeholder="7123456789"
              disabled={isLoading}
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
            disabled={isLoading}
            required
          />
        </div>
      )}

      {/* Password Field */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[15px] font-medium" style={{ color: "var(--c-text)" }}>
            Password
          </label>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 pr-12 text-[15px] rounded-xl transition-all duration-200"
            style={{
              background: "var(--c-surface)",
              border: "1.5px solid var(--c-border)",
              color: "var(--c-text)",
            }}
            placeholder="••••••••"
            disabled={isLoading}
            required
          />
          
          {/* Action buttons inside field */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="transition-opacity duration-200 hover:opacity-70"
              disabled={isLoading}
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
        
        <div className="text-right mt-2">
          <Link
            href="/forgot-password"
            className="text-[13px] hover:opacity-70 transition-opacity duration-200"
            style={{ color: "var(--c-text)" }}
          >
            Forgot password?
          </Link>
        </div>
      </div>

      {/* Login Button */}
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
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Logging in...
          </>
        ) : (
          "Login"
        )}
      </button>

      {/* Sign Up Link */}
      <p className="text-center text-[14px]" style={{ color: "var(--c-text-muted)" }}>
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold hover:opacity-70 transition-opacity duration-200"
          style={{ color: "var(--c-text)" }}
        >
          Create Account
        </Link>
      </p>
    </form>
    </>
  );
}

export default function LoginPage() {
  return (
    <div className="w-full">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-[36px] font-semibold mb-2" style={{ color: "var(--c-text-muted)" }}>
          Welcome Back
        </h1>
        <p className="text-[16px]" style={{ color: "var(--c-text-muted)" }}>
          Login into your account
        </p>
      </div>

      <Suspense
        fallback={
          <div className="flex items-center justify-center p-8">
            <svg className="animate-spin h-8 w-8 text-[#A3B094]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}