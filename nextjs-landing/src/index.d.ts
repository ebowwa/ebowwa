declare module '*.vert' {
    const content: string
    export default content
}

declare module '*.frag' {
    const content: string
    export default content
}

declare module '@studio-freight/lenis' {
    interface LenisOptions {
        wrapper?: HTMLElement;
        content?: HTMLElement;
        duration?: number;
        easing?: (t: number) => number;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal' | 'both';
        smooth?: boolean;
        mouseMultiplier?: number;
        smoothTouch?: boolean;
        touchMultiplier?: number;
        infinite?: boolean;
    }

    class Lenis {
        constructor(options: LenisOptions);
        raf(time: number): void;
        scrollTo(
            target: number | HTMLElement | string,
            options?: {
                offset?: number;
                duration?: number;
                easing?: (t: number) => number;
                immediate?: boolean;
            }
        ): void;
        on(id: string, callback: (data: { scroll: number; limit: number; velocity: number; direction: number }) => void): void;
        stop(): void;
        start(): void;
        destroy(): void;
    }

    export default Lenis;
}

declare module 'serwist' {
    export class Serwist {
        constructor(options: SerwistOptions);
        addEventListeners(): void;
    }

    export interface SerwistOptions {
        precacheEntries: any[];
        skipWaiting: boolean;
        clientsClaim: boolean;
        navigationPreload: boolean;
        runtimeCaching: any;
    }
    export const defaultCache: any;
}

