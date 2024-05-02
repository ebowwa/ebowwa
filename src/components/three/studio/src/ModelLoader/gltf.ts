// src/components/gltf.ts
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, Material } from 'three';

export type GLTFResult = GLTF & {
    nodes: {
        [key: string]: Mesh;
    };
    materials: {
        [key: string]: Material;
    };
};