/**
 * Represents a complex number.
 */
export class Complex {
    constructor(public real: number, public imaginary: number) { }

    /**
     * Adds two complex numbers.
     * @param other The other complex number to add.
     * @returns The sum of the two complex numbers.
     */
    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imaginary + other.imaginary);
    }

    /**
     * Multiplies two complex numbers.
     * @param other The other complex number to multiply.
     * @returns The product of the two complex numbers.
     */
    multiply(other: Complex): Complex {
        const real = this.real * other.real - this.imaginary * other.imaginary;
        const imaginary = this.real * other.imaginary + this.imaginary * other.real;
        return new Complex(real, imaginary);
    }

    /**
     * Calculates the conjugate of the complex number.
     * @returns The conjugate of the complex number.
     */
    conjugate(): Complex {
        return new Complex(this.real, -this.imaginary);
    }

    /**
     * Calculates the magnitude of the complex number.
     * @returns The magnitude of the complex number.
     */
    magnitude(): number {
        return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
    }
}