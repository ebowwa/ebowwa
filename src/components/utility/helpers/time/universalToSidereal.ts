/**
 * Converts universal time to sidereal time.
 * @param universalTime - The universal time to convert.
 * @param longitude - The longitude of the location, in degrees.
 * @returns The sidereal time corresponding to the given universal time and longitude.
 */
export const universalToSidereal = (universalTime: Date, longitude: number): Date => {
    // Calculate the sidereal time in hours
    // Sidereal time is the hour angle of the vernal equinox
    // It is calculated using the following formula:
    // siderealHours = (universalHours + universalMinutes/60 + universalSeconds/3600 + longitude/15) * 1.002737909
    // Where:
    // - universalHours, universalMinutes, and universalSeconds are the hours, minutes, and seconds of the universal time
    // - longitude is the longitude of the location, in degrees
    // - 1.002737909 is the sidereal time conversion factor, which accounts for the Earth's rotation relative to the stars
    let siderealHours = (
        universalTime.getUTCHours() +
        (universalTime.getUTCMinutes() / 60) +
        (universalTime.getUTCSeconds() / 3600) +
        (longitude / 15)
    ) * 1.002737909;

    // Create a new Date object with the sidereal time
    // We start with the universal time and then set the hours to the calculated sidereal hours
    let siderealTime = new Date(universalTime.getTime());
    siderealTime.setHours(siderealHours);

    return siderealTime;
};