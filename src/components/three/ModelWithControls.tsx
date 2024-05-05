// src/components/three/ModelWithControls.tsx
import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { Model, GLTFResult } from '@/components/three/assets/A_book_of_poems'

interface ModelWithControlsProps extends JSX.IntrinsicElements['group'] {
  cameraPosition: number[];
  cameraFov: number;
  lightPosition: number[];
  lightAngle: number;
  lightPenumbra: number;
}

const ModelWithControls: React.FC<ModelWithControlsProps> = ({
  cameraPosition,
  cameraFov,
  lightPosition,
  lightAngle,
  lightPenumbra,
  ...props
}) => {
  const group = useRef<THREE.Object3D>(null);
  const { nodes, materials } = useGLTF('/models/a_book_of_poems.glb') as GLTFResult;

  useEffect(() => {
    if (group.current) {
      group.current.position.set(...cameraPosition);
      (group.current as THREE.PerspectiveCamera).fov = cameraFov;
      (group.current as THREE.PerspectiveCamera).updateProjectionMatrix();

      group.current.children.forEach((child) => {
        if (child.name === 'LightCone_53') {
          child.position.set(...lightPosition);
          (child as THREE.Mesh).material.angle = lightAngle;
          (child as THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>).material.penumbra = lightPenumbra;
        }
      });
    }
  }, [cameraPosition, cameraFov, lightPosition, lightAngle, lightPenumbra, nodes, materials]);

  return (
    <Model ref={group} name="ModelWithControls" {...props} />
  );
};

export default ModelWithControls;