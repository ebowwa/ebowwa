import { useState, useRef } from 'react';

type ScreenshotCallback = () => void;

const useScreenshot = (onScreenshot?: ScreenshotCallback) => {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isDownloadable, setIsDownloadable] = useState(false);
    const pageRef = useRef<HTMLDivElement>(null);

    const takeScreenshot = async () => {
        try {
            // prompt user to share screen/window/tab
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            const track = stream.getVideoTracks()[0];
            const video = document.createElement('video');
            video.srcObject = stream;
            await video.play();

            // draw one frame to canvas
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error('Could not get canvas context');
            ctx.drawImage(video, 0, 0);
            const dataURL = canvas.toDataURL('image/png');
            setScreenshot(dataURL);
            setIsDownloadable(true);
            onScreenshot?.();

            // cleanup
            track.stop();
            video.remove();
        } catch (error) {
            console.error('Error taking screenshot:', error);
        }
    };

    const downloadScreenshot = () => {
        if (screenshot) {
            const link = document.createElement('a');
            link.download = 'screenshot.png';
            link.href = screenshot;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setIsDownloadable(false);
        }
    };

    return [screenshot, pageRef, takeScreenshot, isDownloadable, downloadScreenshot] as const;
};

export default useScreenshot;