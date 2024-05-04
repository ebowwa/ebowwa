/**
 * Calculates the cosine of a given angle using the Taylor series expansion.
 * @param x - The angle in radians.
 * @param precision - The number of terms to use in the Taylor series expansion.
 * @returns The cosine of the given angle.
 */
export function cosTaylor(x: number, precision: number = 10): number {
    let result = 0;
    let sign = 1;
    let factorial = 1;
    let power = 1;

    for (let i = 0; i < precision; i++) {
        result += sign * (Math.pow(x, power) / factorial);
        sign *= -1;
        power += 2;
        factorial *= (power - 1) * power;
    }

    return result;
}

/**
 * Calculates the cosine of a given angle using the Maclaurin series expansion.
 * @param x - The angle in radians.
 * @param precision - The number of terms to use in the Maclaurin series expansion.
 * @returns The cosine of the given angle.
 */
export function cosMaclaurin(x: number, precision: number = 10): number {
    let result = 0;
    let sign = 1;
    let factorial = 1;

    for (let i = 0; i < precision; i++) {
        result += sign * Math.pow(x, 2 * i) / factorial;
        sign *= -1;
        factorial *= (2 * i) * (2 * i + 1);
    }

    return result;
}

/**
 * Calculates the cosine of a given angle using the Chebyshev polynomial approximation.
 * @param x - The angle in radians.
 * @param precision - The number of terms to use in the Chebyshev polynomial approximation.
 * @returns The cosine of the given angle.
 */
export function cosChebyshev(x: number, precision: number = 10): number {
    let result = 0;
    let t0 = 1;
    let t1 = x;

    for (let i = 0; i < precision; i++) {
        result += t0;
        const t2 = 2 * x * t1 - t0;
        t0 = t1;
        t1 = t2;
    }

    return result / precision;
}

/**
 * Calculates the cosine of a given angle using the Padé approximation.
 * @param x - The angle in radians.
 * @param precision - The order of the Padé approximation.
 * @returns The cosine of the given angle.
 */
export function cosPade(x: number, precision: number = 10): number {
    const numerator = 1;
    let denominator = 1;

    for (let i = 1; i <= precision; i++) {
        denominator += (2 * i - 1) * Math.pow(x, 2) / (2 * i * (2 * i - 1));
    }

    return numerator / denominator;
}

/**
 * Calculates the cosine of a given angle using the Fourier series expansion.
 * @param x - The angle in radians.
 * @param precision - The number of terms to use in the Fourier series expansion.
 * @returns The cosine of the given angle.
 */
export function cosFourier(x: number, precision: number = 10): number {
    let result = 0;

    for (let i = 0; i < precision; i++) {
        result += (2 / ((2 * i + 1) * Math.PI)) * Math.sin((2 * i + 1) * x);
    }

    return result;
}

/**
 * Calculates the cosine of a given angle using the Infinite Product representation.
 * @param x - The angle in radians.
 * @param precision - The number of terms to use in the Infinite Product representation.
 * @returns The cosine of the given angle.
 */
export function cosInfiniteProduct(x: number, precision: number = 10): number {
    let result = 1;

    for (let i = 1; i <= precision; i++) {
        result *= Math.cos(x / (2 ** i));
    }

    return result;
}

/**
 * Calculates the cosine of a given angle using the Arithmetic-Geometric Mean (AGM) method.
 * @param x - The angle in radians.
 * @param precision - The number of iterations to perform in the AGM method.
 * @returns The cosine of the given angle.
 */
export function cosAGM(x: number, precision: number = 10): number {
    let a = 1;
    let b = 1 / Math.cos(x);

    for (let i = 0; i < precision; i++) {
        const temp = a;
        a = (a + b) / 2;
        b = Math.sqrt(temp * b);
    }

    return 1 / (a * a);
}

/**
 * Calculates the cosine of a given angle using the Continued Fraction representation.
 * @param x - The angle in radians.
 * @param precision - The number of terms to use in the Continued Fraction representation.
 * @returns The cosine of the given angle.
 */
export function cosContinuedFraction(x: number, precision: number = 10): number {
    let result = 1;

    for (let i = precision; i > 0; i--) {
        result = 1 / (2 * i / x + result);
    }

    return result;
}