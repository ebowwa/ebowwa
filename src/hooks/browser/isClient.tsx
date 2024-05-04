import { useState, useEffect } from 'react';

/**
 * A custom React hook that returns a boolean indicating whether the code is running on the client-side.
 * @returns {boolean} True if the code is running on the client-side, false otherwise.
 */
export const useIsClient = (): boolean => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Check if the code is running on the client-side
        setIsClient(typeof window !== 'undefined');
    }, []);

    return isClient;
};