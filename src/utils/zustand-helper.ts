import { useEffect, useState } from 'react';

/**
 * A custom React hook that manages the state of a persistent store, such as a cookie or local storage.
 *
 * @param {function} store - A function that takes a callback and returns an unknown value. This is likely a function that retrieves the value from a persistent store.
 * @param {function} callback - A function that takes the state from the `store` function and returns a value of type `F`.
 * @param {F} [defaultValue] - An optional default value of type `F` to be used if the persistent store is empty or unavailable.
 * @returns {F | undefined} - The value from the persistent store, or the `defaultValue` if the store is empty or unavailable.
 */
export const usePersistentStore = <T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => F,
    defaultValue?: F
) => {
    // Call the `store` function with the provided `callback` function, and assign the result to `result`
    const result = store(callback) as F;

    // Use the `useState` hook to create a state variable `data` and a function `setData` to update it
    const [data, setData] = useState<F | undefined>();

    // Use the `useEffect` hook to update the `data` state variable whenever the `result` value changes
    useEffect(() => {
        setData(result);
    }, [result]);

    // Return the `data` value, or the `defaultValue` if `data` is `undefined`
    return data ?? defaultValue;
};