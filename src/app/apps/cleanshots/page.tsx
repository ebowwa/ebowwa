import React from 'react';
import Link from 'next/link';
import translations from './en.json';

export const metadata = {
  title: translations.pageTitle.value,
  description: translations.description.value,
  keywords: ['exif', 'exif removal', 'photo privacy', 'cleanshots', 'metadata scrubber'],
  openGraph: {
    title: translations.pageTitle.value,
    description: translations.description.value,
    url: 'https://ebowwa.xyz/apps/cleanshots',
    images: [{ url: 'https://ebowwa.xyz/social/cleanshots-og.png', alt: translations.pageTitle.value }],
    siteName: 'Ebowwa Labs',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.pageTitle.value,
    description: translations.description.value,
    images: ['https://ebowwa.xyz/social/cleanshots-og.png']
  }
};

export default function CleanShotsPage() {
  const t = translations;
  const {
    backButton, pageIcon, pageTitle, description,
    feature1, feature2, feature3, downloadButton,
    howItWorksTitle, step1, step2, step3,
    privacySupportTitle, privacyText,
    privacyPolicyLink, supportLink,
    structuredDataHead, structuredDataBody
  } = t;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataHead.value) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/apps" className="inline-flex items-center mb-8 text-green-300 hover:text-green-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{backButton.value}</span>
          </Link>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-4">
              <div className="text-green-400 text-4xl mr-4">{pageIcon.value}</div>
              <h1 className="text-4xl font-bold text-white">{pageTitle.value}</h1>
            </div>
            <p className="text-green-100 mb-6 opacity-90 text-lg">{description.value}</p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start"><span className="text-green-300 mr-2">✓</span>{feature1.value}</li>
              <li className="flex items-start"><span className="text-green-300 mr-2">✓</span>{feature2.value}</li>
              <li className="flex items-start"><span className="text-green-300 mr-2">✓</span>{feature3.value}</li>
            </ul>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://apps.apple.com/us/app/cleanshot-exif-scrub/id6745844477" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 hover:bg-green-500/30 transition-all">
                <span>{downloadButton.value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-green-200">{howItWorksTitle.value}</h2>
              <ol className="list-decimal list-inside text-green-100 opacity-90 space-y-1">
                <li>{step1.value}</li>
                <li>{step2.value}</li>
                <li>{step3.value}</li>
              </ol>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-green-200">{privacySupportTitle.value}</h2>
              <p className="text-green-100 opacity-80 mb-1">{privacyText.value}</p>
              <Link href="/apps/privacy" className="text-green-300 underline hover:text-green-400 mr-4">{privacyPolicyLink.value}</Link>
              <Link href="/apps/support" className="text-green-300 underline hover:text-green-400">{supportLink.value}</Link>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataBody.value) }}
      />
    </>
  );
}
