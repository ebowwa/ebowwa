// src/app/ascii/ModelLoader.tsx
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const loadModel = async (modelPath: string): Promise<THREE.Object3D> => {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(modelPath);
  const model = gltf.scene;
  model.scale.set(100, 100, 100);
  return model;
};

export default loadModel;