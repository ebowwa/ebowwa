// helpers/calculateVariance.ts
import { calculateMean } from './Mean'
export function calculateVariance(values: number[]): number {
    const mean = calculateMean(values);
    const deviations = values.map(value => value - mean);
    const squaredDeviations = deviations.map(deviation => deviation * deviation);
    return calculateMean(squaredDeviations);
}