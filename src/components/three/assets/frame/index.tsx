// src/components/three/assets/frame/index.tsx
"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PictureFrame } from '@/components/three/assets/frame/Picture_frame'
import { OrbitControls, Environment } from '@react-three/drei'
import tunnel from 'tunnel-rat'
import ImagePlane from './ImagePlane'

// Import the tunnel-rat library for UI interactions
const t = tunnel()

// Define the props for the ImageDisplayComponent
interface ImageDisplayComponentProps {
  // The source of the image to be displayed
  imageSource: string
  // A flag to determine whether the image should be displayed
  showImage: boolean
}

// The ImageDisplayComponent is a React functional component
const ImageDisplayComponent: React.FC<ImageDisplayComponentProps> = ({ imageSource, showImage }) => {
  return (
    // Wrap the entire component in a div with full-screen dimensions
    <div className="w-screen h-screen">
      {/* Render the Three.js Canvas component */}
      <Canvas>
        {/* Add an ambient light to the scene */}
        <ambientLight intensity={6.5} />
        {/* Add a point light to the scene */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        {/* Add a spot light to the scene */}
        <spotLight position={[10, 10, 10]} angle={0} penumbra={1} intensity={2} castShadow />
        {/* Render the PictureFrame component */}
        <PictureFrame />
        {/* Add OrbitControls to the scene, allowing the user to navigate the camera */}
        <OrbitControls />
        {/* Set the environment preset to "city" */}
        <Environment preset="city" />

        {/* If the showImage prop is true, render the ImagePlane component with the provided imageSource */}
        {showImage && <ImagePlane imageSource={imageSource} />}
      </Canvas>
      {/* Render the UI elements using the tunnel-rat library */}
      <div id="ui">
        <t.Out />
      </div>
    </div>
  )
}

export default ImageDisplayComponent