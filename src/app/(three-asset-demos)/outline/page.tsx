"use client"
// https://codesandbox.io/p/sandbox/selective-outlines-d36mw?file=%2Fsrc%2FApp.js%3A1%2C1-38%2C1
import * as THREE from 'three';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'

interface BoxProps {
  position: [number, number, number]
}

const Box: React.FC<BoxProps> = ({ position }) => {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = ref.current.rotation.y += delta
    }
  })

  return (
    <Select enabled={hovered}>
      <mesh ref={ref} position={position} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Select>
  )
}

const App: React.FC = () => {
  return (
    <Canvas dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline blur visibleEdgeColor={0xffffff} edgeStrength={100} width={1000} />
        </EffectComposer>
        <Box position={[-1, 0, 0]} />
        <Box position={[1, 0, 0]} />
      </Selection>
      <OrbitControls />
    </Canvas>
  )
}

export default App