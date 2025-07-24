'use client';

import { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function useModelLoader(url: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { scene: model, animations } = useGLTF(url);

  useEffect(() => {
    if (model) {
      setIsLoading(false);
    }
  }, [model]);

  return { model, animations, isLoading, error };
}