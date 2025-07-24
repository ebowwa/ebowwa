"use client"
import React from 'react';
import useVideoRecording from '@/components/utility/ads/hooks/browser/useVideoRecording';

const Page: React.FC = () => {
    const [recording, pageRef, startRecording, stopRecording, videoBlob, downloadVideo] = useVideoRecording(
        () => console.log('Recording started'),
        () => console.log('Recording stopped')
    );

    return (
        <div ref={pageRef}>
            <h1>Video Recording Example</h1>
            {recording ? (
                <button onClick={stopRecording}>Stop Recording</button>
            ) : (
                <button onClick={startRecording}>Start Recording</button>
            )}
            {videoBlob && (
                <button onClick={downloadVideo}>Download Video</button>
            )}
        </div>
    );
};

export default Page;