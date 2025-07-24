// app/page.tsx
import LandingContainer from '@/components/landing/sections/general/General_Landing_Container'; // <LandingContainer />
// import PerplexitySearch from '@/components/landing/sections/general/perplexity-search'; // <PerplexitySearch />
import InfoSubstrate from '@/components/landing/sections/general/InfoSubstrate'; // <InfoSubstrate />

export default function HomePage() {
  return (
    <div>
        <LandingContainer />
        <InfoSubstrate />
    </div>
  );
}