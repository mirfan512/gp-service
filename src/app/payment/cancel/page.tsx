"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/src/components/ui/Button";

function PaymentCancelContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Retrieve booking details to allow quick retry
  const consultationId = searchParams.get("consultationId") || "";
  const doctorName = searchParams.get("doctorName") || "";
  const scheduledAt = searchParams.get("scheduledAt") || "";

  const hasBookingDetails = consultationId && doctorName && scheduledAt;

  const handleRetry = () => {
    if (hasBookingDetails) {
      router.push(
        `/doctors/packages?consultationId=${consultationId}&doctorName=${encodeURIComponent(
          doctorName
        )}&scheduledAt=${encodeURIComponent(scheduledAt)}`
      );
    } else {
      router.push("/doctors");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] max-w-xl w-full text-center space-y-8">
        
        {/* Warning / Cancel icon */}
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center w-20 h-20 bg-amber-50 rounded-full text-amber-500 mb-2">
            <span className="absolute inset-0 rounded-full bg-amber-500/10 animate-pulse" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 relative z-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight mt-4">
            Payment Cancelled
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-sm">
            The checkout session was closed. No charges were made to your account.
          </p>
        </div>

        {/* Message content */}
        <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-100 space-y-2 text-sm text-gray-600">
          <p className="font-semibold text-gray-700">What happened?</p>
          <p>
            You aborted the Stripe secure payment window or it timed out. You can return to the packages page to select a tier and try checking out again.
          </p>
        </div>

        {/* Action buttons */}
        <div className="pt-2 space-y-3">
          {hasBookingDetails ? (
            <Button
              onClick={handleRetry}
              variant="secondary"
              className="w-full py-4 rounded-xl text-base font-bold shadow-md bg-[var(--c-primary-600)] hover:bg-[var(--c-primary)] text-white hover:scale-[1.01] transition-all"
            >
              Back to Package Selection
            </Button>
          ) : (
            <Button
              onClick={() => router.push("/doctors")}
              variant="secondary"
              className="w-full py-4 rounded-xl text-base font-bold shadow-md bg-[var(--c-primary-600)] hover:bg-[var(--c-primary)] text-white hover:scale-[1.01] transition-all"
            >
              Return to Clinicians List
            </Button>
          )}

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/patient-portal"
              className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
            >
              Go to Patient Portal
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link
              href="/"
              className="text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
            >
              Go to Homepage
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function PaymentCancelPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center p-6 text-gray-500">
          <svg className="animate-spin h-8 w-8 text-[var(--c-primary)] mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-sm font-semibold">Loading Page Content...</span>
        </div>
      }
    >
      <PaymentCancelContent />
    </Suspense>
  );
}
