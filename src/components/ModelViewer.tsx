// src/components/ModelViewer.tsx
import React, { useEffect } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelInfo {
  url: string;
  position?: [number, number, number];
}

interface ModelViewerProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  environmentPreset?: 'sunset' | 'apartment' | 'city' | 'dawn' | 'forest' | 'lobby' | 'night' | 'park' | 'studio' | 'warehouse';
  models?: ModelInfo[];
}

const ModelViewer: React.FC<ModelViewerProps> = ({
  children,
  cameraPosition = [0, 0, 5],
  environmentPreset = 'sunset',
  models = [],
}) => {
  return (
    <Canvas>
      <ModelViewerContent
        cameraPosition={cameraPosition}
        environmentPreset={environmentPreset}
        models={models}
      >
        {children}
      </ModelViewerContent>
    </Canvas>
  );
};

const EnvironmentPreset: React.FC<{ preset: 'sunset' | 'apartment' | 'city' | 'dawn' | 'forest' | 'lobby' | 'night' | 'park' | 'studio' | 'warehouse' }> = ({ preset }) => {
  return <Environment preset={preset} />;
};

const ModelViewerContent: React.FC<ModelViewerProps> = ({
  cameraPosition,
  environmentPreset,
  models,
  children,
}) => {
  const { camera, scene, gl } = useThree();

  useEffect(() => {
    camera.position.set(...cameraPosition);
  }, [camera, cameraPosition]);

  useEffect(() => {
    const loadModels = async () => {
      for (const model of models) {
        const { url, position = [0, 0, 0] } = model;
        const object = await useLoader(GLTFLoader, url);
        object.scene.position.set(...position);
        scene.add(object.scene);
      }
    };
    loadModels();
  }, [models, scene]);

  return (
    <>
      <EnvironmentPreset preset={environmentPreset} />
      <OrbitControls />
      {children}
    </>
  );
};

export default ModelViewer;