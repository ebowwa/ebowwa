// src/components/ui/useTouchCapability.tsx
"use client";

export const useTouchCapability = (): boolean => {
  // Ensure this runs only on the client side
  if (typeof window !== "undefined") {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  // Default to false on the server side
  return false;
};
