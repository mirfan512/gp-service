import * as React from "react";
import clsx from "clsx";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function FormInput({ className, ...props }: FormInputProps) {
  return (
    <input
      {...props}
      className={clsx(
        "h-[48px] w-full rounded-[6px] px-3 text-[12px] outline-none border border-border bg-transparent",
        className
      )}
    />
  );
}

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function FormTextArea({ className, rows = 3, ...props }: FormTextAreaProps) {
  return (
    <textarea
      {...props}
      rows={rows}
      className={clsx(
        "w-full rounded-[6px] px-3 py-2 text-[12px] outline-none border border-border bg-transparent",
        className
      )}
    />
  );
}

type YesNo = "yes" | "no" | "";

interface FormRadioGroupProps {
  value: YesNo;
  onChange: (v: YesNo) => void;
  className?: string;
}

export function FormRadioGroup({ value, onChange, className }: FormRadioGroupProps) {
  return (
    <div className={clsx("ml-auto flex items-center gap-8", className)}>
      <label className="flex items-center gap-2 text-[12px] text-text-gray cursor-pointer">
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            checked={value === "yes"}
            onChange={() => onChange("yes")}
            className="peer h-[16px] w-[16px] appearance-none rounded-full border border border-[#BAC3AF] checked:bg-transparent"
          />
          <div className="absolute h-[8px] w-[8px] rounded-full bg-[#BAC3AF] opacity-0 peer-checked:opacity-100" />
        </div>
        <span>Yes</span>
      </label>

      <label className="flex items-center gap-2 text-[12px] text-text-gray cursor-pointer">
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            checked={value === "no"}
            onChange={() => onChange("no")}
            className="peer h-[16px] w-[16px] appearance-none rounded-full border border border-[#BAC3AF] checked:bg-transparent"
          />
          <div className="absolute h-[8px] w-[8px] rounded-full bg-[#BAC3AF] opacity-0 peer-checked:opacity-100" />
        </div>
        <span>No</span>
      </label>
    </div>
  );
}

export function FormSectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center font-inter font-bold text-[30px] leading-none text-primary mt-16">
      {children}
    </div>
  );
}

export function FormDivider() {
  return <div className="h-[18px]" />;
}

interface FormCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FormCheckbox({ label, ...props }: FormCheckboxProps) {
  return (
    <label className="flex items-start gap-3 text-[16px] text-text-gray cursor-pointer">
      <div className="relative flex h-[16px] min-w-[16px] items-center justify-center mt-[2px]">
        <input
          {...props}
          type="checkbox"
          className="peer h-full w-full appearance-none rounded-[3px] border border-[#A3B094] checked:bg-[#A3B094]"
        />
        <svg
          className="absolute h-[10px] w-[10px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={4}
        >
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="leading-[1.6]">{label}</span>
    </label>
  );
}
