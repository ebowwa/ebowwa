// helpers/calculateJensenShannonDistance.ts
export function calculateJensenShannonDistance(p: number[], q: number[]): number {
    const m = p.map((v, i) => (v + q[i]) / 2);
    const kl1 = p.reduce((acc, v, i) => acc + v * Math.log(v / m[i]), 0);
    const kl2 = q.reduce((acc, v, i) => acc + v * Math.log(v / m[i]), 0);
    return Math.sqrt(0.5 * kl1 + 0.5 * kl2);
}