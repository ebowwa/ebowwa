// src/app/(three-asset-demos)/framey/page.tsx
"use client"
import { useState } from 'react'
import ImageDisplayComponent from '@/components/three/assets/frame'
import myImage from 'public/img/earth.jpg'
import myOtherImage from 'public/img/GNjTh2zaYAABiaQ.jpg'

export default function Home() {
  const [imageSource, setImageSource] = useState(myImage.src)
  const [showImage, setShowImage] = useState(true)

  const toggleImageDisplay = () => {
    setShowImage((prevState) => !prevState)
  }

  const changeImage = () => {
    setImageSource(imageSource === myImage.src ? myOtherImage.src : myImage.src)
  }

  return (
    <main>
      <ImageDisplayComponent imageSource={imageSource} showImage={showImage} />
      <div className="controls">
        <button onClick={toggleImageDisplay}>
          {showImage ? 'Hide Image' : 'Show Image'}
        </button>
        <button onClick={changeImage}>Change Image</button>
      </div>
    </main>
  )
}