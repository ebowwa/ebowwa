import React from 'react';

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.jsdelivr.net/gh/ebowwar/asset-store@main/ebowwa-xyz/0720.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 opacity-70"></div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Coming Soon
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Get ready for an immersive experience that will redefine your expectations.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300">
          Stay Tuned
        </button>
      </div>

      {/* Futuristic elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-900 to-transparent"></div>
      <div className="absolute top-4 right-4 w-32 h-32 border-2 border-cyan-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-purple-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default VideoPage;