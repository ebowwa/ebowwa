// helpers/generatePoissonDistribution.ts
export function generatePoissonDistribution(lambda: number): number {
    let L = Math.exp(-lambda);
    let k = 0;
    let p = 1;
    do {
        p *= Math.random();
        k++;
    } while (p > L);
    return k - 1;
}
