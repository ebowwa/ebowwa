import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Apps',
  description: 'Explore innovative iOS applications designed for mindfulness and digital well-being',
};

const t = {
  appsTitle: 'Our Apps',
  appsSubtitle: 'Explore innovative iOS applications designed for mindfulness and digital well-being',
  backToHome: 'Back to Home',
  iosAppLabel: 'iOS App',
  sleepLoopsTitle: 'Sleep Loops',
  sleepLoopsDescription: 'Transform your sleep environment with curated ambient loops. Focus, relax, or drift off.',
  sleepLoopsFeature1: 'Customizable sleep soundscapes that adapt to your preferences',
  sleepLoopsFeature2: 'Sleep tracking with detailed analytics',
  sleepLoopsFeature3: 'Intelligent alarm system that wakes you during optimal sleep cycles',
  sleepLoopsLinkText: 'Download on the App Store',
  caringMindDescription: 'A mindfulness and meditation app designed to improve mental well-being through guided practices and personalized journeys.',
  caringMindFeature1: 'Personalized meditation sessions',
  caringMindFeature2: 'Mindfulness exercises for everyday life',
  caringMindFeature3: 'Stress reduction techniques and tracking',
  visitWebsite: 'Visit Website',
  cleanShotsTitle: 'CleanShots-Exif Scrubber',
  cleanShotsDescription: 'Easily remove sensitive EXIF metadata from your photos before sharing. CleanShots helps protect your privacy with a single tap, ensuring your photos are safe to send anywhere.',
  cleanShotsFeature1: 'Removes EXIF data from images instantly',
  cleanShotsFeature2: 'Simple, privacy-first design',
  cleanShotsFeature3: 'Share cleaned photos directly from the app',
  aboutAppsTitle: 'About Our Apps',
  aboutAppsParagraph: 'At Ebowwa Labs, we develop applications that merge cutting-edge technology with human-centered design. Our focus is creating digital experiences that positively impact mental health, sleep quality, and overall well-being.',
  collaborationPrompt: 'Interested in collaborating?',
  contactUs: 'Contact us',
  learnMore: 'Learn More',
  appsFooter: '© YEAR Ebowwa Labs • Creating digital well-being'
};

