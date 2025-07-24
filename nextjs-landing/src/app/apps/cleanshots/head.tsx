import React from 'react';
import translations from './en.json';

export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: translations.pageTitle.value,
    description: translations.description.value,
    url: 'https://ebowwa.xyz/apps/cleanshots',
    applicationCategory: 'Utility',
    operatingSystem: ['iOS', 'iPadOS'],
    offers: {
      "@type": "Offer",
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
