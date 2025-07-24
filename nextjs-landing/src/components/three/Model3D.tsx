// @/components/Model3D.tsx
"use client"
import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Model3DProps {
  modelData: {
    url: string;
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
  };
}

const Model: React.FC<{ modelData: Model3DProps['modelData'] }> = ({ modelData }) => {
  const gltf = useLoader(GLTFLoader, modelData.url);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.position.set(...modelData.position);
      gltf.scene.rotation.set(...modelData.rotation);
      gltf.scene.scale.set(...modelData.scale);
    }
  }, [gltf, modelData]);

  useFrame((state) => {
    if (gltf.scene) {
      gltf.scene.rotation.y += 0.01;
    }
  });

  return <primitive object={gltf.scene} />;
};

const OrbitControlsComponent: React.FC = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<OrbitControls>();

  useEffect(() => {
    controlsRef.current = new OrbitControls(camera, gl.domElement);
    return () => {
      controlsRef.current?.dispose();
    };
  }, [camera, gl]);

  return null;
};

export const Model3D: React.FC<Model3DProps> = ({ modelData }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      ref={canvasRef}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model modelData={modelData} />
      <OrbitControlsComponent />
    </Canvas>
  );
};