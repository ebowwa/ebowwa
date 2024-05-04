// helpers/generateRandomArray.ts
import { generateRandomNumber } from './Number'
export function generateRandomArray(length: number, min: number, max: number): number[] {
    return Array.from({ length }, () => generateRandomNumber(min, max));
}