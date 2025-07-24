/**
 * Calculates the time dilation effect based on velocity and the speed of light.
 * @param velocity - The velocity of the object, in meters per second.
 * @param c - The speed of light, in meters per second. Defaults to 299,792,458 m/s.
 * @returns The time dilation factor, which is the ratio of the proper time to the dilated time.
 */
export const calculateTimeDilation = (velocity: number, c: number = 299792458): number => {
    // The time dilation factor is calculated using the formula:
    // timeDilation = 1 / sqrt(1 - (v^2 / c^2))
    // Where:
    // - v is the velocity of the object, in meters per second
    // - c is the speed of light, in meters per second
    return 1 / Math.sqrt(1 - Math.pow(velocity / c, 2));
};