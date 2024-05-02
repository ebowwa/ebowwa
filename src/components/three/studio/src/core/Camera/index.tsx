import * as THREE from 'three';
import { Vector3 } from 'three';

export interface CameraConfig {
    fov: number;
    near: number;
    far: number;
    cameraPosition: {
        x: number;
        y: number;
        z: number;
    };
    targetPosition: {
        x: number;
        y: number;
        z: number;
    };
}

export class ThreeJSCamera {
    public camera: THREE.PerspectiveCamera;

    constructor(width: number, height: number, cameraConfig: CameraConfig) {
        this.camera = new THREE.PerspectiveCamera(
            cameraConfig.fov,
            width / height,
            cameraConfig.near,
            cameraConfig.far
        );
        this.camera.position.set(
            cameraConfig.cameraPosition.x,
            cameraConfig.cameraPosition.y,
            cameraConfig.cameraPosition.z
        );
        this.lookAt(
            cameraConfig.targetPosition.x,
            cameraConfig.targetPosition.y,
            cameraConfig.targetPosition.z
        );
    }

    lookAt(x: number, y: number, z: number) {
        this.camera.lookAt(new Vector3(x, y, z));
    }

    dispose() {
        this.camera.removeFromParent(); // Remove the camera from its parent object, if it was added to a scene or another object
        this.camera.clear(); // Clear the camera's properties and event listeners
    }
}
