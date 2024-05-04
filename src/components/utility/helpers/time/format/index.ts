/**
 * Converts a number of milliseconds to a human-readable string.
 * @param ms - The number of milliseconds to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatMilliseconds(ms: number): string {
    if (ms < 1000) {
        return `${ms} ms`;
    }

    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const formattedTime = [];

    if (days > 0) {
        formattedTime.push(`${days} day${days !== 1 ? 's' : ''}`);
    }

    if (hours > 0) {
        formattedTime.push(`${hours % 24} hour${hours !== 1 ? 's' : ''}`);
    }

    if (minutes > 0) {
        formattedTime.push(`${minutes % 60} minute${minutes !== 1 ? 's' : ''}`);
    }

    if (seconds > 0) {
        formattedTime.push(`${seconds % 60} second${seconds !== 1 ? 's' : ''}`);
    }

    if (ms > 0) {
        formattedTime.push(`${ms % 1000} millisecond${ms !== 1 ? 's' : ''}`);
    }

    return formattedTime.join(', ');
}

/**
 * Converts a number of seconds to a human-readable string.
 * @param seconds - The number of seconds to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatSeconds(seconds: number): string {
    return formatMilliseconds(seconds * 1000);
}

/**
 * Converts a number of minutes to a human-readable string.
 * @param minutes - The number of minutes to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatMinutes(minutes: number): string {
    return formatSeconds(minutes * 60);
}

/**
 * Converts a number of hours to a human-readable string.
 * @param hours - The number of hours to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatHours(hours: number): string {
    return formatMinutes(hours * 60);
}

/**
 * Converts a number of days to a human-readable string.
 * @param days - The number of days to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatDays(days: number): string {
    return formatHours(days * 24);
}

/**
 * Converts a number of weeks to a human-readable string.
 * @param weeks - The number of weeks to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatWeeks(weeks: number): string {
    return formatDays(weeks * 7);
}

/**
 * Converts a number of months to a human-readable string.
 * @param months - The number of months to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatMonths(months: number): string {
    return formatDays(months * 30.4375); // Average days per month
}

/**
 * Converts a number of years to a human-readable string.
 * @param years - The number of years to convert.
 * @returns A human-readable string representation of the time.
 */
export function formatYears(years: number): string {
    return formatDays(years * 365.2425); // Average days per year
}

/**
 * Converts a Date object to a human-readable string.
 * @param date - The Date object to convert.
 * @returns A human-readable string representation of the date and time.
 */
export function formatDate(date: Date): string {
    return date.toLocaleString();
}

/**
 * Converts a Date object to a human-readable string in the format "YYYY-MM-DD".
 * @param date - The Date object to convert.
 * @returns A human-readable string representation of the date in the format "YYYY-MM-DD".
 */
export function formatDateYYYYMMDD(date: Date): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

/**
 * Converts a Date object to a human-readable string in the format "HH:MM:SS".
 * @param date - The Date object to convert.
 * @returns A human-readable string representation of the time in the format "HH:MM:SS".
 */
export function formatTimeHHMMSS(date: Date): string {
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
}

/**
 * Converts a Date object to a human-readable string in the format "YYYY-MM-DD HH:MM:SS".
 * @param date - The Date object to convert.
 * @returns A human-readable string representation of the date and time in the format "YYYY-MM-DD HH:MM:SS".
 */
export function formatDateTimeYYYYMMDDHHMMSS(date: Date): string {
    return `${formatDateYYYYMMDD(date)} ${formatTimeHHMMSS(date)}`;
}