// Page.tsx
// autoplay loop video css example
// https://samplelib.com/sample-mp4.html for the example 3MB
"use client"
import React from 'react';
import Video from '@/components/utility/video/autoplayloop';

const Page = () => {
  return (
    <div>
      <h1>Video Page</h1>
      <Video
        src="https://download.samplelib.com/mp4/sample-5s.mp4"
        options={{
          loop: true,
          autoplay: true,
          preload: 'auto', // Add the preload property here
        }}
      />
    </div>
  );
};

export default Page;