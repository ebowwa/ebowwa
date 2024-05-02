/**
 * Calculates the Mandelbrot set for a given complex number.
 * @param c - The complex number to evaluate.
 * @param maxIterations - The maximum number of iterations to perform.
 * @returns The number of iterations it took to diverge, or the maximum number of iterations if it did not diverge.
 */
export function mandelbrot(c: Complex, maxIterations: number): number {
    let z: Complex = { real: 0, imaginary: 0 };
    let i = 0;
    while (i < maxIterations && (z.real * z.real + z.imaginary * z.imaginary) <= 4) {
        const temp = z.real;
        z.real = z.real * z.real - z.imaginary * z.imaginary + c.real;
        z.imaginary = 2 * temp * z.imaginary + c.imaginary;
        i++;
    }
    return i;
}

/**
 * Calculates the Julia set for a given complex number.
 * @param c - The complex number to evaluate.
 * @param z0 - The initial complex number.
 * @param maxIterations - The maximum number of iterations to perform.
 * @returns The number of iterations it took to diverge, or the maximum number of iterations if it did not diverge.
 */
export function julia(c: Complex, z0: Complex, maxIterations: number): number {
    let z: Complex = { real: z0.real, imaginary: z0.imaginary };
    let i = 0;
    while (i < maxIterations && (z.real * z.real + z.imaginary * z.imaginary) <= 4) {
        const temp = z.real;
        z.real = z.real * z.real - z.imaginary * z.imaginary + c.real;
        z.imaginary = 2 * temp * z.imaginary + c.imaginary;
        i++;
    }
    return i;
}

/**
 * Calculates the Sierpinski triangle for a given depth.
 * @param depth - The depth of the Sierpinski triangle to generate.
 * @returns An array of points representing the Sierpinski triangle.
 */
export function sierpinski(depth: number): Point[] {
    const points: Point[] = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0.5, y: Math.sqrt(3) / 2 },
    ];

    for (let i = 0; i < depth; i++) {
        const newPoints: Point[] = [];
        for (let j = 0; j < points.length; j++) {
            const p1 = points[j];
            const p2 = points[(j + 1) % points.length];
            newPoints.push(p1);
            newPoints.push({
                x: (p1.x + p2.x) / 2,
                y: (p1.y + p2.y) / 2,
            });
        }
        points.splice(0, points.length, ...newPoints);
    }

    return points;
}

/**
 * Calculates the Cantor set for a given depth.
 * @param depth - The depth of the Cantor set to generate.
 * @returns An array of line segments representing the Cantor set.
 */
export function cantor(depth: number): LineSegment[] {
    const segments: LineSegment[] = [{ x1: 0, y1: 0, x2: 1, y2: 0 }];

    for (let i = 0; i < depth; i++) {
        const newSegments: LineSegment[] = [];
        for (const segment of segments) {
            newSegments.push({
                x1: segment.x1,
                y1: segment.y1,
                x2: (segment.x1 + segment.x2) / 3,
                y2: segment.y2,
            });
            newSegments.push({
                x1: (segment.x1 + segment.x2) * 2 / 3,
                y1: segment.y1,
                x2: segment.x2,
                y2: segment.y2,
            });
        }
        segments.splice(0, segments.length, ...newSegments);
    }

    return segments;
}

/**
 * Calculates the Koch snowflake for a given depth.
 * @param depth - The depth of the Koch snowflake to generate.
 * @returns An array of line segments representing the Koch snowflake.
 */
export function kochSnowflake(depth: number): LineSegment[] {
    const segments: LineSegment[] = [
        { x1: 0, y1: 0, x2: 1, y2: 0 },
        { x1: 1, y1: 0, x2: 0.5, y2: Math.sqrt(3) / 2 },
        { x1: 0.5, y1: Math.sqrt(3) / 2, x2: 0, y2: 0 },
    ];

    for (let i = 0; i < depth; i++) {
        const newSegments: LineSegment[] = [];
        for (const segment of segments) {
            const dx = segment.x2 - segment.x1;
            const dy = segment.y2 - segment.y1;
            newSegments.push({
                x1: segment.x1,
                y1: segment.y1,
                x2: segment.x1 + dx / 3,
                y2: segment.y1 + dy / 3,
            });
            newSegments.push({
                x1: segment.x1 + dx / 3,
                y1: segment.y1 + dy / 3,
                x2: segment.x1 + dx / 2,
                y2: segment.y1 + dy / 2,
            });
            newSegments.push({
                x1: segment.x1 + dx / 2,
                y1: segment.y1 + dy / 2,
                x2: segment.x1 + (2 * dx) / 3,
                y2: segment.y1 + (2 * dy) / 3,
            });
            newSegments.push({
                x1: segment.x1 + (2 * dx) / 3,
                y1: segment.y1 + (2 * dy) / 3,
                x2: segment.x2,
                y2: segment.y2,
            });
        }
        segments.splice(0, segments.length, ...newSegments);
    }

    return segments;
}

/**
 * Calculates the Barnsley fern for a given number of iterations.
 * @param iterations - The number of iterations to generate the Barnsley fern.
 * @returns An array of points representing the Barnsley fern.
 */
export function barnsleyFern(iterations: number): Point[] {
    let x = 0;
    let y = 0;
    const points: Point[] = [];

    for (let i = 0; i < iterations; i++) {
        const r = Math.random();
        let newX, newY;
        if (r < 0.01) {
            newX = 0;
            newY = 0.16 * y;
        } else if (r < 0.86) {
            newX = 0.85 * x + 0.04 * y;
            newY = -0.04 * x + 0.85 * y + 1.6;
        } else if (r < 0.93) {
            newX = 0.2 * x - 0.26 * y;
            newY = 0.23 * x + 0.22 * y + 1.6;
        } else {
            newX = -0.15 * x + 0.28 * y;
            newY = 0.26 * x + 0.24 * y + 0.44;
        }
        x = newX;
        y = newY;
        points.push({ x, y });
    }

    return points;
}

// Define types for the helper functions
interface Complex {
    real: number;
    imaginary: number;
}

interface Point {
    x: number;
    y: number;
}

interface LineSegment {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}