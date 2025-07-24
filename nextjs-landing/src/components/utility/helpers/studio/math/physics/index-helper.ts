/**
 * Represents a 3D vector.
 */
export class Vector3 {
    constructor(public x: number, public y: number, public z: number) { }

    /**
     * Adds two vectors.
     * @param other The other vector to add.
     * @returns The sum of the two vectors.
     */
    add(other: Vector3): Vector3 {
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    /**
     * Subtracts two vectors.
     * @param other The other vector to subtract.
     * @returns The difference of the two vectors.
     */
    subtract(other: Vector3): Vector3 {
        return new Vector3(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    /**
     * Multiplies a vector by a scalar.
     * @param scalar The scalar to multiply the vector by.
     * @returns The scaled vector.
     */
    scale(scalar: number): Vector3 {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    /**
     * Calculates the dot product of two vectors.
     * @param other The other vector to calculate the dot product with.
     * @returns The dot product of the two vectors.
     */
    dot(other: Vector3): number {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    /**
     * Calculates the cross product of two vectors.
     * @param other The other vector to calculate the cross product with.
     * @returns The cross product of the two vectors.
     */
    cross(other: Vector3): Vector3 {
        const x = this.y * other.z - this.z * other.y;
        const y = this.z * other.x - this.x * other.z;
        const z = this.x * other.y - this.y * other.x;
        return new Vector3(x, y, z);
    }

    /**
     * Calculates the magnitude of the vector.
     * @returns The magnitude of the vector.
     */
    magnitude(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    /**
     * Normalizes the vector.
     * @returns The normalized vector.
     */
    normalize(): Vector3 {
        const mag = this.magnitude();
        return new Vector3(this.x / mag, this.y / mag, this.z / mag);
    }
}

/**
 * Calculates the distance between two points in 3D space.
 * @param p1 The first point.
 * @param p2 The second point.
 * @returns The distance between the two points.
 */
export function distance(p1: Vector3, p2: Vector3): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dz = p1.z - p2.z;
    return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
}

/**
 * Calculates the angle between two vectors.
 * @param v1 The first vector.
 * @param v2 The second vector.
 * @returns The angle between the two vectors in radians.
 */
export function angle(v1: Vector3, v2: Vector3): number {
    const dot = v1.dot(v2);
    const mag1 = v1.magnitude();
    const mag2 = v2.magnitude();
    return Math.acos(dot / (mag1 * mag2));
}