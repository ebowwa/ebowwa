// @/store/cookieStore.ts
'use server'
import { cookies } from 'next/headers';

interface Cookie {
    name: string;
    value: string;
}

interface CookieStore {
    getCookie: (name: string) => Cookie | undefined;
    getAllCookies: () => Cookie[];
    hasCookie: (name: string) => boolean;
    setCookie: (name: string, value: string, options?: { [key: string]: any }) => void;
    deleteCookie: (name: string) => void;
}

const useCookieStore = (): CookieStore => {
    const cookieStore = cookies();

    const getCookie = (name: string): Cookie | undefined => {
        return cookieStore.get(name);
    };

    const getAllCookies = (): Cookie[] => {
        return cookieStore.getAll();
    };

    const hasCookie = (name: string): boolean => {
        return cookieStore.has(name);
    };

    const setCookie = (name: string, value: string, options?: { [key: string]: any }): void => {
        cookieStore.set(name, value, options);
    };

    const deleteCookie = (name: string): void => {
        cookieStore.delete(name);
    };

    return {
        getCookie,
        getAllCookies,
        hasCookie,
        setCookie,
        deleteCookie,
    };
};

export default useCookieStore;