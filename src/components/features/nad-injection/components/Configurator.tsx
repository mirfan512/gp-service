import React from "react";
import { SelectionButton } from "./SelectionButton";
import { PRODUCT_TYPES, PACKAGE_SIZES, STRENGTHS, ProductSelectionState } from "../constants";

interface ConfiguratorProps {
  selection: ProductSelectionState;
  updateSelection: (updates: Partial<ProductSelectionState>) => void;
}

export const Configurator: React.FC<ConfiguratorProps> = ({
  selection,
  updateSelection,
}) => {
  return (
    <div className="space-y-8">
      {/* Title & Description from Figma */}
      <div className="space-y-6">
        <h1 className="text-[32px] lg:text-[44px] font-bold text-[#EDB984] leading-tight">
          NAD+ Injections by Vivere
        </h1>
        <div className="space-y-4 text-gray-600 text-lg lg:text-xl leading-relaxed font-secondary">
          <p>
            Restoring levels of NAD+ can help to repair damage to DNA, increase energy levels, boost metabolism, combat oxidative stress and also help to improve how you feel both mentally and physically.
          </p>
          <p>
            The NAD+ pen is the only one manufactured in a trusted UK facility that is both MHRA licensed and GMP-certified for sterile liquid production. It&apos;s also the only NAD+ supplied by an NHS-approved and UKAS-certified partner.
          </p>
        </div>
      </div>

      {/* Select Type */}
      <div className="space-y-3">
        <h3 className="text-[#EDB984] font-bold text-lg">Select Type:</h3>
        <div className="flex flex-wrap gap-4">
          {PRODUCT_TYPES.map((type) => (
            <SelectionButton
              key={type}
              label={type}
              isSelected={selection.type === type}
              onClick={() => updateSelection({ type })}
              className="flex-1 lg:flex-none"
            />
          ))}
        </div>
      </div>

      {/* Package Size */}
      <div className="space-y-3">
        <h3 className="text-[#EDB984] font-bold text-lg">Package Size:</h3>
        <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4">
          {PACKAGE_SIZES.map((size) => (
            <SelectionButton
              key={size}
              label={size}
              isSelected={selection.size === size}
              onClick={() => updateSelection({ size })}
              className={size === "3 Months" ? "col-span-2 lg:flex-none" : ""}
            />
          ))}
        </div>
      </div>

      {/* Strength */}
      <div className="space-y-3">
        <h3 className="text-[#EDB984] font-bold text-lg">Strength:</h3>
        <div className="flex">
          {STRENGTHS.map((strength) => (
            <SelectionButton
              key={strength}
              label={strength}
              isSelected={true}
              onClick={() => { }}
              className="w-full lg:w-auto min-w-[200px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
