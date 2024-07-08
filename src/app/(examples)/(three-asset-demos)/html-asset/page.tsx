"use client"
// https://codesandbox.io/s/7ucso
import { useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { Slider } from 'antd'
import { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls'

interface BoxProps {
  size: number
  set: (value: number) => void
}

const Box: React.FC<BoxProps> = ({ size, set }) => {
  const controls = useThree((state) => state.controls) as OrbitControlsType
  return (
    <mesh scale={size * 2}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html occlude distanceFactor={1.5} position={[0, 0, 0.51]} transform>
        <span>Size</span>
        <Slider
          style={{ width: 100 }}
          min={0.5}
          max={1}
          step={0.01}
          value={size}
          onChange={(value) => ((controls.enabled = false), set(value))}
          onAfterChange={() => (controls.enabled = true)}
        />
      </Html>
    </mesh>
  )
}

const App: React.FC = () => {
  const [size, set] = useState<number>(0.5)

  return (
    <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Box size={size} set={set} />
      <OrbitControls makeDefault />
    </Canvas>
  )
}

export default App