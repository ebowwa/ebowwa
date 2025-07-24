// components/ui/useTouchCapability.ts
"use client";

export const useTouchCapability = (): boolean => {
  // Check for touch capability
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
