// src/app/(three-asset-demos)/picture-frame/page.tsx
'use client'

import React, { useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { PictureFrame } from '@/components/three/assets/frame/Picture_frame'
import { OrbitControls, Environment, useTexture } from '@react-three/drei'
import tunnel from 'tunnel-rat'
import Image from 'next/image'
import myImage from 'public/img/GNjTh2zaYAABiaQ.jpg'

const t = tunnel()

const ImagePlaneComponent = () => {
    const texture = useTexture(myImage.src)
  
    // Define the rotation angle around the Z-axis
    const rotationAngle = 0 // in degrees
    // Convert the angle to radians
    const radians = (rotationAngle * Math.PI) / 180
  
    // Get the size of the picture frame
    const pictureFrameWidth = 1.7
    const pictureFrameHeight = 1
  
    // Calculate the position to center the image within the picture frame
    const imageWidth = 1.7
    const imageHeight = 1
    const positionX = 0
    const positionY = 0
    const positionZ = 0
  
    // Define more points for the image plane
    const widthSegments = 10
    const heightSegments = 10
  
    return (
      <mesh position={[positionX, positionY, positionZ]} rotation={[0, 0.5, radians]}>
        <planeGeometry args={[imageWidth, imageHeight, widthSegments, heightSegments]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    )
  }

export default function Home() {
  const [showImage, setShowImage] = useState(true)

  const toggleImageDisplay = () => {
    setShowImage((prevState) => !prevState)
  }

  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={6.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0} penumbra={1} intensity={2} castShadow />
        <PictureFrame />
        <OrbitControls />
        <Environment preset="city" />

        {/* Display the image within the picture frame if showImage is true */}
        {showImage && <ImagePlaneComponent />}

        {/* Keep the text overlay in the toolbelt */}
        <t.In>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            <h1>Picture Frame</h1>
            <p>Here we trained the most dog 💩</p>
            <button onClick={toggleImageDisplay}>
              {showImage ? 'Hide Image' : 'Show Image'}
            </button>
          </div>
        </t.In>
      </Canvas>
      <div id="ui">
        <t.Out />
      </div>
    </div>
  )
}