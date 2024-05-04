// helpers/calculateDiceSimilarity.ts
export function calculateDiceSimilarity(x: number[], y: number[]): number {
    const intersection = x.filter(v => y.includes(v)).length;
    const union = x.length + y.length;
    return 2 * intersection / union;
}