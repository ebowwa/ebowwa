// components/ui/CameraData.tsx
"use client";
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const CameraData = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);
  
  useEffect(() => {
    const getVideo = async () => {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = videoStream;
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    };

    getVideo();
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    if (video) {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      setCapturedImages([...capturedImages, canvas.toDataURL('image/png')]);
    }
  };

  // Call captureImage() at regular intervals if needed
  // setInterval(captureImage, YOUR_DESIRED_INTERVAL);

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <button onClick={captureImage}>Capture Image</button>
      <div>
        {capturedImages.map((src, index) => (
          <Image key={index} src={src} alt={`Captured at ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CameraData;
