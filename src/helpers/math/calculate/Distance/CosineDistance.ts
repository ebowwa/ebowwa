// helpers/calculateCosineDistance.ts
import { dot } from '../../BasicHelper';

export function calculateCosineDistance(x: number[], y: number[]): number {
    const dotProduct = dot(x, y);
    const magnitudeX = Math.sqrt(dot(x, x));
    const magnitudeY = Math.sqrt(dot(y, y));
    return 1 - dotProduct / (magnitudeX * magnitudeY);
}