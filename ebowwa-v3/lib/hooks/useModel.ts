'use client';

import { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { selectAvatarState } from '../store/slices/avatarSlice';

export function useModel(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const avatarState = useSelector(selectAvatarState);
  const { scene: model } = useGLTF(url);

  useEffect(() => {
    if (model) {
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      setIsLoading(false);
    }
  }, [model]);

  useFrame((state) => {
    if (model) {
      const time = state.clock.getElapsedTime();
      const floatingY = Math.sin(time * 0.5) * 0.1;
      model.position.y = avatarState.position[1] + floatingY;
    }
  });

  return { model, isLoading };
}