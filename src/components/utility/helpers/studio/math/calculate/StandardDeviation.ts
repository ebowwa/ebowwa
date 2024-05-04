// helpers/calculateStandardDeviation.ts
import { calculateVariance } from './Variance'
export function calculateStandardDeviation(values: number[]): number {
    return Math.sqrt(calculateVariance(values));
}