import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

export interface ImagePlaneProps {
  imageSource: string
  positionX?: number
  positionY?: number
  positionZ?: number
  rotationAngle?: number
  imageWidth?: number
  imageHeight?: number
  widthSegments?: number
  heightSegments?: number
}

export type GLTFResult = GLTF & {
    nodes: {
      defaultMaterial: THREE.Mesh;
    };
    materials: {
      defaultMaterial: THREE.MeshStandardMaterial;
    };
  };
  
export type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>;
