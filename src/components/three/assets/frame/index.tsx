// src/components/three/assets/frame/index.tsx
"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PictureFrame } from '@/components/three/assets/Picture_frame'
import { OrbitControls, Environment } from '@react-three/drei'
import tunnel from 'tunnel-rat'
import ImagePlane from './ImagePlane'

const t = tunnel()

interface ImageDisplayComponentProps {
  imageSource: string
  showImage: boolean
}

const ImageDisplayComponent: React.FC<ImageDisplayComponentProps> = ({ imageSource, showImage }) => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={6.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0} penumbra={1} intensity={2} castShadow />
        <PictureFrame />
        <OrbitControls />
        <Environment preset="city" />

        {showImage && <ImagePlane imageSource={imageSource} />}
      </Canvas>
      <div id="ui">
        <t.Out />
      </div>
    </div>
  )
}

export default ImageDisplayComponent