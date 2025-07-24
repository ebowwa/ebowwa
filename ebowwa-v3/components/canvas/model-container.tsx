'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useDispatch, useSelector } from 'react-redux';
import { selectAvatarState } from '@/lib/store/slices/avatarSlice';
import { Group } from 'three';
import * as THREE from 'three';

export function ModelContainer() {
  const modelRef = useRef<Group>(null);
  const { scene: model } = useGLTF('/models/model.glb');
  const avatarState = useSelector(selectAvatarState);

  useEffect(() => {
    if (model) {
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.roughness = 0.5;
            child.material.metalness = 0.5;
          }
        }
      });
    }
  }, [model]);

  useFrame((state) => {
    if (modelRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Reduced floating height and smoother animation
      const floatingY = Math.sin(time * 0.5) * 0.05;
      const floatingX = Math.sin(time * 0.3) * 0.025;
      
      // Adjusted base position to be lower
      modelRef.current.position.lerp(
        new THREE.Vector3(
          avatarState.position[0] + floatingX,
          -2 + floatingY, // Lower base position
          avatarState.position[2]
        ),
        0.05
      );

      // Smooth rotation with slight idle movement
      const targetQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          avatarState.rotation[0],
          avatarState.rotation[1] + Math.sin(time * 0.2) * 0.05,
          avatarState.rotation[2]
        )
      );
      modelRef.current.quaternion.slerp(targetQuaternion, 0.03);

      // Subtle breathing animation
      const breathingScale = 1 + Math.sin(time * 2) * 0.005;
      modelRef.current.scale.setScalar(breathingScale * 1.75); // Adjusted scale
    }
  });

  if (!model) return null;

  return (
    <group ref={modelRef} position={[0, -2, 0]} rotation={[0, Math.PI, 0]}>
      <primitive object={model} />
      
      {/* Enhanced lighting for better model visibility */}
      <pointLight
        position={[0, 3, 2]}
        intensity={0.8}
        color="#ffffff"
        distance={8}
      />
      <spotLight
        position={[-3, 4, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.4}
        color="#4f46e5"
        castShadow
      />
      <spotLight
        position={[3, 4, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.4}
        color="#ec4899"
        castShadow
      />
    </group>
  );
}

useGLTF.preload('/models/model.glb');