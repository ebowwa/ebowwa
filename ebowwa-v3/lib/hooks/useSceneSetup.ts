'use client';

import { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function useSceneSetup() {
  const { scene, gl } = useThree();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Scene setup
    scene.background = null;
    gl.setClearColor(0x000000, 0);
    gl.setPixelRatio(window.devicePixelRatio);

    // Enable shadow mapping
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;

    setIsReady(true);
  }, [scene, gl]);

  return { isReady };
}