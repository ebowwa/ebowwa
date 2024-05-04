// helpers/MinkowskiDistance.ts
export function calculateMinkowskiDistance(x1: number, y1: number, x2: number, y2: number, p: number): number {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    return Math.pow(Math.pow(dx, p) + Math.pow(dy, p), 1 / p);
}