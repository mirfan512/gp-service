"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { useGetPackagesQuery, useCreateCheckoutSessionMutation, Package } from "@/src/store/services/paymentsApi";
import { Button } from "@/src/components/ui/Button";
import { useToast } from "@/src/components/ui/Toast";
import { getErrorMessage } from "@/src/store/services/api";
import { PackageSelection } from "./_comp/PackageSelection";
import { PaymentProcessing } from "./_comp/PaymentProcessing";

function PackagesPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  // URL query params
  const consultationId = searchParams.get("consultationId") || "";
  const assessmentId = searchParams.get("assessmentId") || "";
  const doctorName = searchParams.get("doctorName") || "Sarah Ahmad";
  const scheduledAt = searchParams.get("scheduledAt") || new Date().toISOString();

  // Selected package state
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  // Fetch real packages from backend GET /payments/packages
  const { data: responseData, isLoading: isPackagesLoading, isError, refetch } = useGetPackagesQuery();
  const packages = responseData?.data || [];

  // Mutation for creating Stripe checkout session
  const [createCheckoutSession, { isLoading: isCreatingCheckout }] = useCreateCheckoutSessionMutation();

  // Automatically select the first active package
  useEffect(() => {
    if (packages.length > 0 && !selectedPackage) {
      const activePkg = packages.find((p) => p.isActive) || packages[0];
      setSelectedPackage(activePkg);
    }
  }, [packages, selectedPackage]);

  // Handle Pay Now click
  const handlePayNow = async () => {
    const token = Cookies.get("token");
    if (!token) {
      // Redirect to login page
      router.push(`/login?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`);
      return;
    }

    if (!selectedPackage) {
      showToast("Please select a package first", "error");
      return;
    }

    try {
      showToast("Creating secure payment checkout...", "info");
      
      const successUrl = `${window.location.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}&consultationId=${consultationId}&doctorName=${encodeURIComponent(doctorName)}&scheduledAt=${encodeURIComponent(scheduledAt)}`;
      const cancelUrl = `${window.location.origin}/payment/cancel?consultationId=${consultationId}&doctorName=${encodeURIComponent(doctorName)}&scheduledAt=${encodeURIComponent(scheduledAt)}`;

      const res = await createCheckoutSession({
        type: "one_off",
        successUrl,
        cancelUrl,
        packageId: selectedPackage._id,
        consultationId: consultationId || undefined,
        assessmentId: assessmentId || undefined,
      }).unwrap();

      const redirectUrl = res.data?.url || res.data?.session?.url;
      if (res.success && redirectUrl) {
        showToast("Redirecting to checkout...", "success");
        window.location.href = redirectUrl;
      } else {
        showToast(res.message || "Failed to initiate payment session", "error");
      }
    } catch (err) {
      showToast(getErrorMessage(err), "error");
    }
  };

  // Format date helper
  const getFormattedDate = () => {
    try {
      return new Date(scheduledAt).toLocaleDateString(undefined, {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Selected Date";
    }
  };

  const getFormattedTime = () => {
    try {
      return new Date(scheduledAt).toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return "Selected Time";
    }
  };

  if (isPackagesLoading) {
    return (
      <div className="min-h-[60vh] bg-slate-50/50 flex flex-col items-center justify-center p-6 text-gray-500">
        <svg className="animate-spin h-8 w-8 text-[var(--c-primary)] mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-sm font-semibold">Loading payment packages...</span>
      </div>
    );
  }

  if (isError || (packages.length === 0 && !isPackagesLoading)) {
    return (
      <div className="min-h-[60vh] bg-slate-50/50 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-amber-500 mb-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <h3 className="text-lg font-bold text-gray-800 mb-2">Failed to load packages</h3>
        <p className="text-sm text-gray-500 mb-6">We could not retrieve payment options at this time. Please try again.</p>
        <Button onClick={() => refetch()} variant="secondary" className="w-full">
          Retry Loading
        </Button>
      </div>
    );
  }

  // If loading the checkout redirect, show the PaymentProcessing screen
  if (isCreatingCheckout) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50/50 py-12">
        <PaymentProcessing />
      </div>
    );
  }

  const priceAmount = selectedPackage ? (selectedPackage.priceAmount / 100).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Premium Hero Header Section */}
      <section className="hero-linear-gradient">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="relative flex h-[120px] items-center">
            <Link
              href="/doctors"
              className="absolute left-0 flex items-center gap-2 text-[14px] font-medium text-white/90 hover:text-white"
            >
              <span className="text-[18px] leading-none">‹</span> Back to Doctors
            </Link>

            <h1 className="w-full text-center text-[34px] lg:text-[40px] font-inter text-white tracking-[-0.02em] font-semibold">
              Select Consultation Package
            </h1>
          </div>
        </div>
      </section>

      {/* Main Responsive Layout Wrapper */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main selection column (2/3 width on desktop) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            <PackageSelection
              packages={packages}
              selectedPackage={selectedPackage}
              onSelectPackage={setSelectedPackage}
            />
          </div>

          {/* Sidebar checkout summary (1/3 width on desktop) */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">
                Appointment Summary
              </h3>
            </div>

            {/* Clinician Profile Short Summary */}
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-[var(--c-primary-light)]/20 flex items-center justify-center text-[var(--c-primary-600)] flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <div className="space-y-0.5">
                <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">Clinician</p>
                <h4 className="text-[15px] font-bold text-gray-800">{doctorName}</h4>
              </div>
            </div>

            {/* Scheduled Date/Time details */}
            <div className="space-y-3 pt-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  Date
                </span>
                <span className="font-semibold text-gray-800 text-right">
                  {getFormattedDate()}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 font-medium flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Time (UK)
                </span>
                <span className="font-semibold text-gray-800">
                  {getFormattedTime()}
                </span>
              </div>
              
              {selectedPackage && (
                <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                  <span className="text-gray-500 font-medium flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                      />
                    </svg>
                    Selected Package
                  </span>
                  <span className="font-semibold text-gray-800 truncate max-w-[180px]">
                    {selectedPackage.name}
                  </span>
                </div>
              )}
            </div>

            {/* Billing total summary */}
            <div className="border-t border-dashed border-gray-200 pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">Subtotal</span>
                <span className="font-semibold text-gray-700">£{priceAmount}</span>
              </div>
            
              
              <div className="flex justify-between items-center bg-[rgba(163,176,148,0.08)] p-3 rounded-xl border border-[rgba(163,176,148,0.15)] mt-2">
                <span className="text-base font-bold text-gray-700">Total Price</span>
                <span className="text-xl font-extrabold text-gray-900 font-krub">
                  £{priceAmount}
                </span>
              </div>
            </div>

            {/* Pay Now Button */}
            <div className="pt-2">
              <Button
                onClick={handlePayNow}
                disabled={!selectedPackage}
                variant="primary"
                className="w-full py-4 rounded-xl text-base font-bold shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all bg-[var(--c-primary-600)] hover:bg-[var(--c-primary)] text-white"
              >
                Pay Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50/50 flex flex-col items-center justify-center p-6 text-gray-500">
        <svg className="animate-spin h-8 w-8 text-[var(--c-primary)] mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span className="text-sm font-semibold">Loading Page Content...</span>
      </div>
    }>
      <PackagesPageContent />
    </Suspense>
  );
}
