import { Complex } from './complex';

/**
 * Represents a quantum state as an array of complex numbers.
 */
type QuantumState = Complex[];

/**
 * Calculates the tensor product of two quantum states.
 * @param state1 The first quantum state.
 * @param state2 The second quantum state.
 * @returns The tensor product of the two quantum states.
 */
export function tensorProduct(state1: QuantumState, state2: QuantumState): QuantumState {
    if (state1.length === 0 || state2.length === 0) {
        throw new Error('Quantum states cannot be empty.');
    }

    const result: QuantumState = [];
    for (let i = 0; i < state1.length; i++) {
        for (let j = 0; j < state2.length; j++) {
            result.push(state1[i].multiply(state2[j]));
        }
    }
    return result;
}

/**
 * Calculates the inner product of two quantum states.
 * @param state1 The first quantum state.
 * @param state2 The second quantum state.
 * @returns The inner product of the two quantum states.
 */
export function innerProduct(state1: QuantumState, state2: QuantumState): Complex {
    if (state1.length !== state2.length) {
        throw new Error('Quantum states must have the same length.');
    }

    let result = new Complex(0, 0);
    for (let i = 0; i < state1.length; i++) {
        result = result.add(state1[i].conjugate().multiply(state2[i]));
    }
    return result;
}

/**
 * Calculates the outer product of two quantum states.
 * @param state1 The first quantum state.
 * @param state2 The second quantum state.
 * @returns The outer product of the two quantum states.
 */
export function outerProduct(state1: QuantumState, state2: QuantumState): Complex[][] {
    if (state1.length === 0 || state2.length === 0) {
        throw new Error('Quantum states cannot be empty.');
    }

    const result: Complex[][] = [];
    for (let i = 0; i < state1.length; i++) {
        const row: Complex[] = [];
        for (let j = 0; j < state2.length; j++) {
            row.push(state1[i].multiply(state2[j].conjugate()));
        }
        result.push(row);
    }
    return result;
}

/**
 * Calculates the probability of measuring a quantum state in a particular state.
 * @param state The quantum state.
 * @param index The index of the state to measure.
 * @returns The probability of measuring the quantum state in the specified state.
 */
export function probability(state: QuantumState, index: number): number {
    if (index < 0 || index >= state.length) {
        throw new Error('Invalid index for the quantum state.');
    }

    const amplitude = state[index];
    return amplitude.magnitude() ** 2;
}