export default function AppsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse">
              {t.appsTitle}
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {t.appsSubtitle}
          </p>
        </div>
        
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-blue-200 hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{t.backToHome}</span>
                <div className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium">{t.iosAppLabel}</div>
              <h2 className="text-3xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">{t.sleepLoopsTitle}</h2>
                {t.sleepLoopsDescription}
                  <p className="text-blue-100 opacity-80">{t.sleepLoopsFeature1}</p>
                  <p className="text-blue-100 opacity-80">{t.sleepLoopsFeature2}</p>
                  <p className="text-blue-100 opacity-80">{t.sleepLoopsFeature3}</p>
                  <span>{t.sleepLoopsLinkText}</span>
          {/* {t.caringMindTitle} Card */}
            <div className="p-8 relative z-10">
              <div className="flex justify-between items-start">
                <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">{t.iosAppLabel}</div>
                {t.caringMindDescription}
                  <p className="text-blue-100 opacity-80">{t.caringMindFeature1}</p>
                  <p className="text-blue-100 opacity-80">{t.caringMindFeature2}</p>
                  <p className="text-blue-100 opacity-80">{t.caringMindFeature3}</p>
                  <span>{t.visitWebsite}</span>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">{t.iosAppLabel}</div>
              <h2 className="text-3xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">{t.cleanShotsTitle}</h2>
                {t.cleanShotsDescription}
                  <p className="text-blue-100 opacity-80">{t.cleanShotsFeature1}</p>
                  <p className="text-blue-100 opacity-80">{t.cleanShotsFeature2}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <p className="text-blue-100 opacity-80">{t.cleanShotsFeature3}</p>
                  <span>{t.sleepLoopsLinkText}</span>
                  <span>{t.learnMore}</span>
            {t.aboutAppsTitle}
            {t.aboutAppsParagraph} 
            <span>{t.collaborationPrompt} </span>
              {t.contactUs}
          <p>{t.appsFooter.replace('YEAR', String(new Date().getFullYear()))}</p>
              <div className="flex flex-wrap items-center gap-4">
                {/**
                  <span className="text-xs uppercase tracking-wider text-blue-200/60">Coming Soon</span>
                  <a href="https://forms.gle/vQFoVj7Mbnkqzv9C8" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 rounded-lg text-indigo-300 hover:bg-indigo-500/30 transition-all group-hover:pl-6">
                    <span>Join Waitlist</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                */}
                <a href="https://apps.apple.com/us/app/sleeploops/id6745059180" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-indigo-500/20 border border-indigo-500/50 rounded-lg text-indigo-300 hover:bg-indigo-500/30 transition-all group-hover:pl-6">
                  <span>{t("sleepLoopsLinkText")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* {t("caringMindTitle")} Card */}
          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="flex justify-between items-start">
                <div className="mb-4 text-purple-400 text-4xl">🧠</div>
                <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">{t("iosAppLabel")}</div>
              </div>
              <h2 className="text-3xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">CaringMind</h2>
              <p className="text-blue-100 mb-6 opacity-80">
                {t("caringMindDescription")}
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-2">
                  <div className="text-purple-300 mt-1">✓</div>
                  <p className="text-blue-100 opacity-80">{t("caringMindFeature1")}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-purple-300 mt-1">✓</div>
                  <p className="text-blue-100 opacity-80">{t("caringMindFeature2")}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-purple-300 mt-1">✓</div>
                  <p className="text-blue-100 opacity-80">{t("caringMindFeature3")}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="https://caringmind.xyz" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all group-hover:pl-6">
                  <span>{t("visitWebsite")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {/* App Store button - commented out until app is released */}
                {/* <a href="https://apps.apple.com/search?term=caringmind" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all">
                  <span>App Store</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
                {/* Waitlist button - commented out for now */}
                {/* <a href="https://forms.gle/8rLZt3iCygFxB5Qx6" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all group-hover:pl-6">
                  <span>Join Waitlist</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>

          {/* CleanShots-Exif Scrubber Card */}
          <div className="group relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="flex justify-between items-start">
                <div className="mb-4 text-green-400 text-4xl">🧹</div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">{t("iosAppLabel")}</div>
              </div>
              <h2 className="text-3xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">{t("cleanShotsTitle")}</h2>
              <p className="text-blue-100 mb-6 opacity-80">
                {t("cleanShotsDescription")}
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-2">
                  <div className="text-green-300 mt-1">✓</div>
                  <p className="text-blue-100 opacity-80">{t("cleanShotsFeature1")}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-300 mt-1">✓</div>
                  <p className="text-blue-100 opacity-80">{t("cleanShotsFeature2")}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="text-green-300 mt-1">✓</div>
                  <p className="text-blue-100 opacity-80">{t("cleanShotsFeature3")}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <a href="https://apps.apple.com/us/app/cleanshot-exif-scrub/id6745844477" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 hover:bg-green-500/30 transition-all group-hover:pl-6">
                  <span>{t("sleepLoopsLinkText")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Link href="/apps/cleanshots" className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 hover:bg-green-500/30 transition-all group-hover:pl-6">
                  <span>{t("learnMore")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
            {t("aboutAppsTitle")}
          </h2>
          <p className="text-blue-100 mb-8 opacity-80">
            {t("aboutAppsParagraph")} 
          </p>
          <div className="inline-flex items-center px-5 py-3 bg-white/10 border border-white/20 rounded-lg text-blue-200 hover:bg-white/20 transition-all">
            <span>{t("collaborationPrompt")} </span>
            <Link href="/" className="ml-2 text-indigo-300 hover:text-indigo-400 transition-colors">
              {t("contactUs")}
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center text-blue-300/60">
          <p>{t("appsFooter",{year:new Date().getFullYear()})}</p>
        </div>
      </div>
    </div>
  );
}
