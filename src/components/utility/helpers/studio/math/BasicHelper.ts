/**
 * Calculates the inverse of a square matrix.
 * @param matrix - The input matrix.
 * @returns The inverse of the input matrix.
 */
export function inverse(matrix: number[][]): number[][] {
    const n = matrix.length;
    const augmented: number[][] = matrix.map((row, i) => [...row, ...(new Array(n).fill(0).map((_, j) => (i === j) ? 1 : 0))]);

    for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(augmented[j][i]) > Math.abs(augmented[maxRow][i])) {
                maxRow = j;
            }
        }

        [augmented[i], augmented[maxRow]] = [augmented[maxRow], augmented[i]];

        for (let j = i + 1; j < n; j++) {
            const ratio = augmented[j][i] / augmented[i][i];
            for (let k = i; k < 2 * n; k++) {
                augmented[j][k] -= ratio * augmented[i][k];
            }
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        const divisor = augmented[i][i];
        for (let j = i; j < 2 * n; j++) {
            augmented[i][j] /= divisor;
        }

        for (let j = 0; j < i; j++) {
            const ratio = augmented[j][i];
            for (let k = i; k < 2 * n; k++) {
                augmented[j][k] -= ratio * augmented[i][k];
            }
        }
    }

    return augmented.map(row => row.slice(n));
}

/**
 * Calculates the dot product of two vectors.
 * @param a - The first vector.
 * @param b - The second vector.
 * @returns The dot product of the two vectors.
 */
export function dot(a: number[], b: number[]): number {
    if (a.length !== b.length) {
        throw new Error('Vectors must have the same length');
    }

    return a.reduce((sum, val, i) => sum + val * b[i], 0);
}

/**
 * Calculates the matrix multiplication of two matrices.
 * @param a - The first matrix.
 * @param b - The second matrix.
 * @returns The result of the matrix multiplication.
 */
export function multiply(a: number[][], b: number[][]): number[][] {
    if (a[0].length !== b.length) {
        throw new Error('Matrices cannot be multiplied');
    }

    const result: number[][] = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}