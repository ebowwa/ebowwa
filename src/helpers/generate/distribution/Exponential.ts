// helpers/generateExponentialDistribution.ts
export function generateExponentialDistribution(lambda: number): number {
    return -Math.log(1 - Math.random()) / lambda;
}