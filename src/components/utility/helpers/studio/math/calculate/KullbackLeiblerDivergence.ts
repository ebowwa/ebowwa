// helpers/calculateKullbackLeiblerDivergence.ts
export function calculateKullbackLeiblerDivergence(p: number[], q: number[]): number {
    return p.reduce((acc, v, i) => acc + v * Math.log(v / q[i]), 0);
}