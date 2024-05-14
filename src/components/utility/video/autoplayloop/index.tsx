// src/components/utility/video/autoplayloop/Video.tsx
import videoConfig from './config/video.config.json';
import React, { useRef, useEffect, useState } from 'react';
import { getVideoClassNames, getVideoAttributes } from './utils';

interface VideoProps {
  src: string;
  options: {
    loop: boolean;
    autoplay: boolean;
    preload: 'auto' | 'metadata' | 'none';
  };
}

const Video: React.FC<VideoProps> = ({ src, options }) => {
  const classNames = getVideoClassNames(options);
  const videoAttributes = getVideoAttributes(options);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(options.autoplay);
  const [error, setError] = useState('');

  const videoProps: React.VideoHTMLAttributes<HTMLVideoElement> = {
    src,
    ...videoAttributes,
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case ' ':
          if (video) {
            isPlaying ? video.pause() : video.play();
            setIsPlaying(!isPlaying);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    video?.addEventListener('error', () => {
      setError('Video loading error.');
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const videoStyles = options.loop
    ? videoConfig.video.loop.styles
    : options.autoplay
    ? videoConfig.video.autoplay.styles
    : {};

  return (
    <div className={classNames}>
      <video ref={videoRef} {...videoProps} style={videoStyles} />
      <div>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Video;