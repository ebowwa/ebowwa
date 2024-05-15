// src/components/three/assets/frame/ImagePlane.tsx
"use client"
import React from 'react'
import { useTexture } from '@react-three/drei'

interface ImagePlaneProps {
  imageSource: string
  positionX?: number
  positionY?: number
  positionZ?: number
  rotationAngle?: number
  imageWidth?: number
  imageHeight?: number
  widthSegments?: number
  heightSegments?: number
}

const ImagePlane: React.FC<ImagePlaneProps> = ({
  imageSource,
  positionX = 0,
  positionY = 0,
  positionZ = 0,
  rotationAngle = 0,
  imageWidth = 1.7,
  imageHeight = 1,
  widthSegments = 10,
  heightSegments = 10,
}) => {
  const texture = useTexture(imageSource)

  const radians = (rotationAngle * Math.PI) / 180

  return (
    <mesh position={[positionX, positionY, positionZ]} rotation={[0, 0.5, radians]}>
      <planeGeometry args={[imageWidth, imageHeight, widthSegments, heightSegments]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export default ImagePlane