"use client";

import { Button } from "@/src/components/ui/Button";

interface DoctorsFiltersProps {
  search: string;
  onSearchChange: (v: string) => void;
  selectedSpecialties: string[];
  onSpecialtiesChange: (specs: string[]) => void;
  availableSpecialties: string[];
  experienceRange: number;
  onExperienceRangeChange: (v: number) => void;
  ratingRange: number;
  onRatingRangeChange: (v: number) => void;
  onClear: () => void;
}

export function DoctorsFilters({
  search,
  onSearchChange,
  selectedSpecialties,
  onSpecialtiesChange,
  availableSpecialties,
  experienceRange,
  onExperienceRangeChange,
  ratingRange,
  onRatingRangeChange,
  onClear,
}: DoctorsFiltersProps) {
  return (
    <aside
      className="rounded-[20px] p-5 h-fit sticky top-24"
      style={{
        background: "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {/* Search Bar */}
      <div
        className="flex items-center gap-3 rounded-[12px] px-4 py-3"
        style={{
          background: "var(--c-surface)",
          border: "1px solid var(--c-border)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-gray-400 opacity-80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search doctor's name..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-transparent text-[13px] outline-none placeholder:opacity-60 text-gray-800"
        />
      </div>

      {/* Specialty Filter */}
      <div className="mt-5">
        <div className="text-[13px] font-semibold mb-3">
          Select Specialty
        </div>

        <div className="space-y-3 text-[13px]" style={{ color: "var(--c-text-muted)" }}>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedSpecialties.length === 0}
              onChange={() => onSpecialtiesChange([])}
              className="h-4 w-4 rounded border-gray-300 text-[var(--c-primary)] focus:ring-[var(--c-primary)]"
            />
            <span style={{ color: selectedSpecialties.length === 0 ? "var(--c-text)" : "inherit" }}>All</span>
          </label>

          {availableSpecialties.map((spec) => {
            const isChecked = selectedSpecialties.includes(spec);
            return (
              <label key={spec} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onSpecialtiesChange([...selectedSpecialties, spec]);
                    } else {
                      onSpecialtiesChange(selectedSpecialties.filter((s) => s !== spec));
                    }
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-[var(--c-primary)] focus:ring-[var(--c-primary)]"
                />
                <span style={{ color: isChecked ? "var(--c-text)" : "inherit" }}>{spec}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Experience Range */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <div className="flex justify-between items-center text-[13px] font-semibold mb-2">
          <span>Min. Experience</span>
          <span className="text-[12px] font-bold text-[var(--c-primary-600)]">
            {experienceRange === 0 ? "Any" : `${experienceRange} ${experienceRange === 15 ? "+" : ""} yrs`}
          </span>
        </div>

        <div className="px-1">
          <input
            type="range"
            min={0}
            max={15}
            value={experienceRange}
            onChange={(e) => onExperienceRangeChange(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--c-primary-600)]"
          />
          <div className="mt-1 flex justify-between text-[11px]" style={{ color: "var(--c-text-muted)" }}>
            <span>0 yrs</span>
            <span>15+ yrs</span>
          </div>
        </div>
      </div>

      {/* Rating Range */}
      <div className="mt-6 border-t border-gray-100 pt-5">
        <div className="flex justify-between items-center text-[13px] font-semibold mb-2">
          <span>Min. Star Rating</span>
          <span className="text-[12px] font-bold text-[var(--c-primary-600)]">
            {ratingRange === 0 ? "Any" : `${ratingRange.toFixed(1)} ★`}
          </span>
        </div>

        <div className="px-1">
          <input
            type="range"
            min={0}
            max={5}
            step={0.5}
            value={ratingRange}
            onChange={(e) => onRatingRangeChange(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--c-primary-600)]"
          />
          <div className="mt-1 flex justify-between text-[11px]" style={{ color: "var(--c-text-muted)" }}>
            <span>0.0 ★</span>
            <span>5.0 ★</span>
          </div>
        </div>
      </div>

      {/* Clear Filters button */}
      <div className="mt-8 border-t border-gray-100 pt-5">
        <Button
          className="h-[40px] w-full rounded-[12px] text-[13px] font-semibold text-[var(--c-text)] hover:bg-gray-100 transition-colors"
          variant="tertiary"
          onClick={onClear}
        >
          Clear All Filters
        </Button>
      </div>
    </aside>
  );
}
