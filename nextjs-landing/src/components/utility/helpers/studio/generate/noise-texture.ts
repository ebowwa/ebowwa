import * as THREE from 'three';

/**
 * Generates a noisy texture.
 * @param size - The size of the texture (width and height).
 * @returns A THREE.DataTexture filled with random noise.
 */
export function generateNoiseTexture(size: number): THREE.DataTexture {
    const data = new Float32Array(size * size * 4);

    for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.random();
        data[i + 1] = Math.random();
        data[i + 2] = Math.random();
        data[i + 3] = 1.0;
    }

    const texture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.FloatType);
    texture.needsUpdate = true;

    return texture;
}