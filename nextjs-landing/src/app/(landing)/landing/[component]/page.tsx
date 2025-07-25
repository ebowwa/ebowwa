// app/landing/[component]/page.tsx
import LandingContainer from '@/components/landing/sections/general/General_Landing_Container';
import InfoSubstrate from '@/components/landing/sections/general/InfoSubstrate';

interface PageProps {
  params: {
    component: string;
  };
}

export default async function LandingPage({ params }: PageProps) {

  return (
    <div>
      <LandingContainer  />
      <InfoSubstrate />
    </div>
  );
}