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

// Define types for the helper functions
interface Point2D {
    x: number;
    y: number;
}

interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Angles3D {
    x: number;
    y: number;
    z: number;
}

export type Shape2D = Point2D[];
export type Shape3D = Point3D[];

interface BoundingBox2D {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

interface BoundingBox3D {
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;
}
