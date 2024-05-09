import { useState, useRef } from 'react';

type VideoRecordingCallback = () => void;

const useVideoRecording = (onRecordingStart?: VideoRecordingCallback, onRecordingStop?: VideoRecordingCallback) => {
    const [recording, setRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
    const pageRef = useRef<HTMLDivElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    const startRecording = async () => {
        if (pageRef.current) {
            try {
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video: true,
                    audio: true,
                });
                mediaRecorderRef.current = new MediaRecorder(stream);
                mediaRecorderRef.current.start();
                setRecording(true);
                onRecordingStart?.();

                const chunks: Blob[] = [];
                mediaRecorderRef.current.ondataavailable = (event) => {
                    chunks.push(event.data);
                };

                mediaRecorderRef.current.onstop = () => {
                    const blob = new Blob(chunks, { type: 'video/mp4' });
                    setVideoBlob(blob);
                };
            } catch (error) {
                console.error('Error starting video recording:', error);
            }
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setRecording(false);
            onRecordingStop?.();
        }
    };

    const downloadVideo = () => {
        if (videoBlob) {
            const link = document.createElement('a');
            link.download = 'recording.mp4';
            link.href = URL.createObjectURL(videoBlob);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return [recording, pageRef, startRecording, stopRecording, videoBlob, downloadVideo] as const;
};

export default useVideoRecording;