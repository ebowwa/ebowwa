'use client';

import { useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { convertFile } from '@/utils/convertFile';

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleConvert = async () => {
    if (file) {
      try {
        setIsConverting(true);
        const ffmpeg = new FFmpeg();
        await ffmpeg.load();
        const ffmpegArgs = ['-i', file.name, '-c:v', 'libx264', `${file.name.split('.')[0]}.mp4`];
        await convertFile(ffmpeg, file, ffmpegArgs, setProgress);
        setIsConverting(false);
      } catch (err) {
        setIsConverting(false);
        setError('Error occurred during conversion');
        console.error(err);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleConvert}>Convert</button>
      {isConverting && <div>Converting...</div>}
      {progress > 0 && <div>Conversion progress: {progress}%</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}