// src/helpers/scene-utils.ts
import { BoundingBox3D, getBoundingBox3D } from "../shape-rotations";
import { Point2D, Point3D, Shape2D, Shape3D, BoundingBox2D } from '../shape-rotations/types';
/**
 * Calculates the location and orientation of an object within a 3D scene.
 * @param object - The 3D object to locate and orient.
 * @param sceneSize - The size of the 3D scene.
 * @param padding - The padding around the scene.
 * @returns The location and orientation of the object.
 */
export function ObjectTransform(
    object: Shape3D,
    sceneSize: { width: number; height: number; depth: number },
    padding: number = 0
): ObjectTransform {
    const boundingBox: BoundingBox3D = getBoundingBox3D(object, { x: 0, y: 0, z: 0 });
    const { minX, minY, minZ, maxX, maxY, maxZ } = boundingBox;

    const location: Point3D = {
        x: (minX + maxX) / 2,
        y: (minY + maxY) / 2,
        z: (minZ + maxZ) / 2,
    };

    const sceneWidth = sceneSize.width - 2 * padding;
    const sceneHeight = sceneSize.height - 2 * padding;
    const sceneDepth = sceneSize.depth - 2 * padding;

    const scale: Vector3D = {
        x: (maxX - minX) / sceneWidth,
        y: (maxY - minY) / sceneHeight,
        z: (maxZ - minZ) / sceneDepth,
    };

    const rotation: Angles3D = {
        x: 0,
        y: 0,
        z: 0,
    };

    return { location, scale, rotation };
}

/**
 * Calculates the user's viewing perspective within a 3D scene.
 * @param fov - The field of view angle in radians.
 * @param near - The near clipping plane distance.
 * @param far - The far clipping plane distance.
 * @param sceneSize - The size of the 3D scene.
 * @param padding - The padding around the scene.
 * @returns The user's viewing perspective.
 */
export function ViewingPerspective(
    fov: number,
    near: number,
    far: number,
    sceneSize: { width: number; height: number; depth: number },
    padding: number = 0
): ViewingPerspective {
    const aspect = (sceneSize.width - 2 * padding) / (sceneSize.height - 2 * padding);
    const projection = perspectiveMatrix(fov, aspect, near, far);

    const location: Point3D = {
        x: (sceneSize.width - 2 * padding) / 2,
        y: (sceneSize.height - 2 * padding) / 2,
        z: (sceneSize.depth - 2 * padding) / 2,
    };

    const rotation: Angles3D = {
        x: 0,
        y: 0,
        z: 0,
    };

    return { projection, location, rotation };
}

/**
 * Calculates the perspective projection matrix.
 * @param fov - The field of view angle in radians.
 * @param aspect - The aspect ratio of the viewport.
 * @param near - The near clipping plane distance.
 * @param far - The far clipping plane distance.
 * @returns The perspective projection matrix.
 */
function perspectiveMatrix(fov: number, aspect: number, near: number, far: number): Matrix4x4 {
    const f = 1.0 / Math.tan(fov / 2);
    return [
        [f / aspect, 0, 0, 0],
        [0, f, 0, 0],
        [0, 0, (far + near) / (near - far), -1],
        [0, 0, (2 * far * near) / (near - far), 0],
    ];
}

// Define types for the helper functions
// refactor these out

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

interface Angles3D {
    x: number;
    y: number;
    z: number;
}

export type Matrix4x4 = number[][];

export interface ObjectTransform {
    location: Point3D;
    scale: Vector3D;
    rotation: Angles3D;
}

export interface ViewingPerspective {
    projection: Matrix4x4;
    location: Point3D;
    rotation: Angles3D;
}