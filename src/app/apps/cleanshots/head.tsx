export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: 'CleanShots-Exif Scrubber',
    description: 'Easily remove sensitive EXIF metadata from your photos before sharing. CleanShots helps protect your privacy with a single tap, ensuring your photos are safe to send anywhere.',
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
