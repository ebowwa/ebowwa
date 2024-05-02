// src/components/ui/useGeolocation.tsx
"use client";

import { useState, useEffect } from 'react';

export interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

export const useGeolocation = (): GeolocationState => {
  const [location, setLocation] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prevState) => ({ ...prevState, error: 'Geolocation is not supported by your browser.' }));
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      setLocation((prevState) => ({ ...prevState, error: error.message }));
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return location;
};
