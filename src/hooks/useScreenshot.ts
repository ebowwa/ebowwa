import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

type ScreenshotCallback = () => void;

const useScreenshot = (onScreenshot?: ScreenshotCallback) => {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isDownloadable, setIsDownloadable] = useState(false);
    const pageRef = useRef<HTMLDivElement>(null);

    const takeScreenshot = async () => {
        if (pageRef.current) {
            try {
                const canvas = await html2canvas(pageRef.current);
                const dataURL = canvas.toDataURL('image/png');
                setScreenshot(dataURL);
                setIsDownloadable(true);
                onScreenshot?.();
            } catch (error) {
                console.error('Error taking screenshot:', error);
            }
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