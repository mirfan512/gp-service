import { Button } from "@/src/components/ui/Button";
import { useState } from "react";

interface ActionButtonsProps {
  onSave: () => void;
  onOutcomeChange: (value: string) => void;
}

export const ActionButtons = ({ onSave, onOutcomeChange }: ActionButtonsProps) => {
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const actions = [
    "Issue FIT Note",
    "Share Notes with Patient",
    "Share Notes with GP",
    "Issue Prescription",
    "Generate Open Referral",
    "Patient Support Letter",
  ];

  return (
    <div className="space-y-4">
      {/* Top Controls: Outcome & Save */}
      <div className="flex justify-end gap-3">
        <div className="relative">
          <select
            className="appearance-none h-14 pl-6 pr-12 rounded-xl border border-gray-200 bg-white text-sm font-bold text-gray-600 focus:outline-none focus:ring-1 focus:ring-[var(--c-primary)] shadow-sm cursor-pointer hover:border-gray-300 transition-colors"
            onChange={(e) => onOutcomeChange(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled hidden>Outcome</option>
            <option value="fit_note">Fit Note</option>
            <option value="prescription">Prescription</option>
            <option value="advice_reassurance">Advice & Reassurance</option>
            <option value="referred_ae">Referred to AE / NHS 111 / Urgent Care Centre</option>
            <option value="dna">Did not attend</option>
            <option value="abandoned">Abandoned</option>
            <option value="referred_nhs_gp">Referred to NHS GP</option>
            <option value="referral_to_specialist">Referral to specialist</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button
          onClick={onSave}
          className="bg-[#C4CCC3] hover:bg-[#b0bbae] text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow-md active:scale-95"
        >
          Save Consultation
        </button>
      </div>

      {/* Action Buttons Row */}
      <div className="bg-white rounded-[20px] p-8 shadow-sm flex flex-wrap gap-3 items-center">
        {actions.map((action) => {
          const isActive = activeAction === action;
          return (
            <button
              key={action}
              onClick={() => setActiveAction(isActive ? null : action)}
              className={`
                whitespace-nowrap px-6 py-3 rounded-[16px] text-sm font-semibold transition-all flex-1
                ${isActive
                  ? "bg-[var(--color-portal-action-primary)] text-white shadow-sm scale-[1.02]"
                  : "bg-[var(--color-portal-tab-inactive-bg)] text-white hover:opacity-90"
                }
              `}
            >
              {action}
            </button>
          );
        })}
      </div>
    </div>
  );
};
