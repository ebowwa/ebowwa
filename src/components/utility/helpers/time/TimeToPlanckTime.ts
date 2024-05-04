/**
 * Converts a time value to Planck time.
 * @param time - The time value to be converted, in seconds.
 * @returns The time value in Planck time units.
 */
export const convertTimeToPlanckTime = (time: number): number => {
    // The Planck time is the unit of time in the system of natural units called Planck units.
    // It is the time it would take a photon traveling at the speed of light to cross a distance equal to the Planck length.
    // The Planck time is approximately 5.39 × 10^-44 seconds.
    const planckTime = 5.39106e-44;
    return time / planckTime;
};