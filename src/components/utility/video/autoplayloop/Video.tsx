// src/components/utility/video/autoplayloop/Video.tsx
import videoConfig from './config/video.config.json';

interface VideoProps {
  src: string;
  options: {
    loop?: boolean;
    autoplay?: boolean;
  };
}

const Video: React.FC<VideoProps> = ({ src, options }) => {
  const classNames = [];
  const videoAttributes: React.VideoHTMLAttributes<HTMLVideoElement> = {};

  if (options.loop) {
    classNames.push(videoConfig.video.loop.className);
    videoAttributes.loop = true;
  }

  if (options.autoplay) {
    classNames.push(videoConfig.video.autoplay.className);
    videoAttributes.autoPlay = true;
    videoAttributes.muted = true;
  }

  const videoProps: React.VideoHTMLAttributes<HTMLVideoElement> = {
    src,
    ...videoAttributes,
  };

  return (
    <div className={classNames.join(' ')}>
      <video {...videoProps} />
    </div>
  );
};

export default Video;