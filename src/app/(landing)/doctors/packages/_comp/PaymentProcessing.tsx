"use client";

export function PaymentProcessing() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-lg mx-auto">
      {/* Animated visual of cards/shield/loader */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Pulsing glow behind the lock icon */}
        <div className="absolute inset-0 bg-[var(--c-primary)] rounded-full opacity-10 animate-ping" />
        
        {/* Rotating ring */}
        <div className="w-24 h-24 rounded-full border-4 border-gray-100 border-t-[var(--c-primary)] animate-spin" />
        
        {/* Secure padlock icon in the center */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute w-8 h-8 text-[var(--c-primary-600)]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m-2.25 13.5h13.5c1.243 0 2.25-1.007 2.25-2.25V12.75c0-1.243-1.007-2.25-2.25-2.25H5.25c-1.243 0-2.25 1.007-2.25 2.25v9c0 1.243 1.007 2.25 2.25 2.25z"
          />
        </svg>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-800 animate-pulse">
          Connecting to secure checkout...
        </h3>
        
        <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
          We are initiating a secure checkout session with Stripe. You will be redirected shortly to complete your payment.
        </p>
      </div>

     
    </div>
  );
}
