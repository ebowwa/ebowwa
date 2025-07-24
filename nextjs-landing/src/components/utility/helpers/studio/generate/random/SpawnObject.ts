import { Scene, Mesh, BufferGeometry, Material } from 'three';

/**
 * Spawns objects recursively with random transformations.
 * @param scene - The Three.js scene to add the objects to.
 * @param geometry - The geometry to use for the objects.
 * @param material - The material to use for the objects.
 * @param depth - The current depth of the recursion.
 * @param maxDepth - The maximum depth of the recursion.
 */
export function spawnObjects(
    scene: Scene,
    geometry: BufferGeometry,
    material: Material,
    depth: number,
    maxDepth: number
): void {
    if (depth > maxDepth) return;

    const object = new Mesh(geometry, material);
    object.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
    );
    object.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    object.scale.setScalar(Math.random() * 0.5 + 0.5);

    scene.add(object);

    spawnObjects(scene, geometry, material, depth + 1, maxDepth);
}