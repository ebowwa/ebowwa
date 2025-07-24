// store/cookieStore.ts
import { create } from 'zustand';

interface CookieState {
    theme: string | null;
    setCookie: (key: string, value: string) => Promise<void>;
    deleteCookie: (key: string) => Promise<void>;
}

const useCookieStore = create<CookieState>((set) => ({
    theme: null,
    setCookie: async (key, value) => {
        // Implement cookie setting logic here
        set((state) => ({ ...state, theme: value }));
    },
    deleteCookie: async (key) => {
        // Implement cookie deletion logic here
        set((state) => ({ ...state, theme: null }));
    },
}));

export default useCookieStore;