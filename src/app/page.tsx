// app/page.tsx
import React from 'react';

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Video background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/ebowwa-xyz/0720.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay with gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 opacity-70"></div>

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
          Get ready for an immersive experience that will redefine your expectations.
        </p>
        <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300">
          Stay Tuned
        </button>
      </div>

      {/* Futuristic elements - hidden on smaller screens */}
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 bg-gradient-to-t from-blue-900 to-transparent"></div>
      <div className="hidden sm:block absolute top-4 right-4 w-24 sm:w-32 h-24 sm:h-32 border-2 border-cyan-500 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-4 left-4 w-16 sm:w-24 h-16 sm:h-24 border-2 border-purple-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default VideoPage;