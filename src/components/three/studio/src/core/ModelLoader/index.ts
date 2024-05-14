// src/components/three/studio/src/core/ModelLoader/index.ts
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: any;
  };
  materials: {
    [key: string]: any;
  };
};