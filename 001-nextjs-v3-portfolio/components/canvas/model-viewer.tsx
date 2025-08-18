'use client';

import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';
import { selectModelState, setModelLoaded } from '@/lib/store/slices/modelSlice';
import * as THREE from 'three';

export function ModelViewer() {
  const dispatch = useDispatch();
  const modelState = useSelector(selectModelState);
  const modelRef = useRef<THREE.Group>();
  const { scene, animations } = useGLTF('/models/avatar.glb');
  const { actions, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      dispatch(setModelLoaded(true));
    }

    // Play initial animation
    if (actions && actions[modelState.currentAnimation]) {
      actions[modelState.currentAnimation].reset().fadeIn(0.5).play();
    }

    return () => {
      mixer?.stopAllAction();
    };
  }, [scene, dispatch, actions, modelState.currentAnimation, mixer]);

  useFrame((state) => {
    if (modelRef.current) {
      // Smooth floating animation
      const time = state.clock.getElapsedTime();
      const floatingY = Math.sin(time * 0.5) * 0.1;

      // Lerp to target position
      modelRef.current.position.lerp(
        new THREE.Vector3(
          modelState.position[0],
          modelState.position[1] + floatingY,
          modelState.position[2]
        ),
        0.05
      );

      // Smooth rotation
      const targetQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(...modelState.rotation)
      );
      modelRef.current.quaternion.slerp(targetQuaternion, 0.05);
    }
  });

  return (
    <group ref={modelRef} position={modelState.position} scale={modelState.scale}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/avatar.glb');