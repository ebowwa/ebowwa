// app/page.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import Stars from '@/components/three/assets/Stars'

export default function Page() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  )
}