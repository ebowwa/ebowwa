// src/app/elijah/[whoiselijah]/page.tsx
import Resume from '@/components/elijah/resume';

interface PageProps {
  params: {
    whoiselijah: string;
  };
}

export default function LandingPage({ params }: PageProps) {
  const { whoiselijah } = params;

  return (
    <div>
      <Resume />
    </div>
  );
}