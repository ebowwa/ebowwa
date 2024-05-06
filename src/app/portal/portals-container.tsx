"use client"
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Preload } from '@react-three/drei'
import { usePathname, useSearchParams } from 'next/navigation'
import { easing } from 'maath'
import { suspend } from 'suspend-react'

extend({ roundedPlaneGeometry: THREE.PlaneGeometry })

const regular = (suspend(() => import('@pmndrs/assets/fonts/inter_regular.woff')).default as { default: string }).default;
const medium = (suspend(() => import('@pmndrs/assets/fonts/inter_medium.woff')).default as { default: string }).default;

interface PortalMaterialType {
  resolution: THREE.Vector2;
  blur: number;
  blend: number;
  size?: number;
  sdf?: THREE.Texture;
  map?: THREE.Texture;
}

export default function Component() {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
      <color attach="background" args={['#f0f0f0']} />
      <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif" bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
        <Gltf src="/models/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={8} position={[0, -0.7, -2]} />
      </Frame>
      <Frame id="02" name="tea" author="Omar Faruq Tawsif" bg="#000000">
        <Gltf src="/models/fiesta_tea-transformed.glb" position={[0, -2, -3]} />
      </Frame>
      <Frame id="03" name="still" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
        <Gltf src="/models/still_life_based_on_heathers_artwork-transformed.glb" scale={2} position={[0, -0.8, -4]} />
      </Frame>
      <Rig />
      <Preload all />
    </Canvas>
  )
}

function Frame({ id, name, author, bg, width = 1, height = 1.61803398875, position, rotation, children, ...props }: {
  id: string;
  name: string;
  author: string;
  bg: string;
  width?: number;
  height?: number;
  position?: number[];
  rotation?: number[];
  children?: React.ReactNode;
}) {
  const portal = useRef<PortalMaterialType>(null!)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', searchParams.get('id') === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      <Text font={medium} fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
      <Text font={regular} fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
        /{id}
      </Text>
      <Text font={regular} fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
        {author}
      </Text>
      <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), void (pathname.includes('/item/') ? pathname.replace(`/item/${searchParams.get('id')}`, `/item/${id}`) : pathname.replace('/', `/item/${id}`)))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <planeGeometry args={[width, height]} />
        <MeshPortalMaterial ref={portal} events={searchParams.get('id') === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) {
  const { camera, scene } = useThree()
  const searchParams = useSearchParams()
  useEffect(() => {
    const active = scene.getObjectByName(searchParams.get('id'))
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    camera.lookAt(position.x, position.y, position.z)
  }, [camera, scene, searchParams, position, focus])
  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}