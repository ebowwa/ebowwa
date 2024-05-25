// src/app/elijah/[whoiselijah]/page.tsx
import { Suspense } from 'react';
import Resume from '@/components/elijah/resume';

interface PageProps {
  params: {
    landingId: string;
  };
}

export default function LandingPage({ params }: PageProps) {
  const { landingId } = params;

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Resume />
      </Suspense>
    </div>
  );
}