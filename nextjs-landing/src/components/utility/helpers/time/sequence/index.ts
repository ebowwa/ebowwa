/**
 * Checks if a sequence (array or string) is empty.
 * @param sequence - The sequence to check.
 * @returns `true` if the sequence is empty, `false` otherwise.
 */
export function isSequenceEmpty<T>(sequence: T[] | string): boolean {
    return sequence.length === 0;
}

/**
 * Checks if a sequence (array or string) is not empty.
 * @param sequence - The sequence to check.
 * @returns `true` if the sequence is not empty, `false` otherwise.
 */
export function isSequenceNotEmpty<T>(sequence: T[] | string): boolean {
    return sequence.length > 0;
}

/**
 * Gets the first element of a sequence (array or string).
 * @param sequence - The sequence to get the first element from.
 * @returns The first element of the sequence, or `undefined` if the sequence is empty.
 */
export function getFirstElement<T>(sequence: T[] | string): T | undefined {
    if (isSequenceEmpty(sequence)) {
        return undefined;
    }

    if (typeof sequence === 'string') {
        return sequence.charAt(0) as T;
    } else {
        return sequence[0];
    }
}

/**
 * Gets the last element of a sequence (array or string).
 * @param sequence - The sequence to get the last element from.
 * @returns The last element of the sequence, or `undefined` if the sequence is empty.
 */
export function getLastElement<T>(sequence: T[] | string): T | undefined {
    if (isSequenceEmpty(sequence)) {
        return undefined;
    }

    if (typeof sequence === 'string') {
        return sequence.charAt(sequence.length - 1) as T;
    } else {
        return sequence[sequence.length - 1];
    }
}

/**
 * Checks if a sequence (array or string) contains a specific element.
 * @param sequence - The sequence to search.
 * @param element - The element to search for.
 * @returns `true` if the sequence contains the element, `false` otherwise.
 */
export function containsElement<T>(sequence: T[] | string, element: T): boolean {
    if (typeof sequence === 'string') {
        return sequence.includes(element as string);
    } else {
        return sequence.includes(element);
    }
}

/**
 * Checks if a sequence (array or string) contains all the specified elements.
 * @param sequence - The sequence to search.
 * @param elements - The elements to search for.
 * @returns `true` if the sequence contains all the elements, `false` otherwise.
 */
export function containsAllElements<T>(sequence: T[] | string, elements: T[]): boolean {
    return elements.every((element) => containsElement(sequence, element));
}

/**
 * Checks if a sequence (array or string) contains any of the specified elements.
 * @param sequence - The sequence to search.
 * @param elements - The elements to search for.
 * @returns `true` if the sequence contains any of the elements, `false` otherwise.
 */
export function containsAnyElement<T>(sequence: T[] | string, elements: T[]): boolean {
    return elements.some((element) => containsElement(sequence, element));
}

/**
 * Reverses a sequence (array or string).
 * @param sequence - The sequence to reverse.
 * @returns The reversed sequence.
 */
export function reverseSequence<T>(sequence: T[] | string): T[] | string {
    if (typeof sequence === 'string') {
        return sequence.split('').reverse().join('');
    } else {
        return [...sequence].reverse();
    }
}

/**
 * Removes duplicates from a sequence (array or string).
 * @param sequence - The sequence to remove duplicates from.
 * @returns The sequence with duplicates removed.
 */
export function removeDuplicates<T>(sequence: T[] | string): T[] | string {
    if (typeof sequence === 'string') {
        return Array.from(new Set(sequence)).join('');
    } else {
        return Array.from(new Set(sequence));
    }
}

/**
 * Sorts a sequence (array or string) in ascending order.
 * @param sequence - The sequence to sort.
 * @returns The sorted sequence.
 */
export function sortSequenceAscending<T extends string | number | boolean | Date>(sequence: T[] | string): T[] | string {
    if (typeof sequence === 'string') {
        return sequence.split('').sort().join('');
    } else {
        return [...sequence].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    }
}

/**
 * Sorts a sequence (array or string) in descending order.
 * @param sequence - The sequence to sort.
 * @returns The sorted sequence.
 */
export function sortSequenceDescending<T extends string | number | boolean | Date>(sequence: T[] | string): T[] | string {
    if (typeof sequence === 'string') {
        return sequence.split('').sort((a, b) => b.localeCompare(a)).join('');
    } else {
        return [...sequence].sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));
    }
}