// src/components/utility/audio/TTS.tsx
import React, { useState, useEffect } from 'react';

interface TTSProps {
  text: string;
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
  defaultPitch?: number;
  defaultRate?: number;
}

const TTS: React.FC<TTSProps> = ({
  text,
  lang = 'en-US',
  rate = 1,
  pitch = 1,
  volume = 1,
  defaultPitch = 1,
  defaultRate = 1,
}) => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported('speechSynthesis' in window);
  }, []);

  const handleSpeak = () => {
    if (isSupported) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate || defaultRate;
      utterance.pitch = pitch || defaultPitch;
      utterance.volume = volume;

      window.speechSynthesis.speak(utterance);
    } else {
      const googleTTSUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(
        text
      )}&tl=${lang}`;
      const audioElement = new Audio(googleTTSUrl);
      audioElement.play();
    }
  };

  return (
    <button onClick={handleSpeak}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5a.75.75 0 01.75-.75z" />
      </svg>
    </button>
  );
};

export default TTS;