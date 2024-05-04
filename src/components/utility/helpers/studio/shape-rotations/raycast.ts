/**
 * Performs a ray cast against a 3D shape.
 * @param origin - The origin of the ray.
 * @param direction - The direction of the ray.
 * @param shape - The 3D shape to cast the ray against.
 * @returns The intersection point, or null if no intersection is found.
 */
export function raycast3D(
    origin: Point3D,
    direction: Vector3D,
    shape: Shape3D
): Point3D | null {
    let closestIntersection: Point3D | null = null;
    let closestDistance = Infinity;

    for (const triangle of getTriangles(shape)) {
        const intersection = raycastTriangle(origin, direction, triangle);
        if (intersection) {
            const distance = Math.sqrt(
                (intersection.x - origin.x) ** 2 +
                (intersection.y - origin.y) ** 2 +
                (intersection.z - origin.z) ** 2
            );
            if (distance < closestDistance) {
                closestIntersection = intersection;
                closestDistance = distance;
            }
        }
    }

    return closestIntersection;
}

/**
 * Performs a ray cast against a 3D triangle.
 * @param origin - The origin of the ray.
 * @param direction - The direction of the ray.
 * @param triangle - The 3D triangle to cast the ray against.
 * @returns The intersection point, or null if no intersection is found.
 */
function raycastTriangle(
    origin: Point3D,
    direction: Vector3D,
    triangle: Triangle3D
): Point3D | null {
    const [p1, p2, p3] = triangle;
    const edge1 = { x: p2.x - p1.x, y: p2.y - p1.y, z: p2.z - p1.z };
    const edge2 = { x: p3.x - p1.x, y: p3.y - p1.y, z: p3.z - p1.z };
    const normal = {
        x: edge1.y * edge2.z - edge1.z * edge2.y,
        y: edge1.z * edge2.x - edge1.x * edge2.z,
        z: edge1.x * edge2.y - edge1.y * edge2.x,
    };
    const denominator = normal.x * direction.x + normal.y * direction.y + normal.z * direction.z;

    if (Math.abs(denominator) < 0.0001) {
        return null; // Ray is parallel to the triangle
    }

    const distance =
        (normal.x * (p1.x - origin.x) +
            normal.y * (p1.y - origin.y) +
            normal.z * (p1.z - origin.z)) /
        denominator;

    if (distance < 0) {
        return null; // Ray is pointing away from the triangle
    }

    const intersectionPoint = {
        x: origin.x + distance * direction.x,
        y: origin.y + distance * direction.y,
        z: origin.z + distance * direction.z,
    };

    const edge1Cross = {
        x: edge1.y * normal.z - edge1.z * normal.y,
        y: edge1.z * normal.x - edge1.x * normal.z,
        z: edge1.x * normal.y - edge1.y * normal.x,
    };
    const edge2Cross = {
        x: edge2.y * normal.z - edge2.z * normal.y,
        y: edge2.z * normal.x - edge2.x * normal.z,
        z: edge2.x * normal.y - edge2.y * normal.x,
    };

    const u = edge1Cross.x * (intersectionPoint.x - p1.x) +
        edge1Cross.y * (intersectionPoint.y - p1.y) +
        edge1Cross.z * (intersectionPoint.z - p1.z);
    const v = edge2Cross.x * (intersectionPoint.x - p1.x) +
        edge2Cross.y * (intersectionPoint.y - p1.y) +
        edge2Cross.z * (intersectionPoint.z - p1.z);

    if (u < 0 || u > 1 || v < 0 || u + v > 1) {
        return null; // Intersection point is outside the triangle
    }

    return intersectionPoint;
}

/**
 * Converts a 3D shape into a list of triangles.
 * @param shape - The 3D shape to convert.
 * @returns An array of triangles.
 */
function getTriangles(shape: Shape3D): Triangle3D[] {
    const triangles: Triangle3D[] = [];

    for (let i = 0; i < shape.length - 2; i += 3) {
        triangles.push([shape[i], shape[i + 1], shape[i + 2]]);
    }

    return triangles;
}

// Define types for the helper functions
interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

type Shape3D = Point3D[];
type Triangle3D = [Point3D, Point3D, Point3D];