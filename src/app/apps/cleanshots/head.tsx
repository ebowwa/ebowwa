import {getMessages} from 'next-intl/server';

export default async function Head() {
  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: messages.cleanShotsTitle as string,
    description: messages.cleanShotsDescription as string,
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
