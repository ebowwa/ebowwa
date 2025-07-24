// helpers/calculate/MahalanobisDistance.ts
import { inverse, dot, multiply } from '../../BasicHelper';

export function calculateMahalanobisDistance(x: number[], mean: number[], covariance: number[][]): number {
    const diff = x.map((v, i) => v - mean[i]);
    const covInv = inverse(covariance);
    const mahalanobis = Math.sqrt(dot(diff, multiply([diff], covInv)[0]));
    return mahalanobis;
}