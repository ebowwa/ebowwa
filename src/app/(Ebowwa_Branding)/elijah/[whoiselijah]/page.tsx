// src/app/elijah/[whoiselijah]/page.tsx
import { Suspense } from 'react';

interface PageProps {
  params: {
    landingId: string;
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { landingId } = params;

  // Use dynamic imports to lazily load the components
  const Resume = await import('@/components/elijah/resume').then((mod) => mod.default);
  // const Connect = await import('@/components/elijah/connect').then((mod) => mod.default);         <Connect />


  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Resume />
      </Suspense>
    </div>
  );
}