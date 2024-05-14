// src/components/utility/video/autoplayloop/utils.ts

export const getVideoClassNames = (options: {
    loop: boolean;
    autoplay: boolean;
  }) => {
    const classNames = [];
  
    if (options.loop) {
      classNames.push('video-loop');
    }
  
    if (options.autoplay) {
      classNames.push('video-autoplay');
    }
  
    return classNames.join(' ');
  };
  
  export const getVideoAttributes = (options: {
    loop: boolean;
    autoplay: boolean;
    preload: 'auto' | 'metadata' | 'none';
  }) => {
    const videoAttributes: React.VideoHTMLAttributes<HTMLVideoElement> = {};
  
    if (options.loop) {
      videoAttributes.loop = true;
    }
  
    if (options.autoplay) {
      videoAttributes.autoPlay = true;
      videoAttributes.muted = true;
    }
  
    if (options.preload) {
      videoAttributes.preload = options.preload;
    }
  
    return videoAttributes;
  };