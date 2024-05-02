import * as THREE from 'three';

export interface ThreeJSSceneConfig {
    fov: number;
    near: number;
    far: number;
    aspect: number;
    cameraPosition: THREE.Vector3;
    controlsConfig: {
        target: THREE.Vector3;
        maxDistance: number;
        minDistance: number;
        maxPolarAngle: number;
    };
    ambientLightColor: number;
    directionalLightColor: number;
    directionalLightIntensity: number;
    directionalLightPosition: THREE.Vector3;
    backgroundColor: number;
    rendererConfig: {
        antialias: boolean;
        alpha: boolean;
    };
}