"use client";

import { Button } from "@/src/components/ui/Button";

interface PaymentReceiptProps {
  sessionId: string;
  shortSessionId: string;
  onProceed: () => void;
}

export function PaymentReceipt({
  sessionId,
  shortSessionId,
  onProceed,
}: PaymentReceiptProps) {
  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_8px_35px_rgb(0,0,0,0.02)] max-w-xl w-full text-center space-y-8">
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-20 h-20 bg-green-50 rounded-full text-green-500 mb-2">
          <span className="absolute inset-0 rounded-full bg-green-500/10 animate-ping duration-1000" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-10 h-10 relative z-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight mt-4">
          Payment Confirmed
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Thank you! Your transaction has been successfully processed.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-100 space-y-4">
        <div className="flex justify-between items-center text-xs pb-3 border-b border-slate-200/50">
          <span className="font-semibold text-gray-400 uppercase tracking-wider">Transaction Receipt</span>
          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            PAID
          </span>
        </div>

        <div className="space-y-2.5 text-sm text-gray-600">
          <div className="flex justify-between">
            <span className="text-gray-400">Payment Gateway</span>
            <span className="font-semibold text-gray-800">Stripe Payments</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Date</span>
            <span className="font-semibold text-gray-800" suppressHydrationWarning>
              {new Date().toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
          {sessionId && (
            <div className="flex justify-between">
              <span className="text-gray-400">Session ID</span>
              <span className="font-mono text-xs font-semibold text-gray-800 truncate max-w-[200px]" title={sessionId}>
                {shortSessionId}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="pt-2">
        <Button
          onClick={onProceed}
          variant="primary"
          className="w-full py-4 rounded-xl text-base font-bold shadow-md bg-[var(--c-primary-600)] hover:bg-[var(--c-primary)] text-white hover:scale-[1.01] transition-all"
        >
          Proceed to Appointment
        </Button>
      </div>
    </div>
  );
}
