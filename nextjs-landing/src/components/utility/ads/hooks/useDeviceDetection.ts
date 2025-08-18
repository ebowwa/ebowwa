// @src/hooks/useDeviceDetection.ts
"use client";
import { useMediaQuery } from './browser/useMediaQuery';
import { useState, useEffect } from 'react';
import useCookieStore from '@/store/cookies-store';

export function useDeviceDetection() {
    const { setCookie, getCookie, hasCookie } = useCookieStore();
    const breakpoint = 768; // Replace with your desired breakpoint value
    const tabletBreakpoint = 1024;

    const isMobile = useMediaQuery(`(max-width: ${breakpoint - 1}px)`);
    const isTablet = useMediaQuery(`(min-width: ${breakpoint}px) and (max-width: ${tabletBreakpoint}px)`);
    const isDesktop = useMediaQuery(`(min-width: ${tabletBreakpoint + 1}px)`);
    const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
    const isWebGL = isDesktop && !isReducedMotion;
    const isLowPowerMode = useMediaQuery('(battery-level < 20%) and (charging: false)');
    
    const isBrowser = typeof window !== 'undefined';
    const isIOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(navigator.userAgent).includes('MSStream');
    const isAndroid = isBrowser && /Android/.test(navigator.userAgent);
    const isTouchDevice = isBrowser && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    const isIPad = isBrowser && /iPad/.test(navigator.userAgent);
    const isTV = isBrowser && /TV/.test(navigator.userAgent);

    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
    const [pixelRatio, setPixelRatio] = useState(1);
    const [connectionType, setConnectionType] = useState<'4g' | '3g' | 'wifi' | 'unknown'>('unknown');
    const [viewportSize, setViewportSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    const isChrome = isBrowser && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isFirefox = isBrowser && typeof (window as any).InstallTrigger !== 'undefined';
    const isSafari = isBrowser && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isEdge = isBrowser && /Edge/.test(navigator.userAgent);
    const isOpera = isBrowser && /OPR/.test(navigator.userAgent);

    useEffect(() => {
        if (!isBrowser) return;

        setPixelRatio(window.devicePixelRatio || 1);
        setViewportSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleOrientationChange = () => {
            const newOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
            setOrientation(newOrientation);
            setCookie('orientation', newOrientation, { path: '/' });
        };

        const handleNetworkChange = () => {
            const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
            let newConnectionType: '4g' | '3g' | 'wifi' | 'unknown' = 'unknown';
            if (connection) {
                newConnectionType = connection.effectiveType as '4g' | '3g' | 'wifi' | 'unknown';
                setConnectionType(newConnectionType);
                setCookie('connectionType', newConnectionType, { path: '/' });
            } else {
                setConnectionType('unknown');
                setCookie('connectionType', 'unknown', { path: '/' });
            }
        };

        const handleResize = () => {
            const newViewportSize = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            setViewportSize(newViewportSize);
            setCookie('viewportWidth', newViewportSize.width.toString(), { path: '/' });
            setCookie('viewportHeight', newViewportSize.height.toString(), { path: '/' });
        };

        window.addEventListener('resize', handleOrientationChange);
        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);
        window.addEventListener('resize', handleResize);

        // Restore values from cookies
        if (hasCookie('orientation')) {
            setOrientation(getCookie('orientation')?.value as 'portrait' | 'landscape');
        }
        if (hasCookie('connectionType')) {
            setConnectionType(getCookie('connectionType')?.value as '4g' | '3g' | 'wifi' | 'unknown');
        }
        if (hasCookie('viewportWidth') && hasCookie('viewportHeight')) {
            setViewportSize({
                width: parseInt(getCookie('viewportWidth')?.value || '0', 10),
                height: parseInt(getCookie('viewportHeight')?.value || '0', 10),
            });
        }

        handleOrientationChange();
        handleNetworkChange();
        handleResize();

        return () => {
            window.removeEventListener('resize', handleOrientationChange);
            window.removeEventListener('online', handleNetworkChange);
            window.removeEventListener('offline', handleNetworkChange);
            window.removeEventListener('resize', handleResize);
        };
    }, [setCookie, getCookie, hasCookie, isBrowser]);

    return {
        isMobile,
        isTablet,
        isDesktop,
        isReducedMotion,
        isWebGL,
        isLowPowerMode,
        isIOS,
        isAndroid,
        isTouchDevice,
        isIPad,
        isTV,
        orientation,
        pixelRatio,
        connectionType,
        viewportSize,
        isChrome,
        isFirefox,
        isSafari,
        isEdge,
        isOpera,
    };
}
