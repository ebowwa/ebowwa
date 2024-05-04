export function calculateEarthMoversDistance(p: number[], q: number[]): number {
    if (p.length !== q.length) {
        throw new Error('Vectors must have the same length');
    }

    p.sort((a, b) => a - b);
    q.sort((a, b) => a - b);

    return p.reduce((sum, v, i) => sum + Math.abs(v - q[i]), 0);
}