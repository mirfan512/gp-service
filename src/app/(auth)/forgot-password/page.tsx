"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useForgotPasswordMutation,
  useVerifyForgotPasswordMutation,
  useResetPasswordMutation,
} from "@/src/store/services/authApi";
import { useToast } from "@/src/components/ui/Toast";
import { getErrorMessage } from "@/src/store/services/api";

import RequestResetForm from "./components/RequestResetForm";
import VerifyResetCodeForm from "./components/VerifyResetCodeForm";
import NewPasswordForm from "./components/NewPasswordForm";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [forgotPassword, { isLoading: isRequestLoading }] = useForgotPasswordMutation();
  const [verifyForgotPassword, { isLoading: isVerifyLoading }] = useVerifyForgotPasswordMutation();
  const [resetPassword, { isLoading: isResetLoading }] = useResetPasswordMutation();

  const [resetMethod, setResetMethod] = useState<"phone" | "email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"request" | "verify" | "reset">("request");
  const [verificationCode, setVerificationCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  const getSanitizedPhone = () => {
    let rawPhone = phoneNumber.trim();
    if (rawPhone.startsWith("+")) return rawPhone;
    if (rawPhone.startsWith("44")) return `+${rawPhone}`;
    if (rawPhone.startsWith("0")) rawPhone = rawPhone.substring(1);
    return `+44${rawPhone}`;
  };

  const handleSendCode = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (resetMethod === "email" && !email.trim()) {
      showToast("Please enter your email", "error");
      return;
    }
    if (resetMethod === "phone" && !phoneNumber.trim()) {
      showToast("Please enter your phone number", "error");
      return;
    }

    try {
      const response = await forgotPassword({
        email: resetMethod === "email" ? email.trim() : undefined,
        phone: resetMethod === "phone" ? getSanitizedPhone() : undefined,
      }).unwrap();

      if (response.success) {
        showToast(response.message || "Reset code sent successfully!", "success");
        setResendCountdown(60);
        setStep("verify");
      } else {
        showToast(response.message || "Failed to send reset code.", "error");
      }
    } catch (err: any) {
      showToast(getErrorMessage(err), "error");
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();

    const code = verificationCode.join("");
    if (code.length < 6) {
      showToast("Please enter the complete 6-digit code", "error");
      return;
    }

    try {
      const response = await verifyForgotPassword({
        email: resetMethod === "email" ? email.trim() : undefined,
        phone: resetMethod === "phone" ? getSanitizedPhone() : undefined,
        code,
      }).unwrap();

      if (response.success && response.data) {
        showToast("Code verified successfully!", "success");
        setResetToken(response.data.token);
        setStep("reset");
      } else {
        showToast(response.message || "Verification failed.", "error");
      }
    } catch (err: any) {
      showToast(getErrorMessage(err), "error");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword) {
      showToast("Please enter a new password", "error");
      return;
    }
    if (newPassword.length < 6) {
      showToast("Password must be at least 6 characters long", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }
    if (!resetToken) {
      showToast("Reset session expired. Please start over.", "error");
      setStep("request");
      return;
    }

    try {
      const response = await resetPassword({
        token: resetToken,
        newPassword: newPassword,
      }).unwrap();

      if (response.success) {
        showToast("Password reset successfully! Please login.", "success");
        router.push("/login");
      } else {
        showToast(response.message || "Failed to reset password.", "error");
      }
    } catch (err: any) {
      showToast(getErrorMessage(err), "error");
    }
  };

  const isLoading = isRequestLoading || isVerifyLoading || isResetLoading;

  return (
    <div className="w-full">
      {step === "request" && (
        <RequestResetForm
          resetMethod={resetMethod}
          setResetMethod={setResetMethod}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          onSubmit={handleSendCode}
          isLoading={isLoading}
        />
      )}

      {step === "verify" && (
        <VerifyResetCodeForm
          resetMethod={resetMethod}
          phoneNumber={phoneNumber}
          email={email}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          resendCountdown={resendCountdown}
          onVerify={handleVerifyCode}
          onResend={() => handleSendCode()}
          onBack={() => setStep("request")}
          isLoading={isLoading}
        />
      )}

      {step === "reset" && (
        <NewPasswordForm
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onSubmit={handleResetPassword}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}