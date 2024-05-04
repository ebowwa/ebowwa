/**
 * Reflects a 2D or 3D point across the given axis.
 * @param point - The point to reflect.
 * @param axis - The axis to reflect the point across ('x', 'y', or 'z').
 * @returns The reflected point.
 */
export function reflectPoint<T extends { x: number; y: number; z?: number }>(point: T, axis: 'x' | 'y' | 'z'): T {
    switch (axis) {
        case 'x':
            return { ...point, y: -point.y, ...(point.z !== undefined ? { z: -point.z } : {}) } as T;
        case 'y':
            return { ...point, x: -point.x, ...(point.z !== undefined ? { z: -point.z } : {}) } as T;
        case 'z':
            return { ...point, x: -point.x, y: -point.y } as T;
        default:
            return point;
    }
}

/**
 * Reflects a 2D or 3D shape across the given axis.
 * @param shape - The shape to reflect.
 * @param axis - The axis to reflect the shape across ('x', 'y', or 'z').
 * @returns The reflected shape.
 */
export function reflectShape<T extends Array<{ x: number; y: number; z?: number }>>(shape: T, axis: 'x' | 'y' | 'z'): T {
    return shape.map((point) => reflectPoint(point, axis)) as T;
}