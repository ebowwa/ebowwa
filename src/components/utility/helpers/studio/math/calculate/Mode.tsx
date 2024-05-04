// helpers/calculateMode.ts
export function calculateMode(values: number[]): number[] {
    const counts: { [key: number]: number } = {};
    values.forEach(value => {
        counts[value] = (counts[value] || 0) + 1;
    });
    const maxCount = Math.max(...Object.values(counts));
    return Object.keys(counts).filter(key => counts[Number(key)] === maxCount).map(Number);
}