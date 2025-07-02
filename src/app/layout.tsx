// app/layout.tsx
import { Layout } from '@/components/landing/layout/dom/Layout';
import Head from '../components/landing/layout/head';
import '@/styles/global.css';
import { Analytics } from "@vercel/analytics/react"
import translations from './en.json';
import DiscordInviteBanner from '@/components/DiscordInviteBanner';

export const metadata = {
  title: translations.homeTitle.value,
  description: translations.appDescription.value,
  openGraph: {
    title: translations.homeTitle.value,
    description: translations.appDescription.value,
    images: ['/social-share.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.homeTitle.value,
    description: translations.appDescription.value,
    images: ['/social-share.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Register the Serwist service worker
  registerWebWorker('/public/serwist.worker.ts');

  return (
    <html lang="en" className="antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body className="pb-28">
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
        <DiscordInviteBanner />
        <Analytics />
      </body>
    </html>
  );
}

// Register the Serwist service worker
function registerWebWorker(url: string) {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register(url).catch((error) => {
      console.error('Error registering service worker:', error);
    });
  }
}

// add ip tracker 
// add src/hooks/useDeviceDetection.ts
