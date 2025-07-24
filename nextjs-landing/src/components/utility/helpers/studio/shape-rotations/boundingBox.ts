import { rotateShape2D, rotateShape3D } from './rotate-shape';
import { Point2D, Point3D, Angles3D, Shape2D, Shape3D, BoundingBox2D, BoundingBox3D } from './types';


/**
 * Rotates a 2D shape around the origin by the given angle in radians, and returns the bounding box.
 * @param shape - The shape to rotate.
 * @param angle - The angle of rotation in radians.
 * @returns The bounding box of the rotated shape.
 */
export function getBoundingBox2D(shape: Shape2D, angle: number): BoundingBox2D {
    const rotatedShape = rotateShape2D(shape, angle);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    for (const point of rotatedShape) {
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
    }

    return { minX, minY, maxX, maxY };
}

/**
 * Rotates a 3D shape around the origin by the given angles in radians, and returns the bounding box.
 * @param shape - The shape to rotate.
 * @param angles - The angles of rotation in radians (x, y, z).
 * @returns The bounding box of the rotated shape.
 */
export function getBoundingBox3D(shape: Shape3D, angles: Angles3D): BoundingBox3D {
    const rotatedShape = rotateShape3D(shape, angles);
    let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    for (const point of rotatedShape) {
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        minZ = Math.min(minZ, point.z);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);
        maxZ = Math.max(maxZ, point.z);
    }

    return { minX, minY, minZ, maxX, maxY, maxZ };
}