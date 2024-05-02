import { BufferGeometry } from 'three';

/**
 * Randomly displaces the vertices of a Three.js geometry, creating a glitching effect.
 * @param geometry - The BufferGeometry to be glitchified.
 * @param intensity - The intensity of the glitch effect.
 */
export function glitchifyGeometry(geometry: BufferGeometry, intensity: number): void {
    const positions = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * intensity;
        positions[i + 1] += (Math.random() - 0.5) * intensity;
        positions[i + 2] += (Math.random() - 0.5) * intensity;
    }

    geometry.attributes.position.needsUpdate = true;
}