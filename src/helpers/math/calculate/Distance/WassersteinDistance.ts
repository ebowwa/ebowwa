export function calculateWassersteinDistance(p: number[], q: number[], power: number = 2): number {
    if (p.length !== q.length) {
        throw new Error('Vectors must have the same length');
    }

    p.sort((a, b) => a - b);
    q.sort((a, b) => a - b);

    const distances = p.map((v, i) => Math.pow(Math.abs(v - q[i]), power));
    const sum = distances.reduce((acc, val) => acc + val, 0);
    return Math.pow(sum, 1 / power);
}