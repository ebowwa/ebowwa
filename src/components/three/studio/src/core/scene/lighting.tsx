import * as THREE from 'three';

export function setupLighting(
    scene: THREE.Scene,
    ambientLightColor: number,
    directionalLightColor: number,
    directionalLightIntensity: number,
    directionalLightPosition: THREE.Vector3
) {
    const ambientLight = new THREE.AmbientLight(ambientLightColor);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(directionalLightColor, directionalLightIntensity);
    directionalLight.position.copy(directionalLightPosition);
    scene.add(directionalLight);
}