'use server'

import * as THREE from 'three';
import { ThreeJSSceneCreator } from '../../src/core/scene';

export async function SandboxContainerServer(
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
): Promise<{
    getScene(): THREE.Scene;
    getCamera(): THREE.PerspectiveCamera;
}> {
    const sceneCreator = new ThreeJSSceneCreator(
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

    return {
        getScene: () => sceneCreator.getScene(),
        getCamera: () => sceneCreator.getCamera(),
    };
}