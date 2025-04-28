import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-green-500 blur-3xl"></div>
      </div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Header with Glowing Effect */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-3 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse">
              Ebowwa Labs
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Digital innovation lab exploring the boundaries of information and technology
          </p>
        </div>
        
        {/* Interactive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
          {/* Developers Card */}
          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="mb-4 text-cyan-400 text-4xl">⚙️</div>
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">Developers</h2>
              <p className="text-blue-100 mb-6 opacity-80">Explore a catalog of cutting-edge demos showcasing what's possible with modern technology.</p>
              <Link href="/catalog" className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-all group-hover:pl-6">
                <span>Explore Catalog</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Thinkers Card */}
          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="mb-4 text-emerald-400 text-4xl">🧠</div>
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">Thinkers & Learners</h2>
              <p className="text-blue-100 mb-6 opacity-80">Dive into the concept of the informational substrate and expand your understanding of our digital reality.</p>
              <Link href="/landing" className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-300 hover:bg-emerald-500/30 transition-all group-hover:pl-6">
                <span>Discover More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* App Enthusiasts Card */}
          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="mb-4 text-purple-400 text-4xl">📱</div>
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">App Enthusiasts</h2>
              <p className="text-blue-100 mb-6 opacity-80">Experience our innovative iOS mobile applications designed for the future of digital interaction.</p>
              <Link href="/apps" className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all group-hover:pl-6">
                <span>Try Our Apps</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Employers Card */}
          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="mb-4 text-red-400 text-4xl">🚀</div>
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">Employers & Collaborators</h2>
              <p className="text-blue-100 mb-6 opacity-80">Learn more about my skills and past projects. Let's create something amazing together.</p>
              <Link href="/elijah/whoiselijah" className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 hover:bg-red-500/30 transition-all group-hover:pl-6">
                <span>View Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center text-blue-300/60">
          <p>© {new Date().getFullYear()} Ebowwa Labs • Pushing the boundaries of what's possible</p>
        </div>
      </div>
    </div>
  );
}

/** lets name this ebowwa labs - 
 * 
 * Context: this needs to promote me, my brand, my projects. 
 * Leveraging Nextjs we can go SEO crazy, we have a catologue of demos ive developed to see what could be done - Maybe market to devs
 * i have a resume, with a life like paper shader
 * and a landing page talking about the informational substrate
 * 
 * in addition i have ios mobile apps i need to promote
 * 
 * 
 * 
 * 
 * */ 
