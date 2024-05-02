// Import the necessary functions from the 'cookies-next' and 'dayjs' libraries
import { setCookie as sc, deleteCookie } from 'cookies-next';
import dayjs from 'dayjs';

// Define a function to set a cookie
export function setCookie(key: string, data: any, expires?: Date) { // eslint-disable-line
    // Use the 'setCookie' function from 'cookies-next' to set the cookie
    // The cookie will expire in 1 year by default, unless a custom expiration date is provided
    return sc(key, data, {
        expires: expires || dayjs().add(1, 'year').toDate(),
    });
}

// Define a function to delete one or more cookies
export function deleteCookies(keys: string[]) {
    // Loop through the provided keys and delete each cookie using the 'deleteCookie' function from 'cookies-next'
    keys.forEach((key) => deleteCookie(key));
    // Return nothing (void)
    return;
}