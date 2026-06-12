"use client";

import { Package } from "@/src/store/services/paymentsApi";

interface PackageSelectionProps {
  packages: Package[];
  selectedPackage: Package | null;
  onSelectPackage: (pkg: Package) => void;
}

export function PackageSelection({
  packages,
  selectedPackage,
  onSelectPackage,
}: PackageSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-800">Choose your consultation tier</h2>
        <p className="text-sm text-gray-500 mt-1">
          Select the duration and service package that best fits your medical needs.
        </p>
      </div>

      <div className="grid gap-4">
        {packages.map((pkg) => {
          const isSelected = selectedPackage?._id === pkg._id;
          const priceFormatted = (pkg.priceAmount / 100).toFixed(2);
          
          return (
            <button
              key={pkg._id}
              type="button"
              onClick={() => onSelectPackage(pkg)}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                isSelected
                  ? "border-[var(--c-primary)] bg-[rgba(163,176,148,0.05)] shadow-sm ring-1 ring-[var(--c-primary)]"
                  : "border-gray-200 hover:border-[var(--c-primary-light)] hover:bg-gray-50/50 bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-[17px] text-gray-800 group-hover:text-[var(--c-primary-600)] transition-colors">
                      {pkg.name}
                    </h3>
                    {isSelected && (
                      <span className="bg-[var(--c-primary-600)] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Selected
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {pkg.description || "Consultation with one of our NHS-trained general practitioners."}
                  </p>
                  
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <span className="text-2xl font-black text-gray-900 font-krub">
                      £{priceFormatted}
                    </span>
                   
                    {pkg.type && (
                      <span className="text-xs text-[var(--c-primary-600)] font-semibold bg-[rgba(163,176,148,0.12)] px-2.5 py-1 rounded-full flex items-center gap-1.5 capitalize">
                        {pkg.type === "video" && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" />
                          </svg>
                        )}
                        {pkg.type} Consultation
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? "border-[var(--c-primary-600)] bg-[var(--c-primary-600)] text-white"
                      : "border-gray-300 group-hover:border-[var(--c-primary-light)] bg-white"
                  }`}
                >
                  {isSelected ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4.5 h-4.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-gray-100" />
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
