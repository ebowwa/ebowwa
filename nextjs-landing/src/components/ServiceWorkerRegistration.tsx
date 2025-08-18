"use client"
import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    registerWebWorker('/public/serwist.worker.ts');
  }, []);
  
  return null;
}

// Register the Serwist service worker (client-side only)
function registerWebWorker(url: string) {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register(url).catch((error) => {
      console.error('Error registering service worker:', error);
    });
  }
}
