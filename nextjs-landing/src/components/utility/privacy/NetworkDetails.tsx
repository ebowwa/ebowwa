// components/ui/NetworkDetails.tsx
"use client";

import { useState, useEffect } from 'react';

const NetworkDetails = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(() => setIpAddress('Unavailable'));
  }, []);

  return (
    <div>
      <p>Your IP Address: {ipAddress}</p>
    </div>
  );
};

export default NetworkDetails;
