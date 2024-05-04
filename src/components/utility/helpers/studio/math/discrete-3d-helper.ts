// utils/discrete-3d-helpers.ts
import * as THREE from 'three';

/**
 * Represents a 3D voxel grid.
 */
export class VoxelGrid {
    private grid: boolean[][][];
    public readonly width: number;
    public readonly height: number;
    public readonly depth: number;

    constructor(width: number, height: number, depth: number) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.grid = new Array(depth).fill(0).map(() => new Array(height).fill(0).map(() => new Array(width).fill(false)));
    }

    /**
     * Sets the value of a voxel in the grid.
     * @param x The x-coordinate of the voxel.
     * @param y The y-coordinate of the voxel.
     * @param z The z-coordinate of the voxel.
     * @param value The value to set the voxel to.
     */
    set(x: number, y: number, z: number, value: boolean): void {
        this.grid[z][y][x] = value;
    }

    /**
     * Gets the value of a voxel in the grid.
     * @param x The x-coordinate of the voxel.
     * @param y The y-coordinate of the voxel.
     * @param z The z-coordinate of the voxel.
     * @returns The value of the voxel.
     */
    get(x: number, y: number, z: number): boolean {
        return this.grid[z][y][x];
    }

    /**
     * Generates a Three.js mesh from the voxel grid.
     * @param scene The Three.js scene to add the mesh to.
     * @returns The Three.js mesh representing the voxel grid.
     */
    toMesh(scene: THREE.Scene): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material);

        for (let z = 0; z < this.depth; z++) {
            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {
                    if (this.get(x, y, z)) {
                        const cube = mesh.clone();
                        cube.position.set(x, y, z);
                        scene.add(cube);
                    }
                }
            }
        }

        return mesh;
    }
}

/**
 * Represents a 3D cellular automaton.
 */
export class CellularAutomaton {
    private grid: VoxelGrid;
    private rules: (neighbors: number) => boolean;

    constructor(width: number, height: number, depth: number, rules: (neighbors: number) => boolean) {
        this.grid = new VoxelGrid(width, height, depth);
        this.rules = rules;
    }

    /**
     * Advances the cellular automaton by one step.
     * @param scene The Three.js scene to update.
     */
    step(scene: THREE.Scene): void {
        const newGrid = new VoxelGrid(this.grid.width, this.grid.height, this.grid.depth);

        for (let z = 0; z < this.grid.depth; z++) {
            for (let y = 0; y < this.grid.height; y++) {
                for (let x = 0; x < this.grid.width; x++) {
                    const neighbors = this.countNeighbors(x, y, z);
                    newGrid.set(x, y, z, this.rules(neighbors));
                }
            }
        }

        scene.remove(this.grid.toMesh(scene));
        this.grid = newGrid;
        scene.add(this.grid.toMesh(scene));
    }

    /**
     * Counts the number of active neighbors for a given voxel.
     * @param x The x-coordinate of the voxel.
     * @param y The y-coordinate of the voxel.
     * @param z The z-coordinate of the voxel.
     * @returns The number of active neighbors.
     */
    private countNeighbors(x: number, y: number, z: number): number {
        let count = 0;
        for (let dz = -1; dz <= 1; dz++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0 && dz === 0) continue;
                    const nx = x + dx;
                    const ny = y + dy;
                    const nz = z + dz;
                    if (nx >= 0 && nx < this.grid.width && ny >= 0 && ny < this.grid.height && nz >= 0 && nz < this.grid.depth) {
                        if (this.grid.get(nx, ny, nz)) {
                            count++;
                        }
                    }
                }
            }
        }
        return count;
    }
}