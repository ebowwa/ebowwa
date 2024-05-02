'use server'

import * as THREE from 'three';
import { AgXToneMapping } from 'three';

class ThreeJSSceneCreator {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;

    constructor(
        cameraFov: number,
        cameraNear: number,
        cameraFar: number,
        aspectRatio: number,
        ambientLightColor: number,
        directionalLightColor: number,
        directionalLightIntensity: number,
        directionalLightPositionX: number,
        directionalLightPositionY: number,
        directionalLightPositionZ: number
    ) {
        this.initScene(
            cameraFov,
            cameraNear,
            cameraFar,
            aspectRatio,
            ambientLightColor,
            directionalLightColor,
            directionalLightIntensity,
            directionalLightPositionX,
            directionalLightPositionY,
            directionalLightPositionZ
        );
    }

    private async initScene(
        cameraFov: number,
        cameraNear: number,
        cameraFar: number,
        aspectRatio: number,
        ambientLightColor: number,
        directionalLightColor: number,
        directionalLightIntensity: number,
        directionalLightPositionX: number,
        directionalLightPositionY: number,
        directionalLightPositionZ: number
    ): Promise<void> {
        this.scene = await this.createScene();
        this.camera = await this.createCamera(cameraFov, aspectRatio, cameraNear, cameraFar);
    }

    private createScene(): Promise<THREE.Scene> {
        return new Promise((resolve) => {
            resolve(new THREE.Scene());
        });
    }

    private createCamera(
        cameraFov: number,
        aspectRatio: number,
        cameraNear: number,
        cameraFar: number
    ): Promise<THREE.PerspectiveCamera> {
        return new Promise((resolve) => {
            const camera = new THREE.PerspectiveCamera(
                cameraFov,
                aspectRatio,
                cameraNear,
                cameraFar
            );
            camera.position.z = 5;
            resolve(camera);
        });
    }

    public getScene(): THREE.Scene {
        return this.scene;
    }

    public getCamera(): THREE.PerspectiveCamera {
        return this.camera;
    }
}

export { ThreeJSSceneCreator };