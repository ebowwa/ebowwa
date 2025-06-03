// app/layout.tsx
import { Layout } from '@/components/landing/layout/dom/Layout';
import Head from '../components/landing/layout/head';
import '@/styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const messages = await getMessages();
  return {
    title: messages.appName as string,
    description: messages.appDescription as string
  };
}


export async function generateMetadata() {
  const messages = await getMessages();
  return {
    title: messages.appName as string,
    description: messages.appDescription as string
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Register the Serwist service worker
  registerWebWorker('/public/serwist.worker.ts');
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <Head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Layout>{children}</Layout>
          <Analytics />
        </NextIntlClientProvider>
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
