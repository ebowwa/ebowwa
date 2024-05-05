// app/page.tsx
"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from '@/components/three/assets/Billboard'
import ModelViewer from '@/components/ModelViewer'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <ModelViewer
        cameraPosition={[0, 0, 20]}
        environmentPreset="sunset"
        models={[
          {
            url: '/models/Coin.glb',
            position: [0, 0, 0],
          },
        ]}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </ModelViewer>
    </div>
  )
}