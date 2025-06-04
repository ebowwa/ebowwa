// app/layout.tsx
import { Layout } from '@/components/landing/layout/dom/Layout';
import Head from '../components/landing/layout/head';
import '@/styles/global.css';
import { Analytics } from '@vercel/analytics/react';


export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Ebowwa',
  description: 'Structured interfaces between humans, machines, and meaning. Built with care. Meant to last.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Register the Serwist service worker
  registerWebWorker('/serwist.worker.ts');

  return (
    <html lang="en" className="antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
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
