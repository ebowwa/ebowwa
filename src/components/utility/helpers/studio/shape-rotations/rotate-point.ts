import { Point2D, Point3D, Angles3D } from './types';

/**
 * Rotates a 2D point around the origin by the given angle in radians.
 * @param point - The point to rotate.
 * @param angle - The angle of rotation in radians.
 * @returns The rotated point.
 */
export function rotatePoint2D(point: Point2D, angle: number): Point2D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: point.x * cos - point.y * sin,
        y: point.x * sin + point.y * cos,
    };
}

/**
 * Rotates a 3D point around the origin by the given angles in radians.
 * @param point - The point to rotate.
 * @param angles - The angles of rotation in radians (x, y, z).
 * @returns The rotated point.
 */
export function rotatePoint3D(point: Point3D, angles: Angles3D): Point3D {
    const { x: angleX, y: angleY, z: angleZ } = angles;
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const cosZ = Math.cos(angleZ);
    const sinZ = Math.sin(angleZ);

    return {
        x:
            point.x *
            (cosY * cosZ) -
            point.y *
            (cosY * sinZ) +
            point.z *
            sinY,
        y:
            point.x *
            (sinX * sinY * cosZ + cosX * sinZ) -
            point.y *
            (sinX * sinY * sinZ - cosX * cosZ) -
            point.z *
            (sinX * cosY),
        z:
            point.x *
            (cosX * sinY * cosZ - sinX * sinZ) +
            point.y *
            (cosX * sinY * sinZ + sinX * cosZ) +
            point.z *
            (cosX * cosY),
    };
}