// helpers/calculateCorrelationDistance.ts
import { dot } from '../../BasicHelper';

export function calculateCorrelationDistance(x: number[], y: number[]): number {
    if (x.length !== y.length) {
        throw new Error('Vectors must have the same length');
    }

    const xMean = x.reduce((sum, val) => sum + val, 0) / x.length;
    const yMean = y.reduce((sum, val) => sum + val, 0) / y.length;

    const xDiff = x.map(v => v - xMean);
    const yDiff = y.map(v => v - yMean);

    const xNorm = Math.sqrt(xDiff.reduce((sum, val) => sum + val * val, 0));
    const yNorm = Math.sqrt(yDiff.reduce((sum, val) => sum + val * val, 0));

    const dot = xDiff.reduce((sum, v, i) => sum + v * yDiff[i], 0);
    const distance = 1 - dot / (xNorm * yNorm);

    return distance;
}