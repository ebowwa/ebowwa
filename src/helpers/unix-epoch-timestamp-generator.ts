// src/helpers/unix-epoch-timestamp-generator.ts
/**
 * Generates a Unix timestamp (the number of seconds since January 1, 1970, 00:00:00 UTC).
 * @returns {number} The current Unix timestamp.
 */
export function generateUnixTimestamp(): number {
    return Math.floor(Date.now() / 1000);
}
/**
 * Converts a Unix timestamp to a JavaScript Date object.
 * @param {number} timestamp - The Unix timestamp to convert.
 * @returns {Date} The corresponding Date object.
 */
export function unixTimestampToDate(timestamp: number): Date {
    return new Date(timestamp * 1000);
}
/**
 * Calculates the time difference between two Unix timestamps.
 * @param {number} startTimestamp - The start Unix timestamp.
 * @param {number} endTimestamp - The end Unix timestamp.
 * @returns {number} The time difference in seconds.
 */
export function calculateTimeDifference(startTimestamp: number, endTimestamp: number): number {
    return endTimestamp - startTimestamp;
}
/**
 * Formats a Date object as a string in the specified format.
 * @param {Date} date - The Date object to format.
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD HH:mm:ss').
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date, format: string): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', String(year))
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}
/**
 * Checks if a Unix timestamp has expired based on a given expiration time (in seconds).
 * @param {number} timestamp - The Unix timestamp to check.
 * @param {number} expirationTime - The expiration time in seconds.
 * @returns {boolean} True if the timestamp has expired, false otherwise.
 */
export function isTimestampExpired(timestamp: number, expirationTime: number): boolean {
    const currentTimestamp = generateUnixTimestamp();
    return currentTimestamp > timestamp + expirationTime;
}
/**
 * Calculates the time difference between two Unix timestamps in milliseconds.
 * @param {number} startTimestamp - The start Unix timestamp.
 * @param {number} endTimestamp - The end Unix timestamp.
 * @returns {number} The time difference in milliseconds.
 */
export function calculateTimeDifferenceInMilliseconds(startTimestamp: number, endTimestamp: number): number {
    return (endTimestamp - startTimestamp) * 1000;
}
/**
 * Gets the current date and time as a JavaScript Date object.
 * @returns {Date} The current date and time.
 */
export function getCurrentDateTime(): Date {
    return new Date();
}
/**
 * Checks if a Unix timestamp is in the future.
 * @param {number} timestamp - The Unix timestamp to check.
 * @returns {boolean} True if the timestamp is in the future, false otherwise.
 */
export function isTimestampInFuture(timestamp: number): boolean {
    const currentTimestamp = generateUnixTimestamp();
    return timestamp > currentTimestamp;
}
/**
 * Adds a time duration to a Unix timestamp.
 * @param {number} timestamp - The Unix timestamp to add the duration to.
 * @param {number} duration - The duration in seconds to add.
 * @returns {number} The new Unix timestamp.
 */
export function addTimeToTimestamp(timestamp: number, duration: number): number {
    return timestamp + duration;
}

/**
 * Subtracts a time duration from a Unix timestamp.
 * @param {number} timestamp - The Unix timestamp to subtract the duration from.
 * @param {number} duration - The duration in seconds to subtract.
 * @returns {number} The new Unix timestamp.
 */
export function subtractTimeFromTimestamp(timestamp: number, duration: number): number {
    return timestamp - duration;
}