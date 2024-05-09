"use client"
import * as THREE from 'three'
import { useEffect, useReducer, useRef, useState } from 'react'
import { useFrame, Canvas as ThreeCanvas, CanvasProps } from '@react-three/fiber'
import { OrbitControls, useCursor } from '@react-three/drei'
import tunnel from 'tunnel-rat'

const webgl = tunnel()
const html = tunnel()

const Box = () => {
  const ref = useRef<THREE.Mesh>(null)
  const [count, up] = useReducer((state: number) => state + 1, 0)
  const [color, set] = useState<string>('#ff2040')
  const [hovered, hover] = useState<boolean>(false)
  useCursor(hovered)
  useEffect(() => {
    const interval = setInterval(() => set('#' + new THREE.Color(Math.random(), Math.random(), Math.random()).getHexString()), 1000)
    return () => clearInterval(interval)
  }, [])
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = ref.current.rotation.y += 0.01
    }
  })
  return (
    <>
      <mesh
        ref={ref}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={up}
      >
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
      <html.In>
        <h1>
          {count}/{color}
        </h1>
      </html.In>
    </>
  )
}

export default function App() {
  const ref = useRef<THREE.Mesh>(null)
  useEffect(() => {
    console.log(ref)
  }, [])
  return (
    <>
      <ThreeCanvas camera={{ zoom: 100 }} orthographic>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <webgl.Out />
      </ThreeCanvas>
      <div className="overlay">
        <webgl.In>
          <Box />
          <OrbitControls />
        </webgl.In>
        <html.Out />
      </div>
    </>
  )
}