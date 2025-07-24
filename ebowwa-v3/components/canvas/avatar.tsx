'use client';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useAvatarControls } from '@/lib/hooks/useAvatarControls';
import { useSelector } from 'react-redux';
import { selectNavigationState } from '@/lib/store/slices/navigationSlice';

export function Avatar() {
  const avatarRef = useRef<THREE.Group>();
  const { scene } = useGLTF('/models/avatar.glb');
  const { avatarState, updateAvatarForSection } = useAvatarControls();
  const { currentSection } = useSelector(selectNavigationState);

  useFrame((state) => {
    if (avatarRef.current) {
      // Base floating animation
      const floatingY = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Lerp current position to target position
      avatarRef.current.position.lerp(
        new THREE.Vector3(
          avatarState.position[0],
          avatarState.position[1] + floatingY,
          avatarState.position[2]
        ),
        0.05
      );

      // Lerp current rotation to target rotation
      const targetQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          avatarState.rotation[0],
          avatarState.rotation[1],
          avatarState.rotation[2]
        )
      );
      avatarRef.current.quaternion.slerp(targetQuaternion, 0.05);
    }
  });

  // Update avatar position when section changes
  React.useEffect(() => {
    updateAvatarForSection(currentSection);
  }, [currentSection, updateAvatarForSection]);

  return (
    <primitive 
      ref={avatarRef} 
      object={scene} 
      scale={2}
      position={avatarState.position}
      rotation={avatarState.rotation}
    />
  );
}

useGLTF.preload('/models/avatar.glb');