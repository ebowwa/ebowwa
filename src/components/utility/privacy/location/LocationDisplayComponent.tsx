// src/components/ui/LocationDisplayComponent.tsx
"use client";

import React from 'react';
import { useGeolocation } from './useGeolocation';

const LocationDisplayComponent = () => {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div>
      {error ? (
        <p>Error fetching location: {error}</p>
      ) : (
        <p>
          Your Location: Latitude {latitude}, Longitude {longitude}
        </p>
      )}
    </div>
  );
};

export default LocationDisplayComponent;
