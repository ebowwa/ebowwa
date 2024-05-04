import { rotatePoint2D, rotatePoint3D } from './rotate-point';
import { Point2D, Point3D, Angles3D, Shape2D, Shape3D } from './types';


/**
 * Rotates a 2D shape around the origin by the given angle in radians.
 * @param shape - The shape to rotate.
 * @param angle - The angle of rotation in radians.
 * @returns The rotated shape.
 */
export function rotateShape2D(shape: Shape2D, angle: number): Shape2D {
    return shape.map((point) => rotatePoint2D(point, angle));
}

/**
 * Rotates a 3D shape around the origin by the given angles in radians.
 * @param shape - The shape to rotate.
 * @param angles - The angles of rotation in radians (x, y, z).
 * @returns The rotated shape.
 */
export function rotateShape3D(shape: Shape3D, angles: Angles3D): Shape3D {
    return shape.map((point) => rotatePoint3D(point, angles));
}

/**
 * Rotates a 2D shape around a given pivot point by the specified angle in radians.
 * @param shape - The shape to rotate.
 * @param angle - The angle of rotation in radians.
 * @param pivot - The pivot point to rotate the shape around.
 * @returns The rotated shape.
 */
export function rotateShape2DAroundPivot(
    shape: Shape2D,
    angle: number,
    pivot: Point2D
): Shape2D {
    return shape.map((point) => {
        const rotatedPoint = rotatePoint2D(point, angle);
        return {
            x: pivot.x + (rotatedPoint.x - pivot.x),
            y: pivot.y + (rotatedPoint.y - pivot.y),
        };
    });
}

/**
 * Rotates a 3D shape around a given pivot point by the specified angles in radians.
 * @param shape - The shape to rotate.
 * @param angles - The angles of rotation in radians (x, y, z).
 * @param pivot - The pivot point to rotate the shape around.
 * @returns The rotated shape.
 */
export function rotateShape3DAroundPivot(
    shape: Shape3D,
    angles: Angles3D,
    pivot: Point3D
): Shape3D {
    return shape.map((point) => {
        const rotatedPoint = rotatePoint3D(point, angles);
        return {
            x: pivot.x + (rotatedPoint.x - pivot.x),
            y: pivot.y + (rotatedPoint.y - pivot.y),
            z: pivot.z + (rotatedPoint.z - pivot.z),
        };
    });
}