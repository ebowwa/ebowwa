/**
 * Shears a 2D point by the given x and y factors.
 * @param point - The point to shear.
 * @param shearX - The x-shear factor.
 * @param shearY - The y-shear factor.
 * @returns The sheared point.
 */
export function shearPoint2D(point: Point2D, shearX: number, shearY: number): Point2D {
    return {
        x: point.x + shearX * point.y,
        y: point.y + shearY * point.x,
    };
}

/**
 * Shears a 3D point by the given x, y, and z factors.
 * @param point - The point to shear.
 * @param shearX - The x-shear factor.
 * @param shearY - The y-shear factor.
 * @param shearZ - The z-shear factor.
 * @returns The sheared point.
 */
export function shearPoint3D(point: Point3D, shearX: number, shearY: number, shearZ: number): Point3D {
    return {
        x: point.x + shearX * point.y + shearZ * point.z,
        y: point.y + shearY * point.x + shearZ * point.z,
        z: point.z + shearX * point.x + shearY * point.y,
    };
}

/**
 * Shears a 2D shape by the given x and y factors.
 * @param shape - The shape to shear.
 * @param shearX - The x-shear factor.
 * @param shearY - The y-shear factor.
 * @returns The sheared shape.
 */
export function shearShape2D(shape: Shape2D, shearX: number, shearY: number): Shape2D {
    return shape.map((point) => shearPoint2D(point, shearX, shearY));
}

/**
 * Shears a 3D shape by the given x, y, and z factors.
 * @param shape - The shape to shear.
 * @param shearX - The x-shear factor.
 * @param shearY - The y-shear factor.
 * @param shearZ - The z-shear factor.
 * @returns The sheared shape.
 */
export function shearShape3D(shape: Shape3D, shearX: number, shearY: number, shearZ: number): Shape3D {
    return shape.map((point) => shearPoint3D(point, shearX, shearY, shearZ));
}

/**
 * Applies a perspective transformation to a 3D point.
 * @param point - The point to transform.
 * @param fov - The field of view angle in radians.
 * @param near - The near clipping plane distance.
 * @param far - The far clipping plane distance.
 * @returns The transformed point.
 */
export function perspectiveTransform3D(
    point: Point3D,
    fov: number,
    near: number,
    far: number
): Point3D {
    const aspect = 1; // Assuming a square aspect ratio
    const z = point.z;
    const scale = (near * Math.tan(fov / 2)) / z;

    return {
        x: point.x * scale,
        y: point.y * scale,
        z: (near - far) / (near - z),
    };
}

/**
 * Applies a perspective transformation to a 3D shape.
 * @param shape - The shape to transform.
 * @param fov - The field of view angle in radians.
 * @param near - The near clipping plane distance.
 * @param far - The far clipping plane distance.
 * @returns The transformed shape.
 */
export function perspectiveTransformShape3D(
    shape: Shape3D,
    fov: number,
    near: number,
    far: number
): Shape3D {
    return shape.map((point) => perspectiveTransform3D(point, fov, near, far));
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

type Shape2D = Point2D[];
type Shape3D = Point3D[];