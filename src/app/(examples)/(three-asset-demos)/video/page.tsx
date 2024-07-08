// https://codesandbox.io/s/39hg8
"use client"
import { Suspense, FC } from 'react'
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture, OrbitControls } from '@react-three/drei'

const App: FC = () => {
  return (
    <Canvas orthographic>
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}

export default App

const Scene: FC = () => {
  const size = useAspect(1800, 1000)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="video/10-example/10.jpg" />}>
        <VideoMaterial url="video/10-example/10.mp4" />
      </Suspense>
    </mesh>
  )
}

interface VideoMaterialProps {
  url: string
}

const VideoMaterial: FC<VideoMaterialProps> = ({ url }) => {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

interface FallbackMaterialProps {
  url: string
}

const FallbackMaterial: FC<FallbackMaterialProps> = ({ url }) => {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}