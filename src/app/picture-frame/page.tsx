'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from '@/components/three/assets/Picture_frame'
import { OrbitControls, Environment } from '@react-three/drei'

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={6.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
        <Model position={[0, 0, 0]} />
        <OrbitControls />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}