import { clsx, type ClassValue } from "clsx";
import { MotionValue, useTransform } from "motion/react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Smooth scroll to top function
export const scrollToTop = (e: React.MouseEvent) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ======================================
// HELPER FUNCTIONS
// ======================================
// Helper function for transforming MotionValue to CSS values
// Used for dynamic styling based on scroll position
export const transformToCss = (
  value: MotionValue<number>,
  transformer: (v: number) => string,
) => {
  return useTransform(value, transformer);
};
