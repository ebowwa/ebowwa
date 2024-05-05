// app/Stars.tsx
'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

interface StarsProps {
  [key: string]: any
}

const Stars = (props: StarsProps) => {
  const ref = useRef<any>(null)
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

export default Stars