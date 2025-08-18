'use client';

import { Html } from '@react-three/drei';

export function LoadingScreen() {
  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    </Html>
  );
}