'use client';

import useScreenshot from '@/components/utility/ads/hooks/browser/useScreenshot';

const MyPage: React.FC = () => {
    const [screenshot, pageRef, takeScreenshot, isDownloadable, downloadScreenshot] = useScreenshot(() => {
        console.log('Screenshot taken!');
    });

    return (
        <div ref={pageRef}>
            <h1>My Page</h1>
            {/* Your content to be captured as a screenshot */}
            <p>This is the content that will be captured as a screenshot.</p>
            <button onClick={takeScreenshot}>Take Screenshot</button>
            {screenshot && (
                <div>
                    <img src={screenshot} alt="Screenshot" style={{ maxWidth: '100%' }} />
                    {isDownloadable && (
                        <button onClick={downloadScreenshot}>Download Screenshot</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyPage;