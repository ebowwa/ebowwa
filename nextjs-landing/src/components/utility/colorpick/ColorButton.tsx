// @/components/ColorPicker/ColorButton.tsx
import React from 'react';
import { GrabIcon } from "@/components/landing/ui/icons";

interface ColorButtonProps {
  color: string;
  hasIcon?: boolean;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color, hasIcon = false }) => (
  <button className={`w-10 h-10 rounded-full ${color} flex items-center justify-center`}>
    {hasIcon && <GrabIcon className="text-white" />}
  </button>
);

export default ColorButton;
