"use client";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 text-center space-y-6 animate-scaleUp">
        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-800">Session Limit Reached</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Your free account tier is limited to **10 therapist sessions per month**. Upgrade to our Pro/Clinical tier to get unlimited sessions, downloadable progress logs, and human therapist escalation.
          </p>
        </div>

        <div className="pt-2 space-y-3">
          <button
            onClick={() => {
              window.location.href = "/doctors/packages";
            }}
            className="w-full bg-[#A3B094] hover:bg-[#8E9C85] text-white font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer"
          >
            Upgrade to Pro Plan
          </button>
          <button
            onClick={onClose}
            className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold py-3.5 rounded-xl transition-all border border-slate-200 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
