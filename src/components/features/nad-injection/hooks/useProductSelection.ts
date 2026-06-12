import { useState, useMemo } from "react";
import { ProductSelectionState } from "../constants";
import { PRICING } from "../constants";

export const useProductSelection = () => {
  const [selection, setSelection] = useState<ProductSelectionState>({
    type: "Pen Kit",
    size: "1 month",
    strength: "1000mg",
  });

  const price = useMemo(() => {
    return PRICING[selection.type][selection.size];
  }, [selection]);

  const updateSelection = (updates: Partial<ProductSelectionState>) => {
    setSelection((prev) => ({ ...prev, ...updates }));
  };

  return {
    selection,
    price,
    updateSelection,
  };
};
