import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SelectionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

export const SelectionButton: React.FC<SelectionButtonProps> = ({
  label,
  isSelected,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}

      className={cn(
        "relative px-4 py-3 rounded-[20px] font-bold text-[18px] lg:text-base transition-all duration-300 min-w-[140px] flex items-center justify-center border",
        isSelected
          ? "border-[#DEDEDE] bg-white text-[#42589E] shadow-[inset_0_4px_20px_0_#EDB984]"
          : "border-transparent bg-transparent text-[#42589E] hover:border-nad-accent/30",
        className
      )}
    >
      {label}
    </button>
  );
};
