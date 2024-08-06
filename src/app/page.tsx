// app/page.tsx
import React from 'react';

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Video background */}
      <div className="w-full relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <video
          className="absolute top-0 left-0 w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/ebowwa-xyz/F4FD3EC2-2198-45C2-B4AD-35B538622A8F.MOV" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay with gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 opacity-70"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Coming Soon
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
          Get ready for an immersive experience that will redefine your expectations.
        </p>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm sm:text-base font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300">
          Stay Tuned
        </button>
      </div>

      {/* Futuristic elements - adjusted for better visibility */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 bg-gradient-to-t from-blue-900 to-transparent"></div>
      <div className="absolute top-2 right-2 w-16 sm:w-24 h-16 sm:h-24 border-2 border-cyan-500 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-2 left-2 w-12 sm:w-20 h-12 sm:h-20 border-2 border-purple-500 rounded-full animate-ping opacity-50"></div>
    </div>
  );
};

export default VideoPage;