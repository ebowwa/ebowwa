"use client";

import { useState, useEffect } from 'react';
import { useIsClient } from '@/components/utility/ads/hooks/browser/isClient';

export const useViewportSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const isClient = useIsClient();

  useEffect(() => {
    if (isClient) {
      console.log('Document:', document);

      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize(); // Initialize size

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isClient]);

  return size;
};