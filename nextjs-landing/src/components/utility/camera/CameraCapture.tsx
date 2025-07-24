// components/ui/CameraCapture.tsx
"use client";

import React, { useRef, useState } from 'react';

const CameraCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      setError('Unable to access the camera');
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={startVideo}>Start Camera</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CameraCapture;
