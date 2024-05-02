// components/audio/AudioAnalysis.tsx
// ios is much more sensitive than MACOS - 2019 pro macbook v iphone 13 mini
"use client";

import React, { useState, useEffect } from 'react';

const AudioAnalysis: React.FC = () => {
  const [audioLevel, setAudioLevel] = useState<number>(0);

  useEffect(() => {
    let audioContext: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let microphone: MediaStreamAudioSourceNode | null = null;

    const getMicrophoneInput = async () => {
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Handle prefixed version in webkit browsers
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(audioStream);
        microphone.connect(analyser);
        analyser.fftSize = 512;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const getAudioLevel = () => {
          if (analyser) {
            analyser.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
              sum += dataArray[i];
            }
            let average = sum / bufferLength;
            setAudioLevel(average);
          }
          requestAnimationFrame(getAudioLevel);
        };

        getAudioLevel();
      } catch (error) {
        console.error('Error accessing the microphone', error);
      }
    };

    getMicrophoneInput();

    return () => {
      microphone?.disconnect();
      analyser?.disconnect();
      audioContext?.close();
    };
  }, []);

  return <div>Current Audio Level: {audioLevel}</div>;
};

export default AudioAnalysis;
