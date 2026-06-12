export type ProductSelectionType = "Pen Kit" | "Refill Cartridges";
export type PackageSize = "1 month" | "2 Months" | "3 Months";
export type Strength = "1000mg";

export interface ProductSelectionState {
  type: ProductSelectionType;
  size: PackageSize;
  strength: Strength;
}

export const PRODUCT_TYPES: ProductSelectionType[] = ["Pen Kit", "Refill Cartridges"];
export const PACKAGE_SIZES: PackageSize[] = ["1 month", "2 Months", "3 Months"];
export const STRENGTHS: Strength[] = ["1000mg"];

export const PRICING: Record<ProductSelectionType, Record<PackageSize, number>> = {
  "Pen Kit": {
    "1 month": 340.0,
    "2 Months": 640.0,
    "3 Months": 920.0,
  },
  "Refill Cartridges": {
    "1 month": 280.0,
    "2 Months": 540.0,
    "3 Months": 780.0,
  },
};
